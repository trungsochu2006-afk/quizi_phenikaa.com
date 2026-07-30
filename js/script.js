// =========================================
// 👑 1. KHAI BÁO BIẾN CỐ ĐỊNH & ADMIN INFO
// =========================================
const shopeeLink = "https://s.shopee.vn/8V3Q7Nm1he";

// Chức năng: Kích hoạt chế độ trả lời bình luận (reply)
window.kichHoatReplyComment = function (postId, cmtKey, username) {
  let inputEl = document.getElementById(`input-cmt-${postId}`);
  let statusEl = document.getElementById(`reply-status-${postId}`);
  if (inputEl && statusEl) {
    inputEl.setAttribute("data-parent", cmtKey);
    inputEl.value = `@${username} `;
    statusEl.style.display = "block";
    statusEl.innerHTML = `Đang trả lời bình luận của <b>${username}</b> <span onclick="huyReplyComment('${postId}')" style="color:#ff4d4d; cursor:pointer; margin-left:8px; font-weight:bold;">[Hủy]</span>`;
    inputEl.focus();
  }
};

// Chức năng: Hủy bỏ chế độ trả lời bình luận
window.huyReplyComment = function (postId) {
  let inputEl = document.getElementById(`input-cmt-${postId}`);
  let statusEl = document.getElementById(`reply-status-${postId}`);
  if (inputEl && statusEl) {
    inputEl.setAttribute("data-parent", "");
    inputEl.value = "";
    statusEl.style.display = "none";
  }
};

// Chức năng: Xử lý sự kiện thích hoặc hủy thích một bình luận
function likeComment(postId, cmtKey) {
  let currentUserId =
    currentStudent && currentStudent.id ? currentStudent.id.trim() : "guest";
  if (currentUserId === "guest") return;

  let cmtRef = database.ref(`threads/${postId}/comments/${cmtKey}`);
  cmtRef.transaction((cmt) => {
    if (cmt) {
      if (!cmt.likedUsers) cmt.likedUsers = {};
      let userKey = Object.keys(cmt.likedUsers).find(
        (key) => cmt.likedUsers[key] === currentUserId,
      );
      if (userKey) {
        delete cmt.likedUsers[userKey];
        cmt.likes = Math.max(0, (cmt.likes || 1) - 1);
      } else {
        let newLikeCmtKey = "like_" + Date.now();
        cmt.likedUsers[newLikeCmtKey] = currentUserId;
        cmt.likes = (cmt.likes || 0) + 1;
      }
    }
    return cmt;
  });
}

// =========================================
// 🔀 2. HÀM QUẢN LÝ TAB CHUẨN DUY NHẤT (ĐÃ GỘP)
// =========================================
function showTab(tabId) {
  // 1. Ẩn tất cả các section giao diện
  document.querySelectorAll(".section").forEach((s) => {
    s.classList.remove("active");
    s.style.display = "none";
  });

  // 2. Hiển thị section mục tiêu
  let target = document.getElementById(tabId);
  if (target) {
    target.classList.add("active");
    target.style.display = "block";
  }

  // 3. Nếu rời khỏi tab quiz thì tắt nhạc và ẩn nút nộp sớm
  if (tabId !== "quiz") {
    if (typeof tatTatCaNhacQuiz === "function") {
      tatTatCaNhacQuiz();
    }
    let exitBox = document.getElementById("emergency-exit-box");
    if (exitBox) exitBox.style.display = "none";
  }

  // 4. Logic ẩn/hiện Banner trang chủ (chỉ hiện ở tab 'home')
  const bannerPC = document.getElementById("carousel-container-pc");
  const bannerMobile = document.getElementById("carousel-container-mobile");

  if (tabId === "home") {
    if (bannerPC) bannerPC.style.display = "block";
    if (bannerMobile) bannerMobile.style.display = "block";
  } else {
    if (bannerPC) bannerPC.style.display = "none";
    if (bannerMobile) bannerMobile.style.display = "none";
  }

  // 5. Kiểm tra quyền khi bấm vào tab thống kê Admin
  if (tabId === "admin-stats") {
    if (
      !currentStudent ||
      (currentStudent.id !== "7277979906" &&
        currentStudent.name !== "trung_admin")
    ) {
      alert("Bạn không có quyền truy cập khu vực này!");
      showTab("home");
      return;
    }
    if (typeof loadAdminStatisticsData === "function") {
      loadAdminStatisticsData();
    }
  }
}

// Chức năng: Lọc và tìm kiếm các thẻ tin tức
function searchNews() {
  let keyword = document.getElementById("newsSearch").value.toLowerCase();
  document.querySelectorAll(".news").forEach((card) => {
    card.style.display = card.innerText.toLowerCase().includes(keyword)
      ? "block"
      : "none";
  });
}

const modal = document.getElementById("videoModal");
const video = document.getElementById("videoPlayer");
const overlay = document.getElementById("overlay");

document.querySelectorAll(".news").forEach((card) => {
  card.onclick = () => {
    video.src = card.dataset.video;
    video.load();
    modal.style.display = "flex";
    overlay.style.display = "flex";
    video.pause();
  };
});

function goShopee() {
  overlay.style.display = "none";
  video.play();
  window.open(shopeeLink, "_blank");
}

document.addEventListener("visibilitychange", function () {
  if (!document.hidden) {
    if (overlay.style.display === "none" && modal.style.display === "flex") {
      video.play();
    }
  }
});

function closeVideo() {
  video.pause();
  video.currentTime = 0;
  overlay.style.display = "none";
  modal.style.display = "none";
  showTab("home");
}

// =========================================
// 📝 3. LOGIC HỆ THỐNG TRẮC NGHIỆM (QUIZ)
// =========================================
let selectedSubject = "";
let selectedChapter = "";
let questionsPool = [];
let userResponses = {};
let wrongQuestionsQueue = [];
let isRepeatMode = false;
let currentQuestionIdx = 0;
let correctAnswersSet = new Set();
let quizStartTime = 0;

const correctSound = new Audio("audio/dung.mp3");
const tenPointsSound = new Audio("audio/10diem.mp3");
const highSound = new Audio("audio/kinh.mp3");
const mediumSound = new Audio("audio/aiep.mp3");
const lowSound = new Audio("audio/lay10lay.mp3");
const earlySubmitSound = new Audio("audio/taolaymay.mp3");
const wrongSound = new Audio("audio/danhram.mp3");
const countdownSound = new Audio("audio/colen.mp3");

countdownSound.addEventListener("timeupdate", function () {
  if (this.currentTime >= 4.0) {
    this.pause();
    this.currentTime = 0;
  }
});

function showQuizSubTab(subTabId) {
  document
    .querySelectorAll(".quiz-sub-tab")
    .forEach((tab) => (tab.style.display = "none"));
  document.getElementById(subTabId).style.display = "block";
}

function selectSubject(subjectName) {
  selectedSubject = subjectName;
  const subjectData = quizDatabase[subjectName];
  const chapterListContainer = document.querySelector(".chapter-list");

  if (chapterListContainer && subjectData) {
    chapterListContainer.innerHTML = "";
    for (let chapterName in subjectData) {
      if (Array.isArray(subjectData[chapterName])) {
        const btn = document.createElement("button");
        btn.className = "quiz-btn";
        btn.style.display = "flex";
        btn.style.justifyContent = "space-between";
        btn.style.alignItems = "center";
        btn.innerHTML = `
          <span>📖 ${chapterName}</span>
          <span style="background: rgba(0,0,0,0.08); padding: 3px 8px; border-radius: 12px; font-size: 12px; font-weight: 600; color: #ffffff;">
            ${subjectData[chapterName].length} câu
          </span>
        `;
        btn.onclick = function () {
          selectChapter(chapterName);
        };
        chapterListContainer.appendChild(btn);
      }
    }
  } else {
    if (chapterListContainer) {
      chapterListContainer.innerHTML =
        "<p style='color: red; text-align: center; font-weight: bold;'>Môn này đang cập nhật câu hỏi, vui lòng chọn môn khác!</p>";
    }
  }

  document.getElementById("quiz-subjects").style.display = "none";
  document.getElementById("quiz-chapters").style.display = "block";
}

function backToSubjects() {
  tatTatCaNhacQuiz();
  showQuizSubTab("quiz-subjects");
}

function selectChapter(chapterName) {
  selectedChapter = chapterName;
  if (
    quizDatabase[selectedSubject] &&
    quizDatabase[selectedSubject][selectedChapter]
  ) {
    originalQuestions = quizDatabase[selectedSubject][selectedChapter];
  } else {
    originalQuestions = [
      {
        q: "Chương này đang cập nhật câu hỏi...",
        options: {
          A: "Đang cập nhật",
          B: "Đang cập nhật",
          C: "Đang cập nhật",
          D: "Đang cập nhật",
        },
        answer: "A",
      },
    ];
  }
  demnguoc();
}

function backToChapters() {
  tatTatCaNhacQuiz();
  showQuizSubTab("quiz-chapters");
}

function demnguoc() {
  showQuizSubTab("quiz-countdown");
  let exitBox = document.getElementById("emergency-exit-box");
  if (exitBox) exitBox.style.display = "block";

  let count = 3;
  const timerEl = document.getElementById("countdown-timer");
  timerEl.innerText = count;
  countdownSound.currentTime = 0;
  countdownSound.play().catch(() => {});
  let interval = setInterval(() => {
    count--;
    if (count > 0) {
      timerEl.innerText = count;
    } else {
      clearInterval(interval);
      initQuizGame();
    }
  }, 1000);
}

function initQuizGame() {
  let exitBox = document.getElementById("emergency-exit-box");
  if (exitBox) exitBox.style.display = "block";

  questionsPool = JSON.parse(JSON.stringify(originalQuestions));
  for (let i = questionsPool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questionsPool[i], questionsPool[j]] = [questionsPool[j], questionsPool[i]];
  }
  questionsPool.forEach((q, idx) => {
    q.id = idx;
  });
  userResponses = {};
  wrongQuestionsQueue = [];
  correctAnswersSet.clear();
  isRepeatMode = false;
  currentQuestionIdx = 0;
  quizStartTime = Date.now();
  showQuizSubTab("quiz-play");
  updateLiveScoreBar();
  renderQuestion();

  if (
    typeof currentStudent !== "undefined" &&
    currentStudent &&
    currentStudent.id
  ) {
    database.ref("active_quiz_sessions/" + currentStudent.id.trim()).set({
      name: currentStudent.name,
      id: currentStudent.id,
      subject:
        typeof selectedSubject !== "undefined" ? selectedSubject : "Chưa rõ",
      chapter:
        typeof selectedChapter !== "undefined" ? selectedChapter : "Chưa rõ",
      currentQuestion: 1,
      currentScore: "0.00",
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    });
  }
}

function updateLiveScoreBar() {
  const totalQ = originalQuestions.length;
  const correctCount = correctAnswersSet.size;
  let liveScore = correctCount * (10 / totalQ);
  document.getElementById("live-score-val").innerText = (
    Math.round(liveScore * 100) / 100
  ).toFixed(2);
  document.getElementById("live-stats-val").innerText =
    `(${correctCount}/${totalQ})`;
}

function renderQuestion() {
  let activeList = isRepeatMode ? wrongQuestionsQueue : questionsPool;
  let totalQuestions = activeList.length;
  if (totalQuestions === 0) {
    ketthucbaithi();
    return;
  }
  let currentQ = activeList[currentQuestionIdx];
  document.getElementById("question-index").innerText =
    `Câu hỏi: ${currentQuestionIdx + 1} / ${totalQuestions}`;
  document.getElementById("quiz-temp-status").innerText = isRepeatMode
    ? "Đang sửa lại câu sai..."
    : "Lượt làm chính";
  document.getElementById("question-text").innerText = currentQ.q;
  document.getElementById("optA").innerText = `A. ${currentQ.options.A}`;
  document.getElementById("optB").innerText = `B. ${currentQ.options.B}`;
  document.getElementById("optC").innerText = `C. ${currentQ.options.C}`;
  document.getElementById("optD").innerText = `D. ${currentQ.options.D}`;
  ["A", "B", "C", "D"].forEach((opt) => {
    const btn = document.getElementById(`opt${opt}`);
    btn.className = "answer-option";
    btn.disabled = false;
  });
  if (userResponses[currentQ.id] !== undefined) {
    showAnswerStatus(currentQ, userResponses[currentQ.id]);
  }
  document.getElementById("prev-btn").disabled = currentQuestionIdx === 0;

  if (
    typeof currentStudent !== "undefined" &&
    currentStudent &&
    currentStudent.id
  ) {
    let liveScoreVal = document.getElementById("live-score-val")
      ? document.getElementById("live-score-val").innerText
      : "0.00";
    database.ref("active_quiz_sessions/" + currentStudent.id.trim()).update({
      currentQuestion: currentQuestionIdx + 1,
      currentScore: liveScoreVal,
    });
  }
}

function answerQuestion(selectedOption) {
  let activeList = isRepeatMode ? wrongQuestionsQueue : questionsPool;
  let currentQ = activeList[currentQuestionIdx];
  if (userResponses[currentQ.id] !== undefined) return;
  userResponses[currentQ.id] = selectedOption;
  if (selectedOption === currentQ.answer) {
    correctAnswersSet.add(currentQ.id);
    correctSound.currentTime = 0;
    correctSound.play().catch(() => {});
  } else {
    correctAnswersSet.delete(currentQ.id);
    wrongSound.currentTime = 0;
    wrongSound.play().catch(() => {});
  }
  updateLiveScoreBar();
  showAnswerStatus(currentQ, selectedOption);
}

function showAnswerStatus(questionObj, chosenOption) {
  ["A", "B", "C", "D"].forEach((opt) => {
    const btn = document.getElementById(`opt${opt}`);
    btn.disabled = true;
    if (opt === questionObj.answer) btn.classList.add("correct");
    else if (opt === chosenOption) btn.classList.add("wrong");
  });
}

function prevQuestion() {
  if (currentQuestionIdx > 0) {
    currentQuestionIdx--;
    renderQuestion();
  }
}

function nextQuestion() {
  let activeList = isRepeatMode ? wrongQuestionsQueue : questionsPool;
  if (currentQuestionIdx < activeList.length - 1) {
    currentQuestionIdx++;
    renderQuestion();
  } else {
    autoCheckAndLoopCycle();
  }
}

function autoCheckAndLoopCycle() {
  if (!isRepeatMode) {
    let failedQuestions = [];
    questionsPool.forEach((q) => {
      if (!correctAnswersSet.has(q.id)) failedQuestions.push(q);
    });
    if (failedQuestions.length > 0) {
      isRepeatMode = true;
      wrongQuestionsQueue = failedQuestions;
      wrongQuestionsQueue.forEach((q) => {
        delete userResponses[q.id];
      });
      currentQuestionIdx = 0;
      renderQuestion();
    } else {
      ketthucbaithi();
    }
  } else {
    let failedAgain = [];
    wrongQuestionsQueue.forEach((q) => {
      if (!correctAnswersSet.has(q.id)) failedAgain.push(q);
    });
    if (failedAgain.length > 0) {
      wrongQuestionsQueue = failedAgain;
      wrongQuestionsQueue.forEach((q) => {
        delete userResponses[q.id];
      });
      currentQuestionIdx = 0;
      renderQuestion();
    } else {
      ketthucbaithi();
    }
  }
}

function ketthucbaithi() {
  let totalDurationSeconds = Math.round((Date.now() - quizStartTime) / 1000);
  saveToLeaderboard(totalDurationSeconds);

  let exitBox = document.getElementById("emergency-exit-box");
  if (exitBox) exitBox.style.display = "none";
  if (
    typeof currentStudent !== "undefined" &&
    currentStudent &&
    currentStudent.id
  ) {
    database.ref("active_quiz_sessions/" + currentStudent.id.trim()).remove();
  }

  showQuizSubTab("quiz-result");

  const totalQ = originalQuestions.length;
  const correctCount = correctAnswersSet.size;
  let finalScore =
    totalQ > 0 ? Math.round(correctCount * (10 / totalQ) * 100) / 100 : 0;

  document.getElementById("score-text").innerText =
    `${finalScore.toFixed(2)} / 10 Điểm`;

  tatTatCaNhacQuiz();

  if (finalScore === 10) {
    tenPointsSound.currentTime = 0;
    tenPointsSound.play().catch(() => {});
    document.querySelector(".result-screen .mauchuquizi").innerText =
      "Ô MAI CA ĐÚNG HẾT RỒI KÌA";
    document.getElementById("summary-text").innerHTML =
      `Chúc mừng học viên: <b>${currentStudent.name}</b> (MSSV: ${currentStudent.id})!<br>Bạn đã hoàn thành chính xác 100% tất cả các câu hỏi của <b>${selectedChapter}</b> - <b>${selectedSubject}</b>.<br>Thời gian hoàn thành: <b>${totalDurationSeconds} giây</b>.`;
  } else if (finalScore >= 8 && finalScore < 10) {
    if (typeof highSound !== "undefined") {
      highSound.currentTime = 0;
      highSound.play().catch(() => {});
    } else {
      earlySubmitSound.currentTime = 0;
      earlySubmitSound.play().catch(() => {});
    }
    document.querySelector(".result-screen .mauchuquizi").innerText =
      "XUẤT SẮC QUÁ ĐI MẤT!";
    document.getElementById("summary-text").innerHTML =
      `Học viên: <b>${currentStudent.name}</b> (MSSV: ${currentStudent.id}) đã hoàn thành bài.<br>Số câu đúng: <b>${correctCount}/${totalQ} câu</b> (${finalScore.toFixed(2)} điểm).<br>Thời gian làm bài: <b>${totalDurationSeconds} giây</b>.`;
  } else if (finalScore >= 5 && finalScore < 8) {
    if (typeof mediumSound !== "undefined") {
      mediumSound.currentTime = 0;
      mediumSound.play().catch(() => {});
    } else {
      earlySubmitSound.currentTime = 0;
      earlySubmitSound.play().catch(() => {});
    }
    document.querySelector(".result-screen .mauchuquizi").innerText =
      "LÀM TỐT LẮM, CỐ CHÚT NỮA NHÉ";
    document.getElementById("summary-text").innerHTML =
      `Học viên: <b>${currentStudent.name}</b> (MSSV: ${currentStudent.id}) đã nộp bài.<br>Số câu đúng: <b>${correctCount}/${totalQ} câu</b> (${finalScore.toFixed(2)} điểm).<br>Thời gian làm bài: <b>${totalDurationSeconds} giây</b>.`;
  } else if (finalScore >= 3 && finalScore < 5) {
    if (typeof lowSound !== "undefined") {
      lowSound.currentTime = 0;
      lowSound.play().catch(() => {});
    } else {
      wrongSound.currentTime = 0;
      wrongSound.play().catch(() => {});
    }
    document.querySelector(".result-screen .mauchuquizi").innerText =
      "LẦN SAU CỐ GẮNG HƠN NHÉ";
    document.getElementById("summary-text").innerHTML =
      `Học viên: <b>${currentStudent.name}</b> (MSSV: ${currentStudent.id}) đã nộp bài.<br>Số câu đúng: <b>${correctCount}/${totalQ} câu</b> (${finalScore.toFixed(2)} điểm).<br>Thời gian làm bài: <b>${totalDurationSeconds} giây</b>.`;
  } else {
    earlySubmitSound.currentTime = 0;
    earlySubmitSound.play().catch(() => {});
    document.querySelector(".result-screen .mauchuquizi").innerText =
      "LẦN SAU CỐ GẮNG HƠN NHÉ";
    document.getElementById("summary-text").innerHTML =
      `Học viên: <b>${currentStudent.name}</b> (MSSV: ${currentStudent.id}) đã nộp bài.<br>Số câu đúng: <b>${correctCount}/${totalQ} câu</b> (${finalScore.toFixed(2)} điểm).<br>Thời gian làm bài: <b>${totalDurationSeconds} giây</b>.`;
  }
}

function nopBaiSom() {
  if (confirm("Bạn có chắc chắn muốn nộp bài và xem kết quả không?")) {
    if (typeof countdownSound !== "undefined") {
      countdownSound.pause();
      countdownSound.currentTime = 0;
    }
    ketthucbaithi();
  }
}

function tatTatCaNhacQuiz() {
  if (typeof tenPointsSound !== "undefined") {
    tenPointsSound.pause();
    tenPointsSound.currentTime = 0;
  }
  if (typeof earlySubmitSound !== "undefined") {
    earlySubmitSound.pause();
    earlySubmitSound.currentTime = 0;
  }
  if (typeof countdownSound !== "undefined") {
    countdownSound.pause();
    countdownSound.currentTime = 0;
  }
}

function saveToLeaderboard(duration) {
  let data = localStorage.getItem("quiz_leaderboard");
  let leaderboard = data ? JSON.parse(data) : [];

  let correctCount = correctAnswersSet.size;
  let totalQ = originalQuestions.length;
  let currentScore = Math.round(correctCount * (10 / totalQ) * 100) / 100;

  let existingRecordIndex = leaderboard.findIndex(
    (item) =>
      item.id === currentStudent.id &&
      item.subject === selectedSubject &&
      item.chapter === selectedChapter,
  );

  let recordToSave = null;

  if (existingRecordIndex !== -1) {
    let oldRecord = leaderboard[existingRecordIndex];
    let oldScore = oldRecord.score !== undefined ? oldRecord.score : 10;

    if (
      currentScore > oldScore ||
      (currentScore === oldScore && duration < oldRecord.duration)
    ) {
      leaderboard[existingRecordIndex].duration = duration;
      leaderboard[existingRecordIndex].score = currentScore;
      leaderboard[existingRecordIndex].correctCount = correctCount;
      leaderboard[existingRecordIndex].timestamp = Date.now();
      recordToSave = leaderboard[existingRecordIndex];
    }
  } else {
    recordToSave = {
      name: currentStudent.name,
      id: currentStudent.id,
      subject: selectedSubject,
      chapter: selectedChapter,
      duration: duration,
      score: currentScore,
      correctCount: correctCount,
      timestamp: Date.now(),
    };
    leaderboard.push(recordToSave);
  }

  localStorage.setItem("quiz_leaderboard", JSON.stringify(leaderboard));

  if (recordToSave && currentStudent && currentStudent.id) {
    let cleanId = currentStudent.id.trim();
    let safeChapterKey = selectedChapter.replace(/[.#$\/\[\]]/g, "_");
    let safeSubjectKey = selectedSubject.replace(/[.#$\/\[\]]/g, "_");

    let firebaseRef = database.ref(
      `leaderboards/${safeSubjectKey}_${safeChapterKey}_${cleanId}`,
    );

    firebaseRef.once("value", (snapshot) => {
      let fbData = snapshot.val();
      if (
        !fbData ||
        currentScore > fbData.score ||
        (currentScore === fbData.score && duration < fbData.duration)
      ) {
        firebaseRef.set(recordToSave);
      }
    });
  }
}

function showLeaderboardTab() {
  document.getElementById("leaderboard-title").innerText =
    `BẢNG XẾP HẠNG MÔN: ${selectedSubject.toUpperCase()}`;

  let tbody = document.getElementById("leaderboard-data");
  tbody.innerHTML = `<tr><td colspan="5" style="color:#777;">Đang tải bảng xếp hạng từ hệ thống...</td></tr>`;

  showQuizSubTab("quiz-leaderboard");

  database.ref("leaderboards").once("value", (snapshot) => {
    let rawData = snapshot.val();
    let leaderboard = [];

    if (rawData) {
      Object.keys(rawData).forEach((key) => {
        leaderboard.push(rawData[key]);
      });
    }

    let subjectFiltered = leaderboard.filter(
      (item) => item.subject === selectedSubject,
    );

    subjectFiltered.sort((a, b) => {
      let scoreA = a.score !== undefined ? a.score : 10;
      let scoreB = b.score !== undefined ? b.score : 10;
      if (scoreB !== scoreA) {
        return scoreB - scoreA;
      }
      return a.duration - b.duration;
    });

    tbody.innerHTML = "";

    if (subjectFiltered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="color:#777;">Chưa có dữ liệu xếp hạng cho môn này!</td></tr>`;
    } else {
      subjectFiltered.forEach((student, index) => {
        let mssvBaoMat = student.id ? student.id.substring(0, 3) + "***" : "";
        let diemSo = student.score !== undefined ? student.score : "10.00";
        let soCau =
          student.correctCount !== undefined
            ? student.correctCount
            : typeof originalQuestions !== "undefined"
              ? originalQuestions.length
              : 0;

        let tongSoCau =
          typeof originalQuestions !== "undefined"
            ? originalQuestions.length
            : soCau;

        tbody.innerHTML += `<tr>
              <td><b>${index + 1}</b></td>
              <td>${student.name}</td>
              <td>${mssvBaoMat}</td>
              <td><span style="color:#0058f0; font-weight:bold;">${diemSo}đ</span> (${soCau}/${tongSoCau} câu)</td>
              <td><span style="color:#28a745; font-weight:bold;">${student.duration} giây</span> (${student.chapter})</td>
             </tr>`;
      });
    }
  });
}

function goBackFromLeaderboard() {
  tatTatCaNhacQuiz();
  let exitBox = document.getElementById("emergency-exit-box");
  if (exitBox) exitBox.style.display = "none";

  if (
    correctAnswersSet.size === originalQuestions.length &&
    document.getElementById("quiz-result").style.display === "block"
  ) {
    showQuizSubTab("quiz-result");
  } else {
    showQuizSubTab("quiz-chapters");
  }
}

function restartQuiz() {
  tatTatCaNhacQuiz();
  demnguoc();
}

function emergencyExit() {
  tatTatCaNhacQuiz();
  let exitBox = document.getElementById("emergency-exit-box");
  if (exitBox) exitBox.style.display = "none";
  isRepeatMode = false;
  wrongQuestionsQueue = [];
  correctAnswersSet.clear();
  userResponses = {};
  currentQuestionIdx = 0;
  showTab("quiz");
  showQuizSubTab("quiz-subjects");
}

function toggleUserMenu(event) {
  event.stopPropagation();
  let menu = document.getElementById("menu-tha-tai-khoan");
  if (menu) {
    menu.classList.toggle("hien-thi-user");
    if (menu.classList.contains("hien-thi-user")) {
      if (document.getElementById("menu-input-ten")) {
        document.getElementById("menu-input-ten").value =
          currentStudent.name || "";
        document.getElementById("menu-input-ten").onclick = function (e) {
          e.stopPropagation();
        };
      }
      if (document.getElementById("menu-input-mssv")) {
        document.getElementById("menu-input-mssv").value =
          currentStudent.id || "";
        document.getElementById("menu-input-mssv").onclick = function (e) {
          e.stopPropagation();
        };
      }
    }
  }
}

document.addEventListener("click", function () {
  let menu = document.getElementById("menu-tha-tai-khoan");
  if (menu) menu.classList.remove("hien-thi-user");
});

// =========================================
// 👤 4. ĐỒNG BỘ TÀI KHOẢN VÀ AVATAR
// =========================================
function hienThiGiaoDienTaiKhoan() {
  let tenSVDong = currentStudent.name
    ? currentStudent.name
    : "Sinh viên ẩn danh";
  let mssvSVDong = currentStudent.id ? currentStudent.id : "000000";
  let btnEl = document.getElementById("avatar-nut-bam");
  if (!btnEl) return;

  let savedImg = localStorage.getItem("user_avatar_base64_" + mssvSVDong);
  if (savedImg) {
    btnEl.innerHTML = `<img src="${savedImg}" alt="Avatar" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`;
  } else {
    btnEl.innerHTML = `<span id="avatar-chu-cai">${tenSVDong.trim().charAt(0).toUpperCase()}</span>`;
  }

  if (currentStudent.id) {
    database
      .ref("users/" + currentStudent.id + "/avatar")
      .on("value", (snapshot) => {
        let firebaseAvatar = snapshot.val();
        if (firebaseAvatar) {
          localStorage.setItem(
            "user_avatar_base64_" + mssvSVDong,
            firebaseAvatar,
          );
          btnEl.innerHTML = `<img src="${firebaseAvatar}" alt="Avatar" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`;
        }
      });
  }
}

function luuThayDoiTaiKhoan() {
  let newName = document.getElementById("menu-input-ten").value.trim();
  let newId = document.getElementById("menu-input-mssv").value.trim();
  if (newName === "" || newId === "") {
    alert("Họ tên và MSSV không được để trống!");
    return;
  }
  if (newId === "7277979906" && newName !== "trung_admin") {
    alert("Thông tin xác thực Admin không hợp lệ!");
    return;
  }

  database.ref("threads").once("value", (snapshot) => {
    let threadsData = snapshot.val();
    let isDuplicated = false;
    if (threadsData) {
      Object.keys(threadsData).forEach((postKey) => {
        let post = threadsData[postKey];
        if (
          post.mssv &&
          post.mssv.trim() === newId &&
          newId !== currentStudent.id.trim()
        ) {
          isDuplicated = true;
        }
      });
    }
    if (isDuplicated) {
      alert(
        "⚠️ Tài khoản này (MSSV: " +
          newId +
          ") đã tồn tại trong hệ thống. Vui lòng cập nhật MSSV khác!",
      );
    } else {
      thucHienLuuThayDoi(newName, newId);
    }
  });
}

function thucHienLuuThayDoi(newName, newId) {
  let oldId = currentStudent.id ? currentStudent.id.trim() : "000000";
  let oldName = currentStudent.name ? currentStudent.name.trim() : "";
  let oldUniqueKey = oldName + "_" + oldId;
  let currentAvatar =
    localStorage.getItem("user_avatar_base64_" + oldUniqueKey) || "";

  if (newName !== oldName || newId !== oldId) {
    localStorage.removeItem("user_avatar_base64_" + oldUniqueKey);
    currentAvatar = "";
  }

  currentStudent.name = newName;
  currentStudent.id = newId;
  localStorage.setItem(
    "current_logged_student",
    JSON.stringify(currentStudent),
  );

  database.ref("threads").once("value", (snapshot) => {
    let threadsData = snapshot.val();
    if (threadsData) {
      let updates = {};
      Object.keys(threadsData).forEach((postKey) => {
        let post = threadsData[postKey];
        if (post.mssv && post.mssv.trim() === oldId) {
          updates[`threads/${postKey}/author`] = newName;
          updates[`threads/${postKey}/mssv`] = newId;
          if (newName !== oldName || newId !== oldId) {
            updates[`threads/${postKey}/avatar`] = "";
          }
        }
        if (post.comments) {
          Object.keys(post.comments).forEach((cmtKey) => {
            if (
              post.comments[cmtKey].mssv &&
              post.comments[cmtKey].mssv.trim() === oldId
            ) {
              updates[`threads/${postKey}/comments/${cmtKey}/user`] = newName;
              updates[`threads/${postKey}/comments/${cmtKey}/mssv`] = newId;
              if (newName !== oldName || newId !== oldId) {
                updates[`threads/${postKey}/comments/${cmtKey}/avatar`] = "";
              }
            }
          });
        }
      });
      database.ref().update(updates);
    }
  });

  hienThiGiaoDienTaiKhoan();
  let menu = document.getElementById("menu-tha-tai-khoan");
  if (menu) menu.classList.remove("hien-thi-user");

  alert(
    newName !== oldName || newId !== oldId
      ? "Đã đổi người dùng! Avatar đã được reset, hãy chọn ảnh mới nhé."
      : "Cập nhật thông tin thành công!",
  );
}

function capNhatAvatarTaiKhoan(input) {
  let mssv = currentStudent.id;
  if (!mssv) return alert("Vui lòng đăng nhập!");
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = function (e) {
      let base64Img = e.target.result;
      database.ref("users/" + mssv + "/avatar").set(base64Img);
      localStorage.setItem("user_avatar_base64_" + mssv, base64Img);
      capNhatAnhTatCaBaiDangCu(mssv, base64Img);
      hienThiGiaoDienTaiKhoan();
      alert("Đã đồng bộ avatar lên hệ thống!");
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function capNhatAnhTatCaBaiDangCu(mssv, newAvatar) {
  database.ref("threads").once("value", (snapshot) => {
    let updates = {};
    snapshot.forEach((child) => {
      let post = child.val();
      let postId = child.key;

      if (post.mssv === mssv) {
        updates[`threads/${postId}/avatar`] = newAvatar;
      }

      if (post.comments) {
        Object.keys(post.comments).forEach((cmtKey) => {
          if (post.comments[cmtKey].mssv === mssv) {
            updates[`threads/${postId}/comments/${cmtKey}/avatar`] = newAvatar;
          }
        });
      }
    });
    database.ref().update(updates);
  });
}

function dangXuatTaiKhoan() {
  if (confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
    localStorage.removeItem("current_logged_student");
    location.reload();
  }
}

// =========================================
// 👑 5. BANNER CAROUSEL HOẠT ĐỘNG THÔNG MINH
// =========================================
(function () {
  let isMobile = window.innerWidth <= 768;
  const container = document.getElementById(
    isMobile ? "carousel-container-mobile" : "carousel-container-pc",
  );
  const track = document.getElementById(
    isMobile ? "carousel-track-mobile" : "carousel-track-pc",
  );

  if (!container || !track) return;

  const originalSlides = Array.from(track.children);
  if (originalSlides.length === 0) return;

  const firstClone = originalSlides[0].cloneNode(true);
  const lastClone = originalSlides[originalSlides.length - 1].cloneNode(true);
  track.appendChild(firstClone);
  track.insertBefore(lastClone, originalSlides[0]);

  let slides = Array.from(track.children);
  let currentIndex = 1;
  let autoPlayTimer = setInterval(() => {
    currentIndex++;
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, 3500);

  track.addEventListener("transitionend", () => {
    if (currentIndex >= slides.length - 1) {
      track.style.transition = "none";
      currentIndex = 1;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    if (currentIndex <= 0) {
      track.style.transition = "none";
      currentIndex = slides.length - 2;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  });
})();

// ==========================================
// 🌐 6. HỆ THỐNG ĐẾM & ĐỒNG BỘ SỐ NGƯỜI ONLINE (FIREBASE)
// ==========================================
function updateOnlineStatus() {
  let student = JSON.parse(localStorage.getItem("current_logged_student"));
  let userId =
    student && student.id
      ? student.id.trim()
      : "guest_" + Math.random().toString(36).substring(2, 9);
  let userName = student && student.name ? student.name : "Khách tham quan";

  let userRef = database.ref("online_users/" + userId);
  userRef.onDisconnect().remove();
  userRef.set({
    name: userName,
    lastSeen: firebase.database.ServerValue.TIMESTAMP,
  });
}

document.addEventListener("DOMContentLoaded", function () {
  updateOnlineStatus();
});

database.ref("online_users").on("value", (snapshot) => {
  let count = snapshot.numChildren();
  let displayEl = document.getElementById("wau_count");
  if (displayEl) {
    displayEl.innerText = count;
  }
});

// =========================================
// 📊 7. THỐNG KÊ ADMIN & BIỂU ĐỒ TRUY CẬP REAL-TIME
// =========================================
let myAccessChart = null;
let globalAccessLogs = {};

function checkAdminPermission() {
  let adminBtn = document.getElementById("admin-stats-tab-btn");
  if (!adminBtn) return;

  if (
    currentStudent &&
    (currentStudent.id === "7277979906" ||
      currentStudent.name === "trung_admin")
  ) {
    adminBtn.style.display = "inline-block";
  } else {
    adminBtn.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(checkAdminPermission, 500);
});

function loadAdminStatisticsData() {
  database.ref("user_access_logs").on("value", (snapshot) => {
    globalAccessLogs = snapshot.val() || {};
    let now = Date.now();
    let oneHourAgo = now - 60 * 60 * 1000;
    let fiveHoursAgo = now - 5 * 60 * 60 * 1000;
    let oneDayAgo = now - 24 * 60 * 60 * 1000;
    let thirtyDaysAgo = now - 30 * 24 * 60 * 60 * 1000;
    let threeMonthsAgo = now - 90 * 24 * 60 * 60 * 1000;

    let count1h = 0,
      count5h = 0,
      count1d = 0,
      count30d = 0,
      count3m = 0;

    Object.values(globalAccessLogs).forEach((log) => {
      let time = log.timestamp || 0;
      if (time >= oneHourAgo) count1h++;
      if (time >= fiveHoursAgo) count5h++;
      if (time >= oneDayAgo) count1d++;
      if (time >= thirtyDaysAgo) count30d++;
      if (time >= threeMonthsAgo) count3m++;
    });

    let el1h = document.getElementById("stat-1h");
    let el5h = document.getElementById("stat-5h");
    let el1d = document.getElementById("stat-1d");
    let el30d = document.getElementById("stat-30d");
    let el3m = document.getElementById("stat-3m");

    if (el1h) el1h.innerText = count1h;
    if (el5h) el5h.innerText = count5h;
    if (el1d) el1d.innerText = count1d;
    if (el30d) el30d.innerText = count30d;
    if (el3m) el3m.innerText = count3m;

    updateAccessChart();
  });

  database.ref("online_users").on("value", (snapshot) => {
    let onlineNowEl = document.getElementById("stat-online-now");
    if (onlineNowEl) {
      onlineNowEl.innerText = snapshot.numChildren();
    }
  });

  loadLiveActiveQuizUsers();
}

function logUserAccessActivity() {
  let student =
    currentStudent && currentStudent.id
      ? currentStudent
      : JSON.parse(localStorage.getItem("current_logged_student"));

  if (!student || !student.id) return;

  let logRef = database.ref("user_access_logs").push();
  logRef.set({
    userId: student.id.trim(),
    name: student.name || "Học viên",
    timestamp: Date.now(),
  });
}

function updateAccessChart() {
  let filterSelect = document.getElementById("chart-time-filter");
  if (!filterSelect) return;

  let filterType = filterSelect.value;
  let now = Date.now();

  let intervalMs = 30 * 60 * 1000;
  let totalSlots = 48;
  let startTime = now - 24 * 60 * 60 * 1000;

  if (filterType === "30d") {
    totalSlots = 30;
    intervalMs = 24 * 60 * 60 * 1000;
    startTime = now - 30 * 24 * 60 * 60 * 1000;
  } else if (filterType === "3m") {
    totalSlots = 12;
    intervalMs = 7 * 24 * 60 * 60 * 1000;
    startTime = now - 90 * 24 * 60 * 60 * 1000;
  }

  let slotsData = new Array(totalSlots).fill(0);
  let slotLabels = [];

  for (let i = 0; i < totalSlots; i++) {
    let slotTime = startTime + i * intervalMs;
    let d = new Date(slotTime);
    if (filterType === "1d") {
      slotLabels.push(
        d.getHours().toString().padStart(2, "0") +
          ":" +
          (d.getMinutes() === 0
            ? "00"
            : d.getMinutes().toString().padStart(2, "0")),
      );
    } else {
      slotLabels.push(d.getDate() + "/" + (d.getMonth() + 1));
    }
  }

  Object.values(globalAccessLogs).forEach((log) => {
    let t = log.timestamp || 0;
    if (t >= startTime && t <= now) {
      let slotIndex = Math.floor((t - startTime) / intervalMs);
      if (slotIndex >= 0 && slotIndex < totalSlots) {
        slotsData[slotIndex]++;
      }
    }
  });

  let canvasEl = document.getElementById("accessLineChart");
  if (!canvasEl) return;

  let ctx = canvasEl.getContext("2d");

  if (myAccessChart) {
    myAccessChart.destroy();
  }

  myAccessChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: slotLabels,
      datasets: [
        {
          label: "Số lượng truy cập thực tế",
          data: slotsData,
          borderColor: "#0058f0",
          backgroundColor: "rgba(0, 88, 240, 0.1)",
          borderWidth: 2.5,
          fill: true,
          tension: 0.35,
          pointRadius: 3,
          pointBackgroundColor: "#0058f0",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1 },
        },
      },
    },
  });
}

function loadLiveActiveQuizUsers() {
  let activeBox = document.getElementById("live-active-users-box");
  if (!activeBox) return;

  database.ref("active_quiz_sessions").on("value", (snapshot) => {
    let activeUsers = snapshot.val() || {};
    activeBox.innerHTML = "";

    let keys = Object.keys(activeUsers);
    if (keys.length === 0) {
      activeBox.innerHTML = `<p style="color: #777; text-align: center; margin: 0;">Không có học viên nào đang làm bài lúc này.</p>`;
      return;
    }

    let html = `<table style="width: 100%; border-collapse: collapse; font-size: 14px;">
      <thead>
        <tr style="background: #e9ecef; text-align: left;">
          <th style="padding: 8px;">Họ và Tên</th>
          <th style="padding: 8px;">MSSV</th>
          <th style="padding: 8px;">Đang làm môn / Chương</th>
          <th style="padding: 8px;">Đang ở câu số</th>
          <th style="padding: 8px;">Điểm tạm tính</th>
        </tr>
      </thead>
      <tbody>`;

    keys.forEach((key) => {
      let u = activeUsers[key];
      html += `<tr style="border-bottom: 1px solid #dee2e6;">
        <td style="padding: 8px; font-weight: bold;">${u.name || "Ẩn danh"}</td>
        <td style="padding: 8px;">${u.id || "N/A"}</td>
        <td style="padding: 8px; color: #0058f0;">${u.subject || "Chưa chọn"} (${u.chapter || ""})</td>
        <td style="padding: 8px; font-weight: bold; color: #e65100;">Câu ${u.currentQuestion || 1}</td>
        <td style="padding: 8px; font-weight: bold; color: #28a745;">${u.currentScore || "0.00"}đ</td>
      </tr>`;
    });

    html += `</tbody></table>`;
    activeBox.innerHTML = html;
  });
}

function timKiemMonHoc() {
  let input = document.getElementById("inputTimKiem");
  let filter = input.value.toLowerCase().trim();

  let container = document.querySelector(".subject-list");
  if (!container) return;

  let buttons = Array.from(container.getElementsByClassName("quiz-btn"));

  buttons.sort((a, b) => {
    let textA = (a.textContent || a.innerText).toLowerCase();
    let textB = (b.textContent || b.innerText).toLowerCase();

    let matchA = filter !== "" && textA.includes(filter);
    let matchB = filter !== "" && textB.includes(filter);

    if (matchA && !matchB) return -1;
    if (!matchA && matchB) return 1;
    return 0;
  });

  buttons.forEach((btn) => container.appendChild(btn));

  buttons.forEach((btn) => {
    let text = (btn.textContent || btn.innerText).toLowerCase();
    if (filter === "" || text.includes(filter)) {
      btn.style.display = "";
    } else {
      btn.style.display = "none";
    }
  });
}

// =========================================
// 🛒 8. CHỢ PHENIKAA (MODAL & FIREBASE)
// =========================================
function moModalDangSanPham() {
  document.getElementById("modalDangSanPham").style.display = "flex";
}

function dongModalDangSanPham() {
  document.getElementById("modalDangSanPham").style.display = "none";
}

function xacNhanDangSanPham() {
  const ten = document.getElementById("tenSanPham").value;
  const gia = document.getElementById("giaSanPham").value;
  const anh =
    document.getElementById("linkAnhSanPham").value ||
    "https://via.placeholder.com/150";
  const mota = document.getElementById("moTaSanPham").value;

  if (!ten || !gia) {
    alert("Vui lòng nhập tên và giá sản phẩm!");
    return;
  }

  const productData = {
    ten: ten,
    gia: gia,
    anh: anh,
    mota: mota,
    nguoiDang: "Thành viên Phenikaa",
    thoiGian: Date.now(),
  };

  firebase
    .database()
    .ref("cho_phenikaa")
    .push(productData)
    .then(() => {
      alert("Đăng sản phẩm thành công!");
      dongModalDangSanPham();
      document.getElementById("tenSanPham").value = "";
      document.getElementById("giaSanPham").value = "";
      document.getElementById("linkAnhSanPham").value = "";
      document.getElementById("moTaSanPham").value = "";
    })
    .catch((error) => {
      alert("Lỗi khi đăng: " + error.message);
    });
}

function taiDanhSachSanPham() {
  const luoiSanPham = document.getElementById("luoiSanPham");
  if (!luoiSanPham) return;

  firebase
    .database()
    .ref("cho_phenikaa")
    .on("value", (snapshot) => {
      luoiSanPham.innerHTML = "";
      const data = snapshot.val();

      if (!data) {
        luoiSanPham.innerHTML =
          '<p style="grid-column: 1/-1; text-align: center; color: #777;">Chưa có sản phẩm nào được đăng bán.</p>';
        return;
      }

      Object.keys(data).forEach((key) => {
        const sp = data[key];
        const card = document.createElement("div");
        card.className = "san-pham-card";
        card.innerHTML = `
                <img src="${sp.anh}" class="san-pham-img" alt="Ảnh sản phẩm">
                <div class="san-pham-body">
                    <h3 class="san-pham-title">${sp.ten}</h3>
                    <div class="san-pham-price">${sp.gia}</div>
                    <p class="san-pham-desc">${sp.mota}</p>
                    <button style="width: 100%; background: #007bff; color: white; border: none; padding: 8px; border-radius: 5px; cursor: pointer;" onclick="alert('Liên hệ người bán qua sđt/fb nội bộ trường nhé!')">Xem Chi Tiết</button>
                </div>
            `;
        luoiSanPham.appendChild(card);
      });
    });
}

window.addEventListener("DOMContentLoaded", () => {
  taiDanhSachSanPham();
});
let base64AnhSanPham = "";

function chonAnhSanPham(input) {
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = function (e) {
      base64AnhSanPham = e.target.result;
      document.getElementById("ten-file-anh").innerText =
        "Đã chọn: " + input.files[0].name;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function xacNhanDangSanPham() {
  const ten = document.getElementById("tenSanPham").value.trim();
  const gia = document.getElementById("giaSanPham").value.trim();
  const linkUrl =
    document.getElementById("linkChiTietSanPham").value.trim() || "#";
  const mota = document.getElementById("moTaSanPham").value.trim();
  const anh = base64AnhSanPham || "https://via.placeholder.com/150";

  if (!ten || !gia) {
    alert("Vui lòng nhập tên và giá sản phẩm!");
    return;
  }

  const nguoiBan =
    typeof currentStudent !== "undefined" && currentStudent.name
      ? currentStudent.name
      : "Thành viên Phenikaa";

  const productData = {
    ten: ten,
    gia: gia,
    link: linkUrl,
    anh: anh,
    mota: mota,
    nguoiDang: currentStudent ? currentStudent.name : "Thành viên Phenikaa",
    mssv: currentStudent ? currentStudent.id : "", // Lưu MSSV để đối chiếu quyền xóa
    thoiGian: Date.now(),
  };

  firebase
    .database()
    .ref("cho_phenikaa")
    .push(productData)
    .then(() => {
      alert("Đăng sản phẩm lên chợ thành công!");
      dongModalDangSanPham();
      // Reset form
      document.getElementById("tenSanPham").value = "";
      document.getElementById("giaSanPham").value = "";
      document.getElementById("linkChiTietSanPham").value = "";
      document.getElementById("moTaSanPham").value = "";
      document.getElementById("ten-file-anh").innerText = "";
      base64AnhSanPham = "";
    })
    .catch((error) => {
      alert("Lỗi khi đăng: " + error.message);
    });
}
// Hàm hỗ trợ định dạng giá tiền tự động thêm dấu chấm và chữ đ
function formatTienTe(str) {
  // Lọc lấy các ký tự số
  let numbers = str.replace(/\D/g, "");
  if (!numbers) return str; // Nếu người dùng nhập chữ hoàn toàn thì giữ nguyên
  // Định dạng thêm dấu chấm phân cách hàng nghìn
  let formatted = Number(numbers).toLocaleString("vi-VN");
  return formatted + "đ";
}
// Hàm tải danh sách và gán link cho nút Xem Chi Tiết
function taiDanhSachSanPham() {
  const luoiSanPham = document.getElementById("luoiSanPham");
  if (!luoiSanPham) return;

  firebase
    .database()
    .ref("cho_phenikaa")
    .on("value", (snapshot) => {
      luoiSanPham.innerHTML = "";
      const data = snapshot.val();

      if (!data) {
        luoiSanPham.innerHTML =
          '<p style="grid-column: 1/-1; text-align: center; color: #777;">Chưa có sản phẩm nào được đăng bán.</p>';
        return;
      }

      // Lấy thông tin tài khoản đang đăng nhập hiện tại
      let currentUser =
        typeof currentStudent !== "undefined" ? currentStudent : null;
      let currentId =
        currentUser && currentUser.id ? currentUser.id.trim() : "";
      let currentName =
        currentUser && currentUser.name ? currentUser.name.trim() : "";

      // Kiểm tra có phải Admin không (dựa vào MSSV hoặc tên admin của em)
      let isAdmin = currentId === "7277979906" || currentName === "trung_admin";

      Object.keys(data).forEach((key) => {
        const sp = data[key];
        const card = document.createElement("div");
        card.className = "san-pham-card";
        card.style.position = "relative"; // Để định vị nút xóa ở góc

        const actionClick =
          sp.link && sp.link !== "#"
            ? `window.open('${sp.link}', '_blank')`
            : `alert('Người bán chưa đính kèm link chi tiết, hãy liên hệ trực tiếp nội bộ trường nhé!')`;

        let giaHienThi = formatTienTe(sp.gia);

        // Kiểm tra quyền xóa: Nếu là Admin HOẶC là chính chủ người đăng bài
        let isOwner =
          (sp.mssv && sp.mssv.trim() === currentId) ||
          sp.nguoiDang === currentName;
        let nutXoaHtml = "";

        if (isAdmin || isOwner) {
          nutXoaHtml = `
          <button onclick="xoaSanPhamCho('${key}')" title="Xóa sản phẩm" style="position: absolute; top: 8px; right: 8px; background: rgba(220, 53, 69, 0.85); color: white; border: none; border-radius: 50%; width: 28px; height: 28px; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
            ✕
          </button>
        `;
        }

        card.innerHTML = `
        ${nutXoaHtml}
        <img src="${sp.anh}" class="san-pham-img" alt="Ảnh sản phẩm">
        <div class="san-pham-body">
            <h3 class="san-pham-title">${sp.ten}</h3>
            <div class="san-pham-price">${giaHienThi}</div>
            <p class="san-pham-desc">${sp.mota}</p>
            <p style="font-size: 11px; color: #888; margin-bottom: 8px;">Đăng bởi: ${sp.nguoiDang}</p>
            <button style="width: 100%; background: #007bff; color: white; border: none; padding: 8px; border-radius: 5px; cursor: pointer; font-weight: bold;" onclick="${actionClick}">Xem Chi Tiết / Liên Hệ</button>
        </div>
      `;
        luoiSanPham.appendChild(card);
      });
    });
}
// Hàm xử lý xóa sản phẩm khỏi Firebase
function xoaSanPhamCho(productKey) {
  if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi chợ không?")) {
    firebase
      .database()
      .ref("cho_phenikaa/" + productKey)
      .remove()
      .then(() => {
        alert("Đã xóa sản phẩm thành công!");
      })
      .catch((error) => {
        alert("Lỗi khi xóa: " + error.message);
      });
  }
}

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
  // Ẩn luôn các tab-content (khung VSTEP)
  document.querySelectorAll(".tab-content").forEach((s) => {
    s.classList.remove("active");
    s.style.display = "none";
  });

  // 2. Hiển thị section mục tiêu
  let target = document.getElementById(tabId);
  if (target) {
    target.classList.add("active");
    target.style.display = "block";
  }

  // 🔥 XỬ LÝ RIÊNG KHI BẤM VÀO TAB VSTEP B1 (ĐỂ TRỐNG - CHỈ HIỆN BANNER & NÚT KỸ NĂNG)
  if (tabId === "onthivstep") {
    // Xóa trạng thái active của các nút kỹ năng lớn
    document
      .querySelectorAll(".vstep-skill-btn")
      .forEach((btn) => btn.classList.remove("active-skill"));

    // Xóa sạch các nút part ở thanh ngang
    let partContainer = document.getElementById("vstep-part-container");
    if (partContainer) partContainer.innerHTML = "";

    // Ẩn toàn bộ khung câu hỏi / bài tập / reading
    let normalLayout = document.getElementById("vstep-normal-layout");
    let readingLayout = document.getElementById("reading-layout-container");
    if (normalLayout) normalLayout.style.display = "none";
    if (readingLayout) readingLayout.style.display = "none";

    // Hiển thị banner chào mừng lên
    let banner = document.getElementById("vstep-welcome-banner");
    if (banner) banner.style.display = "block";
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
    let user = firebase.auth().currentUser;
    if (!user || user.isAnonymous) {
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

  let quizUser = firebase.auth().currentUser;
  if (
    quizUser &&
    typeof currentStudent !== "undefined" &&
    currentStudent &&
    currentStudent.id
  ) {
    database.ref("active_quiz_sessions/" + quizUser.uid).set({
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

  let renderUser = firebase.auth().currentUser;
  if (
    renderUser &&
    typeof currentStudent !== "undefined" &&
    currentStudent &&
    currentStudent.id
  ) {
    let liveScoreVal = document.getElementById("live-score-val")
      ? document.getElementById("live-score-val").innerText
      : "0.00";
    database.ref("active_quiz_sessions/" + renderUser.uid).update({
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
  let endUser = firebase.auth().currentUser;
  if (endUser) {
    database.ref("active_quiz_sessions/" + endUser.uid).remove();
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
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem("current_logged_student");
        location.reload();
      })
      .catch((error) => {
        console.error("Lỗi đăng xuất:", error.message);
        localStorage.removeItem("current_logged_student");
        location.reload();
      });
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
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) return; // chưa có UID Auth thì chưa ghi được

    let student = JSON.parse(localStorage.getItem("current_logged_student"));
    let userName = student && student.name ? student.name : "Khách tham quan";

    let userRef = database.ref("online_users/" + user.uid); // dùng UID Auth thật
    userRef.onDisconnect().remove();
    userRef.set({
      name: userName,
      lastSeen: firebase.database.ServerValue.TIMESTAMP,
    });
  });
}
// 🔄 Tự động cập nhật lastSeen mỗi 60 giây để biết chính xác ai đang thực sự mở web
setInterval(() => {
  let user = firebase.auth().currentUser;
  if (user) {
    database
      .ref("online_users/" + user.uid + "/lastSeen")
      .set(firebase.database.ServerValue.TIMESTAMP);
  }
}, 60000);
document.addEventListener("DOMContentLoaded", function () {
  updateOnlineStatus();
});

database.ref("online_users").on("value", (snapshot) => {
  let data = snapshot.val() || {};
  let now = Date.now();
  let count = 0;

  Object.values(data).forEach((item) => {
    if (item.lastSeen && now - item.lastSeen < 2 * 60 * 1000) {
      count++;
    }
  });

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

function capNhatGiaoDienAdmin(user) {
  let adminBtn = document.getElementById("admin-stats-tab-btn");
  if (!adminBtn) return;

  if (user && !user.isAnonymous) {
    adminBtn.style.display = "inline-block";
    localStorage.setItem("admin_verified_uid", user.uid);
  } else if (user && user.isAnonymous) {
    adminBtn.style.display = "none";
    localStorage.removeItem("admin_verified_uid");
  }
}

let daDangKyAuthListener = false;
function checkAdminPermission() {
  let adminBtn = document.getElementById("admin-stats-tab-btn");
  if (!adminBtn) return;

  let savedAdminUid = localStorage.getItem("admin_verified_uid");
  if (savedAdminUid) {
    adminBtn.style.display = "inline-block";
  }

  if (!daDangKyAuthListener) {
    daDangKyAuthListener = true;
    firebase.auth().onAuthStateChanged((user) => {
      capNhatGiaoDienAdmin(user);
    });
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
    let data = snapshot.val() || {};
    let now = Date.now();
    let count = 0;

    Object.values(data).forEach((item) => {
      if (item.lastSeen && now - item.lastSeen < 2 * 60 * 1000) {
        count++;
      }
    });

    let onlineNowEl = document.getElementById("stat-online-now");
    if (onlineNowEl) {
      onlineNowEl.innerText = count;
    }
  });

  loadLiveActiveQuizUsers();
  // 🔥 NHÉT ĐOẠN NÀY VÀO ĐÂY (BÊN TRONG HÀM loadAdminStatisticsData)
  database.ref("active_vstep_sessions").on("value", (snapshot) => {
    let vstepOnlineEl = document.getElementById("stat-vstep-online");
    if (vstepOnlineEl) {
      vstepOnlineEl.innerText = snapshot.numChildren();
    }
  });
  // 2. Thống kê tổng số lượt đã làm/nộp bài VSTEP (giả sử anh lưu kết quả nộp bài ở node 'vstep_results' hoặc tương tự trên Firebase)
  database.ref("vstep_results").on("value", (snapshot) => {
    let vstepCompletedEl = document.getElementById("stat-vstep-completed");
    if (vstepCompletedEl) {
      vstepCompletedEl.innerText = snapshot.numChildren();
    }
  });

  // 🔥 Thêm dòng này vào cuối hàm
  loadChoPhenikaaStats();
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
        ${nutXoaHtml}
        <img src="${escapeHtml(sp.anh)}" class="san-pham-img" alt="Ảnh sản phẩm">
        <div class="san-pham-body">
            <h3 class="san-pham-title">${escapeHtml(sp.ten)}</h3>
            <div class="san-pham-price">${escapeHtml(giaHienThi)}</div>
            <p class="san-pham-desc">${escapeHtml(sp.mota)}</p>
            <p style="font-size: 11px; color: #888; margin-bottom: 8px;">Đăng bởi: ${escapeHtml(sp.nguoiDang)}</p>
            <p style="font-size: 12px; color: #007bff; margin-bottom: 8px;">👁️ ${sp.luotXem || 0} lượt xem chi tiết</p>
            <button style="width: 100%; background: #007bff; color: white; border: none; padding: 8px; border-radius: 5px; cursor: pointer; font-weight: bold;" onclick="${actionClick}">Xem Chi Tiết / Liên Hệ</button>
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
            ? `tangLuotXemSanPham('${key}'); window.open('${sp.link}', '_blank')`
            : `tangLuotXemSanPham('${key}'); alert('Người bán chưa đính kèm link chi tiết, hãy liên hệ trực tiếp nội bộ trường nhé!')`;

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
let currentSkill = "Listening";
let currentPart = "Part 1";
let currentVstepIndex = 0;
let vstepUserAnswers = {};
let isSubmitted = false;

function initVstepSystem() {
  // Đừng gọi switchVstepSkill("Listening") ở đây nữa!
  // Xóa hoặc comment dòng đó đi:
  // switchVstepSkill("Listening");

  // Chỉ nên hiện danh sách các kỹ năng thôi, không chọn trước kỹ năng nào cả
  console.log("Hệ thống VSTEP đã sẵn sàng, chờ người dùng chọn kỹ năng...");
}

function switchVstepSkill(skillName) {
  currentSkill = skillName;
  isSubmitted = false;
  vstepUserAnswers = {};

  // Vẫn ẩn khung bài tập và hiện banner khi mới chọn kỹ năng
  document.getElementById("vstep-normal-layout").style.display = "none";
  let readingLayout = document.getElementById("reading-layout-container");
  if (readingLayout) readingLayout.style.display = "none";

  let banner = document.getElementById("vstep-welcome-banner");
  if (banner) banner.style.display = "block";

  // Đổi style active cho nút Kỹ năng được bấm
  document
    .querySelectorAll(".vstep-skill-btn")
    .forEach((btn) => btn.classList.remove("active-skill"));
  let activeBtn = document.getElementById(`btn-skill-${skillName}`);
  if (activeBtn) activeBtn.classList.add("active-skill");

  // Load danh sách các Part ra thanh ngang cho người dùng chọn
  let partsObj = vstepDatabase[skillName] || {};
  let parts = Object.keys(partsObj);
  let partContainer = document.getElementById("vstep-part-container");

  if (partContainer) {
    partContainer.innerHTML = "";
    parts.forEach((partName) => {
      let btn = document.createElement("button");
      btn.className = "vstep-part-btn"; // Không auto active Part 1 nữa
      btn.innerText = partName;
      btn.onclick = () => switchVstepPart(partName, btn);
      partContainer.appendChild(btn);
    });
    // ❌ XÓA SẠCH LỆNH TỰ ĐỘNG GỌI switchVstepPart(parts[0]) Ở ĐÂY!
  }
}
function switchVstepPart(partName, btnElement) {
  currentPart = partName;

  // 🔥 Ẩn banner khi người dùng chọn Part
  document.getElementById("vstep-welcome-banner").style.display = "none";

  // Hiển thị khung bài tập
  if (currentSkill === "Reading") {
    document.getElementById("reading-layout-container").style.display = "block";
    switchReadingMode("reading");
  } else {
    document.getElementById("vstep-normal-layout").style.display = "block";

    // Xử lý hiện khung Audio/Media cho Listening/Speaking
    let mediaBox = document.getElementById("vstep-top-media-box");
    if (mediaBox) {
      if (currentSkill === "Listening" || currentSkill === "Speaking") {
        mediaBox.style.display = "block";
        // Cập nhật tiêu đề media nếu cần
        document.getElementById("media-title").innerText =
          currentSkill === "Listening"
            ? "🎧 Luyện Nghe (Listening Audio)"
            : "🗣️ Luyện Nói (Speaking Audio)";
      } else {
        mediaBox.style.display = "none";
      }
    }
  }

  // Cập nhật trạng thái nút Part active
  document
    .querySelectorAll(".vstep-part-btn")
    .forEach((b) => b.classList.remove("active-part"));
  if (btnElement) btnElement.classList.add("active-part");

  updatePartAudio();
  updatePartTranscript();
  renderVstepQuestion(0);
}
function updatePartAudio() {
  let audioPlayer = document.getElementById("vstep-audio-source");
  let audioContainer = document.getElementById("vstep-audio-element-box");

  try {
    let partData = vstepDatabase[currentSkill][currentPart];
    if (partData && partData.audioSrc) {
      audioPlayer.src = partData.audioSrc;
      audioPlayer.load();
      if (audioContainer) audioContainer.style.display = "block";
    } else {
      audioPlayer.pause();
      if (audioContainer) audioContainer.style.display = "none"; // Ẩn nếu Part này không có audio
    }
  } catch (e) {
    console.log("Không tìm thấy audio cho phần này");
  }
}

function getActiveQuestions() {
  try {
    return vstepDatabase[currentSkill][currentPart].questions || [];
  } catch (e) {
    return [];
  }
}

// =========================================
// 🔥 HÀM RENDER ĐÃ ĐƯỢC NÂNG CẤP: READING HIỆN TẤT CẢ, CÁC MỤC KHÁC GIỮ NGUYÊN
// =========================================
function renderVstepQuestion(index) {
  currentVstepIndex = index;
  const questions = getActiveQuestions();
  if (questions.length === 0) return;

  // 1. Kiểm tra quyền Admin cho Writing và Speaking
  let isAdmin = false;
  if (typeof currentStudent !== "undefined" && currentStudent) {
    if (
      currentStudent.id === "7277979906" ||
      currentStudent.name === "trung_admin"
    ) {
      isAdmin = true;
    }
  }

  if (currentSkill === "Writing" || currentSkill === "Speaking") {
    let container = document.getElementById("vstep-question-container");
    if (!container) return;
    const qData = questions[index];

    if (isAdmin) {
      container.innerHTML = `
        <div style="margin-bottom: 12px; font-weight: bold; font-size: 16px; color: #0066ff;">🛠️ [GIAO DIỆN ADMIN] - Soạn Template / Đề bài:</div>
        <div style="margin-bottom: 10px; font-weight: 600;">${qData.q}</div>
        <textarea id="vstep-admin-template-area" style="width: 100%; height: 250px; padding: 15px; border: 2px solid #0066ff; border-radius: 10px; font-size: 15px; outline: none; box-sizing: border-box;" placeholder="Nhập nội dung template...">${qData.templateContent || ""}</textarea>
        
        <div style="margin-top: 12px; display: flex; justify-content: space-between; align-items: center;">
            <span style="color: #28a745; font-size: 13px; font-weight: bold;">✔ Quyền Admin: Gõ xong bấm nút bên cạnh để lấy code.</span>
            <button onclick="exportCodeForFile(${index})" style="background: #ffc107; color: #000; border: none; padding: 10px 18px; border-radius: 6px; font-weight: bold; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📥 Lấy đoạn code để dán vào file</button>
        </div>

        <!-- Khung hiển thị code xuất ra để copy -->
        <div id="export-code-box" style="margin-top: 15px; display: none;">
            <label style="font-weight: bold; font-size: 13px; color: #333;">👉 Copy đoạn code này dán đè vào file dữ liệu của ông:</label>
            <textarea id="exported-code-result" readonly style="width: 100%; height: 100px; margin-top: 5px; padding: 10px; background: #272822; color: #f8f8f2; border-radius: 6px; font-family: monospace; font-size: 13px;"></textarea>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div style="margin-bottom: 10px; font-weight: bold; font-size: 16px;">${qData.q}</div>
        <div style="width: 100%; min-height: 220px; max-height: 350px; overflow-y: auto; padding: 15px; border: 2px solid #ced4da; border-radius: 10px; background: #f8f9fa; font-size: 15px; box-sizing: border-box; white-space: pre-wrap; color: #333;"
        >${qData.templateContent || "Phần template này hiện chưa có nội dung."}</div>
        <div style="margin-top: 8px; color: #dc3545; font-size: 13px;">🔒 Tài khoản học viên: Chỉ có quyền xem tài liệu/template.</div>
      `;
    }
    updateVstepPagination();
    updatePartTranscript();
    return;
  }
  // 3. XỬ LÝ RIÊNG CHO READING: HIỆN TOÀN BỘ TẤT CẢ CÁC CÂU HỎI MỘT LƯỢT ĐỂ KÉO MÀN HÌNH
  if (currentSkill === "Reading") {
    let container = document.getElementById("reading-question-container");
    if (!container) return;

    container.innerHTML = ""; // Xóa sạch để vẽ lại toàn bộ dải câu hỏi

    questions.forEach((qData, qIdx) => {
      let optionsHtml = "";
      for (let key in qData.options) {
        let optionStyle = "border: 2px solid #e1e4e8; background: #fff;";
        let letterBg = "background: #f0f2f5; color: #444;";

        if (isSubmitted) {
          if (key === qData.answer) {
            optionStyle = "border: 2px solid #28a745; background: #d4edda;";
            letterBg = "background: #28a745; color: white;";
          } else if (vstepUserAnswers[qIdx] === key && key !== qData.answer) {
            optionStyle = "border: 2px solid #dc3545; background: #f8d7da;";
            letterBg = "background: #dc3545; color: white;";
          }
        } else if (vstepUserAnswers[qIdx] === key) {
          optionStyle = "border: 2px solid #0066ff; background: #f0f6ff;";
          letterBg = "background: #0066ff; color: white;";
        }

        optionsHtml += `
          <div onclick="${isSubmitted ? "" : "selectReadingAllOption(" + qIdx + ",'" + key + "') "}" style="${optionStyle} border-radius: 10px; padding: 12px; display: flex; align-items: center; cursor: pointer; transition: all 0.2s;">
              <div style="width: 28px; height: 28px; border-radius: 50%; ${letterBg} display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 12px; flex-shrink: 0; font-size: 14px;">${key}</div>
              <div style="font-size: 14px; color: #333;">${qData.options[key]}</div>
          </div>
        `;
      }

      let explanationHtml =
        isSubmitted && qData.explanation
          ? `
            <button class="vstep-explain-btn" onclick="toggleVstepExplanation(${qIdx})" style="margin-top: 10px;">💡 Xem giải thích chi tiết</button>
            <div id="vstep-explain-${qIdx}" class="vstep-explanation-box" style="display:none; margin-top:10px; padding:12px; background:#e7f5ff; border-left:4px solid #1c7ed6; border-radius:6px; font-size:14px;">
                <b>Lời giải:</b> ${qData.explanation}
            </div>
          `
          : "";

      let questionCard = document.createElement("div");
      // 🔥 Tăng khoảng cách, padding và làm rộng khung câu hỏi ra
      questionCard.style.cssText =
        "margin-bottom: 30px; padding: 25px; background: #fff; border: 1px solid #dcdcdc; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.04);";

      questionCard.innerHTML = `
        <div style="font-size: 17px; font-weight: bold; margin-bottom: 18px; color: #132c63; line-height: 1.5;">Câu ${qIdx + 1}: ${qData.q}</div>
        
        <!-- 🔥 Chuyển từ 2 cột thành 1 cột (1fr) để các lựa chọn to rõ, rộng rãi hết cỡ -->
        <div style="display: grid; grid-template-columns: 1fr; gap: 14px; margin-bottom: 15px;">${optionsHtml}</div>
        
        ${explanationHtml}
      `;

      container.appendChild(questionCard);
    });

    updatePartTranscript();
    return;
  }

  // 4. Các kỹ năng khác (Listening) giữ nguyên dạng phân trang từng câu
  const qData = questions[index];
  let container = document.getElementById("vstep-question-container");
  if (!container) return;

  let optionsHtml = "";
  for (let key in qData.options) {
    let optionStyle = "border: 2px solid #e1e4e8; background: #fff;";
    let letterBg = "background: #f0f2f5; color: #444;";

    if (isSubmitted) {
      if (key === qData.answer) {
        optionStyle = "border: 2px solid #28a745; background: #d4edda;";
        letterBg = "background: #28a745; color: white;";
      } else if (vstepUserAnswers[index] === key && key !== qData.answer) {
        optionStyle = "border: 2px solid #dc3545; background: #f8d7da;";
        letterBg = "background: #dc3545; color: white;";
      }
    } else if (vstepUserAnswers[index] === key) {
      optionStyle = "border: 2px solid #0066ff; background: #f0f6ff;";
      letterBg = "background: #0066ff; color: white;";
    }

    optionsHtml += `
      <div onclick="${isSubmitted ? "" : "selectVstepOption(" + index + ",'" + key + "')"}" style="${optionStyle} border-radius: 10px; padding: 12px; display: flex; align-items: center; cursor: pointer; transition: all 0.2s;">
          <div style="width: 28px; height: 28px; border-radius: 50%; ${letterBg} display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 12px; flex-shrink: 0; font-size: 14px;">${key}</div>
          <div style="font-size: 14px; color: #333;">${qData.options[key]}</div>
      </div>
    `;
  }

  let explanationHtml =
    isSubmitted && qData.explanation
      ? `
        <button class="vstep-explain-btn" onclick="toggleVstepExplanation(${index})">💡 Xem giải thích chi tiết</button>
        <div id="vstep-explain-${index}" class="vstep-explanation-box" style="display:none; margin-top:10px; padding:12px; background:#e7f5ff; border-left:4px solid #1c7ed6; border-radius:6px; font-size:14px;">
            <b>Lời giải:</b> ${qData.explanation}
        </div>
      `
      : "";

  container.innerHTML = `
    <div style="font-size: 16px; font-weight: 600; margin-bottom: 15px;">${qData.q}</div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">${optionsHtml}</div>
    ${explanationHtml}
  `;

  updateVstepPagination();
  updatePartTranscript();
}

// Hàm chọn đáp án riêng cho chế độ Reading kéo dài
function selectReadingAllOption(qIndex, optionKey) {
  if (isSubmitted) return;
  vstepUserAnswers[qIndex] = optionKey;
  renderVstepQuestion(0); // Vẽ lại toàn bộ danh sách Reading để cập nhật màu đã chọn
}
function selectVstepOption(qIndex, optionKey) {
  if (isSubmitted) return;
  vstepUserAnswers[qIndex] = optionKey;
  renderVstepQuestion(qIndex);
}

function updateVstepPagination() {
  const questions = getActiveQuestions();
  const pagination = document.getElementById("vstep-pagination");
  let html = "";
  for (let i = 0; i < questions.length; i++) {
    let isActive =
      i === currentVstepIndex
        ? "border: 2px solid #000;"
        : "border: 1px solid #ddd;";
    let bgStyle = "background: #fff; color: #555;";

    if (isSubmitted) {
      if (vstepUserAnswers[i] === questions[i].answer) {
        bgStyle = "background: #28a745; color: white;";
      } else {
        bgStyle = "background: #dc3545; color: white;";
      }
    } else if (vstepUserAnswers[i]) {
      bgStyle = "background: #0066ff; color: white;";
    }

    html += `<button style="width: 35px; height: 35px; border-radius: 50%; ${bgStyle} ${isActive} cursor: pointer; font-weight: 600;" onclick="renderVstepQuestion(${i})">${i + 1}</button>`;
  }
  pagination.innerHTML = html;
}

function submitVstepQuiz() {
  const questions = getActiveQuestions();
  if (questions.length === 0) return;

  let score = 0;
  questions.forEach((q, idx) => {
    if (vstepUserAnswers[idx] === q.answer) {
      score++;
    }
  });

  isSubmitted = true;
  renderVstepQuestion(currentVstepIndex);
  alert(
    `Đã nộp bài phần ${currentSkill} - ${currentPart}!\nSố câu đúng: ${score}/${questions.length}`,
  );
}
function updatePartAudio() {
  let audioPlayer = document.getElementById("vstep-audio-source");
  let audioContainer = document.getElementById("vstep-top-media-box");

  try {
    let partData = vstepDatabase[currentSkill][currentPart];
    if (partData && partData.audioSrc && partData.audioSrc.trim() !== "") {
      audioPlayer.src = partData.audioSrc;
      audioPlayer.load();
      audioContainer.style.display = "block"; // Hiển thị khung audio khi có file
    } else {
      audioPlayer.pause();
      audioPlayer.src = "";
      // Nếu là Listening hoặc Speaking mà chưa có file thì vẫn hiện khung thông báo hoặc ẩn tùy ý
      if (currentSkill === "Listening" || currentSkill === "Speaking") {
        audioContainer.style.display = "block";
      } else {
        audioContainer.style.display = "none";
      }
    }
  } catch (e) {
    console.log("Lỗi tải audio cho phần này:", e);
  }
}
function switchVstepSkill(skillName) {
  currentSkill = skillName;
  isSubmitted = false;
  vstepUserAnswers = {};

  // Đổi style active cho nút Kỹ năng
  document
    .querySelectorAll(".vstep-skill-btn")
    .forEach((btn) => btn.classList.remove("active-skill"));
  let activeBtn = document.getElementById(`btn-skill-${skillName}`);
  if (activeBtn) activeBtn.classList.add("active-skill");

  // 🔥 PHÂN LUỒNG GIAO DIỆN QUAN TRỌNG
  let normalLayout = document.getElementById("vstep-normal-layout");
  let readingLayout = document.getElementById("reading-layout-container");

  if (skillName === "Reading") {
    if (normalLayout) normalLayout.style.display = "none";
    if (readingLayout) {
      readingLayout.style.display = "block"; // Ép khung 2 cột hiện ra
    }
    switchReadingMode("reading"); // Nạp nội dung bài đọc vào cột trái
  } else {
    if (normalLayout) normalLayout.style.display = "block";
    if (readingLayout) readingLayout.style.display = "none";

    // Xử lý ẩn hiện audio cho Listening/Speaking
    let mediaBox = document.getElementById("vstep-top-media-box");
    if (mediaBox) {
      if (skillName === "Listening" || skillName === "Speaking") {
        mediaBox.style.display = "block";
      } else {
        mediaBox.style.display = "none";
      }
    }
  }

  // Load danh sách các Part (Giữ nguyên logic cũ của anh)
  let partsObj = vstepDatabase[skillName] || {};
  let parts = Object.keys(partsObj);
  let partContainer = document.getElementById("vstep-part-container");
  if (partContainer) {
    partContainer.innerHTML = "";
    parts.forEach((partName, idx) => {
      let btn = document.createElement("button");
      btn.className = `vstep-part-btn ${idx === 0 ? "active-part" : ""}`;
      btn.innerText = partName;
      btn.onclick = () => switchVstepPart(partName, btn);
      partContainer.appendChild(btn);
    });
    if (parts.length > 0) {
      switchVstepPart(parts[0]);
    }
  }
}
function updatePartAudio() {
  let audioPlayer = document.getElementById("vstep-audio-source");
  let container = document.getElementById("vstep-top-media-box");

  if (!audioPlayer) return;

  // Chỉ hiện khung audio khi ở phần Listening
  if (currentSkill !== "Listening") {
    if (container) container.style.display = "none";
    audioPlayer.pause();
    return;
  }

  if (container) container.style.display = "block";

  try {
    let partData = vstepDatabase[currentSkill][currentPart];
    if (partData && partData.audioSrc) {
      // 🔥 CÁCH ÉP TRÌNH DUYỆT NHẬN SOURCE TRỰC TIẾP
      audioPlayer.pause();
      audioPlayer.innerHTML = `<source src="${partData.audioSrc}" type="audio/mpeg">`;
      audioPlayer.load(); // Bắt buộc trình duyệt nạp lại từ đầu
      console.log("Đã ép load thành công audio:", partData.audioSrc);
    }
  } catch (e) {
    console.log("Lỗi load audio:", e);
  }
}
function toggleWordDrawer() {
  let drawer = document.getElementById("vstep-word-drawer");
  let overlay = document.getElementById("vstep-drawer-overlay");

  if (drawer && overlay) {
    drawer.classList.toggle("open");
    overlay.classList.toggle("open");
    // Nạp lại dữ liệu cho chắc ăn khi vừa mở ngăn kéo ra
    if (drawer.classList.contains("open")) {
      updatePartTranscript();
    }
  }
}

// Hàm tự động cập nhật nội dung vào ngăn kéo theo Part hiện tại
function updatePartTranscript() {
  let drawerContentBox = document.getElementById("drawer-content-box");
  if (!drawerContentBox) return;

  let partData = vstepDatabase[currentSkill]
    ? vstepDatabase[currentSkill][currentPart]
    : null;

  if (partData && (partData.transcript || partData.translation)) {
    drawerContentBox.innerHTML = `
            <div style="margin-bottom: 20px;">
                <h4 style="color: #0066ff; margin-top: 0; border-bottom: 2px solid #0066ff; padding-bottom: 5px;">🇬🇧 Transcript (Tiếng Anh)</h4>
                <div style="background: #f8f9fa; padding: 12px; border-radius: 8px; margin-top: 8px; border: 1px solid #e9ecef;">
                    ${partData.transcript || "Chưa có nội dung."}
                </div>
            </div>
            <div>
                <h4 style="color: #28a745; margin-top: 0; border-bottom: 2px solid #28a745; padding-bottom: 5px;">🇻🇳 Bản Dịch (Tiếng Việt)</h4>
                <div style="background: #f8f9fa; padding: 12px; border-radius: 8px; margin-top: 8px; border: 1px solid #e9ecef;">
                    ${partData.translation || "Chưa có bản dịch."}
                </div>
            </div>
        `;
  } else {
    drawerContentBox.innerHTML = `<p style="color: #777; text-align: center; margin-top: 20px;">Phần này không có tài liệu đi kèm.</p>`;
  }
}
// Hàm vẽ thanh gạt và nội dung lấy thẳng từ vstepDatabase
function updatePartTranscript() {
  let drawerContentBox = document.getElementById("drawer-content-box");
  if (!drawerContentBox) return;

  let partData =
    vstepDatabase[currentSkill] && vstepDatabase[currentSkill][currentPart]
      ? vstepDatabase[currentSkill][currentPart]
      : null;

  if (partData && (partData.transcript || partData.translation)) {
    drawerContentBox.innerHTML = `
            <!-- Thanh gạt chọn chỉ cần ấn vào chữ -->
            <div class="transcript-toggle-container">
                <button id="btn-sub-trans" class="transcript-toggle-btn active-toggle" onclick="switchTranscriptTab('transcript')">
                    🇬🇧 Transcript
                </button>
                <button id="btn-sub-translat" class="transcript-toggle-btn" onclick="switchTranscriptTab('translation')">
                    🇻🇳 Bản Dịch
                </button>
            </div>

            <!-- Nội dung văn bản -->
            <div id="box-sub-transcript" class="transcript-text-content" style="display: block;">
                ${partData.transcript || "Chưa có nội dung Transcript."}
            </div>
            <div id="box-sub-translation" class="transcript-text-content" style="display: none;">
                ${partData.translation || "Chưa có bản dịch."}
            </div>
        `;
  } else {
    drawerContentBox.innerHTML = `<p style="text-align:center; color:#777; margin-top:20px;">Phần này không có tài liệu/transcript đi kèm.</p>`;
  }
}

// Hàm bấm vào chữ là chuyển ngay lập tức
function switchTranscriptTab(type) {
  let transBox = document.getElementById("box-sub-transcript");
  let translatBox = document.getElementById("box-sub-translation");
  let btnTrans = document.getElementById("btn-sub-trans");
  let btnTranslat = document.getElementById("btn-sub-translat");

  if (type === "transcript") {
    transBox.style.display = "block";
    translatBox.style.display = "none";
    btnTrans.classList.add("active-toggle");
    btnTranslat.classList.remove("active-toggle");
  } else {
    transBox.style.display = "none";
    translatBox.style.display = "block";
    btnTranslat.classList.add("active-toggle");
    btnTrans.classList.remove("active-toggle");
  }
}
// Biến lưu trạng thái đang xem Bài đọc hay Dịch
let currentReadingView = "reading";

function switchReadingMode(mode) {
  currentReadingView = mode;
  let pane = document.getElementById("reading-pane-content");
  let btnRead = document.getElementById("btn-mode-reading");
  let btnTrans = document.getElementById("btn-mode-translation");

  // Lấy dữ liệu bài đọc của Part hiện tại từ vstepDatabase
  let partData =
    vstepDatabase["Reading"] && vstepDatabase["Reading"][currentPart]
      ? vstepDatabase["Reading"][currentPart]
      : null;

  if (!pane) return;

  if (!partData) {
    pane.innerHTML = "Chưa có nội dung bài đọc cho phần này.";
    return;
  }

  if (mode === "reading") {
    pane.innerHTML =
      partData.readingText || "Chưa có nội dung bài đọc tiếng Anh.";
    if (btnRead) {
      btnRead.style.background = "#0066ff";
      btnRead.style.color = "white";
    }
    if (btnTrans) {
      btnTrans.style.background = "#e9ecef";
      btnTrans.style.color = "#333";
    }
  } else {
    pane.innerHTML = partData.translationText || "Chưa có bản dịch tiếng Việt.";
    if (btnTrans) {
      btnTrans.style.background = "#0066ff";
      btnTrans.style.color = "white";
    }
    if (btnRead) {
      btnRead.style.background = "#e9ecef";
      btnRead.style.color = "#333";
    }
  }
}

// Cập nhật lại hàm switchVstepSkill để kiểm tra nếu là Reading thì bật khung 2 cột này lên
// (Đặt đoạn này vào trong hàm switchVstepSkill của bạn)
function updateSkillLayoutDisplay() {
  let readingLayout = document.getElementById("reading-layout-container");
  let normalLayout = document.getElementById("vstep-normal-layout"); // Khung các kỹ năng khác (Listening, Writing...)

  if (currentSkill === "Reading") {
    if (readingLayout) readingLayout.style.display = "block";
    // Ẩn các khung media/audio cũ nếu có
    let audioBox = document.getElementById("vstep-top-media-box");
    if (audioBox) audioBox.style.display = "none";

    // Nạp dữ liệu văn bản Reading vào cột trái
    switchReadingMode(currentReadingView);
  } else {
    if (readingLayout) readingLayout.style.display = "none";
  }
}
function toggleVstepExplanation(index) {
  let explainBox = document.getElementById(`vstep-explain-${index}`);
  if (explainBox) {
    if (
      explainBox.style.display === "none" ||
      explainBox.style.display === ""
    ) {
      explainBox.style.display = "block";
    } else {
      explainBox.style.display = "none";
    }
  }
}
// Giả sử bạn có các nút bấm để chọn Part
function showPart(partId) {
  // Bước 1: Ẩn tất cả các phần tử có class 'part-content'
  const parts = document.querySelectorAll(".part-content");
  parts.forEach((part) => {
    part.style.display = "none";
  });

  // Bước 2: Hiển thị đúng phần tử được chọn
  const selectedPart = document.getElementById(partId);
  if (selectedPart) {
    selectedPart.style.display = "block";
  }
}
// 🔥 BẮT BUỘC PHẢI CÓ DÒNG NÀY ĐỂ KHI F5 NÓ MỚI HIỆN TRANG CHỦ
window.addEventListener("DOMContentLoaded", function () {
  showTab("home");
});
// ================= HÀM XỬ LÝ GIAO DIỆN HIỂN THỊ ĐỀ THI =================
// ================= HÀM XỬ LÝ CLICK MỞ ĐỀ THI =================
function moChiTietDeThi(examId) {
  const exam = vstepListeningExams[examId];
  if (!exam) {
    alert("Không tìm thấy dữ liệu đề thi này!");
    return;
  }

  const danhSachDe = document.getElementById("tieng-anh-dau-vao");
  if (danhSachDe) danhSachDe.style.display = "none";

  let playContainer = document.getElementById("vstep-exam-play-screen");
  if (!playContainer) {
    playContainer = document.createElement("div");
    playContainer.id = "vstep-exam-play-screen";
    playContainer.className = "section";
    document.body.appendChild(playContainer);
  }
  playContainer.style.display = "block";
  playContainer.style.padding = "20px";
  playContainer.style.background = "#fff";
  playContainer.style.maxWidth = "900px";
  playContainer.style.margin = "20px auto";
  playContainer.style.borderRadius = "8px";

  let htmlParts = "";

  // Duyệt qua từng Part để tạo khung riêng biệt (Audio riêng + Câu hỏi riêng + Nút Transcript)
  exam.parts.forEach((part) => {
    let htmlQuestions = "";
    part.questions.forEach((q) => {
      htmlQuestions += `
                <div style="background: #fff; border: 1px solid #dcdcdc; border-radius: 6px; padding: 15px; margin-bottom: 15px;">
                    <div style="font-weight: bold; margin-bottom: 8px; color: #333;">Question ${q.id} <span style="float: right; color: #666; font-size: 13px;">0 / 1 pts</span></div>
                    <div style="margin-bottom: 12px;">${q.questionText}</div>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <label style="cursor: pointer;"><input type="radio" name="q_${examId}_${q.id}" value="A"> A. ${q.options.A}</label>
                        <label style="cursor: pointer;"><input type="radio" name="q_${examId}_${q.id}" value="B"> B. ${q.options.B}</label>
                        <label style="cursor: pointer;"><input type="radio" name="q_${examId}_${q.id}" value="C"> C. ${q.options.C}</label>
                    </div>
                </div>
            `;
    });

    htmlParts += `
            <div style="background: #f8f9fa; border: 1px solid #dcdcdc; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
                <h3 style="color: #132c63; margin-top: 0;">Part ${part.partNumber}</h3>
                <p style="line-height: 1.6;"><strong>Directions:</strong> ${part.directions}</p>
                
                <!-- 📄 Nút xem Transcript giống VSTEP -->
                <button onclick="toggleTranscript('trans_${examId}_${part.partNumber}')" style="background: #17a2b8; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 13px; cursor: pointer; margin-bottom: 10px;">
                    📄 Xem Transcript Part ${part.partNumber}
                </button>
                <div id="trans_${examId}_${part.partNumber}" style="display: none; background: #fff3cd; border: 1px solid #ffeeba; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 14px; color: #856404; line-height: 1.5;">
                    <strong>Transcript:</strong><br>${part.transcript || "Đang cập nhật transcript..."}
                </div>

                <!-- Thanh Audio riêng cho từng Part -->
                <div style="background: #fff; border: 1px solid #dee2e6; padding: 15px; width: 280px; text-align: center; border-radius: 6px; margin: 15px 0;">
                    <div style="font-size: 30px; margin-bottom: 5px;">🎵</div>
                    <audio controls style="width: 100%;">
                        <source src="${part.audioSrc}" type="audio/mpeg">
                        Trình duyệt của bạn không hỗ trợ thẻ audio.
                    </audio>
                </div>

                <div style="margin-top: 15px;">
                    ${htmlQuestions}
                </div>
            </div>
        `;
  });

  playContainer.innerHTML = `
        <button onclick="quayLaiDanhSachDe()" style="background: #6c757d; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; margin-bottom: 20px;">← Quay lại danh sách đề</button>
        
        <div style="background: #ffffff; border: 1px solid #dcdcdc; border-radius: 6px; padding: 20px; margin-bottom: 25px;">
            <h2 style="margin-top: 0; color: #132c63; text-align: center;">${exam.title}</h2>
            <p style="text-align: center; color: #555; font-size: 14px;">Số lần làm bài: Không giới hạn - Ghi nhận điểm cao nhất.</p>
            <div style="display: flex; justify-content: space-around; background: #fdfdfd; padding: 10px; border: 1px solid #eee; border-radius: 4px; margin: 15px 0; font-size: 14px;">
                <span><strong>Points:</strong> ${exam.points}</span>
                <span><strong>Time Limit:</strong> ${exam.timeMinutes} Minutes</span>
            </div>
        </div>

        <div>${htmlParts}</div>

        <div style="text-align: center; margin-top: 30px;">
            <button onclick="nopBaiVaXemKetQua('${examId}')" style="background: #28a745; color: white; border: none; padding: 12px 30px; font-size: 16px; font-weight: bold; border-radius: 6px; cursor: pointer;">
                🚀 Nộp Bài & Xem Kết Quả
            </button>
        </div>
    `;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function quayLaiDanhSachDe() {
  const playContainer = document.getElementById("vstep-exam-play-screen");
  if (playContainer) playContainer.style.display = "none";

  const danhSachDe = document.getElementById("tieng-anh-dau-vao");
  if (danhSachDe) danhSachDe.style.display = "block";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 📄 Hàm ẩn/hiện Transcript
function toggleTranscript(id) {
  const box = document.getElementById(id);
  if (box) {
    box.style.display = box.style.display === "none" ? "block" : "none";
  }
}

function nopBaiVaXemKetQua(examId) {
  const exam = vstepListeningExams[examId];
  if (!exam) return;

  let totalQuestions = 0;
  let correctCount = 0;
  let resultsHtml = "";

  // Duyệt qua từng part và từng câu hỏi để chấm điểm kèm lời giải chi tiết
  exam.parts.forEach((part) => {
    part.questions.forEach((q) => {
      totalQuestions++;
      const selectedInput = document.querySelector(
        `input[name="q_${examId}_${q.id}"]:checked`,
      );
      const userAnswer = selectedInput ? selectedInput.value : null;
      const isCorrect = userAnswer === q.correct;

      if (isCorrect) {
        correctCount++;
      }

      let optionsDisplay = "";
      for (let key in q.options) {
        let color = "#333";
        let fontWeight = "normal";
        let bgStyle = "transparent";

        if (key === q.correct) {
          color = "#28a745"; // Đáp án đúng màu xanh
          fontWeight = "bold";
          bgStyle = "#e8f5e9";
        } else if (key === userAnswer && !isCorrect) {
          color = "#dc3545"; // Người dùng chọn sai màu đỏ
          fontWeight = "bold";
          bgStyle = "#ffebee";
        }

        optionsDisplay += `<div style="padding: 4px 8px; background: ${bgStyle}; color: ${color}; font-weight: ${fontWeight}; border-radius: 4px;">${key}. ${q.options[key]} ${key === q.correct ? " (Đáp án đúng)" : ""} ${key === userAnswer && !isCorrect ? " (Bạn chọn sai)" : ""}</div>`;
      }

      resultsHtml += `
                <div style="background: #fff; border: 1px solid ${isCorrect ? "#28a745" : "#dc3545"}; border-radius: 6px; padding: 15px; margin-bottom: 15px;">
                    <div style="font-weight: bold; margin-bottom: 8px; color: ${isCorrect ? "#28a745" : "#dc3545"};">
                        Question ${q.id} - ${isCorrect ? "✅ Đúng (+1 điểm)" : "❌ Sai"}
                    </div>
                    <div style="margin-bottom: 10px; font-weight: 500;">${q.questionText}</div>
                    <div style="display: flex; flex-direction: column; gap: 5px; margin-bottom: 12px;">
                        ${optionsDisplay}
                    </div>
                    <!-- 💡 BỔ SUNG LỜI GIẢI CHI TIẾT -->
                    <div style="background: #f1f3f5; border-left: 4px solid #17a2b8; padding: 10px; font-size: 14px; color: #333; border-radius: 0 4px 4px 0; line-height: 1.5;">
                        <strong>💡 Lời giải chi tiết:</strong><br>${q.explanation || "Đang cập nhật lời giải..."}
                    </div>
                </div>
            `;
    });
  });

  const finalScore = ((correctCount / totalQuestions) * exam.points).toFixed(2);

  let playContainer = document.getElementById("vstep-exam-play-screen");
  playContainer.innerHTML = `
        <button onclick="quayLaiDanhSachDe()" style="background: #6c757d; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; margin-bottom: 20px;">← Quay lại danh sách đề</button>
        
        <div style="background: #e3f2fd; border: 1px solid #90caf9; border-radius: 8px; padding: 25px; text-align: center; margin-bottom: 25px;">
            <h2 style="margin-top: 0; color: #0d47a1;">📊 KẾT QUẢ BÀI LÀM: ${exam.title}</h2>
            <div style="font-size: 28px; font-weight: bold; color: #1565c0; margin: 15px 0;">
                ${finalScore} / ${exam.points} Điểm
            </div>
            <p style="font-size: 16px; color: #333; margin: 0;">
                Số câu đúng: <strong>${correctCount} / ${totalQuestions}</strong> câu.
            </p>
        </div>

        <h3 style="color: #132c63; margin-bottom: 15px;">🔍 Chi tiết đáp án và Lời giải:</h3>
        <div>${resultsHtml}</div>

        <div style="text-align: center; margin-top: 30px;">
            <button onclick="moChiTietDeThi('${examId}')" style="background: #007bff; color: white; border: none; padding: 12px 30px; font-size: 16px; font-weight: bold; border-radius: 6px; cursor: pointer;">
                🔄 Làm Lại Đề Này
            </button>
        </div>
    `;

  window.scrollTo({ top: 0, behavior: "smooth" });
}
function moChiTietDeDoc(examId) {
  const exam = vstepReadingExams[examId];
  if (!exam) {
    alert("Không tìm thấy dữ liệu đề đọc này!");
    return;
  }

  const danhSachDe = document.getElementById("tieng-anh-dau-vao");
  if (danhSachDe) danhSachDe.style.display = "none";

  let playContainer = document.getElementById("vstep-reading-play-screen");
  if (!playContainer) {
    playContainer = document.createElement("div");
    playContainer.id = "vstep-reading-play-screen";
    playContainer.className = "section";
    document.body.appendChild(playContainer);
  }
  playContainer.style.display = "block";
  playContainer.style.padding = "20px";
  playContainer.style.background = "#fff";
  playContainer.style.maxWidth = "900px";
  playContainer.style.margin = "20px auto";
  playContainer.style.borderRadius = "8px";

  let htmlParts = "";

  // Duyệt qua từng Part, mỗi Part gồm: Hướng dẫn -> Ảnh đề -> Câu hỏi riêng của Part đó
  exam.parts.forEach((part) => {
    let htmlQuestions = "";
    part.questions.forEach((q) => {
      htmlQuestions += `
                <div style="background: #fff; border: 1px solid #dcdcdc; border-radius: 6px; padding: 15px; margin-bottom: 15px;">
                    <div style="font-weight: bold; margin-bottom: 8px; color: #333;">Question ${q.id} <span style="float: right; color: #666; font-size: 13px;">1 pt</span></div>
                    <div style="margin-bottom: 12px; font-weight: 500;">${q.questionText}</div>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <label style="cursor: pointer;"><input type="radio" name="doc_${examId}_${q.id}" value="A"> A. ${q.options.A}</label>
                        <label style="cursor: pointer;"><input type="radio" name="doc_${examId}_${q.id}" value="B"> B. ${q.options.B}</label>
                        <label style="cursor: pointer;"><input type="radio" name="doc_${examId}_${q.id}" value="C"> C. ${q.options.C}</label>
                    </div>
                </div>
            `;
    });

    let imageDisplay = "";
    if (part.noticesData) {
      imageDisplay = renderNoticesLayout(part.noticesData);
    } else if (part.adEmailData) {
      imageDisplay = renderAdEmailLayout(part.adEmailData);
    } else if (part.twoEmailsData) {
      imageDisplay = renderTwoEmailsLayout(part.twoEmailsData);
    } else if (part.passageText) {
      let safeText = escapeHtml(part.passageText).replace(
        /&lt;br&gt;/g,
        "<br>",
      );
      imageDisplay = `
<div style="background: #fff; padding: 25px; border-radius: 8px; font-size: 16px; line-height: 1.8; color: #222; text-align: left;">
    ${safeText}
</div>
`;
    } else if (part.imageSrc) {
      imageDisplay = `<div style="text-align: center; margin-bottom: 15px;"><img src="${part.imageSrc}" alt="Đề đọc Part ${part.partNumber}" style="max-width: 100%; height: auto;"...`;
    }
    htmlParts += `
            <div style="background: #f8f9fa; border: 1px solid #dcdcdc; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
                <h3 style="color: #132c63; margin-top: 0;">Part ${part.partNumber}</h3>
                <div style="line-height: 1.6; margin-bottom: 15px; font-size: 15px; font-weight: bold;">${part.directions}</div>
                
                <!-- Ảnh đề đọc của Part này -->
                <div style="background: #ffffff; border: 1px solid #ced4da; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
                    ${imageDisplay}
                </div>

                <!-- Danh sách câu hỏi riêng của Part này nằm ngay bên dưới -->
                <div style="margin-top: 20px;">
                    <h4 style="color: #333; margin-bottom: 15px;">📝 Câu hỏi Part ${part.partNumber}:</h4>
                    ${htmlQuestions}
                </div>
            </div>
        `;
  });

  playContainer.innerHTML = `
        <button onclick="quayLaiDanhSachDeDoc()" style="background: #6c757d; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; margin-bottom: 20px;">← Quay lại danh sách đề</button>
        
        <div style="background: #ffffff; border: 1px solid #dcdcdc; border-radius: 6px; padding: 20px; margin-bottom: 25px;">
            <h2 style="margin-top: 0; color: #132c63; text-align: center;">${exam.title}</h2>
            <p style="text-align: center; color: #555; font-size: 14px;">Số lần làm bài: Không giới hạn - Ghi nhận điểm cao nhất.</p>
            <div style="display: flex; justify-content: space-around; background: #fdfdfd; padding: 10px; border: 1px solid #eee; border-radius: 4px; margin: 15px 0; font-size: 14px;">
                <span><strong>Points:</strong> ${exam.points}</span>
                <span><strong>Time Limit:</strong> ${exam.timeMinutes} Minutes</span>
            </div>
        </div>

        <div>${htmlParts}</div>

        <div style="text-align: center; margin-top: 30px;">
            <button onclick="nopBaiDocVaXemKetQua('${examId}')" style="background: #28a745; color: white; border: none; padding: 12px 30px; font-size: 16px; font-weight: bold; border-radius: 6px; cursor: pointer;">
                🚀 Nộp Bài Đọc & Xem Kết Quả
            </button>
        </div>
    `;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function quayLaiDanhSachDeDoc() {
  const playContainer = document.getElementById("vstep-reading-play-screen");
  if (playContainer) playContainer.style.display = "none";

  const danhSachDe = document.getElementById("tieng-anh-dau-vao");
  if (danhSachDe) danhSachDe.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function nopBaiDocVaXemKetQua(examId) {
  const exam = vstepReadingExams[examId];
  if (!exam) return;

  let totalQuestions = 0;
  let correctCount = 0;
  let resultsHtml = "";

  exam.parts.forEach((part) => {
    part.questions.forEach((q) => {
      totalQuestions++;
      const selectedInput = document.querySelector(
        `input[name="doc_${examId}_${q.id}"]:checked`,
      );
      const userAnswer = selectedInput ? selectedInput.value : null;
      const isCorrect = userAnswer === q.correct;

      if (isCorrect) correctCount++;

      let optionsDisplay = "";
      for (let key in q.options) {
        let color = "#333";
        let fontWeight = "normal";
        let bgStyle = "transparent";

        if (key === q.correct) {
          color = "#28a745";
          fontWeight = "bold";
          bgStyle = "#e8f5e9";
        } else if (key === userAnswer && !isCorrect) {
          color = "#dc3545";
          fontWeight = "bold";
          bgStyle = "#ffebee";
        }

        optionsDisplay += `<div style="padding: 4px 8px; background: ${bgStyle}; color: ${color}; font-weight: ${fontWeight}; border-radius: 4px;">${key}. ${q.options[key]} ${key === q.correct ? " (Đáp án đúng)" : ""} ${key === userAnswer && !isCorrect ? " (Bạn chọn sai)" : ""}</div>`;
      }

      resultsHtml += `
                <div style="background: #fff; border: 1px solid ${isCorrect ? "#28a745" : "#dc3545"}; border-radius: 6px; padding: 15px; margin-bottom: 15px;">
                    <div style="font-weight: bold; margin-bottom: 8px; color: ${isCorrect ? "#28a745" : "#dc3545"};">
                        Question ${q.id} - ${isCorrect ? "✅ Đúng (+1 điểm)" : "❌ Sai"}
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 5px; margin-bottom: 12px;">
                        ${optionsDisplay}
                    </div>
                    <div style="background: #f1f3f5; border-left: 4px solid #17a2b8; padding: 10px; font-size: 14px; color: #333; border-radius: 0 4px 4px 0; line-height: 1.5;">
                        <strong>💡 Lời giải chi tiết:</strong><br>${q.explanation}
                    </div>
                </div>
            `;
    });
  });

  const finalScore = ((correctCount / totalQuestions) * exam.points).toFixed(2);

  let playContainer = document.getElementById("vstep-reading-play-screen");
  playContainer.innerHTML = `
        <button onclick="quayLaiDanhSachDeDoc()" style="background: #6c757d; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; margin-bottom: 20px;">← Quay lại danh sách đề</button>
        
        <div style="background: #e3f2fd; border: 1px solid #90caf9; border-radius: 8px; padding: 25px; text-align: center; margin-bottom: 25px;">
            <h2 style="margin-top: 0; color: #0d47a1;">📊 KẾT QUẢ BÀI ĐỌC: ${exam.title}</h2>
            <div style="font-size: 28px; font-weight: bold; color: #1565c0; margin: 15px 0;">
                ${finalScore} / ${exam.points} Điểm
            </div>
            <p style="font-size: 16px; color: #333; margin: 0;">
                Số câu đúng: <strong>${correctCount} / ${totalQuestions}</strong> câu.
            </p>
        </div>

        <h3 style="color: #132c63; margin-bottom: 15px;">🔍 Chi tiết đáp án và Lời giải:</h3>
        <div>${resultsHtml}</div>

        <div style="text-align: center; margin-top: 30px;">
            <button onclick="moChiTietDeDoc('${examId}')" style="background: #007bff; color: white; border: none; padding: 12px 30px; font-size: 16px; font-weight: bold; border-radius: 6px; cursor: pointer;">
                🔄 Làm Lại Bài Đọc Này
            </button>
        </div>
    `;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function dangNhapAdmin() {
  let email = document.getElementById("admin-email").value.trim();
  let password = document.getElementById("admin-password").value.trim();

  if (!email || !password) {
    alert("Vui lòng nhập đầy đủ email và mật khẩu!");
    return;
  }

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      soLanSaiAdmin = 0;
      currentStudent.name = "trung_admin";
      currentStudent.id = "7277979906";
      localStorage.setItem(
        "current_logged_student",
        JSON.stringify(currentStudent),
      );

      // 🆕 Lưu dấu hiệu đã xác thực admin thành công 1 lần
      localStorage.setItem("admin_verified_uid", userCredential.user.uid);

      hienThiGiaoDienTaiKhoan();
      alert("✅ Đăng nhập Admin thành công!");
      dongAdminLoginBox();
      document.getElementById("welcome-screen").style.display = "none";
      checkAdminPermission();
      updateOnlineStatus();
      renderThreads();
    })
    .catch((error) => {
      alert("❌ Sai email hoặc mật khẩu admin!");
      console.error(error.code, error.message);
    });
}

function dongAdminLoginBox() {
  document.getElementById("admin-email").value = "";
  document.getElementById("admin-password").value = "";
  document.getElementById("admin-login-box").style.display = "none";
}

// Mở khung đăng nhập admin bằng tổ hợp phím bí mật Ctrl + Alt + A
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "a") {
    let box = document.getElementById("admin-login-box");
    if (box) box.style.display = "block";
  }
});
// 🛡️ Hàm chống XSS: chuyển ký tự đặc biệt thành dạng an toàn trước khi hiển thị
function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  const div = document.createElement("div");
  div.textContent = String(str);
  return div.innerHTML;
}
// 🧩 Hàm dựng khung Part 2 dạng "Thông báo" (2 cột, có khung viền, giữ đúng bố cục đề gốc)
function renderNoticesLayout(data) {
  let leftHtml = `
    <div style="margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px dashed #ccc;">
      <div style="font-style: italic; font-weight: bold; margin-bottom: 4px;">Example:</div>
      <div style="margin-bottom: 4px;">${escapeHtml(data.example.num)}. ${escapeHtml(data.example.text)}</div>
      <div style="background: #ffe9c7; padding: 4px 8px; font-weight: bold; display: inline-block;">Answer sheet: ${escapeHtml(data.example.answer)}</div>
    </div>
  `;

  data.leftItems.forEach((item) => {
    leftHtml += `<div style="margin-bottom: 10px;"><b>${escapeHtml(item.num)}.</b> ${escapeHtml(item.text)}</div>`;
  });

  let rightHtml = "";
  data.rightNotices.forEach((notice) => {
    let linesHtml = notice.lines
      .map((line) => `<div>${escapeHtml(line)}</div>`)
      .join("");
    rightHtml += `
      <div style="margin-bottom: 12px;">
        <div style="font-weight: bold; color: #333; margin-bottom: 2px;">${escapeHtml(notice.letter)}</div>
        <div style="border: 1px solid #999; padding: 10px; text-align: center; font-size: 14px; background: #fdfdfd;">
          ${linesHtml}
        </div>
      </div>
    `;
  });

  return `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; background: #fff; padding: 20px; border-radius: 8px;">
      <div style="font-size: 15px; line-height: 1.6;">${leftHtml}</div>
      <div>${rightHtml}</div>
    </div>
  `;
}
// 🧩 Hàm dựng khung Part 3 dạng "Quảng cáo + Email + Ghi chú" giữ đúng bố cục đề gốc
function renderAdEmailLayout(data) {
  let posterLinesHtml = data.poster.lines
    .map((line) => `<div style="margin-bottom: 6px;">${escapeHtml(line)}</div>`)
    .join("");

  let posterHtml = `
    <div style="border: 1px solid #999; padding: 15px; text-align: center; background: #fdfdfd;">
      <div style="font-weight: bold; font-size: 16px; margin-bottom: 4px;">${escapeHtml(data.poster.logoText)}</div>
      ${data.poster.logoTagline ? `<div style="font-style: italic; font-size: 12px; color: #666; margin-bottom: 10px;">${escapeHtml(data.poster.logoTagline)}</div>` : ""}
      ${posterLinesHtml}
    </div>
  `;

  let fromToHtml = "";
  if (data.email.from || data.email.to) {
    fromToHtml = `
      <div style="margin-bottom: 10px;">
        ${data.email.from ? `<div><b>From:</b> ${escapeHtml(data.email.from)}</div>` : ""}
        ${data.email.to ? `<div><b>To:</b> ${escapeHtml(data.email.to)}</div>` : ""}
      </div>
    `;
  }

  let emailParaHtml = (data.email.paragraphs || [])
    .map((p) => `<div style="margin-bottom: 10px;">${escapeHtml(p)}</div>`)
    .join("");

  let emailHtml = `
    <div style="border: 1px solid #999; padding: 15px; background: #fdfdfd; font-size: 14px; line-height: 1.6;">
      ${fromToHtml}
      ${data.email.greeting ? `<div style="margin-bottom: 10px;">${escapeHtml(data.email.greeting)}</div>` : ""}
      ${emailParaHtml}
    </div>
  `;

  let notesItemsHtml = data.notes.items
    .map(
      (item) =>
        `<div style="margin-bottom: 6px;"><b>${escapeHtml(item.num)}.</b> ${escapeHtml(item.label)} (${escapeHtml(item.num)}) .....</div>`,
    )
    .join("");

  let notesHtml = `
    <div style="border: 1px solid #999; padding: 20px; background: #fdfdfd; margin-top: 20px;">
      <div style="font-weight: bold; margin-bottom: 10px;">${escapeHtml(data.notes.title)}</div>
      ${data.notes.date ? `<div style="color: #0058f0; margin-bottom: 6px;"><b>Date:</b> ${escapeHtml(data.notes.date)}</div>` : ""}
      ${data.notes.subtitle ? `<div style="color: #333; font-weight: 600; margin-bottom: 4px;">${escapeHtml(data.notes.subtitle)}</div>` : ""}
      ${data.notes.subtitle2 ? `<div style="color: #0058f0; margin-bottom: 10px;">${escapeHtml(data.notes.subtitle2)}</div>` : ""}
      <div style="color: #0058f0; font-size: 14px;">${notesItemsHtml}</div>
    </div>
  `;

  return `
    <div style="background: #fff; padding: 20px; border-radius: 8px;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        ${posterHtml}
        ${emailHtml}
      </div>
      ${notesHtml}
    </div>
  `;
}
// 🧩 Hàm dựng khung Part 3 dạng "Hai email song song" (không có poster/notes riêng)
function renderTwoEmailsLayout(data) {
  function renderOneEmail(email) {
    let paraHtml = email.paragraphs
      .map((p) => `<div style="margin-bottom: 10px;">${escapeHtml(p)}</div>`)
      .join("");
    return `
      <div style="border: 1px solid #999; padding: 15px; background: #fdfdfd; font-size: 14px; line-height: 1.6;">
        <div><b>To:</b> ${escapeHtml(email.to)}</div>
        <div style="margin-bottom: 10px;"><b>From:</b> ${escapeHtml(email.from)}</div>
        ${paraHtml}
      </div>
    `;
  }

  return `
    <div style="background: #fff; padding: 20px; border-radius: 8px;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        ${renderOneEmail(data.email1)}
        ${renderOneEmail(data.email2)}
      </div>
    </div>
  `;
}
// 🔧 Kéo admin-login-box ra khỏi videoModal (nó đang bị lồng nhầm bên trong .modal có display:none)
document.addEventListener("DOMContentLoaded", function () {
  let adminBox = document.getElementById("admin-login-box");
  if (adminBox) {
    document.body.appendChild(adminBox); // chuyển thành con trực tiếp của <body>
  }
});
// 📊 Tăng lượt xem chi tiết cho 1 sản phẩm
function tangLuotXemSanPham(productKey) {
  let ref = database.ref("cho_phenikaa/" + productKey + "/luotXem");
  ref.transaction((currentValue) => {
    return (currentValue || 0) + 1;
  });
}
function loadChoPhenikaaStats() {
  let box = document.getElementById("cho-phenikaa-stats-box");
  if (!box) return;

  database.ref("cho_phenikaa").on("value", (snapshot) => {
    let data = snapshot.val();
    if (!data) {
      box.innerHTML = `<p style="color: #777; text-align: center; margin: 0;">Chưa có sản phẩm nào.</p>`;
      return;
    }

    // Chuyển thành mảng và sắp xếp theo lượt xem giảm dần
    let list = Object.keys(data).map((key) => ({
      key: key,
      ten: data[key].ten || "Không tên",
      luotXem: data[key].luotXem || 0,
      nguoiDang: data[key].nguoiDang || "Ẩn danh",
    }));
    list.sort((a, b) => b.luotXem - a.luotXem);

    let html = `<table style="width: 100%; border-collapse: collapse; font-size: 14px;">
      <thead>
        <tr style="background: #e9ecef; text-align: left;">
          <th style="padding: 8px;">Tên sản phẩm</th>
          <th style="padding: 8px;">Người đăng</th>
          <th style="padding: 8px; text-align: center;">Lượt xem</th>
        </tr>
      </thead>
      <tbody>`;

    list.forEach((item) => {
      html += `<tr style="border-bottom: 1px solid #dee2e6;">
        <td style="padding: 8px;">${escapeHtml(item.ten)}</td>
        <td style="padding: 8px; color: #666;">${escapeHtml(item.nguoiDang)}</td>
        <td style="padding: 8px; text-align: center; font-weight: bold; color: #007bff;">${item.luotXem}</td>
      </tr>`;
    });

    html += `</tbody></table>`;
    box.innerHTML = html;
  });
}
// Gọi khởi chạy khi mở tab VSTEP B1 (đảm bảo trong hàm showTab của anh đã gọi initVstepSystem hoặc renderVstepQuestion)
renderVstepQuestion(0);

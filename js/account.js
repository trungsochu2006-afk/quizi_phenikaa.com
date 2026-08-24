let currentStudent = { name: "", id: "" };
// Sự kiện DOMContentLoaded chuẩn hóa
document.addEventListener("DOMContentLoaded", function () {
  let savedStudent = localStorage.getItem("current_logged_student");
  if (savedStudent) {
    currentStudent = JSON.parse(savedStudent);
    let welcomeScreen = document.getElementById("welcome-screen");
    if (welcomeScreen) welcomeScreen.style.display = "none";
  }

  hienThiGiaoDienTaiKhoan();

  let fileInput = document.getElementById("thread-image");
  if (fileInput) {
    fileInput.addEventListener("change", function () {
      let pName = document.getElementById("image-preview-name");
      if (this.files && this.files[0]) {
        pName.innerText = "📎 Đã chọn: " + this.files[0].name;
      } else {
        pName.innerText = "";
      }
    });
  }
  renderThreads();
});
// Chức năng: Xác thực thông tin họ tên và mã số sinh viên, lưu trữ vào localStorage, cập nhật giao diện tài khoản và kích hoạt trạng thái trực tuyến.
function submitStudentInfo() {
  let nameInput = document.getElementById("student-name").value.trim();
  let idInput = document.getElementById("student-id").value.trim();

  if (nameInput === "" || idInput === "") {
    alert(
      "Vui lòng nhập đầy đủ Họ tên và Mã số sinh viên trước khi vào học nhé!",
    );
    return;
  }
  // 🔥 Chặn ngay từ cửa: Cấm đứa nào dùng tên admin nếu không phải MSSV thật của m
  if (nameInput.toLowerCase() === "trung_admin" && idInput !== "7277979906") {
    alert(
      "⚠️ Tên này thuộc về quản trị viên hệ thống, bạn không được phép sử dụng!",
    );
    return;
  }
  // 🔐 Nếu gõ đúng thông tin admin quen thuộc, chuyển sang khung đăng nhập admin thật
  if (idInput === "7277979906" && nameInput.toLowerCase() === "trung_admin") {
    document.getElementById("admin-login-box").style.display = "block";
    return; // dừng lại, không cho vào bằng đường học viên thường
  }

  currentStudent.name = nameInput;
  currentStudent.id = idInput;
  localStorage.setItem(
    "current_logged_student",
    JSON.stringify(currentStudent),
  );

  hienThiGiaoDienTaiKhoan();
  document.getElementById("welcome-screen").style.display = "none";

  updateOnlineStatus();
  renderThreads();

  if (typeof logUserAccessActivity === "function") {
    logUserAccessActivity();
  }
}

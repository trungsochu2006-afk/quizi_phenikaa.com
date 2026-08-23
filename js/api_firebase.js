const firebaseConfig = {
  apiKey: "AIzaSyB-4sdYIrm5CtrloB1BHKhwzidJuuqdssg",
  authDomain: "threads-phenikaa.firebaseapp.com",
  databaseURL:
    "https://threads-phenikaa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "threads-phenikaa",
  storageBucket: "threads-phenikaa.firebasestorage.app",
  messagingSenderId: "974324685359",
  appId: "1:974324685359:web:3b876af550d0b5de5504da",
  measurementId: "G-GEXKM5F77L",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const database = firebase.database();
// 🔐 Đăng nhập ẩn danh ngay khi tải trang để có UID xác thực cho Rules
// 🔐 Đợi Firebase tự khôi phục phiên đăng nhập đã lưu (nếu có) trước khi quyết định có cần đăng nhập ẩn danh hay không
window.firebaseUID = null;
let daKiemTraPhienDauTien = false;

firebase.auth().onAuthStateChanged((user) => {
  if (!daKiemTraPhienDauTien) {
    daKiemTraPhienDauTien = true;
    if (!user) {
      // Chỉ đăng nhập ẩn danh nếu KHÔNG có phiên nào được khôi phục (kể cả admin)
      firebase
        .auth()
        .signInAnonymously()
        .catch((error) => {
          console.error("Lỗi đăng nhập ẩn danh:", error.code, error.message);
        });
    }
  }

  if (user) {
    window.firebaseUID = user.uid;
    console.log(
      "✅ Đã xác thực, UID:",
      user.uid,
      user.isAnonymous ? "(ẩn danh - học viên)" : "(admin thật)",
    );
  } else {
    window.firebaseUID = null;
  }
});

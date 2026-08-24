// 📦 DANH SÁCH SẢN PHẨM CỐ ĐỊNH
const danhSachSanPham = [
  {
    ten: "Đèn ngủ hình ngọn lửa",
    gia: "130.000đ",
    moTa: "Đèn ngủ siêu đẹp nhấn vào sản pâhfm để xem chi tiết tại shopee nhé ạ ",
    anh: "photo/sp1.jpg",
    link: "https://s.shopee.vn/4fvg0YI3pD",
  },
  {
    ten: "In tranh đèn hình kỉ niệm , hình gì cũng in được",
    gia: "180.000đ",
    moTa: "Đèn ngủ siêu đẹp nhấn vào sản pâhfm để xem chi tiết tại shopee nhé ạ",
    anh: "photo/sp9.jpg",
    link: "https://s.shopee.vn/6L3tzZZTcj",
  },
  {
    ten: "Đèn ngủ trang trí ",
    gia: "130.000đ",
    moTa: "Đèn ngủ siêu đẹp nhấn vào sản pâhfm để xem chi tiết tại shopee nhé ạ",
    anh: "photo/sp2.jpg",
    link: "https://s.shopee.vn/2LXlEEf1Hm",
  },
  {
    ten: "In hình kỉ niệm , hình gì cũng in được",
    gia: "180.000đ",
    moTa: "Đèn ngủ siêu đẹp nhấn vào sản pâhfm để xem chi tiết tại shopee nhé ạ",
    anh: "photo/sp3.jpg",
    link: "https://s.shopee.vn/6L3tzZZTcj",
  },
  {
    ten: "Mô Hình In 3D PICACHUUUU ",
    gia: "160.000đ",
    moTa: " Mô hình siêu đẹp nhấn vào sản pâhfm để xem chi tiết tại shopee nhé ạ",
    anh: "photo/sp4.jpg",
    link: "https://s.shopee.vn/4LIpbsU9ou",
  },
  {
    ten: "Mô hình rồng phương tây ",
    gia: "130.000đ",
    moTa: " Mô hình siêu đẹp nhấn vào sản pâhfm để xem chi tiết tại shopee nhé ạ",
    anh: "photo/sp5.jpg",
    link: "https://s.shopee.vn/6AkTnEFoWZ",
  },
  {
    ten: " Đèn ngủ trang trí , in hình theo yêu cầu  ",
    gia: "180.000đ",
    moTa: "Đèn ngủ siêu đẹp nhấn vào sản pâhfm để xem chi tiết tại shopee nhé ạ",
    anh: "photo/SP6.jpg",
    link: "https://s.shopee.vn/19qRslShU",
  },
  {
    ten: "Đèn ngủ hình cây nấm , đủ màu  ",
    gia: "200.000đ",
    moTa: "Đèn ngủ siêu đẹp nhấn vào sản pâhfm để xem chi tiết tại shopee nhé ạ",
    anh: "photo/sp7.jpg",
    link: "https://s.shopee.vn/9V0vlKSon7",
  },
  {
    ten: "Đèn ngủ trang trí dạng xoắn  ",
    gia: "130.000đ",
    moTa: "Đèn ngủ siêu đẹp nhấn vào sản pâhfm để xem chi tiết tại shopee nhé ạ",
    anh: "photo/sp8.jpg",
    link: "https://s.shopee.vn/6fgkO6NIpy",
  },
  {
    ten: " Móc khóa Nút nhấn hình lá cờ , xả stress , nút bàn phím",
    gia: "20.000đ",
    moTa: " lh zalo 0825256206 nhé hihi  ",
    anh: "photo/sp11.jpg",
    link: "https://zalo.me/g/iwtunyc8pzdkpwgbjqun",
  },
  {
    ten: "Móc khóa Nút nhấn hình lá cờ VIỆT NAM ",
    gia: "15.000đ",
    moTa: "lh zalo 0825256206 nhé hihi ",
    anh: "photo/sp10.jpg",
    link: "https://zalo.me/g/iwtunyc8pzdkpwgbjqun",
  },
  {
    ten: "Mô hình rồng cáo sonic , ảnh thật cao 45cm ",
    gia: "700.000đ",
    moTa: " Giao hàng trực tiếp , giá phá thị trường rồi , siêu đẹp ",
    anh: "photo/sp12.jpg",
    link: "https://zalo.me/g/iwtunyc8pzdkpwgbjqun",
  },
  {
    ten: " Mô hình nhân vật GOKU  ",
    gia: "1.500.000đ",
    moTa: " Giao hàng trực tiếp , giá phá thị trường rồi , size siêu bự , siêu chi tiết ",
    anh: "photo/sp13.jpg",
    link: "https://zalo.me/g/iwtunyc8pzdkpwgbjqun",
  },
];

// Hàm vẽ lưới sản phẩm
function renderChoPhenikaaStatic() {
  const grid = document.getElementById("luoiSanPham");
  if (!grid) return;

  if (danhSachSanPham.length === 0) {
    grid.innerHTML =
      "<p style='grid-column: 1/-1; text-align: center; color: #777;'>Chưa có sản phẩm nào được đăng bán.</p>";
    return;
  }

  let html = "";
  danhSachSanPham.forEach((item) => {
    html += `
      <div onclick="window.open('${item.link}', '_blank')" style="background: #fff; border: 1px solid #e1e4e8; border-radius: 8px; overflow: hidden; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; display: flex; flex-direction: column;">
        <img src="${item.anh}" style="width: 100%; height: 180px; object-fit: cover;" />
        <div style="padding: 12px; display: flex; flex-direction: column; flex-grow: 1;">
          <h3 style="font-size: 14px; margin: 0 0 6px 0; color: #333; line-height: 1.4; height: 38px; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">${item.ten}</h3>
          <p style="font-size: 12px; color: #666; margin: 0 0 8px 0; flex-grow: 1;">${item.moTa}</p>
          <div style="color: #ee4d2d; font-weight: bold; font-size: 16px;">${item.gia}</div>
        </div>
      </div>
    `;
  });
  grid.innerHTML = html;
}

// Chạy ngay khi load xong và lắng nghe sự kiện chuyển tab
document.addEventListener("DOMContentLoaded", () => {
  renderChoPhenikaaStatic();
});

// Bổ sung để chắc chắn khi bấm vào tab Chợ Phenikaa là nó vẽ lại ngay lập tức
const originalShowTab = window.showTab;
if (typeof originalShowTab === "function") {
  window.showTab = function (tabName) {
    originalShowTab(tabName);
    if (tabName === "cho-phenikaa-section") {
      renderChoPhenikaaStatic();
    }
  };
}

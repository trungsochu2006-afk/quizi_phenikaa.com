const ktcb = {
  "Chương 1": [
    {
      q: "Câu 1: Tỷ số công suất P/P₀ = 100 tương ứng mức bao nhiêu dB?",
      options: {
        A: "100 dB",
        B: "20 dB",
        C: "40 dB",
        D: "10 dB",
      },
      answer: "B",
    },
    {
      q: "Câu 2: Một cảm biến có đầu ra 0.3 V khi x = 0 và chỉ bắt đầu phân biệt được tín hiệu khi x ≥ 2 đơn vị. Cặp giá trị đúng là:",
      options: {
        A: "Offset = 0.3 V; threshold = 2",
        B: "Offset = 0; threshold = 2",
        C: "Offset = 2; threshold = 0.3 V",
        D: "Offset = 0.3 V; threshold = 0",
      },
      answer: "A",
    },
    {
      q: "Câu 3: Đối với cảm biến có đặc tuyến phi tuyến mạnh, phương pháp nào phù hợp nhất để xây dựng mô hình hiệu chuẩn?",
      options: {
        A: "Không cần hiệu chuẩn",
        B: "Chỉ hiệu chuẩn 1 điểm",
        C: "Hiệu chuẩn nhiều điểm",
        D: "Chỉ điều chỉnh điểm 0",
      },
      answer: "C",
    },
    {
      q: "Câu 4: Khái niệm nào mô tả phần tử chuyển đổi một dạng năng lượng hoặc tín hiệu sang dạng khác?",
      options: {
        A: "Detector",
        B: "Transducer",
        C: "Actuator",
        D: "Display",
      },
      answer: "B",
    },
    {
      q: "Câu 5: Hiệu ứng Seebeck là cơ sở vật lý của cảm biến nào?",
      options: {
        A: "Cảm biến Hall",
        B: "Strain gauge",
        C: "Cặp nhiệt điện",
        D: "LDR",
      },
      answer: "C",
    },
    {
      q: "Câu 6: Với cảm biến bậc một lý tưởng, tại t = τ, đầu ra đạt xấp xỉ bao nhiêu phần trăm giá trị cuối?",
      options: {
        A: "63.2%",
        B: "36.8%",
        C: "90%",
        D: "50%",
      },
      answer: "A",
    },
    {
      q: "Câu 7: Độ phân giải (resolution) là gì?",
      options: {
        A: "Thời gian cảm biến đạt 90%",
        B: "Biến thiên nhỏ nhất của đầu vào tạo ra thay đổi đầu ra có thể phân biệt",
        C: "Sai số trung bình của 10 lần đo",
        D: "Giá trị đầu vào lớn nhất cảm biến chịu được",
      },
      answer: "B",
    },
    {
      q: "Câu 8: Ghép cơ chế điện biến đổi với cảm biến nào là đúng?",
      options: {
        A: "Thermocouple → V",
        B: "LVDT → L/M",
        C: "Strain gauge → R",
        D: "Photodiode → I/V",
      },
      answer: "B",
    },
    {
      q: "Câu 9: Tại cùng một giá trị đầu vào, đầu ra là 2.1 V khi tăng đầu vào và 2.0 V khi giảm đầu vào. Hiện tượng này là:",
      options: {
        A: "Hysteresis",
        B: "Drift",
        C: "Offset",
        D: "Quantization",
      },
      answer: "A",
    },
    {
      q: "Câu 10: Analog sensor có đặc điểm nào?",
      options: {
        A: "Tín hiệu ra liên tục",
        B: "Chỉ có hai mức 0 và 1",
        C: "Luôn giao tiếp I²C",
        D: "Không cần nguồn kích thích",
      },
      answer: "A",
    },
    {
      q: "Câu 11: Cảm biến DS18B20 được nêu trong bài giảng là ví dụ của nhóm nào?",
      options: {
        A: "Cảm biến áp điện",
        B: "Analog sensor",
        C: "Digital sensor",
        D: "Cảm biến điện cảm",
      },
      answer: "C",
    },
    {
      q: "Câu 12: Đầu vào tăng từ 20 lên 50 đơn vị làm đầu ra tăng từ 1.2 V lên 2.7 V. Độ nhạy trung bình là:",
      options: {
        A: "0.05 V/đv",
        B: "20 V/đv",
        C: "0.5 V/đv",
        D: "0.02 V/đv",
      },
      answer: "A",
    },
    {
      q: "Câu 13: Thiết bị nào sau đây là actuator theo ví dụ trong bài giảng?",
      options: {
        A: "Strain gauge",
        B: "Động cơ điện",
        C: "RTD",
        D: "Photodiode",
      },
      answer: "B",
    },
    {
      q: "Câu 14: Một cảm biến được coi là tuyến tính trong một dải nếu điều kiện nào đúng?",
      options: {
        A: "Độ nhạy không đổi trong dải đó",
        B: "Offset bằng 0 tuyệt đối",
        C: "Ngưỡng bằng 0",
        D: "Không có nhiễu",
      },
      answer: "A",
    },
    {
      q: "Câu 15: Đại lượng cần đo trong một phép đo cảm biến được gọi là ______.",
      options: {
        A: "bandwidth",
        B: "measurand",
        C: "actuator",
        D: "offset",
      },
      answer: "B",
    },
    {
      q: "Câu 16: Theo quy ước dùng trong bài giảng, cảm biến tích cực (active sensor) có đặc điểm nào?",
      options: {
        A: "Luôn cần nguồn kích thích ngoài",
        B: "Chỉ thay đổi điện trở",
        C: "Đại lượng cần đo trực tiếp tạo ra tín hiệu điện",
        D: "Chỉ có đầu ra số",
      },
      answer: "C",
    },
    {
      q: "Câu 17: Trong mô hình y = f(P,T,Vₛ,RH,...), nếu P là measurand thì ∂y/∂T biểu diễn:",
      options: {
        A: "Độ phân giải ADC",
        B: "Độ trễ thời gian",
        C: "Độ nhạy chéo theo nhiệt độ",
        D: "Độ nhạy chính theo P",
      },
      answer: "C",
    },
    {
      q: "Câu 18: Theo định nghĩa trong bài giảng, cảm biến (sensor) là gì?",
      options: {
        A: "Phần tử trực tiếp chịu tác động của đại lượng cần đo và tạo ra đáp ứng có quan hệ với đại lượng đó",
        B: "Thiết bị chỉ dùng để khuếch đại tín hiệu điện",
        C: "Thiết bị luôn biến điện năng thành cơ năng",
        D: "Phần tử chỉ dùng để hiển thị kết quả đo",
      },
      answer: "A",
    },
    {
      q: "Câu 19: Trong hiệu ứng Hall, điện áp Hall xuất hiện theo phương nào?",
      options: {
        A: "Song song với cả I và B",
        B: "Chỉ song song với B",
        C: "Không phụ thuộc phương của I và B",
        D: "Vuông góc với cả dòng I và từ trường B",
      },
      answer: "D",
    },
    {
      q: "Câu 20: Tỷ số công suất P/P₀ = 100 tương ứng mức bao nhiêu dB?",
      options: {
        A: "100 dB",
        B: "20 dB",
        C: "10 dB",
        D: "40 dB",
      },
      answer: "B",
    },
    {
      q: "Câu 21: Một cảm biến có đầu ra 0.3 V khi x = 0 và chỉ bắt đầu phân biệt được tín hiệu khi x ≥ 2 đơn vị. Cặp giá trị đúng là:",
      options: {
        A: "Offset = 0.3 V; threshold = 2",
        B: "Offset = 2; threshold = 0.3 V",
        C: "Offset = 0.3 V; threshold = 0",
        D: "Offset = 0; threshold = 2",
      },
      answer: "A",
    },
    {
      q: "Câu 22: Đối với cảm biến có đặc tuyến phi tuyến mạnh, phương pháp nào phù hợp nhất để xây dựng mô hình hiệu chuẩn?",
      options: {
        A: "Hiệu chuẩn nhiều điểm",
        B: "Chỉ hiệu chuẩn 1 điểm",
        C: "Chỉ điều chỉnh điểm 0",
        D: "Không cần hiệu chuẩn",
      },
      answer: "A",
    },
    {
      q: "Câu 23: Khái niệm nào mô tả phần tử chuyển đổi một dạng năng lượng hoặc tín hiệu sang dạng khác?",
      options: {
        A: "Display",
        B: "Detector",
        C: "Transducer",
        D: "Actuator",
      },
      answer: "C",
    },
    {
      q: "Câu 24: Hiệu ứng Seebeck là cơ sở vật lý của cảm biến nào?",
      options: {
        A: "Cảm biến Hall",
        B: "Cặp nhiệt điện",
        C: "LDR",
        D: "Strain gauge",
      },
      answer: "B",
    },
    {
      q: "Câu 25: Với cảm biến bậc một lý tưởng, tại t = τ, đầu ra đạt xấp xỉ bao nhiêu phần trăm giá trị cuối?",
      options: {
        A: "36.8%",
        B: "63.2%",
        C: "50%",
        D: "90%",
      },
      answer: "B",
    },
    {
      q: "Câu 26: Độ phân giải (resolution) là gì?",
      options: {
        A: "Sai số trung bình của 10 lần đo",
        B: "Giá trị đầu vào lớn nhất cảm biến chịu được",
        C: "Biến thiên nhỏ nhất của đầu vào tạo ra thay đổi đầu ra có thể phân biệt",
        D: "Thời gian cảm biến đạt 90%",
      },
      answer: "C",
    },
    {
      q: "Câu 27: Ghép cơ chế điện biến đổi với cảm biến nào là đúng?",
      options: {
        A: "Photodiode → I/V",
        B: "Strain gauge → R",
        C: "Thermocouple → V",
        D: "LVDT → L/M",
      },
      answer: "D",
    },
    {
      q: "Câu 28: Tại cùng một giá trị đầu vào, đầu ra là 2.1 V khi tăng đầu vào và 2.0 V khi giảm đầu vào. Hiện tượng này là:",
      options: {
        A: "Quantization",
        B: "Hysteresis",
        C: "Drift",
        D: "Offset",
      },
      answer: "B",
    },
    {
      q: "Câu 29: Analog sensor có đặc điểm nào?",
      options: {
        A: "Không cần nguồn kích thích",
        B: "Luôn giao tiếp I²C",
        C: "Tín hiệu ra liên tục",
        D: "Chỉ có hai mức 0 và 1",
      },
      answer: "C",
    },
    {
      q: "Câu 30: Cảm biến DS18B20 được nêu trong bài giảng là ví dụ của nhóm nào?",
      options: {
        A: "Analog sensor",
        B: "Digital sensor",
        C: "Cảm biến áp điện",
        D: "Cảm biến điện cảm",
      },
      answer: "B",
    },
    {
      q: "Câu 31: Đầu vào tăng từ 20 lên 50 đơn vị làm đầu ra tăng từ 1.2 V lên 2.7 V. Độ nhạy trung bình là:",
      options: {
        A: "20 V/đv",
        B: "0.05 V/đv",
        C: "0.5 V/đv",
        D: "0.02 V/đv",
      },
      answer: "B",
    },
    {
      q: "Câu 32: Thiết bị nào sau đây là actuator theo ví dụ trong bài giảng?",
      options: {
        A: "RTD",
        B: "Strain gauge",
        C: "Động cơ điện",
        D: "Photodiode",
      },
      answer: "C",
    },
    {
      q: "Câu 33: Một cảm biến được coi là tuyến tính trong một dải nếu điều kiện nào đúng?",
      options: {
        A: "Ngưỡng bằng 0",
        B: "Không có nhiễu",
        C: "Độ nhạy không đổi trong dải đó",
        D: "Offset bằng 0 tuyệt đối",
      },
      answer: "C",
    },
    {
      q: "Câu 34: Đại lượng cần đo trong một phép đo cảm biến được gọi là ______.",
      options: {
        A: "measurand",
        B: "bandwidth",
        C: "offset",
        D: "actuator",
      },
      answer: "A",
    },
    {
      q: "Câu 35: Theo quy ước dùng trong bài giảng, cảm biến tích cực (active sensor) có đặc điểm nào?",
      options: {
        A: "Chỉ thay đổi điện trở",
        B: "Đại lượng cần đo trực tiếp tạo ra tín hiệu điện",
        C: "Chỉ có đầu ra số",
        D: "Luôn cần nguồn kích thích ngoài",
      },
      answer: "B",
    },
    {
      q: "Câu 36: Trong mô hình y = f(P,T,Vₛ,RH,...), nếu P là measurand thì ∂y/∂T biểu diễn:",
      options: {
        A: "Độ phân giải ADC",
        B: "Độ nhạy chéo theo nhiệt độ",
        C: "Độ trễ thời gian",
        D: "Độ nhạy chính theo P",
      },
      answer: "B",
    },
    {
      q: "Câu 37: Theo định nghĩa trong bài giảng, cảm biến (sensor) là gì?",
      options: {
        A: "Thiết bị luôn biến điện năng thành cơ năng",
        B: "Phần tử trực tiếp chịu tác động của đại lượng cần đo và tạo ra đáp ứng có quan hệ với đại lượng đó",
        C: "Thiết bị chỉ dùng để khuếch đại tín hiệu điện",
        D: "Phần tử chỉ dùng để hiển thị kết quả đo",
      },
      answer: "B",
    },
    {
      q: "Câu 38: Trong hiệu ứng Hall, điện áp Hall xuất hiện theo phương nào?",
      options: {
        A: "Vuông góc với cả dòng I và từ trường B",
        B: "Chỉ song song với B",
        C: "Không phụ thuộc phương của I và B",
        D: "Song song với cả I và B",
      },
      answer: "A",
    },
  ],
};

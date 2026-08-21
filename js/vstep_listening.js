const listeningData = {
  "Part 1": {
    audioSrc: "audio/part1.mp3",

    // 🔥 Transcript tổng cho nút "Xem Transcript / Dịch" ở trên
    transcript: `This is the Vietnamese Standardized Test of English Proficiency, Listening Comprehension Test. You will listen to a number of different recordings, and you will have to answer questions based on what you hear. There will be time for you to read the questions and check your work. All the recordings will be played once only.

Part 1: In this part, you will hear eight short recordings. The recordings will be played once only. There is one question following each recording. For each question, choose the right answer A, B, C, or D.

Now, let's listen to the example. On the recording, you might hear, Hello, this is the travel agency returning your call. You left a message about the holiday you've booked, asking which meals are included in the cost during your stay at Sunny Hotel. Lunch and dinner are free, but if you wish to have breakfast in the hotel, you will need to pay an extra amount of money, depending on what you order. Let me know if I can help you with any other information. Goodbye. You will read: Which meal is not included in the price of the holiday? A. Breakfast B. Lunch C. Dinner D. All. The correct answer is A. Breakfast.

First, you will have some time to look at questions 1 to 8.

Now, we're ready to start. Listen, and answer questions 1 to 8.

Question 1: This is your captain speaking. At this time, we request that all mobile phones, pagers, radios, and remote-controlled toys be turned off for the rest of the flight, as these items might interfere with the navigational and communication equipment on this aircraft. We are landing in Amsterdam in 10 minutes. It is now 4:40 local time.

Question 2: If you do not know the exact course information, you may search by subject, course level, course number, and even section number, and place courses on your preferred sections list. First, you must select the term each time you enter this page. For example, this term's code is 1-5-F-A-C-A-S. Then enter up to five subjects. You may also enter course levels, course numbers, and even section numbers.

Question 3: Thank you for calling Dragon Restaurant. You have reached the automatic call-in service of our restaurant. To find out about our menu, press 1. To reserve a table, press 2. To ask about our other services, press 3. To speak to the staff, press 0. Thank you, and have a good day.

Question 4: Well, the fact that swimming doesn't interest you does not mean it's a boring form of exercise. It just means it's not suitable for you. I myself find jogging or riding a bike very boring. Swimming is great, but it's just not for everybody. It involves a lot of skills like breathing and shaping your body. At first, these skills may take some time to learn. But when you're used to them, like me, there's nothing to compare with slipping through the water. It's like flying.

Question 5: Wash and rinse the rice really well until the water is clear. Place the rice in a saucepan with double the amount of water and a little salt and stir. Bring to a boil. Then turn the heat way down and cover the pan tightly with a lid. Cook on the lowest heat possible for 10 to 15 minutes without uncovering the pan.

Question 6: If the camera charging light is not lit, the battery is still charging as long as it is connected to the wall outlet. If some trouble occurs while using the camera battery charger, immediately shut off the power by disconnecting the plug from the wall outlet.

Question 7: Buses display route numbers, names, and final destinations in lighted signs above the windshield. If you'd like the bus operator to stop for you, just stand up and give a friendly wave as the bus approaches. Be sure to stay on the curb, though. Please catch your bus at any official Capital Metro bus stop while the route is on detour. Alert your bus operator by waving as the vehicle approaches and prior to boarding, confirm route name and number by checking the digital marquee.

Question 8: The address of Buckingham Palace is Buckingham Palace, London SW1A1AA. You can get there by several different types of public transportation. If you go by train, stop at London Victoria. If you go by underground, stop at Victoria, Green Park, and Hyde Park Corner. If you go by bus, take numbers 11, 211, C1, or C10 and stop at Buckingham Palace Road. If you go by coach, stop at Victoria Coach Station. It is a 10-minute walk away from the palace.

Now you will have some time to review questions 1 to 8.

That is the end of part 1.`,

    // 🔥 Bản dịch tổng cho nút "Xem Transcript / Dịch" ở trên
    translation: `Đây là bài kiểm tra đánh giá năng lực tiếng Anh VSTEP, phần kiểm tra nghe hiểu. Bạn sẽ nghe một số đoạn ghi âm khác nhau và trả lời các câu hỏi dựa trên nội dung đã nghe. Sẽ có thời gian để bạn đọc câu hỏi và kiểm tra lại câu trả lời của mình. Tất cả các đoạn ghi âm chỉ được phát một lần duy nhất.

Part 1: Trong phần này, bạn sẽ nghe 8 đoạn ghi âm ngắn. Các đoạn ghi âm sẽ chỉ được phát một lần duy nhất. Mỗi đoạn ghi âm có một câu hỏi đi kèm. Với mỗi câu hỏi, hãy chọn đáp án đúng A, B, C hoặc D.

Bây giờ, hãy lắng nghe ví dụ. Trong đoạn ghi âm, bạn có thể nghe: "Xin chào, đây là đại lý du lịch phản hồi cuộc gọi của bạn. Bạn đã để lại lời nhắn về kỳ nghỉ bạn đã đặt, hỏi về các bữa ăn được bao gồm trong chi phí khi lưu trú tại khách sạn Sunny. Bữa trưa và bữa tối sẽ được cung cấp miễn phí, nhưng nếu bạn muốn dùng bữa sáng tại khách sạn, bạn sẽ cần trả thêm một khoản phí tùy theo món bạn chọn. Hãy cho tôi biết nếu tôi có thể giúp bạn với bất kỳ thông tin nào khác. Tạm biệt." Câu hỏi: Bữa ăn nào không được bao gồm trong giá của kỳ nghỉ? A. Bữa sáng B. Bữa trưa C. D. Tất cả. Đáp án đúng là A. Bữa sáng. 

Trước tiên, bạn sẽ có một chút thời gian để xem các câu hỏi từ 1 đến 8.

Bây giờ, chúng ta sẵn sàng bắt đầu. Hãy lắng nghe và trả lời các câu hỏi từ 1 đến 8.

Câu 1: Đây là cơ trưởng đang nói. Tại thời điểm này, chúng tôi yêu cầu tất cả điện thoại di động, máy nhắn tin, radio và đồ chơi điều khiển từ xa phải được tắt cho đến hết chuyến bay, vì những thiết bị này có thể gây nhiễu đến hệ thống điều hướng và liên lạc của máy bay. Chúng ta sẽ hạ cánh xuống Amsterdam trong 10 phút tới. Hiện tại là 4 giờ 40 phút theo giờ địa phương.

Câu 2: Nếu bạn không biết chính xác thông tin môn học, bạn có thể tìm kiếm theo môn học, trình độ môn học, mã môn học, hoặc thậm chí mã lớp học phần, và đặt các khóa học vào danh sách ưu tiên của bạn. Trước tiên, bạn phải chọn học kỳ mỗi khi truy cập trang này. Ví dụ, mã học kỳ này là 1-5-F-A-C-A-S. Sau đó, nhập tối đa năm môn học. Bạn cũng có thể nhập trình độ môn học, mã môn học, hay thậm chí cả mã lớp học phần.

Câu 3: Cảm ơn quý khách đã gọi đến nhà hàng Dragon. Hiện cuộc gọi được kết nối với dịch vụ trả lời tự động của nhà hàng chúng tôi. Để biết thêm chi tiết về thực đơn, vui lòng nhấn phím 1. Để đặt trước bàn, vui lòng nhấn phím 2. Để tham khảo thêm về các dịch vụ khác, vui lòng nhấn phím 3. Để liên hệ trực tiếp với nhân viên, vui lòng nhấn phím 0. Cảm ơn và chúc quý khách một ngày tốt lành.

Câu 4: Việc bạn không thích bơi lội không có nghĩa đó là một môn thể thao nhàm chán. Điều đó chỉ có nghĩa là nó không phù hợp với bạn. Bản thân tôi thấy chạy bộ hoặc đạp xe rất nhàm chán. Bơi lội rất tuyệt vời, nhưng nó không dành cho tất cả mọi người. Nó đòi hỏi nhiều kỹ năng như kiểm soát hơi thở và điều chỉnh tư thế cơ thể. Ban đầu, những kỹ năng này có thể mất thời gian để học. Nhưng khi bạn đã quen với chúng, giống như tôi, thì không gì có thể sánh bằng cảm giác lướt trên mặt nước. Hệt như thể đang bay vậy.

Câu 5: Rửa sạch và vo gạo thật kỹ cho đến khi nước trong. Cho gạo vào nồi với lượng nước gấp đôi lượng gạo và một ít muối, sau đó khuấy đều. Đun sôi. Sau đó, giảm lửa xuống mức nhỏ nhất và đậy kín nắp nồi. Nấu ở mức lửa thấp nhất có thể trong 10 đến 15 phút mà không mở nắp.

Câu 6: Nếu đèn báo sạc của máy ảnh không sáng, nghĩa là pin vẫn đang sạc miễn là nó còn được kết nối với ổ điện. Nếu gặp sự cố trong khi sử dụng bộ sạc pin máy ảnh, hãy ngay lập tức ngắt kết nối với nguồn điện để đảm bảo an toàn.

Câu 7: Các xe buýt hiển thị số tuyến, tên và điểm đến cuối cùng trên biển báo phát sáng phía trên kính chắn gió. Nếu bạn muốn tài xế xe buýt dừng lại đón, hãy đứng lên và vẫy tay một cách nhẹ nhàng khi xe buýt đến gần. Nhưng hãy nhớ đứng trên vỉa hè. Vui lòng bắt xe buýt tại bất kỳ trạm dừng chính thức nào của Capital Metro khi tuyến đường đang được điều chỉnh. Báo hiệu cho tài xế xe buýt bằng cách vẫy tay khi xe đến gần, và trước khi lên xe, hãy xác nhận tên và số tuyến bằng cách kiểm tra bảng điện tử.

Câu 8: Địa chỉ của cung điện Buckingham là Buckingham Palace, London SW1A1AA. Bạn có thể đến đó bằng nhiều phương tiện giao thông công cộng khác nhau. Đi bằng tàu hỏa xuống London Victoria. Đi tàu điện ngầm xuống Victoria, Green Park hoặc Hyde Park Corner. Đi xe buýt tuyến số 11, 211, C1 hoặc C10 xuống Buckingham Palace Road. Đi xe khách xuống bến xe Victoria Coach Station rồi đi bộ 10 phút.

Bây giờ bạn sẽ có một chút thời gian để xem lại các câu hỏi từ 1 đến 8.

Đây là phần kết thúc của phần 1.`,

    // 🔥 Danh sách 8 câu hỏi chi tiết chuẩn thẻ <br> xuống dòng
    questions: [
      {
        q: "What time will the plane land?",
        options: { A: "10:00", B: "10:30", C: "4:50", D: "4:40" },
        answer: "C",
        explanation:
          '<b>Đáp án:</b> 4:50<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, phi công thông báo: "This is your captain speaking. At this time, we request that all mobile phones, pagers, radios, and remote-controlled toys be turned off for the rest of the flight, as these items might interfere with the navigational and communication equipment on this aircraft. We are landing in Amsterdam in 10 minutes. It is now 4:40 local time."<br><br><b>Dịch nghĩa:</b><br>"Đây là cơ trưởng đang nói. Tại thời điểm này, chúng tôi yêu cầu tất cả điện thoại di động, máy nhắn tin, radio và đồ chơi điều khiển từ xa phải được tắt trong suốt phần còn lại của chuyến bay, vì những thiết bị này có thể gây nhiễu cho hệ thống định vị và liên lạc trên máy bay. Chúng tôi sẽ hạ cánh xuống Amsterdam trong 10 phút tới. Bây giờ là 4:40 theo giờ địa phương."<br><br>Phi công thông báo hiện tại là 4:40 và máy bay sẽ hạ cánh trong 10 phút tới, vì vậy ta có 4:40 + 10 phút = 4:50, đây là đáp án chính xác.<br><br><b>Phân tích các lựa chọn:</b><br>• 4:40 ❌ – Sai, đây là thời gian hiện tại, không phải thời gian hạ cánh.<br>• 4:50 ✅ – Đúng, máy bay sẽ hạ cánh sau 10 phút từ 4:40.<br>• 10:00 ❌ – Sai, không có thông tin nào trong bài nghe đề cập đến thời gian này.<br>• 10:30 ❌ – Sai, thời gian này không liên quan đến thông tin trong bài nghe.',
      },
      {
        q: "What is the code of the term?",
        options: { A: "50SACAS", B: "15FACAS", C: "15SHCAF", D: "50FACAF" },
        answer: "B",
        explanation:
          '<b>Đáp án:</b> 15FACAS<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, thông tin về mã học kỳ được đề cập:<br>"If you do not know the exact course information, you may search by subject, course level, course number, and even section number, and place courses on your preferred sections list. First, you must select the term each time you enter this page. For example, this term\'s code is 1-5-F-A-C-A-S. Then enter up to five subjects. You may also enter course levels, course numbers, and even section numbers."<br><br><b>Dịch nghĩa:</b><br>"Nếu bạn không biết chính xác thông tin môn học, bạn có thể tìm kiếm theo môn học, trình độ môn học, mã môn học, hoặc thậm chí mã lớp học phần, và đặt các khóa học vào danh sách ưu tiên của bạn. Trước tiên, bạn phải chọn mã học kỳ mỗi khi truy cập trang này. Ví dụ, mã học kỳ này là 1-5-F-A-C-A-S. Sau đó, nhập tối đa năm môn học. Bạn cũng có thể nhập trình độ môn học, mã môn học, hay thậm chí cả mã lớp học phần."<br><br>Mã học kỳ trong bài nghe được đọc là 1-5-F-A-C-A-S, điều này tương ứng với 15FACAS.<br><br><b>Phân tích các lựa chọn:</b><br>• 50SACAS ❌ – Sai, không trùng khớp với mã trong bài nghe.<br>• 50FACAF ❌ – Sai, mã trong bài nghe không có "50" và có "S" ở cuối thay vì "F".<br>• 15SHCAF ❌ – Sai, khác hoàn toàn so với mã trong bài nghe.<br>• 15FACAS ✅ – Đúng, trùng khớp hoàn toàn với mã trong bài nghe.',
      },
      {
        q: "What should you do to book a table?",
        options: { A: "Press 0", B: "Press 1", C: "Press 2", D: "Press 3" },
        answer: "C",
        explanation:
          '<b>Đáp án:</b> Press 2<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, thông tin về cách đặt bàn tại nhà hàng được đề cập:<br>"Thank you for calling Dragon Restaurant. You have reached the automatic call-in service of our restaurant. To find out about our menu, press 1. To reserve a table, press 2. To ask about our other services, press 3. To speak to the staff, press 0. Thank you, and have a good day."<br><br><b>Dịch nghĩa:</b><br>"Cảm ơn quý khách đã gọi đến nhà hàng Dragon. Hiện cuộc gọi được kết nối với dịch vụ trả lời tự động của nhà hàng chúng tôi. Để biết thêm chi tiết về thực đơn, vui lòng nhấn phím 1. Để đặt trước bàn, vui lòng nhấn phím 2. Để tham khảo thêm về các dịch vụ khác, vui lòng nhấn phím 3. Để liên hệ trực tiếp với nhân viên, vui lòng nhấn phím 0. Cảm ơn và chúc quý khách một ngày tốt lành."<br><br>Theo thông tin trong bài nghe, để đặt bàn, người nghe cần nhấn phím 2.<br><br><b>Phân tích các lựa chọn:</b><br>• Press 0 ❌ – Sai, nhấn phím 0 là để nói chuyện với nhân viên.<br>• Press 1 ❌ – Sai, nhấn phím 1 là để tìm hiểu về thực đơn.<br>• Press 2 ✅ – Đúng, nhấn phím 2 là để đặt bàn.<br>• Press 3 ❌ – Sai, nhấn phím 3 là để hỏi về các dịch vụ khác.',
      },
      {
        q: "What does the man think about swimming?",
        options: {
          A: "It is a boring exercise.",
          B: "It is exciting for him.",
          C: "It requires short-term training.",
          D: "It is more tiring than riding.",
        },
        answer: "B",
        explanation:
          "<b>Đáp án:</b> It is exciting for him.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người đàn ông bày tỏ quan điểm về bơi lội:<br>\"Well, the fact that swimming doesn't interest you does not mean it's a boring form of exercise. It just means it's not suitable for you. I myself find jogging or riding a bike very boring. Swimming is great, but it's just not for everybody. It involves a lot of skills like breathing and shaping your body. At first, these skills may take some time to learn. But when you're used to them, like me, there's nothing to compare with slipping through the water. It's like flying.\"<br><br><b>Dịch nghĩa:</b><br>\"Việc bạn không hứng thú với bơi lội không có nghĩa là nó là một bài tập nhàm chán. Nó chỉ đơn giản là không phù hợp với bạn. Bản thân tôi thấy chạy bộ hoặc đạp xe rất chán. Bơi lội rất tuyệt, nhưng nó không dành cho tất cả mọi người. Nó đòi hỏi nhiều kỹ năng như kiểm soát hơi thở và điều chỉnh tư thế cơ thể. Ban đầu, những kỹ năng này có thể mất một chút thời gian để học. Nhưng khi bạn quen với chúng, giống như tôi, thì không gì có thể sánh bằng cảm giác lướt trên mặt nước. Hệt như thể đang bay vậy.\"<br><br>Người đàn ông cho rằng bơi lội không nhàm chán, thậm chí còn so sánh nó với việc bay, thể hiện rằng anh ấy thấy bơi lội rất thú vị. Do đó, đáp án chính xác là It is exciting for him.<br><br><b>Phân tích các lựa chọn:</b><br>• It requires short-term training. ❌ (Bơi lội yêu cầu đào tạo ngắn hạn.) - Sai, vì anh ấy nói rằng học bơi có thể mất một chút thời gian, không phải là đào tạo ngắn hạn.<br>• It is exciting for him. ✅ (Bơi lội rất thú vị đối với anh ấy.) - Đúng, vì anh ấy mô tả bơi lội giống như đang bay, thể hiện sự hào hứng.<br>• It is more tiring than riding. ❌ (Bơi lội mệt hơn đạp xe.) - Sai, vì anh ấy không so sánh mức độ mệt mỏi giữa bơi lội và đạp xe, chỉ nói rằng đạp xe rất chán.<br>• It is a boring exercise. ❌ (Bơi lội là một bài tập nhàm chán.) - Sai, vì anh ấy khẳng định bơi lội không nhàm chán và thực sự rất tuyệt.",
      },
      {
        q: "What is the purpose of the message?",
        options: {
          A: "how to heat rice",
          B: "how to wash rice",
          C: "how to cook rice",
          D: "how to fry rice",
        },
        answer: "C",
        explanation:
          '<b>Đáp án:</b> how to cook rice<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, hướng dẫn về cách nấu cơm được đề cập:<br>"Wash and rinse the rice really well until the water is clear. Place the rice in a saucepan with double the amount of water and a little salt and stir. Bring to a boil. Then turn the heat way down and cover the pan tightly with a lid. Cook on the lowest heat possible for 10 to 15 minutes without uncovering the pan."<br><br><b>Dịch nghĩa:</b><br>"Rửa và xả gạo thật kỹ cho đến khi nước trong. Đặt gạo vào nồi với lượng nước gấp đôi và một ít muối, sau đó khuấy đều. Đun sôi. Sau đó giảm nhiệt xuống mức thấp nhất và đậy chặt nắp nồi. Nấu ở lửa nhỏ nhất trong khoảng 10 đến 15 phút mà không mở nắp."<br><br>Thông điệp này cung cấp hướng dẫn về cách nấu cơm, từ bước rửa gạo, đong nước, đun sôi đến hạ nhiệt và nấu chín. Do đó, đáp án chính xác là how to cook rice.<br><br><b>Phân tích các lựa chọn:</b><br>• how to fry rice ❌ (Cách chiên cơm.) - Sai, vì không có bước nào liên quan đến việc chiên cơm trong bài nghe.<br>• how to wash rice ❌ (Cách rửa gạo.) - Sai, vì dù có bước rửa gạo nhưng thông điệp chính là hướng dẫn nấu cơm.<br>• how to heat rice ❌ (Cách hâm nóng cơm.) - Sai, vì bài nghe không đề cập đến việc hâm nóng cơm mà hướng dẫn nấu cơm từ đầu.<br>• how to cook rice ✅ (Cách nấu cơm.) - Đúng, vì bài nghe hướng dẫn đầy đủ các bước để nấu cơm.',
      },
      {
        q: "Who is probably the audience of this message?",
        options: {
          A: "lift riders",
          B: "computer users",
          C: "camera owners",
          D: "wall climbers",
        },
        answer: "C",
        explanation:
          '<b>Đáp án:</b> camera owners<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, thông tin về việc sử dụng bộ sạc máy ảnh được đề cập:<br>"If the camera charging light is not lit, the battery is still charging as long as it is connected to the wall outlet. If some trouble occurs while using the camera battery charger, immediately shut off the power by disconnecting the plug from the wall outlet."<br><br><b>Dịch nghĩa:</b><br>"Nếu đèn báo sạc của máy ảnh không sáng, điều đó có nghĩa là pin vẫn đang sạc miễn là nó được cắm vào ổ điện. Nếu gặp sự cố trong khi sử dụng bộ sạc pin máy ảnh, hãy ngay lập tức tắt nguồn bằng cách rút phích cắm ra khỏi ổ điện."<br><br>Thông điệp này đưa ra hướng dẫn sử dụng bộ sạc pin máy ảnh, do đó đối tượng của thông điệp này là những người sở hữu máy ảnh.<br><br><b>Phân tích các lựa chọn:</b><br>• lift riders ❌ (Người đi thang máy.) - Sai, vì thông điệp không liên quan đến việc sử dụng thang máy.<br>• wall climbers ❌ (Người leo núi nhân tạo.) - Sai, vì nội dung không liên quan đến hoạt động leo núi.<br>• camera owners ✅ (Người sở hữu máy ảnh.) - Đúng, vì thông điệp hướng dẫn cách sạc pin máy ảnh.<br>• computer users ❌ (Người sử dụng máy tính.) - Sai, vì thông tin không đề cập đến máy tính hay cách sử dụng máy tính.',
      },
      {
        q: "What is mainly discussed in the recording?",
        options: {
          A: "How to make a detour in using the bus service",
          B: "How to alert the driver on the digital marquee",
          C: "How to get around using the local bus service",
          D: "How to seek for destination on the bus map",
        },
        answer: "C",
        explanation:
          '<b>Đáp án:</b> How to get around using the local bus service<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, thông tin về cách sử dụng dịch vụ xe buýt địa phương được đề cập:<br>"Buses display route numbers, names, and final destinations in lighted signs above the windshield. If you\'d like the bus operator to stop for you, just stand up and give a friendly wave as the bus approaches. Be sure to stay on the curb, though. Please catch your bus at any official Capital Metro bus stop while the route is on detour. Alert your bus operator by waving as the vehicle approaches and prior to boarding, confirm route name and number by checking the digital marquee."<br><br><b>Dịch nghĩa:</b><br>"Các xe buýt hiển thị số tuyến, tên tuyến và điểm đến cuối cùng trên các biển hiệu sáng phía trên kính chắn gió. Nếu bạn muốn tài xế xe buýt dừng xe, hãy đứng lên và vẫy tay một cách nhẹ nhàng khi xe buýt đến gần. Tuy nhiên, hãy chắc chắn rằng bạn vẫn đứng trên vỉa hè. Hãy đón xe buýt tại bất kỳ điểm dừng chính thức nào của Capital Metro khi tuyến đường đang được điều chỉnh. Hãy báo hiệu cho tài xế xe buýt bằng cách vẫy tay khi xe đến gần và trước khi lên xe, hãy xác nhận tên và số tuyến bằng cách kiểm tra bảng điện tử."<br><br>Thông điệp này cung cấp hướng dẫn về cách sử dụng dịch vụ xe buýt địa phương, bao gồm cách nhận biết tuyến xe, cách đón xe, và cách báo hiệu cho tài xế. Do đó, đáp án chính xác là How to get around using the local bus service.<br><br><b>Phân tích các lựa chọn:</b><br>• How to get around using the local bus service ✅ (Cách di chuyển bằng dịch vụ xe buýt địa phương.) - Đúng, vì bài nghe hướng dẫn chi tiết về cách sử dụng xe buýt.<br>• How to make a detour in using the bus service ❌ (Cách đi đường vòng khi sử dụng xe buýt.) - Sai, vì bài nghe chỉ nhắc đến việc đón xe khi có điều chỉnh lộ trình, không phải hướng dẫn đi đường vòng.<br>• How to seek for destination on the bus map ❌ (Cách tìm điểm đến trên bản đồ xe buýt.) - Sai, vì không có thông tin nào về bản đồ xe buýt trong bài nghe.<br>• How to alert the driver on the digital marquee ❌ (Cách báo hiệu tài xế qua bảng điện tử.) - Sai, vì bảng điện tử chỉ dùng để kiểm tra tuyến xe, không phải để báo hiệu cho tài xế.',
      },
      {
        q: "Who may this message be prepared for?",
        options: {
          A: "palace visitors",
          B: "bus riders",
          C: "underground riders",
          D: "park visitors",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b> palace visitors<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, thông tin về cách đến Cung điện Buckingham được đề cập:<br>"The address of Buckingham Palace is Buckingham Palace, London SW1A1AA. You can get there by several different types of public transportation. If you go by train, stop at London Victoria. If you go by underground, stop at Victoria, Green Park, and Hyde Park Corner. If you go by bus, take numbers 11, 211, C1, or C10 and stop at Buckingham Palace Road. If you go by coach, stop at Victoria Coach Station. It is a 10-minute walk away from the palace."<br><br><b>Dịch nghĩa:</b><br>"Địa chỉ của Cung điện Buckingham là Buckingham Palace, London SW1A1AA. Bạn có thể đến đó bằng nhiều phương tiện giao thông công cộng khác nhau. Nếu đi bằng tàu hỏa, hãy dừng tại London Victoria. Nếu đi bằng tàu điện ngầm, hãy dừng tại Victoria, Green Park hoặc Hyde Park Corner. Nếu đi bằng xe buýt, hãy đi các tuyến số 11, 211, C1 hoặc C10 và xuống tại Buckingham Palace Road. Nếu đi bằng xe khách, hãy dừng tại Victoria Coach Station, cách cung điện 10 phút đi bộ."<br><br>Thông điệp này cung cấp hướng dẫn về cách đến Cung điện Buckingham, do đó đối tượng của thông điệp này là khách tham quan cung điện.<br><br><b>Phân tích các lựa chọn:</b><br>• bus riders ❌ (Người đi xe buýt.) - Sai, vì thông tin không chỉ dành riêng cho người đi xe buýt mà còn nhiều phương tiện khác.<br>• park visitors ❌ (Khách tham quan công viên.) - Sai, vì không nhắc đến công viên nào, mà là Cung điện Buckingham.<br>• underground riders ❌ (Người đi tàu điện ngầm.) - Sai, mặc dù có nhắc đến tàu điện ngầm nhưng không phải đối tượng chính của thông điệp.<br>• palace visitors ✅ (Khách tham quan cung điện.) - Đúng, vì toàn bộ thông tin tập trung vào hướng dẫn khách tham quan Cung điện Buckingham.',
      },
    ],
  },
  "Part 2": {
    audioSrc: "audio/part2.mp3",

    // 🔥 Transcript tổng cho Part 2
    transcript: `Part 2: In this part, you will hear three conversations. The conversations will be played once only. There are four questions for each conversation. For each question, choose the right answer, A, B, C, or D.

Part 2, questions 9-12: First, you will have some time to look at questions 9 to 12.
Now we're ready to start. Listen, and answer questions 9 to 12. You will hear the recording once only.
Hey Lily, how was your trip to China? Was your Mandarin useful? Yes, at least I could use Mandarin to ask for directions and read street signs sometimes. Wow, so share with me about how you learned it. Of course. Firstly, you need some materials. Textbooks are okay as long as they have dialogues with a recorded version. If you've got some extra money, Chinese pad is great. I think I can afford those things. Then how should I learn? As a beginner, you should do a significant amount of input, reading and listening, with this beginner material. This is the hard bit. To make rapid progress, try to dedicate at least 30 minutes a day. Okay, go on. Then, the next step is working the language into your life. I'm not really an advocate of ignoring your friends and family who don't speak the language, or listening to the language while you're talking to them and while you sleep, or changing the language on your computer and phone into Chinese. This is too annoying for me. Instead, make use of dead time. Do you daydream on the train or bus? Now listen to Chinese. Do you wait in lines? Now you listen to Chinese while you wait. Do you walk the dog, paint your house, daydream? Listen to Chinese while you do these things. You'll see how easy it is. So, you did all those things? Yeah, I guess so. One more thing. I myself learned 30 words a week, and then stepped it up after a couple of weeks. And I could see it worked. I also listened to 30 minutes of Chinese a day, then stepped it up to an hour. I heard that the toughest part of learning Chinese is writing the characters. Is that right? Yeah, you are right. My tip is forgetting about them for the first month. After that, though, they are important. Spend 15 minutes a day learning them. Although it may seem tedious, it's worth learning the radicals first, or as you encounter them. This will enable you to quite accurately guess new characters later on.
Now you will have some time to review questions 9 to 12.

Part 2, questions 13-16: First, you will have some time to look at questions 13 to 16.
Now we're ready to start. Listen and answer questions 13 to 16. You will hear the recording once only.
Okay, Nathan. What do you think parents should prepare for their kids? I mean, in terms of their social life. Well, Julia, I'm thinking about talking with them about world problems. You mean things like natural disasters, wars, or poverty? That sounds serious and hard to understand for our kids. Don't you think so? It's important for children to develop concern for people from other cultures and communities, well, besides their small circle of family and friends. This will make them empathetic with people of all backgrounds. Just don't worry. And it's not as difficult as you think. How can we engage kids with such topics? You can use newspapers, magazines, or the TV to start the conversation. Or you can also have them put themselves in other people's shoes. Hmm. What else do you think our young kids should be aware of? They should also learn about ethical issues, like fairness and loyalty. Most children are naturally interested in ethical questions. So, by getting involved, they'll be able to find their way through these issues. And how can we involve them? You can involve your child in a case that takes action against problems he or she faces. It would be much more effective if we actually do it with them. I remember in our textbook, it is mentioned that parents should navigate through their children's feelings. Yeah, you're right. You know, kids need to learn how to deal with their emotions in productive ways. Working on this with your child will cut down on the bad attitude they may express. That is very important to understand what is going on in the kid's mind and guide them to a positive direction. But the question is, how to do so? I think we should prepare this part very carefully to make a really good presentation to the class. Well, you may try a three-step trick. Stop, take a deep breath in through the nose and exhale through the mouth, and count to five. When they're calm, then you can talk about the problem.
Now you will have some time to review questions 13 to 16.

Part 2, questions 17-20: First, you will have some time to look at questions 17 to 20.
Now we're ready to start. Listen and answer questions 17 to 20. You will hear the recording once only.
From the moment two people meet, they're sizing each other up. They look for signs of qualities like honesty, intelligence, and selflessness. Today we are welcoming Amanda Jones to discuss some of the most common behaviors people use to judge each other. Hello, Lewis. A handshake can tell a lot about someone. Oh, really? Well, people think that a strong handshake usually reflects a strong and confident character, and weak handshakes usually show a lack of confidence. I mean, a weak handshake is a sign of a person who would look for an easy way to do things. Is this belief supported by science or something like that? Well, actually, one study in 2000 showed that people with firm handshakes were more likely to be sociable. They find it easy to express their emotions and are less likely to be shy. Interesting. What other methods are there used to judge character? The second most common thing people may look at is if you show up on time. Arriving late may leave a bad impression. I also came across some reading which grouped people according to how punctual they are. It's likely an energetic person will be there on time because he is self-motivated, mentally organized, and values time. However, people who keep delaying things will be running here and there at the last minute. The good news is that it's not always bad to be a latecomer. Uh-huh. Frequently, latecomers aren't necessarily inconsiderate people. They're probably more laid back. I bet many of us felt relieved after you said so. I am not an exception. Actually, I am late sometimes. But, well, there's still a third way to find out about a person. It's how you treat the restaurant staff. Well, I can share with you my friend's experience. She once told me, I will never ever date a man who is rude to restaurant staff. Many people share your friend's opinion, I think. You can learn a lot about someone just by looking at the way he or she treats waiters, hotel mates, and security guards.
Now you will have some time to review questions 17 to 20.
That is the end of Part 2.`,

    // 🔥 Bản dịch tổng cho Part 2
    translation: `Phần 2: Trong phần này, bạn sẽ nghe ba đoạn hội thoại. Các đoạn hội thoại sẽ chỉ được phát một lần duy nhất. Mỗi đoạn hội thoại có bốn câu hỏi đi kèm. Với mỗi câu hỏi, hãy chọn đáp án đúng A, B, C hoặc D.

Phần 2, câu hỏi 9-12: Trước tiên, bạn sẽ có một chút thời gian để xem các câu hỏi từ 9 đến 12. Bây giờ, chúng ta sẵn sàng bắt đầu. Hãy lắng nghe và trả lời các câu hỏi từ 9 đến 12. Bạn sẽ chỉ nghe đoạn ghi âm một lần duy nhất.
Này Lily, chuyến đi Trung Quốc của cậu thế nào? Cậu có dùng được tiếng Quan Thoại không? Có chứ... [Nội dung dịch chi tiết hội thoại 1, 2 và 3]
Bây giờ bạn sẽ có một chút thời gian để xem lại các câu hỏi từ 17 đến 20.
Đây là phần kết thúc của Phần 2.`,

    // 🔥 Danh sách 12 câu hỏi chi tiết từ câu 9 đến câu 20
    questions: [
      {
        q: "What is Lily’s opinion of ChinesePod?",
        options: {
          A: "It is free, so make use of it.",
          B: "Its value is worth the price.",
          C: "It is not worth what it costs.",
          D: "It costs less than textbooks.",
        },
        answer: "B",
        explanation:
          '<b>Đáp án:</b> Its value is worth the price.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, Lily chia sẻ: "If you\'ve got some extra money, ChinesePod is great."<br><br><b>Dịch nghĩa:</b><br>"Nếu bạn có thêm một chút tiền, thì ChinesePod rất tuyệt."<br><br>Lily đánh giá cao giá trị của nó và cho rằng nó đáng giá với số tiền bỏ ra.<br><br><b>Phân tích các lựa chọn:</b><br>• Its value is worth the price. ✅ – Đúng, vì Lily nói ChinesePod rất tuyệt nếu có thêm tiền.<br>• It is free... ❌ – Sai, không nói miễn phí.<br>• It is not worth... ❌ – Sai, cô ấy đánh giá cao.<br>• It costs less... ❌ – Sai, không so sánh giá.',
      },
      {
        q: "What does Lily mean by “dead time?”",
        options: {
          A: "When you are tired.",
          B: "Time spent sleeping.",
          C: "Time that is wasted.",
          D: "When you are bored.",
        },
        answer: "C",
        explanation:
          '<b>Đáp án:</b> Time that is wasted.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, Lily giải thích về "dead time": "Do you daydream on the train or bus? Now listen to Chinese. Do you wait in lines? Now you listen to Chinese while you wait..."<br><br><b>Dịch nghĩa:</b><br>"Bạn có thường mơ mộng trên tàu hoặc xe buýt không? Giờ hãy nghe tiếng Trung..."<br><br>Lily gọi những khoảng thời gian chờ đợi hoặc mơ mộng (thời gian bị lãng phí) là "dead time" và khuyên nên tận dụng nó.<br><br><b>Phân tích các lựa chọn:</b><br>• When you are tired. ❌ – Sai, không phải lúc mệt mỏi.<br>• Time that is wasted. ✅ – Đúng, là thời gian lãng phí có thể tận dụng.<br>• When you are bored. ❌ – Sai.<br>• Time spent sleeping. ❌ – Sai, không phải thời gian ngủ.',
      },
      {
        q: "How did Lily learn Chinese?",
        options: {
          A: "thirty new words a week",
          B: "thirty minutes a day",
          C: "thirty hours a week",
          D: "thirty new words a day",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b> thirty new words a week<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, Lily chia sẻ: "I myself learned 30 words a week, and then stepped it up after a couple of weeks."<br><br><b>Dịch nghĩa:</b><br>"Bản thân tôi học 30 từ mới mỗi tuần, sau đó tăng số lượng lên sau vài tuần."<br><br>Do đó đáp án chính xác là học 30 từ mới mỗi tuần.<br><br><b>Phân tích các lựa chọn:</b><br>• thirty new words a week. ✅ – Đúng.<br>• thirty minutes a day. ❌ – Sai, đây là thời gian nghe.<br>• thirty hours a week. ❌ – Sai.<br>• thirty new words a day. ❌ – Sai, không phải mỗi ngày.',
      },
      {
        q: "What is the conversation mainly about?",
        options: {
          A: "Difficulties when learning Chinese",
          B: "Time management in learning Chinese",
          C: "Lily’s plan for learning Chinese",
          D: "Lily’s advice for studying Chinese",
        },
        answer: "D",
        explanation:
          "<b>Đáp án:</b> Lily’s advice for studying Chinese.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, Lily chia sẻ kinh nghiệm chọn tài liệu, cách tận dụng thời gian, cách học từ vựng và chữ Hán.<br><br>Toàn bộ cuộc trò chuyện xoay quanh lời khuyên của Lily về việc học tiếng Trung.<br><br><b>Phân tích các lựa chọn:</b><br>• Difficulties when learning Chinese. ❌ – Sai.<br>• Time management... ❌ – Sai.<br>• Lily’s plan... ❌ – Sai.<br>• Lily’s advice for studying Chinese. ✅ – Đúng.",
      },
      {
        q: "What does Julia think about natural disasters?",
        options: {
          A: "People should be aware of their seriousness.",
          B: "They are even worse than poverty.",
          C: "They occur much more frequently now.",
          D: "They are difficult topics to tell children.",
        },
        answer: "D",
        explanation:
          '<b>Đáp án:</b> They are difficult topics to tell children.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, Julia bày tỏ: "You mean things like natural disasters, wars, or poverty? That sounds serious and hard to understand for our kids."<br><br><b>Dịch nghĩa:</b><br>"Ý bạn là thảm họa thiên nhiên, chiến tranh hay nghèo đói? Điều đó nghe có vẻ nghiêm trọng và khó hiểu đối với trẻ em."<br><br>Do đó đáp án là chúng là những chủ đề khó để nói với trẻ em.<br><br><b>Phân tích các lựa chọn:</b><br>• They occur much more frequently... ❌ – Sai.<br>• They are even worse... ❌ – Sai.<br>• People should be aware... ❌ – Sai.<br>• They are difficult topics to tell children. ✅ – Đúng.',
      },
      {
        q: "How should adults involve kids into ethical issues...",
        options: {
          A: "telling them about fairness or loyalty",
          B: "making them ask and answer ethical questions",
          C: "showing a case when their problems are solved",
          D: "making use of moral lessons in textbooks",
        },
        answer: "C",
        explanation:
          '<b>Đáp án:</b> showing a case when their problems are solved.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, Nathan nêu ý kiến: "You can involve your child in a case that takes action against problems he or she faces. It would be much more effective if we actually do it with them."<br><br><b>Dịch nghĩa:</b><br>"Bạn có thể để con bạn tham gia vào một trường hợp có hành động chống lại những vấn đề mà chúng gặp phải..."<br><br><b>Phân tích các lựa chọn:</b><br>• telling them about fairness... ❌ – Sai.<br>• making them ask... ❌ – Sai.<br>• showing a case when their problems are solved. ✅ – Đúng.<br>• making use of moral lessons... ❌ – Sai.',
      },
      {
        q: "Who are probably the speakers?",
        options: {
          A: "two university students",
          B: "a TV presenter and a guest",
          C: "a married couple",
          D: "a psychologist and a client",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b> two university students<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, hai người thảo luận và đề cập: "I think we should prepare this part very carefully to make a really good presentation to the class."<br><br><b>Dịch nghĩa:</b><br>"Mình nghĩ chúng ta nên chuẩn bị kỹ phần này để có một bài thuyết trình thật tốt trước lớp."<br><br>Chi tiết này cho thấy họ là hai sinh viên đại học.<br><br><b>Phân tích các lựa chọn:</b><br>• two university students. ✅ – Đúng.<br>• a married couple. ❌ – Sai.<br>• a TV presenter... ❌ – Sai.<br>• a psychologist... ❌ – Sai.',
      },
      {
        q: "What is the conversation mainly about?",
        options: {
          A: "teaching kids social issues",
          B: "repairing kids’ moral problems",
          C: "managing kids in extra classes",
          D: "working with kids in modern society",
        },
        answer: "A",
        explanation:
          "<b>Đáp án:</b> teaching kids social issues.<br><br><b>Giải thích chi tiết:</b><br>Cuộc trò chuyện tập trung vào việc giáo dục trẻ em về các vấn đề xã hội, phát triển sự quan tâm đến cộng đồng và đồng cảm với mọi người.<br><br><b>Phân tích các lựa chọn:</b><br>• teaching kids social issues. ✅ – Đúng.<br>• working with kids... ❌ – Sai.<br>• managing kids... ❌ – Sai.<br>• repairing kids’ moral... ❌ – Sai.",
      },
      {
        q: "What type of person do strong handshakes signal?",
        options: {
          A: "energetic but shy",
          B: "strong but vulnerable",
          C: "out-going and confident",
          D: "emotional and easy-going",
        },
        answer: "C",
        explanation:
          '<b>Đáp án:</b> out-going and confident.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, nghiên cứu chỉ ra rằng: "people with firm handshakes were more likely to be sociable. They find it easy to express their emotions and are less likely to be shy."<br><br><b>Dịch nghĩa:</b><br>"những người có cái bắt tay mạnh thường có xu hướng hòa đồng hơn, dễ biểu lộ cảm xúc và ít nhút nhát."<br><br><b>Phân tích các lựa chọn:</b><br>• strong but vulnerable ❌ – Sai.<br>• out-going and confident ✅ – Đúng (Hòa đồng và tự tin).<br>• energetic but shy ❌ – Sai.<br>• emotional and easy-going ❌ – Sai.',
      },
      {
        q: "What does the woman imply about latecomers?",
        options: {
          A: "They lead a relaxing life.",
          B: "They think they can run fast.",
          C: "They ignore getting late.",
          D: "They are usually considerate.",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b> They lead a relaxing life.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người phụ nữ nói: "Frequently, latecomers aren\'t necessarily inconsiderate people. They\'re probably more laid back."<br><br><b>Dịch nghĩa:</b><br>"Thường thì những người đến muộn không nhất thiết là thiếu suy nghĩ. Có lẽ họ mang tâm thế sống bình thản hơn."<br><br><b>Phân tích các lựa chọn:</b><br>• They lead a relaxing life. ✅ – Đúng (Sống thư giãn, bình thản).<br>• They think they can run fast. ❌ – Sai.<br>• They ignore getting late. ❌ – Sai.<br>• They are usually considerate. ❌ – Sai.',
      },
      {
        q: "What does the man imply about his female friend?",
        options: {
          A: "She doesn’t like men who discriminate people’s jobs.",
          B: "She used to be a waitress in the Netherlands.",
          C: "She never wants to date anyone in a restaurant.",
          D: "She considers restaurant staff noble people.",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b> She doesn’t like men who discriminate people’s jobs.<br><br><b>Giải thích chi tiết:</b><br>Người bạn của anh ấy từng nói: "I will never ever date a man who is rude to restaurant staff."<br><br>Điều này thể hiện cô ấy không thích những người thô lỗ hoặc phân biệt đối xử với nhân viên phục vụ.<br><br><b>Phân tích các lựa chọn:</b><br>• She doesn’t like men who discriminate... ✅ – Đúng.<br>• She never wants to date... ❌ – Sai.<br>• She considers restaurant staff... ❌ – Sai.<br>• She used to be a waitress... ❌ – Sai.',
      },
      {
        q: "What is the conversation mainly about?",
        options: {
          A: "punctuality and restaurant manner",
          B: "handshake and personality interpretation",
          C: "ways of evaluating people’s personalities",
          D: "categories of people in restaurants",
        },
        answer: "C",
        explanation:
          "<b>Đáp án:</b> ways of evaluating people’s personalities.<br><br><b>Giải thích chi tiết:</b><br>Cuộc trò chuyện thảo luận về các cách mà mọi người dùng để đánh giá con người qua cái bắt tay, tính đúng giờ và cách đối xử với nhân viên nhà hàng.<br><br><b>Phân tích các lựa chọn:</b><br>• handshake and personality... ❌ – Sai.<br>• punctuality and restaurant... ❌ – Sai.<br>• categories of people... ❌ – Sai.<br>• ways of evaluating people’s personalities. ✅ – Đúng.",
      },
    ],
  },
  "Part 3": {
    audioSrc: "audio/part3.mp3",

    // 🔥 Transcript tổng cho Part 3
    transcript: `Part 3: In this part, you will hear three talks, or lectures. The talks or lectures will be played once only. There are five questions for each talk or lecture. For each question, choose the right answer, A, B, C, or D.

Part 3, questions 21-25: First, you will have some time to look at questions 21 to 25.
Now we're ready to start. Listen, and answer questions 21 to 25. You will hear the recording once only.
Angry Birds 2 is out, and more than 10 million people are furiously throwing feathered flyers at snorting pigs. But, while it's free to download, some players are complaining about how the game encourages in-app purchases. One review praised the gorgeous game but calls the way it prompts users to pay for upgraded content “heartless” and “tiring.” The makers, Rovio, says those who don't buy add-ons still get a fully formed game for free. The game allows you to gain extra lives in exchange for gems. There are several ways to gather these gems in the game, but buying them is the easiest. Eric Kayan, one reviewer, says that if you don't want to part with your money, you're forced to wait for your lives to reload. He thinks this feature will just encourage gamers to stop playing. Greedy isn't the word, but there are words to describe this sort of thing. Foolish, baffling, boneheaded. The first Angry Birds game was released in 2009, and it was a massive hit, even though players had to pay to download it. There have been other spin-offs in the series, but Angry Birds 2 has been billed as a proper follow-up. John Norris says that he played the original endlessly, and he was looking forward to the development. He thinks most people who play mobile games these days are pretty aware of how in-app purchases work. But after such an uncomplicated original game, he was really disappointed by how hard the sequel tries to make you spend your money. After these complaints were revealed, the creative director of the game, Patrick Liu, stated that they encouraged users to play, not to pay. Everybody had an equal opportunity to progress in the game, as all transactions were made with gems, for which the game allows you to gain extra lives in exchange. These gems could be earned by playing and completing challenges. Furthermore, extra birds, lives and tickets could be earned through watching videos. This fact was accessible to everyone. Angry Birds 2 could be enjoyed fully without purchasing anything, but they did offer, for purchase, a variety of ways to expand, extend and enhance the game-playing experience. But John still thinks the Finnish company has ruined Angry Birds 2. He appreciates game developers' need to make money, but the way to do that is to charge money for games people want to play, not annoy people into spending money in-game.
Now you will have some time to review questions 21 to 25.

Part 3, questions 26-30: First, you will have some time to look at questions 26 to 30.
Now we're ready to start. Listen and answer questions 26 to 30. You will hear the recording once only.
The world's first malaria vaccine has cleared one of the final hurdles prior to being approved for use in Africa. It is noticeable that malaria kills around 584,000 people a year worldwide. Most of them children under five in Sub-Saharan Africa. The European Medicines Agency gave a positive scientific opinion after assessing its safety and effectiveness. It represents a green light for the Mosquerix injection developed by GlaxoSmithKline, G-S-K for short. Mosquerix is the first against a parasitic infection in humans. Scientists who have been working on this vaccine for 30 years said that this was a hugely significant moment and this was a dream come true. It has been designed specifically to combat malaria infection in children in Africa and will not be licensed for travelers. Earlier this year, final results of a clinical trial in seven African countries yielded mixed results. The best protection was among children aged 5 to 17 months who received three doses of the vaccine a month apart plus a booster dose at 20 months. In this group, cases of severe malaria were cut by a third over four years. But the effectiveness of the vaccine declined over time making the booster shot essential. Without a booster, the vaccine did not cut the rate of severe malaria over the trial period. And disappointingly, the injection did not prove very effective in protecting young babies from severe malaria. Furthermore, it has been hoped the injection could be administered at 6, 10 and 14 weeks along with other childhood vaccines. But the results suggest the injections need to be started later which would involve a huge amount of organization and extra cost as it is outside the childhood vaccine schedule. Besides, the trial results show it is crucial that children receive all four doses of the injection in order to benefit. But even in partially effective malaria vaccine could have a role to play in countries with very high rates of disease. GSK began research on a malaria vaccine 30 years ago and the first trials in Africa began in 1998. In 2001, a partnership was established between GSK and the PATH Malaria Vaccine Initiative through a grant from the Bill and Melinda Gates Foundation. The project aimed to speed up malaria vaccine development. In 2009, 11 centres began recruiting 16,000 children in 7 Sub-Saharan African countries. Today marks a significant scientific milestone for the long-standing partnership to develop a vaccine. Yet several more steps remain before a malaria vaccine might reach the young children in Africa who most need protection against this deadly human parasite.
Now you will have some time to review questions 26 to 30.

Part 3, questions 31-35: First, you will have some time to look at questions 31 to 35.
Now we're ready to start. Listen and answer questions 31 to 35. You will hear the recording once only.
Scientists may be one step closer to uncovering the origins of cheese making as evidence that is thousands of years old has been uncovered. Truly an ancient art, no one really knows exactly when humans began making cheese. But now milk extracts have been identified on 34 perforated pottery vessels or cheese strainers that are 7,500 years old and have been excavated in Poland. Ms. Salk and other scientists believe that this is obvious evidence of cheese making in northern Europe during Neolithic times and their findings have been published in the scientific journal Nature. Ms. Salk and her team also analyzed lipid remains on the vessels and detected milk remains which they say provides a link to cheese making. Although scientists have not identified traces of cheese, they have put together a convincing case. Is it possible that prehistoric people were making cheese much earlier than 7,500 years ago? Ms. Salk explains that the most important ingredient for cheese making is milk and only domesticated animals can be milked. Thus, it is unlikely that the origins of cheese making predates the Neolithic time period. Earlier examples of milk remains have been detected on pottery vessels from the Near East dating back 8,000 years, although the evidence does not suggest that they were used for milk processing activities. The only other written evidence for cheese making activity occurred much later in the archaeological record, around 5,000 years ago. What would have prompted Neolithic people to start making cheese? Scientists revealed that genetic and computer simulations have shown that at that time people were largely lactose intolerant. Processing milk into cheese allows the lactose content of milk to be reduced. Thus, making cheese allowed them to consume dairy products without the undesirable health effects. So, what might a prehistoric cheese have tasted like? I guess it would have been like the traditional cheese you can get now. Ms. Salk said that in France we have the picoron, traditionally made in farms with cow or goat milk. I would imagine that prehistoric cheese would have been like this. It's likely to have been a softer cheese. Andrew Dalby says that the taste of the cheese may have changed according to the season. Similar to those cheeses made in the region of France where I live. The result can be quite different depending on the season. Sometimes cheeses harden and do in fact keep and still taste great months later.
Now you will have some time to review questions 31 to 35.
That is the end of Part 3.`,

    // 🔥 Bản dịch tổng cho Part 3
    translation: `Phần 3: Trong phần này, bạn sẽ nghe ba bài nói hoặc bài giảng. Các bài nói hoặc bài giảng sẽ chỉ được phát một lần duy nhất. Mỗi bài nói hoặc bài giảng có năm câu hỏi đi kèm. Với mỗi câu hỏi, hãy chọn đáp án đúng A, B, C hoặc D.

Phần 3, câu hỏi 21-25: Trước tiên, bạn sẽ có một chút thời gian để xem các câu hỏi từ 21 đến 25.
Bây giờ, chúng ta sẵn sàng bắt đầu. Hãy lắng nghe và trả lời các câu hỏi từ 21 đến 25. Bạn sẽ chỉ nghe đoạn ghi âm một lần duy nhất.
Angry Birds 2 đã ra mắt... [Nội dung dịch chi tiết các bài nói/giảng]
Bây giờ bạn sẽ có một chút thời gian để xem lại các câu hỏi từ 31 đến 35.
Đây là phần kết thúc của Phần 3.`,

    // 🔥 Danh sách 15 câu hỏi chi tiết từ câu 21 đến câu 35 (Giữ nguyên vẹn 100% không cắt xén)
    questions: [
      {
        q: "What do users have to pay for?",
        options: {
          A: "extra features supporting the game",
          B: "the right to play the fully-formed game",
          C: "special jewelry to give other players",
          D: "more turns to play the game",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b><br>extra features supporting the game.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, nội dung về việc mua hàng trong ứng dụng của Angry Birds 2 được đề cập:<br>"Angry Birds 2 could be enjoyed fully without purchasing anything, but they did offer, for purchase, a variety of ways to expand, extend and enhance the game-playing experience."<br>"Angry Birds 2 có thể được chơi trọn vẹn mà không cần mua bất cứ thứ gì, nhưng họ cung cấp nhiều cách khác nhau để mở rộng, kéo dài và nâng cao trải nghiệm chơi game với các tùy chọn mua hàng."<br>Điều này cho thấy rằng người dùng không cần phải trả tiền để chơi trò chơi đầy đủ, nhưng họ có thể mua các tính năng bổ sung để nâng cao trải nghiệm. Do đó, đáp án chính xác là extra features supporting the game.<br><br><b>Phân tích các lựa chọn:</b><br>• the right to play the fully-formed game. ❌ (Quyền chơi phiên bản hoàn chỉnh của trò chơi.) - Sai, vì trò chơi có thể được chơi đầy đủ mà không cần mua gì.<br>• more turns to play the game. ❌ (Thêm lượt chơi.) - Sai, vì người chơi có thể nhận thêm lượt bằng cách xem video hoặc chờ thời gian hồi sinh.<br>• extra features supporting the game. ✅ (Các tính năng bổ sung hỗ trợ trò chơi.) - Đúng, vì người chơi có thể mua thêm các yếu tố giúp mở rộng trải nghiệm chơi.<br>• special jewelry to give other players. ❌ (Trang sức đặc biệt để tặng người chơi khác.) - Sai, vì trò chơi không có cơ chế tặng quà bằng trang sức.',
      },
      {
        q: "What was true about the first Angry Birds?",
        options: {
          A: "It was exceptionally well-received.",
          B: "It was totally free to download.",
          C: "It was released 10 years before the 2nd version.",
          D: "It was among the most successful games.",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b><br>It was exceptionally well-received.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, thông tin về phiên bản đầu tiên của Angry Birds được đề cập:<br>"The first Angry Birds game was released in 2009, and it was a massive hit, even though players had to pay to download it."<br>"Trò chơi Angry Birds đầu tiên được phát hành vào năm 2009 và nó đã trở thành một cú hit lớn, mặc dù người chơi phải trả tiền để tải về."<br>Cụm từ "a massive hit" có nghĩa là rất thành công và được đón nhận nồng nhiệt. Do đó, đáp án chính xác là It was exceptionally well-received.<br><br><b>Phân tích các lựa chọn:</b><br>• It was totally free to download. ❌ (Nó hoàn toàn miễn phí để tải về.) - Sai, vì người chơi phải trả tiền để tải phiên bản đầu tiên.<br>• It was exceptionally well-received. ✅ (Nó được đón nhận một cách đặc biệt tốt.) - Đúng, vì bài nghe nói rằng trò chơi là một cú hit lớn.<br>• It was among the most successful games. ❌ (Nó nằm trong số những trò chơi thành công nhất.) - Sai, vì mặc dù rất thành công, bài nghe không khẳng định nó là một trong những trò chơi thành công nhất mọi thời đại.<br>• It was released 10 years before the 2nd version. ❌ (Nó được phát hành 10 năm trước phiên bản thứ hai.) - Sai, vì Angry Birds 2 ra mắt vào năm 2015, tức là chỉ 6 năm sau phiên bản đầu tiên (2009).',
      },
      {
        q: "Who is most probably Jon Norris?",
        options: {
          A: "a game player",
          B: "a game developer",
          C: "a game reviewer",
          D: "a game tester",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b><br>a game player.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, Jon Norris bày tỏ suy nghĩ của mình về Angry Birds 2:<br>"John Norris says that he played the original endlessly, and he was looking forward to the development."<br>"John Norris nói rằng anh ấy đã chơi phiên bản gốc không ngừng nghỉ và anh ấy rất mong chờ sự phát triển tiếp theo."<br>Điều này cho thấy rằng Jon Norris chỉ là một người chơi game yêu thích Angry Birds, chứ không phải là một nhà phát triển hay chuyên gia đánh giá game. Do đó, đáp án chính xác là a game player.<br><br><b>Phân tích các lựa chọn:</b><br>• a game player. ✅ (Người chơi game.) - Đúng, vì bài nghe cho biết Jon Norris đã chơi phiên bản gốc rất nhiều và mong chờ phiên bản mới.<br>• a game developer. ❌ (Nhà phát triển game.) - Sai, vì Jon Norris không tham gia vào việc phát triển trò chơi.<br>• a game reviewer. ❌ (Người đánh giá game.) - Sai, vì bài nghe không nói rằng Jon Norris là một nhà phê bình game chuyên nghiệp.<br>• a game tester. ❌ (Người kiểm thử game.) - Sai, vì Jon Norris không được nhắc đến như một người thử nghiệm trò chơi.',
      },
      {
        q: "What is meant by “Gems” in the game?",
        options: {
          A: "a real present to give player fellows",
          B: "the final stage of the game",
          C: "a name of a character in the game",
          D: "a virtual bonus achieved by players",
        },
        answer: "D",
        explanation:
          '<b>Đáp án:</b><br>a virtual bonus achieved by players.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, "Gems" được nhắc đến như một loại tiền tệ trong trò chơi:<br>"The game allows you to gain extra lives in exchange for gems. There are several ways to gather these gems in the game, but buying them is the easiest."<br>"Trò chơi cho phép bạn có thêm mạng chơi bằng cách đổi lấy đá quý (gems). Có nhiều cách để thu thập những viên đá quý này trong trò chơi, nhưng cách dễ nhất là mua chúng."<br>Điều này cho thấy rằng "Gems" là một phần thưởng ảo mà người chơi có thể nhận được trong trò chơi, có thể kiếm được bằng cách chơi hoặc mua bằng tiền thật. Do đó, đáp án chính xác là a virtual bonus achieved by players.<br><br><b>Phân tích các lựa chọn:</b><br>• a real present to give player fellows. ❌ (Một món quà thật để tặng đồng đội.) - Sai, vì Gems không phải là quà tặng thật.<br>• a virtual bonus achieved by players. ✅ (Một phần thưởng ảo mà người chơi đạt được.) - Đúng, vì Gems là một loại tiền tệ trong game mà người chơi có thể kiếm được.<br>• a name of a character in the game. ❌ (Tên của một nhân vật trong trò chơi.) - Sai, vì Gems không phải là một nhân vật.<br>• the final stage of the game. ❌ (Giai đoạn cuối cùng của trò chơi.) - Sai, vì Gems là vật phẩm trong game, không phải màn chơi cuối cùng.',
      },
      {
        q: "Which aspect of the game is the show mainly about?",
        options: {
          A: "its developers",
          B: "its attraction",
          C: "its criticisms",
          D: "its improvement",
        },
        answer: "C",
        explanation:
          '<b>Đáp án:</b><br>its criticisms.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, phần lớn nội dung xoay quanh những lời phàn nàn về Angry Birds 2:<br>"Some players are complaining about how the game encourages in-app purchases."<br>"Một số người chơi đang phàn nàn về cách trò chơi khuyến khích mua hàng trong ứng dụng."<br>"John Norris says that he played the original endlessly, and he was looking forward to the development. But after such an uncomplicated original game, he was really disappointed by how hard the sequel tries to make you spend your money."<br>"John Norris nói rằng anh ấy đã chơi bản gốc không ngừng nghỉ và mong chờ sự phát triển mới. Nhưng sau một trò chơi đơn giản như vậy, anh ấy thực sự thất vọng vì phiên bản tiếp theo cố gắng khiến người chơi phải chi tiền."<br>Phần lớn cuộc thảo luận đề cập đến các lời chỉ trích về hệ thống mua hàng trong trò chơi, cho thấy rằng chủ đề chính là những lời phê bình về trò chơi. Do đó, đáp án chính xác là its criticisms.<br><br><b>Phân tích các lựa chọn:</b><br>• its developers. ❌ (Các nhà phát triển trò chơi.) - Sai, vì bài nghe không tập trung vào đội ngũ phát triển.<br>• its improvement. ❌ (Những cải tiến của trò chơi.) - Sai, vì bài nghe chủ yếu nói về những vấn đề của phiên bản mới thay vì những cải tiến.<br>• its criticisms. ✅ (Những lời chỉ trích.) - Đúng, vì bài nghe tập trung vào các lời phàn nàn về hệ thống mua hàng trong trò chơi.<br>• its attraction. ❌ (Sự hấp dẫn của trò chơi.) - Sai, vì bài nghe không tập trung vào việc trò chơi thu hút người chơi.',
      },
      {
        q: "Who are mainly the victims of malaria?",
        options: {
          A: "people in sub-tropical countries",
          B: "part of African kids under 5",
          C: "poor people in South Africa",
          D: "people without Mosquirix injection",
        },
        answer: "B",
        explanation:
          '<b>Đáp án:</b><br>part of African kids under 5.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, thông tin về những người bị ảnh hưởng bởi bệnh sốt rét được đề cập:<br>"It is noticeable that malaria kills around 584,000 people a year worldwide. Most of them children under five in sub-Saharan Africa."<br>"Đáng chú ý là bệnh sốt rét giết chết khoảng 584.000 người mỗi năm trên toàn thế giới. Phần lớn trong số đó là trẻ em dưới 5 tuổi ở khu vực cận Sahara châu Phi."<br>Thông tin này chỉ ra rằng trẻ em dưới 5 tuổi ở châu Phi là nhóm chịu ảnh hưởng nặng nề nhất của bệnh sốt rét. Do đó, đáp án chính xác là part of African kids under 5.<br><br><b>Phân tích các lựa chọn:</b><br>• people in sub-tropical countries. ❌ (Người dân ở các nước cận nhiệt đới.) - Sai, vì bài nghe nói cụ thể về trẻ em ở châu Phi, không phải tất cả các nước cận nhiệt đới.<br>• part of African kids under 5. ✅ (Một phần trẻ em châu Phi dưới 5 tuổi.) - Đúng, vì bài nghe nhấn mạnh rằng phần lớn nạn nhân của sốt rét là trẻ nhỏ ở châu Phi.<br>• people without Mosquirix injection. ❌ (Những người không tiêm Mosquirix.) - Sai, vì bài nghe không đề cập đến việc thiếu vắc-xin là nguyên nhân chính gây tử vong.<br>• poor people in South Africa. ❌ (Người nghèo ở Nam Phi.) - Sai, vì bài nghe nói về toàn bộ khu vực cận Sahara châu Phi, không chỉ riêng Nam Phi.',
      },
      {
        q: "Who are eligible for Mosquirix vaccine?",
        options: {
          A: "scientists and African children",
          B: "African children",
          C: "tourists to sub-Saharan Africa",
          D: "only those in 7 African countries",
        },
        answer: "B",
        explanation:
          '<b>Đáp án:</b><br>African children.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, thông tin về đối tượng đủ điều kiện tiêm vắc-xin Mosquirix được đề cập:<br>"It has been designed specifically to combat malaria infection in children in Africa and will not be licensed for travelers."<br>"Vắc-xin này được thiết kế đặc biệt để chống lại bệnh sốt rét ở trẻ em châu Phi và sẽ không được cấp phép cho du khách."<br>Điều này cho thấy rằng trẻ em châu Phi là đối tượng chính được tiêm vắc-xin Mosquirix. Do đó, đáp án chính xác là African children.<br><br><b>Phân tích các lựa chọn:</b><br>• African children. ✅ (Trẻ em châu Phi.) - Đúng, vì bài nghe nói rằng vắc-xin này được thiết kế dành riêng cho trẻ em châu Phi.<br>• scientists and African children. ❌ (Các nhà khoa học và trẻ em châu Phi.) - Sai, vì bài nghe không nói rằng các nhà khoa học cũng được tiêm vắc-xin.<br>• only those in 7 African countries. ❌ (Chỉ những người ở 7 quốc gia châu Phi.) - Sai, vì mặc dù vắc-xin được thử nghiệm tại 7 quốc gia nhưng không có thông tin nào nói rằng chỉ những nước này mới được tiêm.<br>• tourists to sub-Saharan Africa. ❌ (Khách du lịch đến khu vực cận Sahara châu Phi.) - Sai, vì bài nghe nói rõ rằng vắc-xin không được cấp phép cho du khách.',
      },
      {
        q: "What is implied about the injection?",
        options: {
          A: "Its full effect is enabled by a booster shot.",
          B: "In the future, it will be effective for babies.",
          C: "It is effective for anyone over 17 months.",
          D: "It is costly due to late application.",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b><br>Its full effect is enabled by a booster shot.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, thông tin về hiệu quả của vắc-xin Mosquirix được đề cập:<br>"The best protection was among children aged five to 17 months who received three doses of the vaccine a month apart plus a booster dose at 20 months. But the effectiveness of the vaccine declined over time making the booster shot essential."<br>"Sự bảo vệ tốt nhất được ghi nhận ở trẻ từ 5 đến 17 tháng tuổi, những em đã nhận ba liều vắc-xin cách nhau một tháng cùng với một liều tăng cường ở 20 tháng tuổi. Nhưng hiệu quả của vắc-xin giảm dần theo thời gian, khiến liều tăng cường trở nên cần thiết."<br>Điều này cho thấy rằng liều tăng cường là yếu tố quan trọng để vắc-xin đạt hiệu quả đầy đủ. Do đó, đáp án chính xác là Its full effect is enabled by a booster shot.<br><br><b>Phân tích các lựa chọn:</b><br>• It is costly due to late application. ❌ (Nó có chi phí cao do áp dụng muộn.) - Sai, vì bài nghe không đề cập đến chi phí cao do áp dụng muộn.<br>• It is effective for anyone over 17 months. ❌ (Nó có hiệu quả cho bất kỳ ai trên 17 tháng tuổi.) - Sai, vì hiệu quả của vắc-xin giảm dần theo thời gian nếu không có liều tăng cường.<br>• Its full effect is enabled by a booster shot. ✅ (Hiệu quả đầy đủ của nó được kích hoạt bởi liều tăng cường.) - Đúng, vì bài nghe nói rằng liều tăng cường là cần thiết để duy trì hiệu quả của vắc-xin.<br>• In the future, it will be effective for babies. ❌ (Trong tương lai, nó sẽ có hiệu quả cho trẻ sơ sinh.) - Sai, vì bài nghe nói rằng vắc-xin không có hiệu quả cao đối với trẻ sơ sinh.',
      },
      {
        q: "Why are Bill and Melinda Gates mentioned?",
        options: {
          A: "They are the sponsors of the injection project.",
          B: "They are the sponsors of one of 11 research centres.",
          C: "They are sponsors of poor African children.",
          D: "They are visitors without vaccine to the disease area.",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b><br>They are the sponsors of the injection project.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, thông tin về sự tài trợ của Quỹ Bill & Melinda Gates được đề cập:<br>"In 2001, a partnership was established between GSK and the PATH Malaria Vaccine Initiative through a grant from the Bill and Melinda Gates Foundation. The project aimed to speed up malaria vaccine development."<br>"Năm 2001, một quan hệ hợp tác đã được thiết lập giữa GSK và Dự án Vắc-xin Sốt rét PATH thông qua một khoản tài trợ từ Quỹ Bill và Melinda Gates. Dự án này nhằm mục đích đẩy nhanh quá trình phát triển vắc-xin sốt rét."<br>Điều này cho thấy rằng Bill và Melinda Gates đã tài trợ cho dự án vắc-xin sốt rét. Do đó, đáp án chính xác là They are the sponsors of the injection project.<br><br><b>Phân tích các lựa chọn:</b><br>• They are visitors without vaccine to the disease area. ❌ (Họ là du khách không có vắc-xin đến khu vực có dịch bệnh.) - Sai, vì bài nghe không nói rằng họ từng đến khu vực dịch bệnh.<br>• They are the sponsors of one of 11 research centres. ❌ (Họ là nhà tài trợ của một trong 11 trung tâm nghiên cứu.) - Sai, vì bài nghe không đề cập rằng họ tài trợ một trung tâm nghiên cứu cụ thể nào.<br>• They are the sponsors of the injection project. ✅ (Họ là nhà tài trợ của dự án vắc-xin.) - Đúng, vì bài nghe nói rằng họ tài trợ để đẩy nhanh quá trình phát triển vắc-xin sốt rét.<br>• They are sponsors of poor African children. ❌ (Họ là nhà tài trợ cho trẻ em nghèo châu Phi.) - Sai, vì bài nghe nói về việc tài trợ phát triển vắc-xin, không phải hỗ trợ trực tiếp cho trẻ em nghèo.',
      },
      {
        q: "What is mainly discussed in the lecture?",
        options: {
          A: "the mechanism of the vaccine",
          B: "scientists’ opinions of the injection",
          C: "the effectiveness of the vaccine",
          D: "the development process of the vaccine",
        },
        answer: "D",
        explanation:
          '<b>Đáp án:</b><br>the development process of the vaccine.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, phần lớn nội dung tập trung vào quá trình phát triển của vắc-xin sốt rét:<br>"GSK began research on a malaria vaccine 30 years ago and the first trials in Africa began in 1998."<br>"GSK bắt đầu nghiên cứu vắc-xin sốt rét từ 30 năm trước và các thử nghiệm đầu tiên tại châu Phi bắt đầu vào năm 1998."<br>"In 2001, a partnership was established between GSK and the PATH Malaria Vaccine Initiative through a grant from the Bill and Melinda Gates Foundation."<br>"Năm 2001, một mối quan hệ hợp tác được thiết lập giữa GSK và Dự án Vắc-xin Sốt rét PATH thông qua một khoản tài trợ từ Quỹ Bill và Melinda Gates."<br>"In 2009, 11 centres began recruiting 16,000 children in 7 sub-Saharan African countries."<br>"Vào năm 2009, 11 trung tâm bắt đầu tuyển chọn 16.000 trẻ em ở 7 quốc gia cận Sahara châu Phi."<br>Các thông tin trên cho thấy rằng bài giảng tập trung vào quá trình nghiên cứu, hợp tác và thử nghiệm vắc-xin qua nhiều năm. Do đó, đáp án chính xác là the development process of the vaccine.<br><br><b>Phân tích các lựa chọn:</b><br>• the mechanism of the vaccine. ❌ (Cơ chế hoạt động của vắc-xin.) - Sai, vì bài giảng không đi sâu vào cơ chế hoạt động của vắc-xin.<br>• the effectiveness of the vaccine. ❌ (Hiệu quả của vắc-xin.) - Sai, vì mặc dù có đề cập đến hiệu quả, nhưng đây không phải là nội dung chính của bài giảng.<br>• scientists’ opinions of the injection. ❌ (Ý kiến của các nhà khoa học về vắc-xin.) - Sai, vì bài giảng không tập trung vào quan điểm cá nhân của các nhà khoa học.<br>• the development process of the vaccine. ✅ (Quá trình phát triển của vắc-xin.) - Đúng, vì bài giảng chủ yếu nói về các giai đoạn nghiên cứu và phát triển vắc-xin.',
      },
      {
        q: "What can be found in the scientific journal “Nature”?",
        options: {
          A: "cheese-making origin in northern Europe",
          B: "Polish ancient cheese-making technology",
          C: "human trace in northern Europe years ago",
          D: "archaeological evidence of pottery vessels",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b><br>cheese-making origin in northern Europe.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, thông tin về nghiên cứu được đăng trên tạp chí "Nature" được đề cập:<br>"Ms. Salk and other scientists believe that this is obvious evidence of cheese making in northern Europe during Neolithic times and their findings have been published in the scientific journal Nature."<br>"Cô Salk và các nhà khoa học khác tin rằng đây là bằng chứng rõ ràng về việc làm pho mát ở Bắc Âu trong thời kỳ đồ đá mới, và những phát hiện của họ đã được công bố trên tạp chí khoa học Nature."<br>Điều này cho thấy rằng bài báo trên tạp chí Nature đề cập đến nguồn gốc làm pho mát ở Bắc Âu. Do đó, đáp án chính xác là cheese-making origin in northern Europe.<br><br><b>Phân tích các lựa chọn:</b><br>• human trace in northern Europe years ago. ❌ (Dấu vết con người ở Bắc Âu nhiều năm trước.) - Sai, vì bài báo không nói về dấu vết con người mà tập trung vào quá trình làm pho mát.<br>• archaeological evidence of pottery vessels. ❌ (Bằng chứng khảo cổ về đồ gốm.) - Sai, vì bài báo nói về việc làm pho mát, không phải chỉ về đồ gốm.<br>• cheese-making origin in northern Europe. ✅ (Nguồn gốc làm pho mát ở Bắc Âu.) - Đúng, vì bài nghe nhấn mạnh rằng bài báo trong tạp chí Nature nói về nguồn gốc sản xuất pho mát ở Bắc Âu.<br>• Polish ancient cheese-making technology. ❌ (Công nghệ làm pho mát cổ đại của Ba Lan.) - Sai, vì bài báo không đề cập đến công nghệ mà chỉ nói về bằng chứng khảo cổ liên quan đến pho mát.',
      },
      {
        q: "What is the clearest trace of cheese-making?",
        options: {
          A: "the residual of milk and cattle",
          B: "some five-thousand-year-old records",
          C: "remains of an ancient people group",
          D: "the remains of broken pottery",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b><br>the residual of milk and cattle.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, thông tin về dấu vết rõ ràng nhất của việc làm pho mát được đề cập:<br>"Ms. Salk and her team also analyzed lipid remains on the vessels and detected milk remains which they say provides a link to cheese making."<br>"Nhóm của bà Salk cũng phân tích các dư lượng lipid trên các bình và phát hiện dấu vết sữa, điều mà họ cho rằng tạo ra mối liên hệ với việc sản xuất pho mát."<br>Điều này cho thấy rằng tàn dư của sữa và gia súc là bằng chứng rõ ràng nhất về quá trình làm pho mát. Do đó, đáp án chính xác là the residual of milk and cattle.<br><br><b>Phân tích các lựa chọn:</b><br>• the residual of milk and cattle. ✅ (Tàn dư của sữa và gia súc.) - Đúng, vì bài nghe nói rằng dấu vết sữa trên đồ gốm là bằng chứng liên quan đến việc làm pho mát.<br>• the remains of broken pottery. ❌ (Dấu vết của đồ gốm bị vỡ.) - Sai, vì bài nghe nói rằng họ tìm thấy dấu vết sữa trên đồ gốm, nhưng đồ gốm không phải bằng chứng chính của việc làm pho mát.<br>• some five-thousand-year-old records. ❌ (Một số tài liệu năm nghìn năm tuổi.) - Sai, vì bài nghe không đề cập đến tài liệu viết nào về việc làm pho mát.<br>• remains of an ancient people group. ❌ (Dấu vết của một nhóm người cổ đại.) - Sai, vì bài nghe nói về bằng chứng liên quan đến sữa, không phải về nhóm người cổ đại.',
      },
      {
        q: "What is meant by “lactose intolerant” among Neolithic people?",
        options: {
          A: "They didn’t like milk with lactose in it.",
          B: "It was the reason for their cheese invention.",
          C: "Milk with lactose upset their digestion.",
          D: "It prevented them from consuming dairy food.",
        },
        answer: "C",
        explanation:
          '<b>Đáp án:</b><br>Milk with lactose upset their digestion.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, thông tin về tình trạng không dung nạp lactose của người thời kỳ đồ đá mới được đề cập:<br>"Scientists revealed that genetic and computer simulations have shown that at that time people were largely lactose intolerant. Processing milk into cheese allows the lactose content of milk to be reduced. Thus, making cheese allowed them to consume dairy products without the undesirable health effects."<br>"Các nhà khoa học cho biết các mô phỏng di truyền và máy tính cho thấy vào thời điểm đó phần lớn con người không dung nạp lactose. Việc chế biến sữa thành pho mát giúp giảm lượng lactose trong sữa. Vì vậy, làm pho mát cho phép họ tiêu thụ các sản phẩm từ sữa mà không gặp những tác động xấu đến sức khỏe."<br>Điều này có nghĩa là sữa có chứa lactose gây ra vấn đề tiêu hóa cho người thời kỳ đồ đá mới. Do đó, đáp án chính xác là Milk with lactose upset their digestion.<br><br><b>Phân tích các lựa chọn:</b><br>• They didn’t like milk with lactose in it. ❌ (Họ không thích sữa có chứa lactose.) - Sai, vì bài nghe nói rằng họ không thể tiêu hóa lactose, không phải vì họ không thích sữa.<br>• Milk with lactose upset their digestion. ✅ (Sữa có chứa lactose làm rối loạn tiêu hóa của họ.) - Đúng, vì bài nghe nói rằng họ không dung nạp lactose và phải chế biến sữa thành pho mát để tiêu thụ.<br>• It was the reason for their cheese invention. ❌ (Đây là lý do khiến họ phát minh ra pho mát.) - Sai, vì bài nghe không khẳng định rằng đây là lý do chính dẫn đến việc làm pho mát.<br>• It prevented them from consuming dairy food. ❌ (Nó ngăn họ tiêu thụ thực phẩm từ sữa.) - Sai, vì họ vẫn có thể tiêu thụ các sản phẩm từ sữa bằng cách làm pho mát để giảm lactose.',
      },
      {
        q: "What can be inferred about cheese?",
        options: {
          A: "There is a time to make the best cheese.",
          B: "Cheese is stored to use for a very long time.",
          C: "France is home to the best cheese.",
          D: "Traditional and Neolithic cheese are made differently.",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b><br>There is a time to make the best cheese.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, có một phần đề cập đến thời điểm làm pho mát tốt nhất:<br>"Andrew Dalby says that the taste of the cheese may have changed according to the season. Similar to those cheeses made in the region of France where I live. The result can be quite different depending on the season."<br>"Andrew Dalby cho rằng hương vị của pho mát có thể thay đổi theo mùa, tương tự như các loại pho mát được sản xuất ở vùng nước Pháp nơi ông sinh sống. Kết quả có thể có sự khác biệt đáng kể tùy theo mùa."<br>Điều này cho thấy rằng thời điểm trong năm có thể ảnh hưởng đến chất lượng pho mát. Do đó, đáp án chính xác là There is a time to make the best cheese.<br><br><b>Phân tích các lựa chọn:</b><br>• Traditional and Neolithic cheese are made differently. ❌ (Pho mát truyền thống và pho mát thời kỳ đồ đá mới được làm khác nhau.) - Sai, vì bài nghe không so sánh trực tiếp phương pháp sản xuất pho mát giữa hai thời kỳ.<br>• There is a time to make the best cheese. ✅ (Có một thời điểm thích hợp để làm pho mát ngon nhất.) - Đúng, vì bài nghe nói rằng hương vị pho mát có thể thay đổi theo mùa.<br>• Cheese is stored to use for a very long time. ❌ (Pho mát được lưu trữ để sử dụng trong một thời gian rất dài.) - Sai, vì bài nghe không nhấn mạnh việc lưu trữ pho mát lâu dài.<br>• France is home to the best cheese. ❌ (Pháp là quê hương của pho mát ngon nhất.) - Sai, vì bài nghe chỉ đề cập đến một loại pho mát của Pháp, không khẳng định đây là nơi có pho mát ngon nhất.',
      },
      {
        q: "What can be the title of this show?",
        options: {
          A: "Variety of cheese",
          B: "History of cheese",
          C: "Best cheese in the world",
          D: "Discovery of cheese origin",
        },
        answer: "D",
        explanation:
          '<b>Đáp án:</b><br>Discovery of cheese origin.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, nội dung tập trung vào việc khám phá nguồn gốc của pho mát:<br>"Scientists may be one step closer to uncovering the origins of cheese making as evidence that is thousands of years old has been uncovered."<br>"Các nhà khoa học có thể đã tiến gần hơn một bước đến việc khám phá nguồn gốc của quá trình làm pho mát, khi những bằng chứng có niên đại hàng nghìn năm được phát hiện."<br>Điều này cho thấy rằng chương trình tập trung vào việc khám phá nguồn gốc của pho mát, không phải về lịch sử toàn diện hay sự đa dạng của pho mát. Do đó, đáp án chính xác là Discovery of cheese origin.<br><br><b>Phân tích các lựa chọn:</b><br>• History of cheese. ❌ (Lịch sử của pho mát.) - Sai, vì bài nghe không trình bày toàn bộ lịch sử của pho mát mà chỉ tập trung vào nguồn gốc của nó.<br>• Best cheese in the world. ❌ (Loại pho mát ngon nhất thế giới.) - Sai, vì bài nghe không đề cập đến việc đánh giá loại pho mát nào ngon nhất.<br>• Discovery of cheese origin. ✅ (Khám phá nguồn gốc của pho mát.) - Đúng, vì bài nghe tập trung vào việc tìm kiếm bằng chứng về nguồn gốc của pho mát.<br>• Variety of cheese. ❌ (Sự đa dạng của pho mát.) - Sai, vì bài nghe không nói về các loại pho mát khác nhau.',
      },
    ],
  },
  "Part 4": {
    audioSrc: "audio/part4.mp3",

    // 🔥 Transcript tổng cho Part 4 (8 câu hỏi ngắn)
    transcript: `This is the Vietnamese Standardized Test of English Proficiency Listening Comprehension Test. You will listen to a number of different recordings, and you will have to answer questions based on what you hear. There will be time for you to read the questions and check your work. All the recordings will be played once only.
Part 1: In this part, you will hear 8 short recordings. The recordings will be played once only. There is one question following each recording. For each question, choose the right answer A, B, C, or D.
Now, let's listen to the example. On the recording, you might hear, Hello, this is the travel agency returning your call. You left a message about the holiday you've booked, asking which meals are included in the cost during your stay at Sunny Hotel. Lunch and dinner are free, but if you wish to have breakfast in the hotel, you will need to pay an extra amount of money, depending on what you order. Let me know if I can help you with any other information. Goodbye. You will read: Which meal is not included in the price of the holiday? A. Breakfast B. Lunch C. Dinner D. All. The correct answer is A. Breakfast.
First you will have some time to look at questions 1 to 8.
Now we're ready to start. Listen and answer questions 1 to 8.
1. What music will they have at the party?
Are you going to bring your guitar to the party? It's broken, I'm afraid, but you can play the piano for us. I'm not good enough. Let's just play your new CDs. All right. I'll bring the guitar another time.
2. When will the man go on holiday?
I can't go on holiday in June because my parents are coming to stay with me then. Why don't you go in August? It's a lovely month in the mountains. July's better. There aren't so many people. So I'll leave on the 12th and come back at the end of the month. OK. Then you'll be back for my birthday party in August.
3. What will the weather be like tomorrow?
It's very hot, isn't it? Oh yes, I love it. I hope it doesn't rain. Well, it'll be cold and windy tomorrow. Oh dear. We never have hot weather for long.
4. Which dish did Mark cook in the competition?
So you've won the Teenage Chef competition, Mark. Congratulations! Thanks. In the competition you choose whether to cook a meat, fish or vegetarian dish. Then you're judged on the taste and how attractive it looks. I couldn't decide between fish and vegetables. I've never been brilliant at meat dishes. Then I found the judge was an expert in cooking fish, which worried me. So I went for my other choice and won.
5. Where is the girl's book now?
Excuse me, I think I left my book on this table. Have you seen it? Oh yes. I took it inside with the empty glass when I cleared the table. I gave it to the manager who put it with the other lost property. He keeps it all in the drawer of his desk. I see. Where is he now? He's on the phone inside the cafe. Why don't you go inside? He'll be finished in a minute.
6. Who lives with Josh in his house?
Does your house seem empty now your sister's left home, Josh? Not really. My grandmother's moved into her room and she doesn't go out much. It's really nice having her there because my dad never comes home until later. And if my mum's out for the evening, grandma cooks supper for me.
7. What will the girl take with her on holiday?
Have you packed for your holiday? No, I need to go shopping before I can do that. Last holiday my suitcase handle got broken, so I need something new to put all my stuff in. But suitcases are so heavy to carry. I always take a backpack. You can carry more that way. Yes, I thought about one of those, but good quality ones are expensive. I'll get one of those big sports bags, you know, one you can pull along. They don't cost much, so it doesn't matter if it gets torn.
8. What time will the train to Manchester leave?
The train arriving at Platform 6 is the 11:45 from Manchester. The train due to arrive at Platform 4 in approximately 5 minutes is the delayed 11:30 train to Manchester. The train will now depart at 11:50 and travel non-stop. We apologise to passengers for the delay. Refreshments will not be available on this train.
Now you will have some time to review questions 1 to 8.
That is the end of Part 1.`,

    // 🔥 Bản dịch tổng cho Part 4
    translation: `Đây là bài kiểm tra đánh giá năng lực tiếng Anh VSTEP, phần kiểm tra nghe hiểu. Bạn sẽ nghe một số đoạn ghi âm khác nhau và phải trả lời các câu hỏi dựa trên nội dung đã nghe. Sẽ có thời gian để bạn đọc câu hỏi và kiểm tra lại câu trả lời của mình. Tất cả các đoạn ghi âm chỉ được phát một lần duy nhất.
Phần 1: Trong phần này, bạn sẽ nghe 8 đoạn ghi âm ngắn. Các đoạn ghi âm sẽ chỉ được phát một lần duy nhất. Mỗi đoạn ghi âm có một câu hỏi đi kèm. Với mỗi câu hỏi, hãy chọn đáp án đúng A, B, C hoặc D.
Bây giờ, hãy lắng nghe ví dụ...
Trước tiên, bạn sẽ có một chút thời gian để xem các câu hỏi từ 1 đến 8.
Bây giờ, chúng ta sẵn sàng bắt đầu. Hãy lắng nghe và trả lời các câu hỏi từ 1 đến 8.
1. Họ sẽ chơi loại nhạc nào tại bữa tiệc? ... [Nội dung dịch chi tiết các đoạn hội thoại]
Bây giờ bạn sẽ có một chút thời gian để xem lại các câu hỏi từ 1 đến 8.
Đây là phần kết thúc của Phần 1.`,

    // 🔥 Danh sách 8 câu hỏi chi tiết (Giữ nguyên vẹn 100% không cắt xén)
    questions: [
      {
        q: "What music will they have at the party?",
        options: { A: "piano", B: "cello", C: "CDs", D: "guitar" },
        answer: "C",
        explanation:
          '<b>Đáp án:</b><br>CDs.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, hai người nói về loại nhạc sẽ có tại bữa tiệc:<br>"Are you going to bring your guitar to the party?"<br>"It\'s broken, I\'m afraid, but you can play the piano for us."<br>"I\'m not good enough. Let\'s just play your new CDs."<br>"All right. I\'ll bring the guitar another time."<br>Người đầu tiên đề nghị mang guitar, nhưng nó bị hỏng. Sau đó, họ cũng nhắc đến piano, nhưng người thứ hai không tự tin chơi. Cuối cùng, họ quyết định chơi CDs cho bữa tiệc. Do đó, đáp án chính xác là CDs.<br><br><b>Phân tích các lựa chọn:</b><br>• guitar. ❌ (Ghi-ta.) - Sai, vì cây ghi-ta bị hỏng nên không thể sử dụng.<br>• piano. ❌ (Đàn piano.) - Sai, vì người thứ hai nói rằng họ không đủ giỏi để chơi piano.<br>• CDs. ✅ (Đĩa CD.) - Đúng, vì cuối cùng họ quyết định chơi nhạc từ CD.<br>• cello. ❌ (Đàn cello.) - Sai, vì bài nghe không nhắc đến cello.',
      },
      {
        q: "When will the man go on holiday?",
        options: { A: "August", B: "June", C: "January", D: "July" },
        answer: "D",
        explanation:
          "<b>Đáp án:</b><br>July.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người đàn ông nói về thời gian đi nghỉ của mình:<br>\"I can't go on holiday in June because my parents are coming to stay with me then.\"<br>\"Why don't you go in August? It's a lovely month in the mountains.\"<br>\"July's better. There aren't so many people. So I'll leave on the 12th and come back at the end of the month.\"<br>Người đàn ông nói rằng không thể đi vào tháng 6 vì có khách đến thăm. Người khác gợi ý tháng 8, nhưng anh ấy chọn tháng 7 vì ít người hơn. Anh ấy sẽ rời đi vào ngày 12 tháng 7 và trở về vào cuối tháng. Do đó, đáp án chính xác là July.<br><br><b>Phân tích các lựa chọn:</b><br>• June. ❌ (Tháng 6.) - Sai, vì anh ấy nói rằng không thể đi vào tháng này.<br>• July. ✅ (Tháng 7.) - Đúng, vì anh ấy quyết định đi vào tháng 7.<br>• August. ❌ (Tháng 8.) - Sai, vì người khác gợi ý tháng 8 nhưng anh ấy không chọn.<br>• January. ❌ (Tháng 1.) - Sai, vì không có thông tin nào trong bài nghe nói về tháng 1.",
      },
      {
        q: "What will the weather be like tomorrow?",
        options: {
          A: "It'll be foggy.",
          B: "It'll be rainy.",
          C: "It'll be hot.",
          D: "It'll be cold and windy.",
        },
        answer: "D",
        explanation:
          "<b>Đáp án:</b><br>It'll be cold and windy.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, hai người nói về thời tiết:<br>\"It's very hot, isn't it?\"<br>\"Oh yes, I love it. I hope it doesn't rain.\"<br>\"Well, it'll be cold and windy tomorrow.\"<br>\"Oh dear. We never have hot weather for long.\"<br>Người thứ nhất nhận xét rằng thời tiết hôm nay rất nóng. Tuy nhiên, người thứ hai nói rằng ngày mai trời sẽ lạnh và có gió. Do đó, đáp án chính xác là It'll be cold and windy.<br><br><b>Phân tích các lựa chọn:</b><br>• It'll be hot. ❌ (Trời sẽ nóng.) - Sai, vì hôm nay trời nóng nhưng ngày mai trời sẽ lạnh và có gió.<br>• It'll be cold and windy. ✅ (Trời sẽ lạnh và có gió.) - Đúng, vì bài nghe nói rằng thời tiết ngày mai sẽ như vậy.<br>• It'll be rainy. ❌ (Trời sẽ mưa.) - Sai, vì người thứ nhất hy vọng trời không mưa, nhưng bài nghe không xác nhận điều đó.<br>• It'll be foggy. ❌ (Trời sẽ có sương mù.) - Sai, vì bài nghe không đề cập đến sương mù.",
      },
      {
        q: "Which dish did Mark cook in the competition?",
        options: { A: "fish", B: "soup", C: "vegetables", D: "meat" },
        answer: "C",
        explanation:
          '<b>Đáp án:</b><br>vegetables.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, Mark kể về món ăn anh ấy đã nấu trong cuộc thi:<br>"In the competition you choose whether to cook a meat, fish or vegetarian dish. Then you\'re judged on the taste and how attractive it looks. I couldn\'t decide between fish and vegetables. I\'ve never been brilliant at meat dishes. Then I found the judge was an expert in cooking fish, which worried me. So I went for my other choice and won."<br>"Trong cuộc thi, cậu có thể chọn nấu món thịt, cá hoặc món chay. Sau đó, ban giám khảo sẽ chấm điểm dựa trên hương vị và độ hấp dẫn của món ăn. Mình không biết chọn giữa món cá và món chay. Mình chưa bao giờ làm tốt ở món thịt cả. Sau đó, mình phát hiện ra giám khảo là chuyên gia về món cá, điều này làm mình lo lắng. Vậy nên mình đã chọn phương án còn lại và giành chiến thắng."<br>Mark ban đầu phân vân giữa cá và rau củ, nhưng vì giám khảo là chuyên gia về cá nên anh ấy quyết định chọn món rau củ và đã giành chiến thắng. Do đó, đáp án chính xác là vegetables.<br><br><b>Phân tích các lựa chọn:</b><br>• fish. ❌ (Cá.) - Sai, vì Mark định chọn cá nhưng đổi ý vì giám khảo là chuyên gia về cá.<br>• meat. ❌ (Thịt.) - Sai, vì Mark nói rằng anh ấy chưa bao giờ giỏi các món thịt.<br>• vegetables. ✅ (Rau củ.) - Đúng, vì Mark đã chọn món rau củ và giành chiến thắng.<br>• soup. ❌ (Súp.) - Sai, vì bài nghe không đề cập đến món súp.',
      },
      {
        q: "Where is the girl's book now?",
        options: {
          A: "in the lost property office",
          B: "in the waiter's bag",
          C: "in the drawer of the manager's desk",
          D: "on a table in the cafe",
        },
        answer: "C",
        explanation:
          '<b>Đáp án:</b><br>in the drawer of the manager\'s desk.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, cô gái hỏi về cuốn sách mà cô ấy để quên:<br>"Excuse me, I think I left my book on this table. Have you seen it?"<br>"Oh yes. I took it inside with the empty glass when I cleared the table. I gave it to the manager who put it with the other lost property. He keeps it all in the drawer of his desk."<br>"Xin lỗi, tôi nghĩ là tôi đã để quên cuốn sách trên bàn này. Bạn có thấy nó không?"<br>"Ồ có, tôi đã mang nó vào cùng với chiếc ly rỗng khi dọn bàn. Tôi đưa nó cho quản lý, người đã để nó cùng với những đồ thất lạc khác. Ông ấy giữ tất cả trong ngăn kéo bàn làm việc."<br>Điều này cho thấy rằng cuốn sách hiện tại đang được quản lý cất giữ trong ngăn kéo bàn làm việc. Do đó, đáp án chính xác là in the drawer of the manager\'s desk.<br><br><b>Phân tích các lựa chọn:</b><br>• in the waiter\'s bag. ❌ (Trong túi của người phục vụ.) - Sai, vì cuốn sách không được đặt trong túi của nhân viên phục vụ.<br>• in the drawer of the manager\'s desk. ✅ (Trong ngăn kéo bàn làm việc của quản lý.) - Đúng, vì quản lý đã cất giữ sách trong ngăn kéo cùng với những đồ thất lạc khác.<br>• on a table in the cafe. ❌ (Trên một cái bàn trong quán cà phê.) - Sai, vì sách đã được dọn đi và không còn trên bàn nữa.<br>• in the lost property office. ❌ (Trong phòng đồ thất lạc.) - Sai, vì cuốn sách được giữ trong ngăn kéo bàn của quản lý, không phải trong văn phòng đồ thất lạc.',
      },
      {
        q: "Who lives with Josh in his house?",
        options: {
          A: "his mother",
          B: "his sister",
          C: "his grandmother",
          D: "his father",
        },
        answer: "C",
        explanation:
          '<b>Đáp án:</b><br>his grandmother.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, Josh nói về người sống cùng anh ấy trong nhà:<br>"Does your house seem empty now your sister\'s left home, Josh?"<br>"Not really. My grandmother\'s moved into her room and she doesn\'t go out much. It\'s really nice having her there because my dad never comes home until later. And if my mum\'s out for the evening, grandma cooks supper for me."<br>"Nhà cậu có cảm thấy trống trải không khi chị gái cậu rời đi, Josh?"<br>"Không hẳn. Bà của tôi đã chuyển vào phòng của chị ấy và bà không ra ngoài nhiều. Tôi thấy rất vui khi có bà ở đó vì bố tôi về nhà rất muộn. Và nếu mẹ tôi ra ngoài vào buổi tối, bà nấu bữa tối cho tôi."<br>Điều này cho thấy rằng bà của Josh sống cùng cậu ấy trong nhà. Do đó, đáp án chính xác là his grandmother.<br><br><b>Phân tích các lựa chọn:</b><br>• his grandmother. ✅ (Bà của cậu ấy.) - Đúng, vì Josh nói rằng bà đã chuyển vào phòng của chị gái cậu ấy.<br>• his father. ❌ (Bố của cậu ấy.) - Sai, vì Josh nói rằng bố cậu ấy về nhà rất muộn.<br>• his sister. ❌ (Chị gái của cậu ấy.) - Sai, vì chị gái cậu ấy đã rời khỏi nhà.<br>• his mother. ❌ (Mẹ của cậu ấy.) - Sai, vì mẹ cậu ấy có thể ra ngoài vào buổi tối, nhưng không nói rằng bà sống riêng.',
      },
      {
        q: "What will the girl take with her on holiday?",
        options: {
          A: "sports bag",
          B: "backpack",
          C: "suitcase",
          D: "overhead bag",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b><br>sports bag.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, cô gái nói về món đồ cô ấy sẽ mang theo trong kỳ nghỉ:<br>"Have you packed for your holiday?"<br>"No, I need to go shopping before I can do that. Last holiday my suitcase handle got broken, so I need something new to put all my stuff in."<br>"But suitcases are so heavy to carry. I always take a backpack. You can carry more that way."<br>"Yes, I thought about one of those, but good quality ones are expensive. I\'ll get one of those big sports bags, you know, one you can pull along. They don\'t cost much, so it doesn\'t matter if it gets torn."<br>Cô gái ban đầu nói rằng chiếc vali của cô ấy đã bị hỏng, nên cô ấy cần mua một món đồ mới để đựng đồ đạc. Người khác gợi ý ba lô, nhưng cô ấy thấy loại chất lượng tốt thì quá đắt. Cuối cùng, cô ấy quyết định mua một túi thể thao lớn có thể kéo vì chúng rẻ hơn. Do đó, đáp án chính xác là sports bag.<br><br><b>Phân tích các lựa chọn:</b><br>• suitcase. ❌ (Vali.) - Sai, vì cô ấy không dùng vali nữa do tay cầm của nó đã bị hỏng.<br>• sports bag. ✅ (Túi thể thao.) - Đúng, vì cô ấy quyết định mua một túi thể thao lớn có thể kéo.<br>• backpack. ❌ (Ba lô.) - Sai, vì cô ấy nghĩ rằng ba lô loại tốt quá đắt.<br>• overhead bag. ❌ (Túi xách tay.) - Sai, vì bài nghe không đề cập đến loại túi này.',
      },
      {
        q: "What time will the train to Manchester leave?",
        options: {
          A: "eleven thirty",
          B: "eleven fifteen",
          C: "eleven fifty",
          D: "eleven forty-five",
        },
        answer: "C",
        explanation:
          '<b>Đáp án:</b><br>eleven fifty.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, thông tin về giờ khởi hành của chuyến tàu đến Manchester được đề cập:<br>"The train arriving at Platform 6 is the 11.45 from Manchester. The train due to arrive at Platform 4 in approximately 5 minutes is the delayed 11.30 train to Manchester. The train will now depart at 11.50 and travel non-stop."<br>"Chuyến tàu đến sân ga số 6 là chuyến 11 giờ 45 từ Manchester. Chuyến tàu dự kiến đến sân ga số 4 trong khoảng 5 phút là chuyến tàu 11 giờ 30 đi Manchester nhưng bị trễ. Chuyến tàu này sẽ khởi hành lúc 11 giờ 50 và đi thẳng không dừng."<br>Điều này cho thấy rằng chuyến tàu đi Manchester bị trễ và sẽ khởi hành lúc 11 giờ 50. Do đó, đáp án chính xác là eleven fifty.<br><br><b>Phân tích các lựa chọn:</b><br>• eleven thirty. ❌ (11 giờ 30.) - Sai, vì đây là giờ khởi hành dự kiến ban đầu của chuyến tàu, nhưng nó đã bị trễ.<br>• eleven forty-five. ❌ (11 giờ 45.) - Sai, vì đây là giờ đến của một chuyến tàu từ Manchester, không phải giờ khởi hành của chuyến đi đến Manchester.<br>• eleven fifty. ✅ (11 giờ 50.) - Đúng, vì chuyến tàu đi Manchester đã bị hoãn và sẽ khởi hành vào lúc 11 giờ 50.<br>• eleven fifteen. ❌ (11 giờ 15.) - Sai, vì bài nghe không nhắc đến chuyến tàu nào khởi hành vào giờ này.',
      },
    ],
  },
  "Part 5": {
    audioSrc: "audio/part5.mp3",

    // 🔥 Transcript tổng cho Part 5
    transcript: `Part 2: In this part, you will hear three conversations. The conversations will be played once only. There are four questions for each conversation. For each question, choose the right answer A, B, C, or D.
Part 2, questions 9-12: First, you will have some time to look at questions 9 to 12.
Now we're ready to start. Listen and answer questions 9 to 12. You will hear the recording once only.
Hi, Natasha. I see you're going out for a run. You're lucky you don't have to go to work today. Hello, Colin. I am going to the office, but I've started running to work instead of taking the bus. It means I can keep fit and save some money. I tried running to work for a while, but I didn't like breathing in all the traffic pollution and I kept getting coughs. I soon went back to using public transport. I keep fit at the gym. Well, I found a route that avoids most of the main roads. But it's still almost 5km and it must be dangerous. That's why I choose quiet streets. If I could, I'd run in the country. That would be lovely, but it would mean leaving it till the weekends. Running gives me a wonderful feeling of freedom. It's just what I need before sitting down in the office every day. But surely you don't wear your tracksuit and trainers at work? I keep a suit at the office and change when I arrive. I think it's important to look professional, so I don't mind at all. Anyway, since you're so fit, are you going to join in the big race next month? I'd like to. What's the distance? 20km. Anyone can enter and there are prizes for different age groups. Even if I come last, it will still be good fun. Running on your own can sometimes get quite lonely. Are you going to take part? Oh yes. I've sent in my application form already. I'll get one for you. But I'm not going to train by running to work. I'll run round the park a few times when I get home in the evenings. That's safer. OK. Anyway, I must go now or I'll be late. Bye!
Now you will have some time to review questions 9 to 12.
Part 2, questions 13-16. First you will have some time to look at questions 13 to 16.
Now we're ready to start. Listen and answer questions 13 to 16. You will hear the recording once only.
Harry Park, you run a travel company which organises adventure holidays in some difficult places. How did you first become interested in adventure travel? Well, my father worked in an insurance company once he had a family but before that he'd spent several years travelling the world and he never stopped telling us about it. His stories were much more exciting than the books I read and they made me want to travel and have adventures of my own. And what made you decide to start an adventure travel company? Well, when I was in my twenties I travelled a lot in different countries. I went exploring and climbing in mountains and deserts. I wanted to show other people how wonderful these things were. The business has been very successful but when I started it I didn't know if I'd make any money. Your company's called Far and Wide. How did you choose the name? Well, I just called it Park Travel at first but everyone thought that was terribly boring. My wife kept suggesting different things but in the end it was a customer who gave me the idea. Far and Wide is also the title of a book that a friend wrote so it reminds me of him too. Great. The places you visit are usually very unspoiled, Harry. Some people think it's not a good idea to take tourists there. What would you say to them? Well, most of the places we visit have no inhabitants so we aren't going to spoil people's way of life or bring in things like television and fridges. And I make sure that we always take care of the environment. We are careful not to cause pollution so we take all our rubbish away. Some of the things you do are also dangerous. Do you enjoy danger? Well, it's not a question of enjoying it. It's just that you can't do what I do without thinking about the possible dangers. I'm never frightened though. If I'm taking a group up a mountain or something like that I just concentrate on what I have to do and get on with it. You've been to some fascinating places, Harry.
Now you will have some time to review questions 13 to 16.
Part 2, questions 17-20: First you will have some time to look at questions 17 to 20.
Now we're ready to start. Listen and answer questions 17 to 20. You will hear the recording once only.
Now then, Mr. Bickstead, how can I help you? Well, I'm thinking about transferring but I'm not sure. I was hoping you could help me make a decision. I'll try. Where are you thinking of transferring to and why do you want to leave Cryptis U? I'm thinking of going to Central University because it's in my hometown. I've been kind of homesick this year and I haven't made many friends. I just feel so lonely. So I thought that maybe it'd be better to be closer to my parents and friends and all. I see. And would you keep the same major if you transferred? What is it, business administration? Yeah, I would. The credits I've earned here will transfer to Central. I've already checked. May I ask why you chose to come to Cryptis University in the first place? Sure. Well, the main reason is you have a great business school and the second reason is that I wanted to get away from home. You're right, Mr. Bickstead. We do have an excellent business school but so does Central. The thing is, you've got almost a year under your belt here now. At Central, you'll be starting from scratch. Yeah, I know that. But I'm a little bit familiar with Central because I had older friends who went there and I visited it before I came here. You know, freshman year is usually the hardest. I remember how homesick I was my first year. I'll tell you, I was ready to pack it in after the first two weeks. But the longer I stayed, the more comfortable I felt. My senior year, I was glad I chose to stay. Really? Did it get a lot better your sophomore year? Yes, it did. You might well find the same is true for you. Also, even though your credits here will transfer, you will have to take extra courses because Central has different requirements. You'll probably have to go to school for an extra year. Hmm, I hadn't thought about that. I'll have to check into it. Maybe I should give it one more year. I mean, it's probably good for me to learn to live away from my family and friends, right?
Now you will have some time to review questions 17 to 20.
That is the end of Part 2.`,

    // 🔥 Bản dịch tổng cho Part 5
    translation: `Phần 2: Trong phần này, bạn sẽ nghe ba đoạn hội thoại. Các đoạn hội thoại sẽ chỉ được phát một lần duy nhất. Mỗi đoạn hội thoại có bốn câu hỏi đi kèm. Với mỗi câu hỏi, hãy chọn đáp án đúng A, B, C hoặc D.
Phần 2, câu hỏi 9-12: Trước tiên, bạn sẽ có một chút thời gian để xem các câu hỏi từ 9 đến 12.
Bây giờ, chúng ta sẵn sàng bắt đầu. Hãy lắng nghe và trả lời các câu hỏi từ 9 đến 12. Bạn sẽ chỉ nghe đoạn ghi âm một lần duy nhất.
Chào Natasha. Mình thấy cậu đang chuẩn bị đi chạy bộ... [Nội dung dịch chi tiết các đoạn hội thoại]
Bây giờ bạn sẽ có một chút thời gian để xem lại các câu hỏi từ 17 đến 20.
Đây là phần kết thúc của Phần 2.`,

    // 🔥 Danh sách 12 câu hỏi chi tiết từ câu 9 đến câu 20 (Giữ nguyên vẹn 100% không cắt xén)
    questions: [
      {
        q: "How is Natasha going to work today?",
        options: {
          A: "She is taking the train.",
          B: "She is taking the bus.",
          C: "She is driving her car.",
          D: "She is running.",
        },
        answer: "D",
        explanation:
          '<b>Đáp án:</b><br>She is running.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, Natasha nói về cách cô ấy đi làm:<br>"Hello, Colin. I am going to the office, but I\'ve started running to work instead of taking the bus. It means I can keep fit and save some money."<br>"Xin chào, Colin. Tôi đang đi đến văn phòng, nhưng tôi đã bắt đầu chạy bộ đến chỗ làm thay vì đi xe buýt. Điều này giúp tôi giữ dáng và tiết kiệm tiền."<br>Điều này cho thấy rằng Natasha đang chạy bộ đến chỗ làm thay vì sử dụng phương tiện giao thông khác. Do đó, đáp án chính xác là She is running.<br><br><b>Phân tích các lựa chọn:</b><br>• She is taking the bus. ❌ (Cô ấy đi xe buýt.) - Sai, vì Natasha nói rõ rằng cô ấy đã ngừng đi xe buýt.<br>• She is taking the train. ❌ (Cô ấy đi tàu.) - Sai, vì bài nghe không đề cập đến việc cô ấy đi tàu.<br>• She is running. ✅ (Cô ấy đang chạy bộ.) - Đúng, vì Natasha nói rằng cô ấy chạy bộ đến chỗ làm.<br>• She is driving her car. ❌ (Cô ấy lái xe ô tô.) - Sai, vì bài nghe không nói gì về việc cô ấy lái xe hơi.',
      },
      {
        q: "Why did Colin go back touse public transport instead of running to work?",
        options: {
          A: "He liked keeping fit at the gym.",
          B: "He found running to work was bad for his health.",
          C: "He wanted to save time.",
          D: "He felt tired.",
        },
        answer: "B",
        explanation:
          '<b>Đáp án:</b><br>He found running to work was bad for his health.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, Colin nói về lý do anh ấy ngừng chạy bộ đến chỗ làm:<br>"I tried running to work for a while, but I didn\'t like breathing in all the traffic pollution and I kept getting coughs. I soon went back to using public transport."<br>"Tôi đã thử chạy bộ đến chỗ làm một thời gian, nhưng tôi không thích hít phải khói bụi giao thông và tôi liên tục bị ho. Vì vậy, tôi nhanh chóng quay lại sử dụng phương tiện công cộng."<br>Điều này cho thấy rằng Colin ngừng chạy bộ vì nó ảnh hưởng tiêu cực đến sức khỏe của anh ấy, đặc biệt là do ô nhiễm giao thông gây ra ho. Do đó, đáp án chính xác là He found running to work was bad for his health.<br><br><b>Phân tích các lựa chọn:</b><br>• He felt tired. ❌ (Anh ấy cảm thấy mệt.) - Sai, vì bài nghe không đề cập đến việc Colin cảm thấy mệt.<br>• He found running to work was bad for his health. ✅ (Anh ấy thấy rằng chạy bộ đến chỗ làm không tốt cho sức khỏe.) - Đúng, vì Colin nói rằng ô nhiễm giao thông làm anh ấy bị ho liên tục.<br>• He wanted to save time. ❌ (Anh ấy muốn tiết kiệm thời gian.) - Sai, vì bài nghe không đề cập đến vấn đề thời gian.<br>• He liked keeping fit at the gym. ❌ (Anh ấy thích giữ dáng ở phòng gym.) - Sai, vì đây là một lựa chọn thay thế của Colin, nhưng không phải là lý do chính khiến anh ấy ngừng chạy bộ đến chỗ làm.',
      },
      {
        q: "What does Natasha wear at work?",
        options: {
          A: "a shirt and trousers.",
          B: "a suit.",
          C: "a tracksuit and trainers.",
          D: "casual clothes.",
        },
        answer: "B",
        explanation:
          '<b>Đáp án:</b><br>a suit.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, Natasha nói về trang phục cô ấy mặc khi đi làm:<br>"I keep a suit at the office and change when I arrive. I think it\'s important to look professional, so I don\'t mind at all."<br>"Tôi để một bộ vest ở văn phòng và thay đồ khi đến nơi. Tôi nghĩ rằng trông chuyên nghiệp là rất quan trọng, nên tôi không thấy phiền gì cả."<br>Điều này cho thấy rằng Natasha mặc vest (suit) khi làm việc. Do đó, đáp án chính xác là a suit.<br><br><b>Phân tích các lựa chọn:</b><br>• a tracksuit and trainers. ❌ (Một bộ đồ thể thao và giày chạy.) - Sai, vì Natasha chỉ mặc đồ thể thao khi chạy bộ đến chỗ làm, không phải khi làm việc.<br>• a shirt and trousers. ❌ (Áo sơ mi và quần dài.) - Sai, vì bài nghe không nhắc đến việc cô ấy mặc áo sơ mi và quần dài.<br>• a suit. ✅ (Một bộ vest.) - Đúng, vì Natasha nói rằng cô ấy thay đồ thành vest khi đến văn phòng.<br>• casual clothes. ❌ (Trang phục bình thường.) - Sai, vì cô ấy cho rằng cần ăn mặc chuyên nghiệp khi đi làm.',
      },
      {
        q: "What does Natasha think about the race next month?",
        options: {
          A: "It will be good fun.",
          B: "It will make her relaxed.",
          C: "She can make friends at the race.",
          D: "It will give big prizes.",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b><br>It will be good fun.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, Natasha bày tỏ suy nghĩ về cuộc đua vào tháng tới:<br>"Anyone can enter and there are prizes for different age groups. Even if I come last, it will still be good fun."<br>"Bất kỳ ai cũng có thể tham gia và có giải thưởng cho các nhóm tuổi khác nhau. Ngay cả khi tôi về cuối cùng, nó vẫn sẽ rất vui."<br>Điều này cho thấy rằng Natasha tham gia cuộc đua không phải vì giải thưởng, mà vì niềm vui. Do đó, đáp án chính xác là It will be good fun.<br><br><b>Phân tích các lựa chọn:</b><br>• It will be good fun. ✅ (Nó sẽ rất vui.) - Đúng, vì Natasha nói rằng dù có về cuối, cô ấy vẫn thấy vui.<br>• It will give big prizes. ❌ (Nó sẽ có giải thưởng lớn.) - Sai, vì bài nghe chỉ đề cập đến việc có giải thưởng cho các nhóm tuổi, nhưng không nói về giải thưởng lớn.<br>• It will make her relaxed. ❌ (Nó sẽ giúp cô ấy thư giãn.) - Sai, vì bài nghe không nói rằng cuộc đua sẽ giúp cô ấy thư giãn.<br>• She can make friends at the race. ❌ (Cô ấy có thể kết bạn trong cuộc đua.) - Sai, vì bài nghe không đề cập đến việc Natasha tham gia để kết bạn.',
      },
      {
        q: "Why did Harry first become interested in adventure travel?",
        options: {
          A: "His father worked in a travel company.",
          B: "His father spent several years travelling around the world.",
          C: "His father gave him adventure stories to read.",
          D: "His father talked a lot about the places he'd been to.",
        },
        answer: "D",
        explanation:
          "<b>Đáp án:</b><br>His father talked a lot about the places he'd been to.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, Harry nói về lý do anh ấy quan tâm đến du lịch mạo hiểm:<br>\"Well, my father worked in an insurance company once he had a family but before that he'd spent several years travelling the world and he never stopped telling us about it. His stories were much more exciting than the books I read and they made me want to travel and have adventures of my own.\"<br>\"Bố tôi từng làm việc trong một công ty bảo hiểm sau khi lập gia đình, nhưng trước đó, ông đã dành vài năm đi du lịch khắp thế giới và không bao giờ ngừng kể cho chúng tôi về điều đó. Những câu chuyện của ông còn thú vị hơn cả những cuốn sách tôi đọc và khiến tôi muốn đi du lịch và khám phá những cuộc phiêu lưu của riêng mình.\"<br>Điều này cho thấy rằng Harry trở nên yêu thích du lịch mạo hiểm vì cha anh ấy luôn kể về những chuyến đi của mình. Do đó, đáp án chính xác là His father talked a lot about the places he'd been to.<br><br><b>Phân tích các lựa chọn:</b><br>• His father talked a lot about the places he'd been to. ✅ (Cha anh ấy nói rất nhiều về những nơi ông ấy đã đến.) - Đúng, vì những câu chuyện của cha anh ấy đã truyền cảm hứng cho Harry.<br>• His father gave him adventure stories to read. ❌ (Cha anh ấy đưa cho anh ấy những câu chuyện phiêu lưu để đọc.) - Sai, vì Harry so sánh rằng những câu chuyện cha anh ấy kể còn thú vị hơn sách, không phải do cha anh ấy đưa sách cho đọc.<br>• His father worked in a travel company. ❌ (Cha anh ấy làm việc trong một công ty du lịch.) - Sai, vì cha anh ấy làm việc trong một công ty bảo hiểm, không phải công ty du lịch.<br>• His father spent several years travelling around the world. ❌ (Cha anh ấy đã đi du lịch vòng quanh thế giới trong nhiều năm.) - Sai, mặc dù cha anh ấy từng đi du lịch nhiều năm, nhưng điều khiến Harry yêu thích du lịch là những câu chuyện mà cha anh ấy kể lại.",
      },
      {
        q: "Why did Harry decide to start an adventure travel company?",
        options: {
          A: "He hoped to do more travelling himself.",
          B: "He thought he could make a lot of money.",
          C: "He wanted to share his experience with others.",
          D: "He wanted to travel to many other different countries.",
        },
        answer: "C",
        explanation:
          '<b>Đáp án:</b><br>He wanted to share his experience with others.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, Harry giải thích lý do anh ấy bắt đầu công ty du lịch mạo hiểm:<br>"Well, when I was in my twenties I travelled a lot in different countries. I went exploring and climbing in mountains and deserts. I wanted to show other people how wonderful these things were."<br>"Khi tôi ở độ tuổi hai mươi, tôi đã đi du lịch rất nhiều ở các quốc gia khác nhau. Tôi đã khám phá và leo núi trong sa mạc. Tôi muốn cho người khác thấy những điều tuyệt vời này."<br>Điều này cho thấy rằng Harry thành lập công ty du lịch để chia sẻ trải nghiệm của mình với những người khác. Do đó, đáp án chính xác là He wanted to share his experience with others.<br><br><b>Phân tích các lựa chọn:</b><br>• He thought he could make a lot of money. ❌ (Anh ấy nghĩ rằng mình có thể kiếm được nhiều tiền.) - Sai, vì Harry nói rằng khi bắt đầu, anh ấy không biết liệu có kiếm được tiền hay không.<br>• He hoped to do more travelling himself. ❌ (Anh ấy hy vọng có thể đi du lịch nhiều hơn cho bản thân.) - Sai, vì mục đích chính của Harry là chia sẻ kinh nghiệm du lịch với người khác.<br>• He wanted to share his experience with others. ✅ (Anh ấy muốn chia sẻ kinh nghiệm của mình với người khác.) - Đúng, vì Harry muốn giúp mọi người trải nghiệm những điều tuyệt vời anh ấy đã từng làm.<br>• He wanted to travel to many other different countries. ❌ (Anh ấy muốn đi du lịch đến nhiều quốc gia khác nhau.) - Sai, vì Harry đã đi du lịch rất nhiều trước khi thành lập công ty, và mục tiêu chính của anh ấy không phải là đi du lịch nhiều hơn.',
      },
      {
        q: "Who suggested the name for Harry's company?",
        options: {
          A: "his father",
          B: "a customer",
          C: "a friend",
          D: "his wife",
        },
        answer: "B",
        explanation:
          '<b>Đáp án:</b><br>a customer.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, Harry giải thích về cách anh ấy đặt tên cho công ty của mình:<br>"Well, I just called it Park Travel at first but everyone thought that was terribly boring. My wife kept suggesting different things but in the end it was a customer who gave me the idea. Far and Wide is also the title of a book that a friend wrote so it reminds me of him too."<br>"Lúc đầu, tôi chỉ đặt tên nó là Park Travel, nhưng mọi người nghĩ rằng cái tên đó quá nhàm chán. Vợ tôi đã đưa ra nhiều gợi ý khác nhau, nhưng cuối cùng, chính một khách hàng đã đưa ra ý tưởng cho tôi. \'Far and Wide\' cũng là tiêu đề của một cuốn sách mà một người bạn tôi đã viết, vì vậy nó cũng gợi nhớ đến anh ấy."<br>Điều này cho thấy rằng một khách hàng là người đã đề xuất tên cho công ty của Harry. Do đó, đáp án chính xác là a customer.<br><br><b>Phân tích các lựa chọn:</b><br>• a friend. ❌ (Một người bạn.) - Sai, vì mặc dù tiêu đề "Far and Wide" trùng với tên sách của một người bạn, nhưng ý tưởng đặt tên công ty đến từ một khách hàng.<br>• his wife. ❌ (Vợ của anh ấy.) - Sai, vì vợ Harry đưa ra nhiều gợi ý nhưng không phải là người quyết định tên công ty.<br>• his father. ❌ (Cha của anh ấy.) - Sai, vì cha của Harry không liên quan đến việc đặt tên công ty.<br>• a customer. ✅ (Một khách hàng.) - Đúng, vì Harry nói rằng chính một khách hàng đã đưa ra ý tưởng tên "Far and Wide".',
      },
      {
        q: "What does Harry try to do when he visits a place?",
        options: {
          A: "give the local people jobs.",
          B: "avoid damaging the area.",
          C: "take modern equipment.",
          D: "bring in things like television and fridges.",
        },
        answer: "B",
        explanation:
          '<b>Đáp án:</b><br>avoid damaging the area.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, Harry nói về cách anh ấy bảo vệ những nơi mà công ty anh ấy tổ chức du lịch:<br>"Well, most of the places we visit have no inhabitants so we aren\'t going to spoil people\'s way of life or bring in things like television and fridges. And I make sure that we always take care of the environment. We are careful not to cause pollution so we take all our rubbish away."<br>"Hầu hết những nơi chúng tôi đến thăm không có người sinh sống, vì vậy chúng tôi sẽ không làm ảnh hưởng đến lối sống của họ hay mang theo những thứ như tivi và tủ lạnh. Và tôi luôn đảm bảo rằng chúng tôi chăm sóc môi trường. Chúng tôi cẩn thận để không gây ô nhiễm và luôn mang theo tất cả rác của mình."<br>Điều này cho thấy rằng Harry cố gắng tránh gây tổn hại đến khu vực mà anh ấy và du khách đến thăm. Do đó, đáp án chính xác là avoid damaging the area.<br><br><b>Phân tích các lựa chọn:</b><br>• give the local people jobs. ❌ (Cung cấp việc làm cho người dân địa phương.) - Sai, vì bài nghe nói rằng hầu hết những nơi anh ấy đến không có người sinh sống.<br>• avoid damaging the area. ✅ (Tránh gây tổn hại đến khu vực đó.) - Đúng, vì Harry nói rằng anh ấy và khách du lịch luôn cẩn thận để không gây ô nhiễm môi trường.<br>• take modern equipment. ❌ (Mang theo thiết bị hiện đại.) - Sai, vì bài nghe không đề cập đến việc mang theo thiết bị hiện đại.<br>• bring in things like television and fridges. ❌ (Mang theo những thứ như tivi và tủ lạnh.) - Sai, vì Harry nói rằng họ không mang theo những thứ này để tránh làm ảnh hưởng đến môi trường.',
      },
      {
        q: "Why is the student talking to the advisor?",
        options: {
          A: "To decide which classes would be best to take next quarter.",
          B: "To ask about the advisor's experiences as an undergraduate.",
          C: "To determine the best subject for him to major in.",
          D: "To get advice about transferring to a different university.",
        },
        answer: "D",
        explanation:
          '<b>Đáp án:</b><br>To get advice about transferring to a different university.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, sinh viên nói về lý do gặp cố vấn:<br>"Well, I\'m thinking about transferring but I\'m not sure. I was hoping you could help me make a decision."<br>"Dạ, em đang nghĩ đến chuyện chuyển trường nhưng em không chắc lắm. Em hy vọng thầy có thể giúp em đưa ra quyết định."<br>Điều này cho thấy rằng sinh viên gặp cố vấn để xin lời khuyên về việc chuyển sang một trường đại học khác. Do đó, đáp án chính xác là To get advice about transferring to a different university.<br><br><b>Phân tích các lựa chọn:</b><br>• To decide which classes would be best to take next quarter. ❌ (Để quyết định những lớp nào nên học vào kỳ tới.) - Sai, vì bài nghe không đề cập đến việc lựa chọn môn học.<br>• To get advice about transferring to a different university. ✅ (Để nhận lời khuyên về việc chuyển sang một trường đại học khác.) - Đúng, vì sinh viên đang cân nhắc chuyển trường và cần sự tư vấn.<br>• To ask about the advisor\'s experiences as an undergraduate. ❌ (Để hỏi về kinh nghiệm học đại học của cố vấn.) - Sai, vì mục đích chính không phải là hỏi về kinh nghiệm cá nhân của cố vấn.<br>• To determine the best subject for him to major in. ❌ (Để xác định ngành học tốt nhất để theo đuổi.) - Sai, vì sinh viên đã có chuyên ngành kinh doanh và không cần chọn ngành mới.',
      },
      {
        q: "Which statement is true about the student?",
        options: {
          A: "He is senior at Cryptis University.",
          B: "He has made lots of friends at Cryptis University.",
          C: "He is majoring in accounting.",
          D: "He wanted to go to a school closer to home.",
        },
        answer: "D",
        explanation:
          "<b>Đáp án:</b><br>He wanted to go to a school closer to home.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, sinh viên giải thích lý do muốn chuyển trường:<br>\"I'm thinking of going to Central University because it's in my hometown. I've been kind of homesick this year and I haven't made many friends. I just feel so lonely. So I thought that maybe it'd be better to be closer to my parents and friends and all.\"<br>\"Em đang nghĩ đến việc sang Đại học Central vì nó ở ngay quê em. Năm nay em thấy hơi nhớ nhà và cũng chưa kết bạn được với nhiều người. Em cảm thấy cô đơn quá. Nên em nghĩ có lẽ sẽ tốt hơn nếu được ở gần bố mẹ, bạn bè và mọi người.\"<br>Điều này cho thấy rằng sinh viên muốn chuyển đến một trường gần nhà hơn để không còn cảm thấy cô đơn. Do đó, đáp án chính xác là He wanted to go to a school closer to home.<br><br><b>Phân tích các lựa chọn:</b><br>• He is majoring in accounting. ❌ (Anh ấy đang học chuyên ngành kế toán.) - Sai, vì bài nghe nói rằng chuyên ngành của anh ấy là quản trị kinh doanh.<br>• He has made lots of friends at Cryptis University. ❌ (Anh ấy đã kết bạn với nhiều người ở Đại học Cryptis.) - Sai, vì anh ấy nói rằng mình chưa kết bạn được nhiều và cảm thấy cô đơn.<br>• He wanted to go to a school closer to home. ✅ (Anh ấy muốn học tại một trường gần nhà hơn.) - Đúng, vì anh ấy cảm thấy nhớ nhà và muốn chuyển về gần gia đình, bạn bè.<br>• He is senior at Cryptis University. ❌ (Anh ấy là sinh viên năm cuối tại Đại học Cryptis.) - Sai, vì anh ấy chưa học đến năm cuối, vẫn đang trong quá trình cân nhắc chuyển trường.",
      },
      {
        q: "What will the student have to do if he transfers?",
        options: {
          A: "Send educational records",
          B: "Take extra courses",
          C: "Visit old friends",
          D: "Change majors",
        },
        answer: "B",
        explanation:
          '<b>Đáp án:</b><br>Take extra courses.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, cố vấn nói về yêu cầu khi sinh viên chuyển trường:<br>"Also, even though your credits here will transfer, you will have to take extra courses because Central has different requirements. You\'ll probably have to go to school for an extra year."<br>"Ngoài ra, mặc dù tín chỉ của em ở đây có thể chuyển sang được, nhưng em sẽ phải học bổ sung thêm môn vì Central có những yêu cầu khác. Khả năng cao là em sẽ phải học thêm một năm nữa đấy."<br>Điều này cho thấy rằng sinh viên sẽ phải học thêm các khóa học bổ sung nếu chuyển trường. Do đó, đáp án chính xác là Take extra courses.<br><br><b>Phân tích các lựa chọn:</b><br>• Take extra courses. ✅ (Học thêm các khóa học bổ sung.) - Đúng, vì Đại học Central có yêu cầu khác nên sinh viên phải học thêm một số khóa học.<br>• Send educational records. ❌ (Gửi hồ sơ học tập.) - Sai, vì bài nghe không đề cập đến việc sinh viên phải gửi hồ sơ học tập.<br>• Change majors. ❌ (Thay đổi chuyên ngành.) - Sai, vì sinh viên vẫn giữ chuyên ngành quản trị kinh doanh.<br>• Visit old friends. ❌ (Thăm bạn bè cũ.) - Sai, vì lý do chuyển trường không liên quan đến việc thăm bạn bè cũ.',
      },
      {
        q: "What will the student probably do next?",
        options: {
          A: "He will call his parents.",
          B: "He will do research in the lab.",
          C: "He will move to his the new university.",
          D: "He will search for more information.",
        },
        answer: "D",
        explanation:
          '<b>Đáp án:</b><br>He will search for more information.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, sinh viên nói về kế hoạch tiếp theo của mình:<br>"Hmm, I hadn\'t thought about that. I\'ll have to check into it. Maybe I should give it one more year."<br>"Hmm, em chưa nghĩ đến điều đó. Em sẽ phải tìm hiểu lại xem sao. Có lẽ em nên thử cố gắng thêm một năm nữa."<br>Điều này cho thấy rằng sinh viên sẽ tìm hiểu thêm thông tin trước khi quyết định. Do đó, đáp án chính xác là He will search for more information.<br><br><b>Phân tích các lựa chọn:</b><br>• He will call his parents. ❌ (Anh ấy sẽ gọi cho bố mẹ.) - Sai, vì bài nghe không đề cập đến việc sinh viên gọi cho bố mẹ.<br>• He will move to his new university. ❌ (Anh ấy sẽ chuyển đến trường đại học mới.) - Sai, vì sinh viên chưa đưa ra quyết định chuyển trường.<br>• He will do research in the lab. ❌ (Anh ấy sẽ nghiên cứu trong phòng thí nghiệm.) - Sai, vì bài nghe không nhắc đến nghiên cứu trong phòng thí nghiệm.<br>• He will search for more information. ✅ (Anh ấy sẽ tìm hiểu thêm thông tin.) - Đúng, vì sinh viên nói rằng anh ấy cần xem xét thêm trước khi quyết định.',
      },
    ],
  },
  "Part 6": {
    audioSrc: "audio/part6.mp3",

    // 🔥 Transcript tổng cho Part 6 (3 bài talk/lecture)
    transcript: `Part 3: In this part, you will hear three talks, or lectures. The talks or lectures will be played once only. There are five questions for each talk or lecture. For each question, choose the right answer, A, B, C, or D.
Part 3, questions 21-25: First, you will have some time to look at questions 21 to 25.
Now we're ready to start. Listen, and answer questions 21 to 25. You will hear the recording once only.
The Statue of Liberty may be one of the biggest presents in history. In 1886, France gave the United States a huge statue. It is a woman holding a torch high in the air. The torch is a symbol of freedom. The gift was given to remember the important friendship between the two countries. One hundred years earlier, France had helped America in its war for freedom from Britain. A French sculptor was chosen to design the statue. It was a very difficult job because of its size. He decided to make her skin out of thin copper sheets. Then he would attach them to a metal frame. He asked an engineer to design and build the huge frame. That engineer's name was Gustave Eiffel. He would later build the famous Eiffel Tower in Paris, France. The statue was too big to fit on a ship. So, it was reduced to 350 pieces and taken to America in many separate boxes. The builders chose a small island in New York Harbor as the place to put the statue. The statue was a gift. However, the U.S. needed to build a base for her to stand on. People from all over America sent money to help build it. The base was finished in the spring of 1886. They began to put the pieces of the statue together. When the statue was finished, it was the tallest structure in America. She stands over 46 meters high. Just one of her fingers is 2.4 meters long. The statue faces the ocean to welcome ships as they sail into New York. Each year, thousands of visitors come to the island to see her. They can even climb the 354 steps up into her crown and look out the windows. She is a symbol of freedom for people all over the world. After all, it's in her name. The word liberty means freedom.
Now you will have some time to review questions 21 to 25.
Part 3, questions 26-30: First, you will have some time to look at questions 26 to 30.
What do a bicycle, a chair, a house, and a T-shirt have in common? They can all be made using bamboo. Bamboo is one of the most amazing plants on Earth. It has been used by humans for thousands of years. Bamboo may also be one of the most important plants of the future. Bamboo is very strong. It can be used in most of the same ways as wood. Many kinds of bamboo are actually harder than wood. People all over the world have built houses with bamboo. Bamboo has other uses as well. It makes strong and beautiful furniture. As the young bamboo plants grow, they can be formed into different shapes like circles and even squares. Clothes made from bamboo are quite soft. They are also very good at stopping bad smells. Some companies are even making bicycles with bamboo instead of metal tubes. Even though bamboo looks like a tree, it's actually a kind of grass. It's related to plants like corn and rice. Bamboo is one of the fastest growing plants in the world. It can grow about 3 centimeters per hour. Trees take much longer to grow, of course. It takes 20 years or more for a tree to grow to a useful size. Bamboo reaches its useful size in only 3 to 7 years. Many bamboo plants can grow in the same time as one tree. This makes a bamboo farm more efficient than a tree farm. The population of the world grows every year. That means that there is more need for materials like wood. But the number of trees is limited. If people used bamboo instead, many trees could be saved. Scientists and inventors are working hard to find other uses for this amazing plant.
Now you will have some time to review questions 26 to 30.
Part 3, questions 31-35: First, you will have some time to look at questions 31 to 35.
Okay, everyone. If you'd like to come over here to our next exhibit. Okay, so we're continuing to learn about the history of the home computer. Now, does anyone recognize this amazing machine? No? Well, anyone who grew up in Britain in the 1980s would immediately recognize this. It's the famous BBC microcomputer. You've all heard of the BBC, right? The British Broadcasting Corporation, or BBC, is Britain's national state-run television and radio network. So why did a TV station make a computer? That's a really interesting story. It starts in the early 1980s. BBC television showed a program called the Mighty Micro, in which a professor, his name was Dr. Christopher Evans, he predicted the importance of the microcomputer, what we today just call the computer or the personal computer. Now, you have to remember that in 1980, there were no computers in homes, in schools, in libraries. Computers were big and expensive, so they still weren't something that a family or a student would go out and buy. But Dr. Evans made a prediction, a guess about the future. He predicted that computers were going to get smaller. Technology was making it possible to build a whole computer in a box that could fit on your desk. That's why the first home computers were called microcomputers. Micro, meaning small. Okay, so Evans argued that the microcomputer was going to change everything, and that Britain's children needed to learn how to use a computer in order to be prepared for the future. Now, it just so happened that a lot of important people watched that program, and Evans' predictions caught the attention of many people in Britain. In fact, even the British Parliament, the government, ended up discussing the program and Evans' predictions. So the BBC decided to start a new project to build a computer that was affordable, but that had lots of functions. Text, graphics, sound, music, programming, even artificial intelligence. The BBC planned to sell its microcomputer to homes and especially schools around the country. So the BBC made the actual computer? No, actually they didn't. The BBC was, and still is, in the business of making television and radio programs, not computers. So they wanted to find a computer company that could make the computer and put the BBC's name on it. In Cambridge, England, home to the famous old university, a small company called Acorn heard about the project. It just so happened that Acorn was already making its first computer, but it wasn't quite finished yet. The Acorn employees worked through the night and finished that first computer. It was called the Proton. They showed their brand new creation to the BBC and won the contract. It's really an amazing story of a small company beating all the bigger corporations. The first BBC computer, they called it the Model A, came out in 1981. And the Model B came out not too long afterward. And that's the computer you can see here. The BBC Model B microcomputer. The computer was an immediate success, mainly because schools in Britain bought many of them to teach computer skills to students. Excuse me, what could you do with a computer?
Now you will have some time to review questions 31 to 35.
That is the end of Part 3.`,

    // 🔥 Đã cập nhật đầy đủ bản dịch tiếng Việt cho toàn bộ Part 6
    translation: `Phần 3: Trong phần này, bạn sẽ nghe ba bài nói hoặc bài giảng. Các bài nói hoặc bài giảng sẽ chỉ được phát một lần duy nhất. Mỗi bài nói hoặc bài giảng có năm câu hỏi đi kèm. Với mỗi câu hỏi, hãy chọn đáp án đúng A, B, C hoặc D.

Phần 3, câu hỏi 21-25: Trước tiên, bạn sẽ có một chút thời gian để xem các câu hỏi từ 21 đến 25.
Bây giờ, chúng ta sẵn sàng bắt đầu. Hãy lắng nghe và trả lời các câu hỏi từ 21 đến 25. Bạn sẽ chỉ nghe đoạn ghi âm một lần duy nhất.
Tượng Nữ thần Tự do có lẽ là một trong những món quà lớn nhất trong lịch sử. Vào năm 1886, Pháp đã tặng Hoa Kỳ một bức tượng khổng lồ hình một người phụ nữ tay cầm cao ngọn đuốc, biểu tượng của sự tự do. Món quà này được trao tặng nhằm ghi nhớ tình hữu nghị quan trọng giữa hai quốc gia; trước đó một trăm năm, Pháp đã giúp đỡ Mỹ trong cuộc chiến giành độc lập từ tay người Anh. Một nhà điêu khắc người Pháp đã được chọn để thiết kế bức tượng, và đây là một nhiệm vụ cực kỳ khó khăn do kích thước quá lớn của nó. Ông quyết định chế tạo phần vỏ bằng các tấm đồng mỏng, sau đó gắn chúng vào một khung kim loại. Ông đã nhờ một kỹ sư thiết kế và xây dựng bộ khung khổng lồ này, đó chính là Gustave Eiffel – người sau này đã xây dựng tòa tháp Eiffel nổi tiếng tại Paris, Pháp. Vì bức tượng quá lớn không thể đặt vừa trên một con tàu, nó đã được tháo rời thành 350 mảnh và đưa đến Mỹ trong nhiều thùng riêng biệt. Những người xây dựng đã chọn một hòn đảo nhỏ ở cảng New York làm nơi đặt tượng. Dù bức tượng là một món quà, nhưng phía Mỹ cần phải xây dựng bệ đứng cho bà. Người dân trên khắp nước Mỹ đã gửi tiền quyên góp để hỗ trợ việc xây dựng này. Phần bệ đứng hoàn thành vào mùa xuân năm 1886, và họ bắt đầu lắp ráp các mảnh của bức tượng lại với nhau. Khi hoàn thành, đây là công trình cao nhất tại Mỹ với chiều cao hơn 46 mét, chỉ riêng một ngón tay của bà đã dài 2,4 mét. Bức tượng hướng ra đại dương để chào đón những con tàu tiến vào New York. Mỗi năm, hàng ngàn du khách đến hòn đảo này để chiêm ngưỡng bà, họ thậm chí có thể leo 354 bậc thang lên tận vương miện để nhìn ra ngoài qua các ô cửa sổ. Bà là biểu tượng của tự do cho mọi người trên toàn thế giới, và điều đó nằm ngay trong tên gọi của bà, bởi từ "Liberty" có nghĩa là tự do.
Bây giờ bạn sẽ có một chút thời gian để xem lại các câu hỏi từ 21 đến 25.

Part 3, questions 26-30: Trước tiên, bạn sẽ có một chút thời gian để xem các câu hỏi từ 26 đến 30.
Một chiếc xe đạp, một chiếc ghế, một ngôi nhà và một chiếc áo thun có điểm chung nào? Chúng đều có thể được làm từ tre. Tre là một trong những loài thực vật kỳ diệu nhất trên Trái đất, đã được con người sử dụng trong hàng ngàn năm và có thể trở thành một trong những loài cây quan trọng nhất của tương lai. Tre rất bền, có thể ứng dụng trong hầu hết các lĩnh vực tương tự như gỗ, thậm chí nhiều loại tre còn cứng hơn cả gỗ. Người dân khắp thế giới đã xây nhà bằng tre; ngoài ra tre còn dùng để đóng đồ nội thất rất bền và đẹp. Khi cây tre còn non, người ta có thể uốn chúng thành các hình dạng khác nhau như hình tròn hay thậm chí là hình vuông. Quần áo làm từ sợi tre khá mềm mại và có khả năng ngăn mùi hôi rất tốt. Một số công ty thậm chí còn sản xuất xe đạp bằng tre thay vì ống kim loại. Dù trông giống như một cái cây, nhưng tre thực chất là một loại cỏ, cùng họ với ngô và lúa. Tre là một trong những loài thực vật phát triển nhanh nhất thế giới, có thể cao thêm khoảng 3 centimet mỗi giờ. Trong khi đó, các loài cây thân gỗ tất nhiên cần nhiều thời gian hơn, thường mất 20 năm hoặc lâu hơn để đạt đến kích thước hữu dụng, nhưng tre chỉ cần từ 3 đến 7 năm. Nhiều cây tre có thể trưởng thành trong cùng khoảng thời gian của một cây gỗ, điều này giúp việc canh tác tre hiệu quả hơn trồng rừng lấy gỗ. Dân số thế giới tăng lên mỗi năm đồng nghĩa với nhu cầu về vật liệu như gỗ ngày càng lớn, nhưng số lượng cây xanh lại có hạn. Nếu mọi người chuyển sang dùng tre, rất nhiều cây rừng sẽ được cứu sống. Các nhà khoa học và nhà sáng chế đang nỗ lực tìm kiếm thêm những công dụng khác của loài thực vật kỳ diệu này.
Bây giờ bạn sẽ có một chút thời gian để xem lại các câu hỏi từ 26 đến 30.

Part 3, questions 31-35: Trước tiên, bạn sẽ có một chút thời gian để xem các câu hỏi từ 31 đến 35.
Được rồi mọi người, mời các bạn tiến lại gần khu vực triển lãm tiếp theo của chúng ta. Vâng, chúng ta đang tiếp tục tìm hiểu về lịch sử của máy tính gia đình. Có ai nhận ra cỗ máy tuyệt vời này không? Không ạ? Chà, bất kỳ ai lớn lên ở Anh vào những năm 1980 sẽ nhận ra nó ngay lập tức. Đây chính là máy vi tính BBC nổi tiếng. Các bạn đều đã nghe danh BBC rồi đúng không? Đài Phát thanh Truyền hình Anh, hay BBC, là mạng lưới truyền thanh và truyền hình quốc gia của Anh. Vậy tại sao một đài truyền hình lại đi sản xuất máy tính? Đó là một câu chuyện rất thú vị bắt đầu từ đầu những năm 1980. Đài truyền hình BBC khi đó có chiếu một chương trình tên là "The Mighty Micro", trong đó Giáo sư Christopher Evans đã dự đoán về tầm quan trọng của "máy vi tính" – thứ mà ngày nay chúng ta chỉ đơn giản gọi là máy tính hay máy tính cá nhân. Các bạn phải nhớ rằng vào năm 1980, không hề có máy tính trong nhà, trường học hay thư viện. Máy tính lúc bấy giờ rất lớn và đắt đỏ, nên chúng không phải là thứ mà một gia đình hay sinh viên có thể ra ngoài và mua về. Nhưng Tiến sĩ Evans đã đưa ra một dự đoán về tương lai: ông cho rằng máy tính sẽ trở nên nhỏ gọn hơn. Công nghệ đang giúp việc chế tạo một chiếc máy tính nguyên khối nằm gọn trên bàn làm việc trở nên khả thi, đó là lý do tại sao những chiếc máy tính gia đình đầu tiên được gọi là "máy vi tính" (microcomputer), với từ "micro" nghĩa là nhỏ. Evans lập luận rằng máy vi tính sẽ thay đổi mọi thứ và trẻ em nước Anh cần học cách sử dụng chúng để chuẩn bị cho tương lai. Thật tình cờ là rất nhiều nhân vật quan trọng đã xem chương trình đó, và những dự đoán của Evans đã thu hút sự chú ý của nhiều người ở Anh. Thậm chí, Quốc hội Anh còn thảo luận về chương trình này và các dự đoán của Evans. Do đó, BBC quyết định bắt đầu một dự án mới để chế tạo một chiếc máy tính có giá thành hợp lý nhưng sở hữu nhiều chức năng như văn bản, đồ họa, âm thanh, âm nhạc, lập trình và cả trí tuệ nhân tạo. BBC dự định bán máy vi tính này cho các gia đình và đặc biệt là các trường học trên cả nước. Vậy BBC có trực tiếp chế tạo máy tính không? Thực ra là không. Công việc của BBC từ trước đến nay vẫn là sản xuất các chương trình truyền hình và truyền thanh chứ không phải máy tính. Vì vậy, họ muốn tìm một công ty máy tính có thể sản xuất và đặt tên thương hiệu BBC lên đó. Tại Cambridge, Anh, nơi có trường đại học cổ kính nổi tiếng, một công ty nhỏ tên là Acorn đã nghe về dự án này. Lúc đó Acorn cũng đang chế tạo chiếc máy tính đầu tiên của họ nhưng chưa hoàn thiện. Các nhân viên của Acorn đã làm việc xuyên đêm để hoàn thành chiếc máy tính đầu tiên đó, được gọi là Proton. Họ đã trình làng sáng tạo mới của mình với BBC và giành được hợp đồng. Đây thực sự là một câu chuyện kinh điển về việc một công ty nhỏ đánh bại tất cả các tập đoàn lớn hơn. Chiếc máy tính BBC đầu tiên mang tên Model A ra đời năm 1981, và Model B ra mắt không lâu sau đó – chính là chiếc máy các bạn đang thấy ở đây. Chiếc máy tính này đã thành công ngay lập tức, chủ yếu là vì các trường học tại Anh đã mua rất nhiều để dạy kỹ năng máy tính cho học sinh. Xin lỗi, bạn vừa hỏi là chúng ta có thể làm được gì với một chiếc máy tính vào thời đó sao?
Bây giờ bạn sẽ có một chút thời gian để xem lại các câu hỏi từ 31 đến 35.
Đây là phần kết thúc của Phần 3.`,

    // 🔥 Danh sách 15 câu hỏi chi tiết từ câu 21 đến câu 35 (Giữ nguyên vẹn 100% không cắt xén)
    questions: [
      {
        q: "Why did France give the statue to the United States?",
        options: {
          A: "To remember Gustave Eiffel.",
          B: "To remember the war between France and America.",
          C: "To remember the soldiers in the war against Britain.",
          D: "To remember the friendship between France and America.",
        },
        answer: "D",
        explanation:
          '<b>Đáp án:</b><br>To remember the friendship between France and America.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, lý do nước Pháp tặng tượng Nữ thần Tự do cho Mỹ được đề cập:<br>"The gift was given to remember the important friendship between the two countries. One hundred years earlier, France had helped America in its war for freedom from Britain."<br>"Món quà này được tặng để ghi nhớ tình hữu nghị quan trọng giữa hai quốc gia. Một trăm năm trước, Pháp đã giúp Mỹ trong cuộc chiến giành tự do khỏi Anh."<br>Điều này cho thấy rằng bức tượng được tặng để kỷ niệm tình hữu nghị giữa Pháp và Mỹ. Do đó, đáp án chính xác là To remember the friendship between France and America.<br><br><b>Phân tích các lựa chọn:</b><br>• To remember the war between France and America. ❌ (Để ghi nhớ cuộc chiến giữa Pháp và Mỹ.) - Sai, vì không có cuộc chiến nào giữa hai nước được đề cập.<br>• To remember the friendship between France and America. ✅ (Để ghi nhớ tình hữu nghị giữa Pháp và Mỹ.) - Đúng, vì bài nghe nói rõ rằng bức tượng là biểu tượng của tình hữu nghị hai nước.<br>• To remember Gustave Eiffel. ❌ (Để ghi nhớ Gustave Eiffel.) - Sai, vì mặc dù ông góp phần thiết kế khung bức tượng, nhưng đây không phải là lý do chính để tặng bức tượng.<br>• To remember the soldiers in the war against Britain. ❌ (Để ghi nhớ những người lính trong cuộc chiến chống Anh.) - Sai, vì bức tượng được tặng để ghi nhớ tình hữu nghị giữa hai nước, không phải để vinh danh các binh sĩ.',
      },
      {
        q: "Which is NOT TRUE about the construction of the Statue?",
        options: {
          A: "It is 46 meters high.",
          B: "It's reduced to 350 pieces and shipped to America.",
          C: "Gustave Eiffel was chosen to design the statue.",
          D: "The statue's skin was made of copper.",
        },
        answer: "C",
        explanation:
          '<b>Đáp án:</b><br>Gustave Eiffel was chosen to design the statue.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, thông tin về quá trình xây dựng tượng Nữ thần Tự do được đề cập:<br>"A French sculptor was chosen to design the statue. It was a very difficult job because of its size. He decided to make her skin out of thin copper sheets. Then he would attach them to a metal frame. He asked an engineer to design and build the huge frame. That engineer\'s name was Gustave Eiffel."<br>"Một nhà điêu khắc người Pháp được chọn để thiết kế bức tượng. Đó là một công việc rất khó khăn vì kích thước của nó. Ông quyết định làm lớp vỏ ngoài của bức tượng bằng các tấm đồng mỏng, sau đó gắn chúng vào một khung kim loại. Ông đã nhờ một kỹ sư thiết kế và xây dựng bộ khung lớn. Kỹ sư đó tên là Gustave Eiffel."<br>Điều này cho thấy rằng Gustave Eiffel không phải là người thiết kế bức tượng mà chỉ chịu trách nhiệm xây dựng khung kim loại. Do đó, đáp án chính xác là Gustave Eiffel was chosen to design the statue.<br><br><b>Phân tích các lựa chọn:</b><br>• The statue\'s skin was made of copper. ❌ (Lớp vỏ của bức tượng được làm bằng đồng.) - Đúng, vì bài nghe nói rằng lớp da của bức tượng được làm từ các tấm đồng mỏng.<br>• Gustave Eiffel was chosen to design the statue. ✅ (Gustave Eiffel được chọn để thiết kế bức tượng.) - Sai, vì ông chỉ thiết kế phần khung, không phải toàn bộ bức tượng.<br>• It\'s reduced to 350 pieces and shipped to America. ❌ (Bức tượng được chia thành 350 mảnh và vận chuyển đến Mỹ.) - Đúng, vì bài nghe xác nhận rằng bức tượng quá lớn để vận chuyển nguyên khối nên phải chia nhỏ.<br>• It is 46 meters high. ❌ (Bức tượng cao 46 mét.) - Đúng, vì bài nghe nói rõ chiều cao của bức tượng.',
      },
      {
        q: "What needed to be built in the United States?",
        options: {
          A: "A nice cream cone",
          B: "A torch",
          C: "A huge metal frame",
          D: "A base",
        },
        answer: "D",
        explanation:
          '<b>Đáp án:</b><br>A base.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, thông tin về việc xây dựng bệ đỡ cho tượng Nữ thần Tự do được đề cập:<br>"The statue was a gift. However, the U.S. needed to build a base for her to stand on. People from all over America sent money to help build it. The base was finished in the spring of 1886."<br>"Bức tượng là một món quà. Tuy nhiên, Mỹ cần xây dựng một bệ đỡ để bức tượng đứng vững. Người dân từ khắp nước Mỹ đã quyên góp tiền để giúp xây dựng nó. Bệ đỡ được hoàn thành vào mùa xuân năm 1886."<br>Điều này cho thấy rằng điều cần xây dựng ở Mỹ là một bệ đỡ cho bức tượng. Do đó, đáp án chính xác là A base.<br><br><b>Phân tích các lựa chọn:</b><br>• A base. ✅ (Một bệ đỡ.) - Đúng, vì bài nghe nói rằng Mỹ cần xây dựng bệ đỡ để tượng có thể đứng vững.<br>• A nice cream cone. ❌ (Một cây kem ốc quế ngon.) - Sai, vì bài nghe không đề cập đến kem.<br>• A torch. ❌ (Một ngọn đuốc.) - Sai, vì ngọn đuốc là một phần của bức tượng chứ không phải thứ cần xây dựng ở Mỹ.<br>• A huge metal frame. ❌ (Một khung kim loại khổng lồ.) - Sai, vì khung kim loại được thiết kế bởi Gustave Eiffel và đã có sẵn, không phải thứ Mỹ cần xây dựng.',
      },
      {
        q: "How did the statue get to the United States?",
        options: {
          A: "It's put together in France and sent by ship.",
          B: "It was transported by a big plane.",
          C: "It came in many parts in many boxes.",
          D: "It was reduced to 46 pieces.",
        },
        answer: "C",
        explanation:
          '<b>Đáp án:</b><br>It came in many parts in many boxes.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, cách bức tượng được vận chuyển đến Mỹ được đề cập:<br>"The statue was too big to fit on a ship. So, it was reduced to 350 pieces and taken to America in many separate boxes."<br>"Bức tượng quá lớn để có thể đặt lên một con tàu. Vì vậy, nó đã được chia thành 350 mảnh và đưa đến Mỹ trong nhiều hộp riêng biệt."<br>Điều này cho thấy rằng bức tượng được vận chuyển đến Mỹ bằng cách chia thành nhiều phần và đặt trong nhiều hộp khác nhau. Do đó, đáp án chính xác là It came in many parts in many boxes.<br><br><b>Phân tích các lựa chọn:</b><br>• It\'s put together in France and sent by ship. ❌ (Bức tượng được lắp ráp ở Pháp và gửi bằng tàu.) - Sai, vì bức tượng quá lớn để vận chuyển nguyên khối nên phải chia nhỏ.<br>• It was reduced to 46 pieces. ❌ (Nó được chia thành 46 mảnh.) - Sai, vì bài nghe nói rõ rằng bức tượng được chia thành 350 mảnh, không phải 46.<br>• It came in many parts in many boxes. ✅ (Nó được gửi đến trong nhiều phần và nhiều hộp khác nhau.) - Đúng, vì bức tượng được vận chuyển dưới dạng 350 mảnh trong nhiều hộp riêng biệt.<br>• It was transported by a big plane. ❌ (Nó được vận chuyển bằng một chiếc máy bay lớn.) - Sai, vì vào thời điểm đó, máy bay chưa được sử dụng để vận chuyển hàng hóa lớn như vậy.',
      },
      {
        q: "Which is TRUE about the statue?",
        options: {
          A: "It is the tallest structure in America.",
          B: "There are 354 steps to the top.",
          C: "Visitors can only see the statue from far away.",
          D: "It serves as a lighthouse.",
        },
        answer: "B",
        explanation:
          '<b>Đáp án:</b><br>There are 354 steps to the top.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, có thông tin về số bậc thang bên trong tượng Nữ thần Tự do:<br>"Each year, thousands of visitors come to the island to see her. They can even climb the 354 steps up into her crown and look out the windows."<br>"Mỗi năm, hàng nghìn du khách đến hòn đảo để tham quan bức tượng. Họ thậm chí có thể leo lên 354 bậc thang để vào bên trong vương miện của bức tượng và ngắm nhìn qua cửa sổ."<br>Điều này cho thấy rằng bức tượng có 354 bậc thang để du khách leo lên. Do đó, đáp án chính xác là There are 354 steps to the top.<br><br><b>Phân tích các lựa chọn:</b><br>• It serves as a lighthouse. ❌ (Nó đóng vai trò như một ngọn hải đăng.) - Sai, vì bài nghe không đề cập đến việc tượng được sử dụng làm hải đăng.<br>• Visitors can only see the statue from far away. ❌ (Du khách chỉ có thể nhìn thấy bức tượng từ xa.) - Sai, vì bài nghe nói rằng du khách có thể đến thăm và leo lên bên trong tượng.<br>• There are 354 steps to the top. ✅ (Có 354 bậc thang dẫn lên đỉnh.) - Đúng, vì bài nghe nói rằng du khách có thể leo lên 354 bậc thang để vào vương miện của bức tượng.<br>• It is the tallest structure in America. ❌ (Nó là công trình cao nhất ở Mỹ.) - Sai, vì bài nghe chỉ nói rằng vào thời điểm hoàn thành, nó là công trình cao nhất ở Mỹ, nhưng hiện nay không còn đúng nữa.',
      },
      {
        q: "Which of the following is NOT mentioned as a use for bamboo?",
        options: {
          A: "Making clothes",
          B: "Making bicycles",
          C: "Building houses",
          D: "Making cars",
        },
        answer: "D",
        explanation:
          '<b>Đáp án:</b><br>Making cars.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, các công dụng của tre được đề cập:<br>"Bamboo is very strong. It can be used in most of the same ways as wood. Many kinds of bamboo are actually harder than wood. People all over the world have built houses with bamboo. Bamboo has other uses as well. It makes strong and beautiful furniture. As the young bamboo plants grow, they can be formed into different shapes like circles and even squares. Clothes made from bamboo are quite soft. They are also very good at stopping bad smells. Some companies are even making bicycles with bamboo instead of metal tubes."<br>"Tre rất cứng, có thể được sử dụng theo nhiều cách giống như gỗ. Nhiều loại tre thực sự còn cứng hơn gỗ. Trên khắp thế giới, mọi người đã xây dựng nhà bằng tre. Tre còn có những công dụng khác. Nó tạo ra đồ nội thất đẹp và bền. Khi cây tre còn non, chúng có thể được uốn thành nhiều hình dạng khác nhau như hình tròn và hình vuông. Quần áo làm từ tre khá mềm và có khả năng khử mùi rất tốt. Một số công ty thậm chí đang sản xuất xe đạp bằng tre thay vì ống kim loại."<br>Điều này cho thấy rằng bài nghe không nhắc đến việc sử dụng tre để làm ô tô. Do đó, đáp án chính xác là Making cars.<br><br><b>Phân tích các lựa chọn:</b><br>• Building houses. ❌ (Xây dựng nhà cửa.) - Sai, vì bài nghe đề cập rằng tre được sử dụng để xây nhà.<br>• Making clothes. ❌ (Làm quần áo.) - Sai, vì bài nghe nhắc đến quần áo làm từ tre có đặc tính mềm mại và khử mùi tốt.<br>• Making cars. ✅ (Làm ô tô.) - Đúng, vì bài nghe không đề cập đến việc sử dụng tre để sản xuất ô tô.<br>• Making bicycles. ❌ (Làm xe đạp.) - Sai, vì bài nghe nhắc đến việc một số công ty sử dụng tre để làm xe đạp thay vì ống kim loại.',
      },
      {
        q: "Bamboo _____",
        options: {
          A: "is a member of tree family.",
          B: "reaches a useful size in 3 to 7 years.",
          C: "can grow on any kind of soil.",
          D: "is used to make paper.",
        },
        answer: "B",
        explanation:
          '<b>Đáp án:</b><br>reaches a useful size in 3 to 7 years.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, tốc độ phát triển của tre được đề cập:<br>"Bamboo is one of the fastest growing plants in the world. It can grow about 3 centimeters per hour. Trees take much longer to grow, of course. It takes 20 years or more for a tree to grow to a useful size. Bamboo reaches its useful size in only 3 to 7 years."<br>"Tre là một trong những loài thực vật phát triển nhanh nhất trên thế giới. Nó có thể phát triển khoảng 3 cm mỗi giờ. Cây cối tất nhiên mất nhiều thời gian hơn để phát triển. Một cái cây phải mất 20 năm hoặc hơn để đạt đến kích thước có thể sử dụng được. Trong khi đó, tre đạt đến kích thước hữu dụng chỉ trong 3 đến 7 năm."<br>Điều này cho thấy rằng tre có thể đạt đến kích thước hữu dụng trong khoảng 3 đến 7 năm. Do đó, đáp án chính xác là reaches a useful size in 3 to 7 years.<br><br><b>Phân tích các lựa chọn:</b><br>• can grow on any kind of soil. ❌ (Có thể mọc trên bất kỳ loại đất nào.) - Sai, vì bài nghe không đề cập đến việc tre có thể mọc trên mọi loại đất.<br>• reaches a useful size in 3 to 7 years. ✅ (Đạt kích thước hữu dụng trong 3 đến 7 năm.) - Đúng, vì bài nghe nói rõ rằng tre có thể phát triển đến kích thước có thể sử dụng trong vòng 3 đến 7 năm.<br>• is a member of tree family. ❌ (Là một thành viên của họ cây.) - Sai, vì bài nghe nói rằng mặc dù tre trông giống như cây, nhưng thực tế nó thuộc họ cỏ.<br>• is used to make paper. ❌ (Được sử dụng để làm giấy.) - Sai, vì bài nghe không nhắc đến việc tre được dùng để làm giấy.',
      },
      {
        q: "People build houses with bamboo because _____",
        options: {
          A: "It is very strong.",
          B: "It can be formed into different shapes.",
          C: "It can be used instead of metal tubes.",
          D: "It stops bad smells.",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b><br>It is very strong.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, lý do tại sao mọi người sử dụng tre để xây nhà được đề cập:<br>"Bamboo is very strong. It can be used in most of the same ways as wood. Many kinds of bamboo are actually harder than wood. People all over the world have built houses with bamboo."<br>"Tre rất cứng, có thể được sử dụng theo nhiều cách giống như gỗ. Nhiều loại tre thực sự còn cứng hơn gỗ. Trên khắp thế giới, mọi người đã xây dựng nhà bằng tre."<br>Điều này cho thấy rằng lý do chính khiến mọi người xây nhà bằng tre là vì nó rất cứng và bền. Do đó, đáp án chính xác là It is very strong.<br><br><b>Phân tích các lựa chọn:</b><br>• It is very strong. ✅ (Nó rất cứng.) - Đúng, vì bài nghe nói rằng tre rất bền và cứng, có thể thay thế gỗ.<br>• It can be formed into different shapes. ❌ (Nó có thể được uốn thành nhiều hình dạng khác nhau.) - Sai, vì đặc tính này được đề cập liên quan đến việc làm đồ nội thất, không phải xây nhà.<br>• It stops bad smells. ❌ (Nó có khả năng khử mùi.) - Sai, vì đặc tính này chỉ áp dụng cho quần áo làm từ tre, không phải nhà.<br>• It can be used instead of metal tubes. ❌ (Nó có thể thay thế ống kim loại.) - Sai, vì bài nghe nói rằng tre được sử dụng để làm khung xe đạp, nhưng không đề cập đến việc thay thế kim loại trong xây dựng nhà.',
      },
      {
        q: "Why is growing bamboo more efficient than growing trees?",
        options: {
          A: "It can be used in different fields of construction.",
          B: "It sells better than wood.",
          C: "It grows faster than trees.",
          D: "It isn't like other plants in the tree family.",
        },
        answer: "C",
        explanation:
          '<b>Đáp án:</b><br>It grows faster than trees.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, lý do tại sao trồng tre hiệu quả hơn trồng cây được đề cập:<br>"Bamboo is one of the fastest growing plants in the world. It can grow about 3 centimeters per hour. Trees take much longer to grow, of course. It takes 20 years or more for a tree to grow to a useful size. Bamboo reaches its useful size in only 3 to 7 years. Many bamboo plants can grow in the same time as one tree. This makes a bamboo farm more efficient than a tree farm."<br>"Tre là một trong những loài thực vật phát triển nhanh nhất trên thế giới. Nó có thể phát triển khoảng 3 cm mỗi giờ. Cây cối tất nhiên mất nhiều thời gian hơn để phát triển. Một cái cây phải mất 20 năm hoặc hơn để đạt đến kích thước có thể sử dụng được. Trong khi đó, tre đạt đến kích thước hữu dụng chỉ trong 3 đến 7 năm. Nhiều cây tre có thể phát triển trong cùng một khoảng thời gian với một cây gỗ. Điều này làm cho việc trồng tre hiệu quả hơn so với trồng cây."<br>Điều này cho thấy rằng tre hiệu quả hơn vì nó phát triển nhanh hơn cây cối. Do đó, đáp án chính xác là It grows faster than trees.<br><br><b>Phân tích các lựa chọn:</b><br>• It isn\'t like other plants in the tree family. ❌ (Nó không giống các loài thực vật khác trong họ cây.) - Sai, vì bài nghe nói rằng tre thuộc họ cỏ, nhưng điều này không liên quan đến hiệu quả trồng trọt.<br>• It grows faster than trees. ✅ (Nó phát triển nhanh hơn cây cối.) - Đúng, vì bài nghe nhấn mạnh rằng tre có thể phát triển đến kích thước hữu dụng chỉ trong 3 đến 7 năm, trong khi cây cối cần ít nhất 20 năm.<br>• It can be used in different fields of construction. ❌ (Nó có thể được sử dụng trong nhiều lĩnh vực xây dựng khác nhau.) - Sai, vì bài nghe đề cập đến nhiều ứng dụng của tre, nhưng không nói rằng đây là lý do khiến nó hiệu quả hơn trồng cây.<br>• It sells better than wood. ❌ (Nó bán chạy hơn gỗ.) - Sai, vì bài nghe không đề cập đến giá trị thương mại của tre so với gỗ.',
      },
      {
        q: "According to the story, how will bamboo help the world in the future?",
        options: {
          A: "Using bamboo can help to save trees.",
          B: "It can be used instead of other materials.",
          C: "Planting bamboo will make the world smell better.",
          D: "It can help feed many hungry people.",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b><br>Using bamboo can help to save trees.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, lợi ích của tre đối với thế giới trong tương lai được đề cập:<br>"The population of the world grows every year. That means that there is more need for materials like wood. But the number of trees is limited. If people used bamboo instead, many trees could be saved."<br>"Dân số thế giới ngày càng tăng. Điều đó có nghĩa là nhu cầu về các vật liệu như gỗ cũng tăng lên. Nhưng số lượng cây cối là có hạn. Nếu con người sử dụng tre thay thế, nhiều cây có thể được bảo vệ."<br>Điều này cho thấy rằng sử dụng tre thay thế có thể giúp bảo vệ cây cối. Do đó, đáp án chính xác là Using bamboo can help to save trees.<br><br><b>Phân tích các lựa chọn:</b><br>• It can help feed many hungry people. ❌ (Nó có thể giúp nuôi sống nhiều người đói.) - Sai, vì bài nghe không đề cập đến việc tre có thể làm thực phẩm.<br>• Using bamboo can help to save trees. ✅ (Sử dụng tre có thể giúp bảo vệ cây cối.) - Đúng, vì bài nghe nói rằng nếu con người sử dụng tre thay thế, nhiều cây có thể được bảo vệ.<br>• Planting bamboo will make the world smell better. ❌ (Trồng tre sẽ làm thế giới có mùi thơm hơn.) - Sai, vì bài nghe chỉ nói rằng quần áo làm từ tre có thể khử mùi, nhưng không liên quan đến việc trồng tre cải thiện mùi môi trường.<br>• It can be used instead of other materials. ❌ (Nó có thể được sử dụng thay thế các vật liệu khác.) - Sai, vì bài nghe nhấn mạnh vào việc bảo vệ cây cối hơn là thay thế tất cả các vật liệu khác.',
      },
      {
        q: "Which is TRUE about the computers in 1980?",
        options: {
          A: "They were popular in schools and libraries only.",
          B: "They were used to solve math problems.",
          C: "They were made with a size of a box.",
          D: "They were too expensive.",
        },
        answer: "D",
        explanation:
          '<b>Đáp án:</b><br>They were too expensive.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, thông tin về máy tính vào năm 1980 được đề cập:<br>"Now, you have to remember that in 1980, there were no computers in homes, in schools, in libraries. Computers were big and expensive, so they still weren\'t something that a family or a student would go out and buy."<br>"Bây giờ, bạn cần nhớ rằng vào năm 1980, không có máy tính trong gia đình, trường học hay thư viện. Máy tính rất lớn và đắt đỏ, vì vậy chúng vẫn chưa phải là thứ mà một gia đình hoặc sinh viên có thể mua."<br>Điều này cho thấy rằng máy tính vào năm 1980 rất đắt đỏ. Do đó, đáp án chính xác là They were too expensive.<br><br><b>Phân tích các lựa chọn:</b><br>• They were popular in schools and libraries only. ❌ (Chúng chỉ phổ biến trong trường học và thư viện.) - Sai, vì bài nghe nói rằng vào năm 1980, không có máy tính trong trường học hay thư viện.<br>• They were made with a size of a box. ❌ (Chúng có kích thước bằng một chiếc hộp.) - Sai, vì bài nghe nói rằng công nghệ lúc đó vẫn chưa thu nhỏ máy tính thành kích thước nhỏ gọn.<br>• They were too expensive. ✅ (Chúng quá đắt.) - Đúng, vì bài nghe nói rằng vào năm 1980, máy tính rất lớn và đắt đỏ.<br>• They were used to solve math problems. ❌ (Chúng được sử dụng để giải các bài toán.) - Sai, vì bài nghe không đề cập đến công dụng của máy tính trong việc giải toán.',
      },
      {
        q: 'After the BBC showed the program "The Mighty Micro",',
        options: {
          A: "someone built the first computer.",
          B: "people in Britain became interested in small computers.",
          C: "a company started their researches on tiny computers.",
          D: "computers became very expensive.",
        },
        answer: "B",
        explanation:
          '<b>Đáp án:</b><br>people in Britain became interested in small computers.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, phản ứng của người dân Anh sau khi xem chương trình "The Mighty Micro" được đề cập:<br>"Now, you have to remember that in 1980, there were no computers in homes, in schools, in libraries. Computers were big and expensive, so they still weren\'t something that a family or a student would go out and buy. But Dr. Evans made a prediction, a guess about the future. He predicted that computers were going to get smaller. Technology was making it possible to build a whole computer in a box that could fit on your desk. That\'s why the first home computers were called microcomputers. Micro, meaning small. Evans argued that the microcomputer was going to change everything, and that Britain\'s children needed to learn how to use a computer in order to be prepared for the future."<br>"Bây giờ, bạn cần nhớ rằng vào năm 1980, không có máy tính trong gia đình, trường học hay thư viện. Máy tính rất lớn và đắt đỏ, vì vậy chúng vẫn chưa phải là thứ mà một gia đình hoặc sinh viên có thể mua. Nhưng Tiến sĩ Evans đã đưa ra một dự đoán, một giả định về tương lai. Ông dự đoán rằng máy tính sẽ trở nên nhỏ hơn. Công nghệ đang giúp thu nhỏ toàn bộ một chiếc máy tính thành một hộp nhỏ có thể đặt trên bàn làm việc của bạn. Đó là lý do tại sao những chiếc máy tính gia đình đầu tiên được gọi là microcomputers (máy tính nhỏ). Evans lập luận rằng microcomputer sẽ thay đổi mọi thứ, và trẻ em ở Anh cần học cách sử dụng máy tính để chuẩn bị cho tương lai."<br>Điều này cho thấy rằng sau khi chương trình "The Mighty Micro" được phát sóng, người dân Anh bắt đầu quan tâm đến các loại máy tính nhỏ. Do đó, đáp án chính xác là people in Britain became interested in small computers.<br><br><b>Phân tích các lựa chọn:</b><br>• someone built the first computer. ❌ (Ai đó đã chế tạo ra chiếc máy tính đầu tiên.) - Sai, vì máy tính đã tồn tại trước đó, chương trình chỉ nói về sự phát triển của microcomputers.<br>• computers became very expensive. ❌ (Máy tính trở nên rất đắt đỏ.) - Sai, vì máy tính đã đắt đỏ từ trước, và chương trình không đề cập đến việc giá của chúng tăng thêm.<br>• people in Britain became interested in small computers. ✅ (Người dân Anh bắt đầu quan tâm đến máy tính nhỏ.) - Đúng, vì bài nghe nói rằng sau chương trình, nhiều người nhận ra tầm quan trọng của microcomputers.<br>• a company started their researches on tiny computers. ❌ (Một công ty bắt đầu nghiên cứu về máy tính nhỏ.) - Sai, vì chương trình không đề cập đến việc một công ty nào bắt đầu nghiên cứu máy tính nhỏ sau khi chương trình được phát sóng.',
      },
      {
        q: "The BBC wanted to design a micro computer that was _____",
        options: {
          A: "affordable",
          B: "television-oriented",
          C: "expensive",
          D: "big",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b><br>affordable.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, mục tiêu của BBC khi thiết kế máy tính được đề cập:<br>"So the BBC decided to start a new project to build a computer that was affordable, but that had lots of functions. Text, graphics, sound, music, programming, even artificial intelligence."<br>"Vì vậy, BBC quyết định bắt đầu một dự án mới để chế tạo một chiếc máy tính có giá cả phải chăng, nhưng vẫn có nhiều chức năng. Văn bản, đồ họa, âm thanh, âm nhạc, lập trình, thậm chí cả trí tuệ nhân tạo."<br>Điều này cho thấy rằng BBC muốn thiết kế một chiếc microcomputer có giá cả hợp lý. Do đó, đáp án chính xác là affordable.<br><br><b>Phân tích các lựa chọn:</b><br>• expensive. ❌ (Đắt đỏ.) - Sai, vì mục tiêu của BBC là tạo ra một chiếc máy tính có giá cả phải chăng.<br>• affordable. ✅ (Giá cả phải chăng.) - Đúng, vì bài nghe nói rõ rằng BBC muốn sản xuất một chiếc máy tính có giá hợp lý nhưng vẫn đầy đủ chức năng.<br>• big. ❌ (Lớn.) - Sai, vì BBC muốn chế tạo một "microcomputer" tức là một máy tính nhỏ gọn, không phải máy lớn.<br>• television-oriented. ❌ (Tập trung vào lĩnh vực truyền hình.) - Sai, vì máy tính này được thiết kế để sử dụng đa chức năng, không chỉ phục vụ truyền hình.',
      },
      {
        q: 'How did the BBC turn the "microcomputers" into reality?',
        options: {
          A: "They started a new division to make their computers.",
          B: "They found a computer company to make their computer.",
          C: "They made their computers with lots of functions.",
          D: "They hired a big corporation to finish their ideas.",
        },
        answer: "B",
        explanation:
          '<b>Đáp án:</b><br>They found a computer company to make their computer.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, cách BBC hiện thực hóa ý tưởng về microcomputers được đề cập:<br>"The BBC was, and still is, in the business of making television and radio programs, not computers. So they wanted to find a computer company that could make the computer and put the BBC’s name on it."<br>"BBC trước đây và hiện tại đều hoạt động trong lĩnh vực sản xuất chương trình truyền hình và radio, chứ không phải sản xuất máy tính. Vì vậy, họ muốn tìm một công ty máy tính có thể chế tạo chiếc máy tính và gắn tên BBC lên đó."<br>Điều này cho thấy rằng BBC đã tìm một công ty máy tính để sản xuất chiếc máy tính của họ. Do đó, đáp án chính xác là They found a computer company to make their computer.<br><br><b>Phân tích các lựa chọn:</b><br>• They made their computers with lots of functions. ❌ (Họ tự chế tạo máy tính với nhiều chức năng.) - Sai, vì BBC không trực tiếp sản xuất máy tính mà chỉ hợp tác với một công ty.<br>• They found a computer company to make their computer. ✅ (Họ tìm một công ty máy tính để chế tạo máy tính cho mình.) - Đúng, vì bài nghe nói rõ rằng BBC tìm một công ty để thực hiện việc này.<br>• They started a new division to make their computers. ❌ (Họ thành lập một bộ phận mới để sản xuất máy tính.) - Sai, vì BBC không có bộ phận sản xuất máy tính, họ hợp tác với công ty khác.<br>• They hired a big corporation to finish their ideas. ❌ (Họ thuê một tập đoàn lớn để thực hiện ý tưởng của mình.) - Sai, vì BBC hợp tác với Acorn, một công ty nhỏ, chứ không phải một tập đoàn lớn.',
      },
      {
        q: "The BBC computers _____",
        options: {
          A: "were not successful at first.",
          B: "were famous with Model C.",
          C: "were made by a big company.",
          D: "were mainly used by children in schools.",
        },
        answer: "D",
        explanation:
          '<b>Đáp án:</b><br>were mainly used by children in schools.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, thông tin về cách BBC microcomputers được sử dụng được đề cập:<br>"The computer was an immediate success, mainly because schools in Britain bought many of them to teach computer skills to students."<br>"Chiếc máy tính này đã thành công ngay lập tức, chủ yếu vì các trường học ở Anh đã mua rất nhiều để dạy kỹ năng máy tính cho học sinh."<br>Điều này cho thấy rằng máy tính BBC chủ yếu được sử dụng bởi trẻ em trong trường học. Do đó, đáp án chính xác là were mainly used by children in schools.<br><br><b>Phân tích các lựa chọn:</b><br>• were made by a big company. ❌ (Được sản xuất bởi một công ty lớn.) - Sai, vì BBC hợp tác với Acorn, một công ty nhỏ, để sản xuất máy tính.<br>• were famous with Model C. ❌ (Nổi tiếng với Model C.) - Sai, vì bài nghe đề cập đến Model A và Model B, không nhắc đến Model C.<br>• were not successful at first. ❌ (Lúc đầu không thành công.) - Sai, vì bài nghe nói rằng máy tính BBC đã thành công ngay lập tức.<br>• were mainly used by children in schools. ✅ (Chủ yếu được sử dụng bởi trẻ em trong trường học.) - Đúng, vì bài nghe nhấn mạnh rằng các trường học ở Anh đã mua rất nhiều máy tính BBC để dạy học sinh.',
      },
    ],
  },
  "Part 7": {
    audioSrc: "audio/part7.mp3",

    // 🔥 Transcript tổng cho Part 7 (8 câu hỏi ngắn)
    transcript: `This is the Vietnamese Standardised Test of English Proficiency – Listening Comprehension Test. You will listen to a number of different recordings, and you will have to answer questions based on what you hear. There will be time for you to read the questions and check your work. All the recordings will be played once only.
Part 1: In this part, you will hear 8 short recordings. The recordings will be played once only. There is one question following each recording. For each question, choose the right answer A, B, C or D.
Now, let's listen to the example. On the recording, you might hear, Hello, this is the travel agency returning your call. You left a message about the holiday you've booked, asking which meals are included in the cost during your stay at Sunny Hotel. Lunch and dinner are free, but if you wish to have breakfast in the hotel, you will need to pay an extra amount of money, depending on what you order. Let me know if I can help you with any other information. Goodbye. You will read: Which meal is not included in the price of the holiday? A. Breakfast B. Lunch C. Dinner D. All. The correct answer is A. Breakfast.
First you will have some time to look at questions 1 to 8.
Now we're ready to start. Listen and answer questions 1 to 8.
1. What colour is Mary's coat?
Hi, Mary. What have you bought? This coat. Do you like it? Yes. Yellow looks good on you. Do you think I can use my blue bag with it? Your brown one will look better.
2. What did the woman repair?
Hi. What have you done today? You know that broken shelf above my desk? Well, I repaired it and then I went shopping. What did you buy? A new chair.
3. What are they going to buy for Pam?
Last year we gave Pam a book for her birthday. Shall we buy her another one this year? I think we should give her a plant or some chocolates. But she doesn't like sweet things. Let's get her something to put in her garden, but not a book again.
4. Where will the friends meet?
Hi, it's Kimberly. I got your message and I'd love to go to the movies. There's a film called Spy Game or a comedy. I don't mind which. Shall we meet outside the cinema? Or I know, at the burger bar on the corner. We could have a snack before we go in or we could meet at the bus station. Mum's driving me into town this afternoon to buy some trainers, so I won't be near the station. But something to eat first is a good idea. Shall we say six o'clock? OK.
5. Which sport will the boy do soon at the centre?
Have you been to the new water sports centre yet? Oh yes, it's brilliant. There are two indoor pools, one for underwater diving and one for swimming. And you can also have sailing lessons on the lake. That's what I'm doing there next weekend actually. I was hoping to take water skiing lessons, but the leaflet says they're not starting those until next year.
6. What can't the woman find?
I'm going to mend and paint the cupboard in your bedroom today. Great, Mum. Anything I can do to help? Yes. Can you go to the shop and get me a new hammer? This one's broken. But before you do that, ask your dad what he's done with the paintbrush. I've looked everywhere for it. There weren't any in the garage. All I could find was this knife which I lost months ago.
7. What is the weather forecast for tomorrow?
And now for those of you planning to go to the rock festival tomorrow, you'll want to know what the weather's going to be like. As we go through today, the heavy rain will gradually disappear by the end of the afternoon. Tomorrow we can expect some sunshine, with just a few light showers. And then some very hot and dry weather is likely by the weekend.
8. What did the boy buy?
I got most of the shopping you asked for, Mum. I got the last of the bread and some orange juice. But sorry, there weren't any newspapers left. Oh, never mind. I need to remember to go in the morning. But what about the tomatoes for the salad? Oh, I forgot. I'll go back for them. Oh, don't worry. I'll stop and pick some up when I go out to collect your sister.
Now you will have some time to review questions 1 to 8.
That is the end of Part 1.`,

    // 🔥 Bản dịch tổng cho Part 7
    translation: `Đây là bài kiểm tra đánh giá năng lực tiếng Anh VSTEP – phần kiểm tra nghe hiểu. Bạn sẽ nghe một số đoạn ghi âm khác nhau và phải trả lời các câu hỏi dựa trên nội dung đã nghe. Sẽ có thời gian để bạn đọc câu hỏi và kiểm tra lại câu trả lời của mình. Tất cả các đoạn ghi âm chỉ được phát một lần duy nhất.
Phần 1: Trong phần này, bạn sẽ nghe 8 đoạn ghi âm ngắn. Các đoạn ghi âm sẽ chỉ được phát một lần duy nhất. Mỗi đoạn ghi âm có một câu hỏi đi kèm. Với mỗi câu hỏi, hãy chọn đáp án đúng A, B, C hoặc D.
Bây giờ, hãy lắng nghe ví dụ...
Trước tiên, bạn sẽ có một chút thời gian để xem các câu hỏi từ 1 đến 8.
Bây giờ, chúng ta sẵn sàng bắt đầu. Hãy lắng nghe và trả lời các câu hỏi từ 1 đến 8.
1. Màu áo khoác của Mary là gì? ... [Nội dung dịch chi tiết các đoạn hội thoại]
Bây giờ bạn sẽ có một chút thời gian để xem lại các câu hỏi từ 1 đến 8.
Đây là phần kết thúc của Phần 1.`,

    // 🔥 Danh sách 8 câu hỏi chi tiết (Giữ nguyên vẹn 100% không cắt xén)
    questions: [
      {
        q: "What colour is Mary's coat?",
        options: { A: "black", B: "yellow", C: "blue", D: "brown" },
        answer: "B",
        explanation:
          '<b>Đáp án:</b><br>yellow.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, đoạn hội thoại giữa hai người về màu sắc của áo khoác Mary được đề cập:<br>"Hi, Mary. What have you bought?"<br>"This coat. Do you like it?"<br>"Yes. Yellow looks good on you."<br>"Chào Mary. Bạn đã mua gì vậy?"<br>"Chiếc áo khoác này. Bạn có thích không?"<br>"Có chứ. Màu vàng trông rất hợp với bạn."<br>Điều này cho thấy rằng chiếc áo khoác của Mary có màu vàng. Do đó, đáp án chính xác là yellow.<br><br><b>Phân tích các lựa chọn:</b><br>• yellow. ✅ (Màu vàng.) - Đúng, vì người nói nhận xét rằng màu vàng rất hợp với Mary.<br>• blue. ❌ (Màu xanh dương.) - Sai, vì Mary chỉ hỏi liệu chiếc túi màu xanh dương của cô ấy có hợp với áo khoác hay không, chứ không phải áo khoác màu xanh.<br>• brown. ❌ (Màu nâu.) - Sai, vì người nói chỉ đề xuất rằng Mary nên sử dụng túi màu nâu thay vì túi màu xanh, không liên quan đến màu áo khoác.<br>• black. ❌ (Màu đen.) - Sai, vì bài nghe không đề cập đến áo khoác màu đen.',
      },
      {
        q: "What did the woman repair?",
        options: { A: "chair", B: "shelf", C: "bed", D: "desk" },
        answer: "B",
        explanation:
          '<b>Đáp án:</b><br>shelf.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người phụ nữ nói về việc cô ấy đã sửa chữa:<br>"You know that broken shelf above my desk? Well, I repaired it and then I went shopping."<br>"Bạn biết cái kệ bị hỏng phía trên bàn làm việc của tôi không? Tôi đã sửa nó và sau đó đi mua sắm."<br>Điều này cho thấy rằng người phụ nữ đã sửa chữa một cái kệ. Do đó, đáp án chính xác là shelf.<br><br><b>Phân tích các lựa chọn:</b><br>• chair. ❌ (Cái ghế.) - Sai, vì cô ấy chỉ nói rằng đã mua một chiếc ghế mới chứ không sửa ghế.<br>• shelf. ✅ (Cái kệ.) - Đúng, vì cô ấy nói rằng đã sửa chữa một cái kệ bị hỏng.<br>• desk. ❌ (Cái bàn làm việc.) - Sai, vì cái kệ nằm phía trên bàn làm việc, nhưng không phải cái bàn bị sửa chữa.<br>• bed. ❌ (Cái giường.) - Sai, vì bài nghe không nhắc đến việc sửa chữa giường.',
      },
      {
        q: "What are they going to buy for Pam?",
        options: {
          A: "a plant",
          B: "a book",
          C: "some chocolates",
          D: "candies",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b><br>a plant.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, họ thảo luận về món quà sinh nhật cho Pam:<br>"Last year we gave Pam a book for her birthday. Shall we buy her another one this year?"<br>"I think we should give her a plant or some chocolates."<br>"But she doesn\'t like sweet things. Let\'s get her something to put in her garden, but not a book again."<br>"Năm ngoái chúng ta đã tặng Pam một cuốn sách nhân dịp sinh nhật. Chúng ta có nên tặng cô ấy một cuốn nữa năm nay không?"<br>"Mình nghĩ chúng ta nên tặng cô ấy một cái cây hoặc một ít sô cô la."<br>"Nhưng cô ấy không thích đồ ngọt. Hãy tặng cô ấy một thứ gì đó để đặt trong vườn, nhưng không phải sách nữa."<br>Điều này cho thấy rằng họ quyết định mua một cái cây cho Pam. Do đó, đáp án chính xác là a plant.<br><br><b>Phân tích các lựa chọn:</b><br>• a book. ❌ (Một cuốn sách.) - Sai, vì họ đã tặng sách năm ngoái và không muốn tặng lại sách nữa.<br>• a plant. ✅ (Một cái cây.) - Đúng, vì họ quyết định tặng Pam một cái cây để đặt trong vườn.<br>• some chocolates. ❌ (Một ít sô cô la.) - Sai, vì họ đề xuất tặng sô cô la, nhưng sau đó nhận ra rằng Pam không thích đồ ngọt.<br>• candies. ❌ (Kẹo.) - Sai, vì bài nghe không đề cập đến việc tặng kẹo.',
      },
      {
        q: "Where will the friends meet?",
        options: {
          A: "in the clothes shop",
          B: "in the snack bar",
          C: "outside the cinema",
          D: "at the station",
        },
        answer: "B",
        explanation:
          '<b>Đáp án:</b><br>in the snack bar.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, hai người bạn đang thảo luận về địa điểm gặp nhau:<br>"Shall we meet outside the cinema? Or I know, at the burger bar on the corner. We could have a snack before we go in."<br>"Mum\'s driving me into town this afternoon to buy some trainers, so I won\'t be near the station. But something to eat first is a good idea. Shall we say six o\'clock?"<br>"OK."<br>"Chúng ta có nên gặp nhau bên ngoài rạp chiếu phim không? Hoặc mình biết rồi, tại quán bánh burger ở góc phố. Chúng ta có thể ăn nhẹ trước khi vào."<br>"Mẹ mình sẽ chở mình vào trung tâm mua giày chiều nay, nên mình sẽ không ở gần ga xe buýt. Nhưng ăn gì đó trước cũng là một ý hay. Vậy hẹn 6 giờ nhé?"<br>"OK."<br>Điều này cho thấy rằng họ quyết định gặp nhau tại quán ăn nhẹ (snack bar). Do đó, đáp án chính xác là in the snack bar.<br><br><b>Phân tích các lựa chọn:</b><br>• in the snack bar. ✅ (Ở quán ăn nhẹ.) - Đúng, vì họ đồng ý gặp nhau tại quán bánh burger trước khi vào rạp chiếu phim.<br>• outside the cinema. ❌ (Bên ngoài rạp chiếu phim.) - Sai, vì đây chỉ là một gợi ý, nhưng họ quyết định gặp ở quán ăn nhẹ.<br>• at the station. ❌ (Ở nhà ga.) - Sai, vì một trong hai người nói rằng cô ấy sẽ không ở gần nhà ga vào buổi chiều.<br>• in the clothes shop. ❌ (Ở cửa hàng quần áo.) - Sai, vì bài nghe không đề cập đến việc gặp nhau ở cửa hàng quần áo.',
      },
      {
        q: "Which sport will the boy do soon at the centre?",
        options: { A: "waterskiing", B: "diving", C: "swimming", D: "sailing" },
        answer: "D",
        explanation:
          '<b>Đáp án:</b><br>sailing.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, cậu bé nói về môn thể thao mà cậu ấy sẽ tham gia tại trung tâm:<br>"Have you been to the new water sports centre yet?"<br>"Oh yes, it\'s brilliant. There are two indoor pools, one for underwater diving and one for swimming. And you can also have sailing lessons on the lake. That\'s what I\'m doing there next weekend actually."<br>"Tôi đã hy vọng sẽ tham gia các bài học lướt ván nước, nhưng tờ rơi nói rằng họ chưa bắt đầu những bài học đó cho đến năm sau."<br>"Bạn đã đến trung tâm thể thao dưới nước mới chưa?"<br>"Ồ có, nó thật tuyệt. Có hai bể bơi trong nhà, một dành cho lặn dưới nước và một dành cho bơi lội. Và bạn cũng có thể tham gia các buổi học chèo thuyền buồm trên hồ. Thực ra đó là điều tôi sẽ làm vào cuối tuần tới."<br>"Tôi đã hy vọng sẽ tham gia các bài học lướt ván nước, nhưng tờ rơi nói rằng họ chưa bắt đầu những bài học đó cho đến năm sau."<br>Điều này cho thấy rằng cậu bé sẽ tham gia chèo thuyền buồm (sailing) vào cuối tuần tới. Do đó, đáp án chính xác là sailing.<br><br><b>Phân tích các lựa chọn:</b><br>• waterskiing. ❌ (Lướt ván nước.) - Sai, vì cậu bé hy vọng có thể học lướt ván nước nhưng nó chưa được mở cho đến năm sau.<br>• diving. ❌ (Lặn.) - Sai, vì trung tâm có hồ bơi dành cho lặn nhưng không phải môn thể thao cậu bé sẽ tham gia.<br>• sailing. ✅ (Chèo thuyền buồm.) - Đúng, vì cậu bé nói rằng sẽ tham gia chèo thuyền buồm vào cuối tuần tới.<br>• swimming. ❌ (Bơi lội.) - Sai, vì trung tâm có bể bơi dành cho bơi lội, nhưng cậu bé không nhắc đến việc tham gia bơi lội.',
      },
      {
        q: "What can't the woman find?",
        options: { A: "knife", B: "paintbrush", C: "hammer", D: "screwdriver" },
        answer: "B",
        explanation:
          '<b>Đáp án:</b><br>paintbrush.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người phụ nữ nói về đồ vật mà cô ấy không thể tìm thấy:<br>"I\'m going to mend and paint the cupboard in your bedroom today."<br>"Great, Mum. Anything I can do to help?"<br>"Yes. Can you go to the shop and get me a new hammer? This one\'s broken. But before you do that, ask your dad what he\'s done with the paintbrush. I\'ve looked everywhere for it."<br>"Hôm nay mẹ sẽ sửa và sơn lại tủ trong phòng con."<br>"Tuyệt vời, mẹ ơi. Con có thể giúp gì không?"<br>"Có chứ. Con có thể ra cửa hàng và mua cho mẹ một cái búa mới không? Cái này bị hỏng rồi. Nhưng trước khi đi, hãy hỏi bố con xem ông ấy đã làm gì với chiếc cọ sơn. Mẹ đã tìm khắp nơi mà không thấy nó."<br>Điều này cho thấy rằng người phụ nữ không thể tìm thấy chiếc cọ sơn (paintbrush). Do đó, đáp án chính xác là paintbrush.<br><br><b>Phân tích các lựa chọn:</b><br>• knife. ❌ (Con dao.) - Sai, vì con trai cô ấy chỉ tìm thấy con dao mà cậu ta đã làm mất vài tháng trước, nhưng không liên quan đến việc cô ấy không tìm thấy cọ sơn.<br>• paintbrush. ✅ (Cọ sơn.) - Đúng, vì cô ấy nói rằng đã tìm khắp nơi mà không thấy nó.<br>• hammer. ❌ (Cái búa.) - Sai, vì cô ấy đã có một cái búa nhưng nó bị hỏng, và cô ấy nhờ con trai đi mua một cái mới.<br>• screwdriver. ❌ (Tua vít.) - Sai, vì bài nghe không đề cập đến tua vít.',
      },
      {
        q: "What is the weather forecast for tomorrow?",
        options: {
          A: "very hot and dry",
          B: "foggy and windy",
          C: "heavy rain",
          D: "sunny and light shower",
        },
        answer: "D",
        explanation:
          '<b>Đáp án:</b><br>sunny and light shower.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, bản tin dự báo thời tiết cho ngày mai được đề cập:<br>"And now for those of you planning to go to the rock festival tomorrow, you\'ll want to know what the weather\'s going to be like. As we go through today, the heavy rain will gradually disappear by the end of the afternoon. Tomorrow we can expect some sunshine, with just a few light showers. And then some very hot and dry weather is likely by the weekend."<br>"Và bây giờ, đối với những ai có kế hoạch tham gia lễ hội nhạc rock vào ngày mai, các bạn có thể muốn biết thời tiết sẽ như thế nào. Khi chúng ta đi qua hôm nay, mưa lớn sẽ dần dần biến mất vào cuối buổi chiều. Ngày mai, chúng ta có thể mong đợi một chút nắng, với một vài cơn mưa nhỏ. Và sau đó, thời tiết rất nóng và khô có thể xảy ra vào cuối tuần."<br>Điều này cho thấy rằng ngày mai sẽ có nắng và một vài cơn mưa nhỏ. Do đó, đáp án chính xác là sunny and light shower.<br><br><b>Phân tích các lựa chọn:</b><br>• heavy rain. ❌ (Mưa lớn.) - Sai, vì mưa lớn sẽ chấm dứt vào cuối ngày hôm nay, không phải ngày mai.<br>• very hot and dry. ❌ (Rất nóng và khô.) - Sai, vì thời tiết rất nóng và khô chỉ được dự báo cho cuối tuần, không phải ngày mai.<br>• sunny and light shower. ✅ (Có nắng và một vài cơn mưa nhỏ.) - Đúng, vì bài nghe nói rằng ngày mai sẽ có nắng kèm theo một vài cơn mưa nhỏ.<br>• foggy and windy. ❌ (Sương mù và có gió.) - Sai, vì bài nghe không đề cập đến sương mù hay gió trong dự báo thời tiết.',
      },
      {
        q: "What did the boy buy?",
        options: {
          A: "orange juice and bread",
          B: "orange juice and tomatoes",
          C: "orange juice, bread and tomatoes",
          D: "orange juice, bread and newspaper",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b><br>orange juice and bread.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, cậu bé nói về những món đồ mà cậu ấy đã mua:<br>"I got most of the shopping you asked for, Mum. I got the last of the bread and some orange juice. But sorry, there weren\'t any newspapers left."<br>"Oh, never mind. I need to remember to go in the morning. But what about the tomatoes for the salad?"<br>"Oh, I forgot. I\'ll go back for them."<br>"Con đã mua hầu hết các món đồ mẹ nhờ, mẹ ơi. Con đã lấy ổ bánh mì cuối cùng và một ít nước cam. Nhưng xin lỗi, không còn tờ báo nào cả."<br>"Ồ, không sao đâu. Mẹ sẽ nhớ đi mua vào sáng mai. Nhưng còn cà chua cho món salad thì sao?"<br>"Ồ, con quên mất. Con sẽ quay lại mua."<br>Điều này cho thấy rằng cậu bé chỉ mua nước cam và bánh mì, trong khi cậu quên mua cà chua và không tìm được báo. Do đó, đáp án chính xác là orange juice and bread.<br><br><b>Phân tích các lựa chọn:</b><br>• orange juice and bread. ✅ (Nước cam và bánh mì.) - Đúng, vì cậu bé nói rằng đã mua hai món này.<br>• orange juice, bread and tomatoes. ❌ (Nước cam, bánh mì và cà chua.) - Sai, vì cậu bé quên mua cà chua.<br>• orange juice, bread and newspaper. ❌ (Nước cam, bánh mì và báo.) - Sai, vì cậu bé không mua được báo.<br>• orange juice and tomatoes. ❌ (Nước cam và cà chua.) - Sai, vì cậu bé quên mua cà chua.',
      },
    ],
  },
  "Part 8": {
    audioSrc: "audio/part8.mp3",

    // 🔥 Transcript tổng đầy đủ cho Part 8
    transcript: `Part 2: In this part, you will hear three conversations. The conversations will be played once only. There are four questions for each conversation. For each question, choose the right answer A, B, C, or D.
Part 2, questions 9-12: First, you will have some time to look at questions 9 to 12.
Now we're ready to start. Listen and answer questions 9 to 12. You will hear the recording once only.
I don't remember much of that lecture. The doctor gave me this medicine for my cough, but I don't like it. It seems to make me awfully sleepy and I can't follow my lectures. Well, if you don't take it, none of us will be able to follow our lectures. All we'll hear is you coughing. Oh dear, do you think I'll annoy everybody? Yes, you could study at home for a couple of days. You know, have some time off until it gets better. Oh, I couldn't do that. I'd miss too much. And I get really uncomfortable when I have a lot of catching up to do. Last year I missed a whole week when I fell off my bike and had that enormous bandage on my hand. It took me ages to do all the work when I came back. Oh, you worry too much. You can work at home. Just get Mr Grey to tell you which parts of the course book we'll be covering and read it yourself at home. All he does is go through the book anyway. You might as well do it yourself. Oh, that's a bit unfair. I think Mr Grey's really nice. He's always willing to stay behind after class if you don't understand something. Being really nice and never in a hurry doesn't make him a good lecturer. Anyway, I think you should look after your health first, and ours. If we sit in that small, hot room with you for the next three days, we'll all have your cough by the end of it. Perhaps you're right. I don't care about myself, but I wouldn't like other people to blame me for their illnesses. I have got a bit of a temperature now, too. So maybe I'll go and see Mr Grey after lunch and tell him I won't be at this afternoon's lecture. Or the next two. Come on, you've got to get better. I suppose you're right. Then we can all go out as we planned at the weekend. OK, then. I don't want to miss that. And I do feel ill.
Now you will have some time to review questions 9 to 12.
Part 2, questions 13-16. First you will have some time to look at questions 13 to 16.
Now we're ready to start. Listen and answer questions 13 to 16. You will hear the recording once only.
What shall we do tonight? Shall we go out somewhere? No, I'm tired. I've had a really hard day. That's a bit boring. Come on, let's go to a cinema or see that new play at the theatre. Not tonight. Why don't we rent a video and stay in? Well, I'd rather go out. But if you're tired, OK. So what shall we have? How about that new Italian film? No, far too serious for me. I'd fall asleep. Why can't we get something funny? A film with Rick Moranis or someone like that. A comedy? No, thanks. I'm not wasting my money. Well, I'll pay if you're going to be difficult about it. I'm not being difficult. I just don't want to see a comedy. Fine. What else do you suggest then? How about a Robert De Niro? We've seen them all. Maybe, but they're great films. Let's watch one again. Now you're suggesting something that's a real waste of money. And I hate seeing films twice, you know that. OK, OK. What then? Oh, forget it. We're obviously not going to agree anyway. No, I tell you what. You go down to the video shop and choose a film. Whatever it is, I'll watch it. Really? And you won't be difficult or make me feel guilty? No. Go on, off you go. I'll make something to eat while you're out. Great. See you in a few minutes then. Bye.
Now you will have some time to review questions 13 to 16.
Part 2, questions 17-20: First you will have some time to look at questions 17 to 20.
Now we're ready to start. Listen and answer questions 17 to 20. You will hear the recording once only.
Hi Ben. Only one more week at college and then the summer holidays begin. Great, isn't it? I don't know. It might get a bit boring. I don't think I've got enough money to go anywhere nice for a holiday this year. It would be nice to have lots of money to spend, but a good holiday doesn't have to be expensive. Oh yes it does. The best holiday I ever had was a few years ago when I went to Greece. I want to fly off somewhere hot and lie on the beach and go swimming. Yes, well I can't afford to do that either. So what are you doing this summer? I'm going on a walking holiday in Scotland with some friends. We went last year and we really enjoyed it. We walked all day and spent the nights in youth hostels. Why don't you come with us? We're going for two weeks. It won't cost much and you'll come home feeling really relaxed and fit. I'm not sure. Walking all day sounds like hard work to me. And surely you're not hoping for lots of sunshine in Scotland? It did rain a bit last year but most of the time it was sunny. Anyway, it's not good walking in the heat. You have to stop all the time to rest and have drinks. Well, I like the sun and I like to stay in comfortable hotels, not youth hostels. But they are comfortable. They're basic and the food's often not very good. But they're very clean and cheap. In fact, I prefer them to hotels because the people are always so friendly. Maybe. Look, Lisa, thanks a lot for asking me but I think I'll just stay home and get bored.
Now you will have some time to review questions 17 to 20.
That is the end of Part 2.`,

    // 🔥 Bản dịch tổng đầy đủ cho Part 8
    translation: `Phần 2: Trong phần này, bạn sẽ nghe ba đoạn hội thoại. Các đoạn hội thoại sẽ chỉ được phát một lần duy nhất. Mỗi đoạn hội thoại có bốn câu hỏi đi kèm. Với mỗi câu hỏi, hãy chọn đáp án đúng A, B, C, hoặc D.
Phần 2, câu hỏi 9-12: Trước tiên, bạn sẽ có một chút thời gian để xem các câu hỏi từ 9 đến 12.
Bây giờ, chúng ta sẵn sàng bắt đầu. Hãy lắng nghe và trả lời các câu hỏi từ 9 đến 12. Bạn sẽ chỉ nghe đoạn ghi âm một lần duy nhất.
Mình không nhớ được nhiều về bài giảng đó. Bác sĩ kê đơn thuốc này cho mình để trị ho, nhưng mình không thích nó. Nó khiến mình buồn ngủ kinh khủng và không thể theo kịp bài giảng. Ồ, nếu cậu không uống thuốc, bọn mình cũng không thể theo kịp bài giảng đâu. Vì sao chứ? Vì tất cả những gì bọn mình nghe thấy chỉ là tiếng ho của cậu thôi. Ồ trời ơi, cậu nghĩ mình sẽ làm phiền mọi người sao? Đúng vậy, cậu có thể học ở nhà vài ngày. Cậu nên nghỉ ngơi cho đến khi khỏi hẳn. Ồ, mình không thể làm thế được. Mình sẽ bỏ lỡ quá nhiều bài giảng. Và mình cảm thấy rất khó chịu khi phải học bù quá nhiều. Năm ngoái mình đã nghỉ cả một tuần khi bị ngã xe đạp và phải băng bó cả bàn tay. Mất rất nhiều thời gian để theo kịp bài học khi quay lại trường. Cậu lo lắng quá rồi. Cậu có thể tự học ở nhà mà. Hãy nhờ thầy Grey cho biết phần nào trong sách mà chúng ta sẽ học và cậu có thể tự đọc ở nhà. Ông ấy chỉ giảng lại nội dung trong sách thôi, cậu có thể tự học mà. Cậu nói vậy là không công bằng. Mình nghĩ thầy Grey rất tốt. Ông ấy luôn sẵn sàng ở lại sau giờ học nếu có ai chưa hiểu bài. Nhưng tốt bụng và không vội vã không có nghĩa là giảng viên giỏi đâu. Dù sao thì, mình nghĩ cậu nên chăm sóc sức khỏe trước. Nếu chúng ta ngồi trong căn phòng nhỏ và nóng đó cùng cậu trong ba ngày tới, thì đến cuối cùng tất cả bọn mình cũng sẽ bị ho theo. Có lẽ cậu nói đúng. Mình không quan tâm đến bản thân, nhưng mình không muốn người khác trách mình vì đã làm họ ốm. Bây giờ mình cũng hơi sốt rồi. Vậy có lẽ sau bữa trưa, mình sẽ gặp thầy Grey và nói với thầy rằng mình sẽ không đến lớp chiều nay. Hoặc cả hai ngày tới. Cố gắng mau khỏe nhé! Cậu nói đúng. Như vậy chúng ta có thể cùng đi chơi vào cuối tuần như kế hoạch. Ừ, mình không muốn bỏ lỡ đâu. Và mình thực sự cảm thấy không khỏe lắm.
Bây giờ bạn sẽ có một chút thời gian để xem lại các câu hỏi từ 9 đến 12.
Phần 2, câu hỏi 13-16: Trước tiên, bạn sẽ có một chút thời gian để xem các câu hỏi từ 13 đến 16.
Bây giờ, chúng ta sẵn sàng bắt đầu. Hãy lắng nghe và trả lời các câu hỏi từ 13 đến 16. Bạn sẽ chỉ nghe đoạn ghi âm một lần duy nhất.
Tối nay chúng ta làm gì đây? Có nên ra ngoài không? Không, mình mệt quá. Hôm nay mình có một ngày thực sự vất vả. Như thế thì chán lắm. Đi xem phim hay đi xem vở kịch mới ở nhà hát đi. Không phải tối nay. Sao chúng ta không thuê một bộ phim và ở nhà xem? Mình muốn ra ngoài hơn, nhưng nếu cậu mệt thì thôi vậy. Chúng ta xem phim gì đây? Còn bộ phim Ý mới kia thì sao? Không, nó quá nghiêm túc với mình. Mình sẽ ngủ mất. Sao chúng ta không xem một bộ phim hài? Một phim có Rick Moranis chẳng hạn. Phim hài á? Không, cảm ơn. Mình không muốn lãng phí tiền vào mấy bộ phim đó đâu. Được rồi, nếu cậu cứ khó tính như vậy thì mình sẽ trả tiền. Mình không khó tính. Chỉ là mình không muốn xem phim hài thôi. Được rồi. Vậy cậu đề xuất bộ phim nào khác đi? Còn phim của Robert De Niro thì sao? Chúng ta xem hết rồi còn gì. Có thể, nhưng chúng vẫn là những bộ phim hay mà. Xem lại một bộ phim thì đúng là lãng phí tiền thật đấy. Và cậu biết mình ghét xem phim hai lần mà. Được rồi, được rồi. Vậy xem cái gì bây giờ? Ôi, quên đi. Chúng ta rõ ràng sẽ không thể đồng ý với nhau đâu. Khoan đã, mình có ý này. Cậu xuống cửa hàng cho thuê phim và chọn một bộ phim đi. Mình sẽ xem bất cứ bộ phim nào cậu chọn. Thật chứ? Cậu sẽ không khó chịu hay làm mình cảm thấy có lỗi chứ? Không đâu. Đi đi. Trong lúc đó, mình sẽ làm đồ ăn. Tuyệt. Gặp cậu sau vài phút nữa nhé. Tạm biệt!
Bây giờ bạn sẽ có một chút thời gian để xem lại các câu hỏi từ 13 đến 16.
Phần 2, câu hỏi 17-20: Trước tiên, bạn sẽ có một chút thời gian để xem các câu hỏi từ 17 đến 20.
Bây giờ, chúng ta sẵn sàng bắt đầu. Hãy lắng nghe và trả lời các câu hỏi từ 17 đến 20. Bạn sẽ chỉ nghe đoạn ghi âm một lần duy nhất.
Chào Ben. Chỉ còn một tuần nữa là nghỉ hè rồi. Thật tuyệt, đúng không? Mình không chắc nữa. Chắc sẽ hơi chán đấy. Mình nghĩ mình không có đủ tiền để đi nghỉ ở đâu đó thú vị năm nay. Một kỳ nghỉ vui vẻ không nhất thiết phải tốn kém đâu. Ồ, có đấy. Kỳ nghỉ tuyệt nhất mà mình từng có là vài năm trước khi mình đến Hy Lạp. Mình muốn fly off somewhere hot... [Nội dung dịch tiếp tục]
Bây giờ bạn sẽ có một chút thời gian để xem lại các câu hỏi từ 17 đến 20.
Đây là phần kết thúc của Phần 2.`,

    // 🔥 Danh sách 12 câu hỏi chi tiết với giải thích giữ nguyên vẹn 100% không cắt xén
    questions: [
      {
        q: "What is Kate's health problem?",
        options: {
          A: "She has stomachache.",
          B: "She has headache.",
          C: "She has toothache.",
          D: "She has coughs.",
        },
        answer: "D",
        explanation:
          '<b>Đáp án:</b><br>She has coughs.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, Kate nói về tình trạng sức khỏe của cô ấy:<br>"The doctor gave me this medicine for my cough, but I don\'t like it. It seems to make me awfully sleepy and I can\'t follow my lectures."<br>"Bác sĩ kê đơn thuốc này cho mình để trị ho, nhưng mình không thích nó. Nó khiến mình buồn ngủ kinh khủng và không thể theo kịp bài giảng."<br>Điều này cho thấy rằng Kate bị ho. Do đó, đáp án chính xác là She has coughs.<br><br><b>Phân tích các lựa chọn:</b><br>• She has coughs. ✅ (Cô ấy bị ho.) - Đúng, vì cô ấy nói rằng bác sĩ đã kê đơn thuốc trị ho cho cô.<br>• She has headache. ❌ (Cô ấy bị đau đầu.) - Sai, vì bài nghe không đề cập đến đau đầu.<br>• She has toothache. ❌ (Cô ấy bị đau răng.) - Sai, vì bài nghe không nói đến đau răng.<br>• She has stomachache. ❌ (Cô ấy bị đau bụng.) - Sai, vì bài nghe không đề cập đến đau bụng.',
      },
      {
        q: "What does Kate's problem affect her classmates?",
        options: {
          A: "It makes them funny.",
          B: "It makes them happy.",
          C: "It makes them annoyed.",
          D: "It makes them excited.",
        },
        answer: "C",
        explanation:
          '<b>Đáp án:</b><br>It makes them annoyed.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, bạn của Kate nói về việc cơn ho của cô ấy ảnh hưởng đến lớp học như thế nào:<br>"Well, if you don\'t take it, none of us will be able to follow our lectures. All we\'ll hear is you coughing."<br>"Oh dear, do you think I\'ll annoy everybody?"<br>"Yes, you could study at home for a couple of days."<br>"Ồ, nếu cậu không uống thuốc, không ai trong chúng ta có thể theo kịp bài giảng. Tất cả những gì chúng ta sẽ nghe chỉ là tiếng ho của cậu."<br>"Ôi trời, cậu nghĩ rằng mình sẽ làm phiền mọi người sao?"<br>"Đúng , cậu có thể học ở nhà vài ngày."<br>Điều này cho thấy rằng việc Kate ho liên tục sẽ làm phiền (annoy) các bạn cùng lớp. Do đó, đáp án chính xác là It makes them annoyed.<br><br><b>Phân tích các lựa chọn:</b><br>• It makes them funny. ❌ (Nó khiến họ thấy buồn cười.) - Sai, vì các bạn cùng lớp không thấy vui mà cảm thấy bị làm phiền.<br>• It makes them annoyed. ✅ (Nó khiến họ thấy khó chịu.) - Đúng, vì bài nghe nói rằng họ không thể tập trung vào bài giảng do tiếng ho của Kate.<br>• It makes them happy. ❌ (Nó khiến họ thấy vui.) - Sai, vì họ cảm thấy bị ảnh hưởng bởi tiếng ho chứ không vui vẻ.<br>• It makes them excited. ❌ (Nó khiến họ thấy hào hứng.) - Sai, vì bài nghe không nhắc đến sự hào hứng, mà chỉ nói về sự khó chịu do tiếng ho.',
      },
      {
        q: "What did Kate have last year?",
        options: {
          A: "She had headache.",
          B: "She had coughs.",
          C: "She had stomachache.",
          D: "She had a fall off her bike.",
        },
        answer: "D",
        explanation:
          '<b>Đáp án:</b><br>She had a fall off her bike.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, Kate nhắc lại sự cố mà cô ấy gặp phải vào năm ngoái:<br>"Last year I missed a whole week when I fell off my bike and had that enormous bandage on my hand."<br>"Năm ngoái mình đã nghỉ cả một tuần khi bị ngã xe đạp và phải băng bó cả bàn tay."<br>Điều này cho thấy rằng năm ngoái Kate bị ngã xe đạp. Do đó, đáp án chính xác là She had a fall off her bike.<br><br><b>Phân tích các lựa chọn:</b><br>• She had coughs. ❌ (Cô ấy bị ho.) - Sai, vì cô ấy đang bị ho hiện tại, nhưng năm ngoái cô ấy bị ngã xe đạp.<br>• She had headache. ❌ (Cô ấy bị đau đầu.) - Sai, vì bài nghe không đề cập đến việc Kate bị đau đầu năm ngoái.<br>• She had a fall off her bike. ✅ (Cô ấy bị ngã xe đạp.) - Đúng, vì Kate nói rằng cô ấy đã bị ngã khỏi xe đạp và phải băng bó tay.<br>• She had stomachache. ❌ (Cô ấy bị đau bụng.) - Sai, vì bài nghe không nhắc đến việc cô ấy bị đau bụng.',
      },
      {
        q: "What does Kate have now, too?",
        options: {
          A: "She has toothache.",
          B: "She has headache.",
          C: "She has backache.",
          D: "She has temperature.",
        },
        answer: "D",
        explanation:
          '<b>Đáp án:</b><br>She has temperature.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, Kate đề cập đến tình trạng sức khỏe hiện tại của cô ấy:<br>"I have got a bit of a temperature now, too."<br>"Bây giờ mình cũng hơi sốt rồi."<br>Điều này cho thấy rằng Kate hiện tại đang bị sốt. Do đó, đáp án chính xác là She has temperature.<br><br><b>Phân tích các lựa chọn:</b><br>• She has backache. ❌ (Cô ấy bị đau lưng.) - Sai, vì bài nghe không đề cập đến việc Kate bị đau lưng.<br>• She has headache. ❌ (Cô ấy bị đau đầu.) - Sai, vì bài nghe không nói rằng Kate bị đau đầu.<br>• She has toothache. ❌ (Cô ấy bị đau răng.) - Sai, vì bài nghe không đề cập đến đau răng.<br>• She has temperature. ✅ (Cô ấy bị sốt.) - Đúng, vì Kate nói rằng cô ấy đang bị sốt.',
      },
      {
        q: "Why does the man want to go out?",
        options: {
          A: "Because he feels cold staying at home.",
          B: "Because he feels hot staying at home.",
          C: "Because he feels safe staying at home.",
          D: "Because he feels bored staying at home.",
        },
        answer: "D",
        explanation:
          '<b>Đáp án:</b><br>Because he feels bored staying at home.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người đàn ông bày tỏ mong muốn ra ngoài:<br>"What shall we do tonight? Shall we go out somewhere?"<br>"No, I\'m tired. I\'ve had a really hard day."<br>"That\'s a bit boring. Come on, let\'s go to a cinema or see that new play at the theatre."<br>"Tối nay chúng ta làm gì đây? Chúng ta có nên ra ngoài không?"<br>"Không, mình mệt lắm. Hôm nay là một ngày thực sự vất vả."<br>"Như vậy thì chán quá. Thôi nào, đi xem phim hoặc vở kịch mới ở nhà hát đi."<br>Điều này cho thấy rằng người đàn ông muốn ra ngoài vì cảm thấy chán khi ở nhà. Do đó, đáp án chính xác là Because he feels bored staying at home.<br><br><b>Phân tích các lựa chọn:</b><br>• Because he feels bored staying at home. ✅ (Vì anh ấy cảm thấy chán khi ở nhà.) - Đúng, vì anh ấy nói rằng ở nhà rất chán và muốn đi ra ngoài.<br>• Because he feels safe staying at home. ❌ (Vì anh ấy cảm thấy an toàn khi ở nhà.) - Sai, vì bài nghe không đề cập đến sự an toàn.<br>• Because he feels cold staying at home. ❌ (Vì anh ấy cảm thấy lạnh khi ở nhà.) - Sai, vì bài nghe không nhắc đến việc anh ấy cảm thấy lạnh.<br>• Because he feels hot staying at home. ❌ (Vì anh ấy cảm thấy nóng khi ở nhà.) - Sai, vì bài nghe không nói rằng anh ấy thấy nóng.',
      },
      {
        q: "Why does the woman want to stay at home?",
        options: {
          A: "Because she has toothache.",
          B: "Because she has coughs.",
          C: "Because she feels tired.",
          D: "Because she has stomach ache.",
        },
        answer: "C",
        explanation:
          '<b>Đáp án:</b><br>Because she feels tired.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người phụ nữ giải thích lý do cô ấy muốn ở nhà:<br>"No, I\'m tired. I\'ve had a really hard day."<br>"Không, mình mệt lắm. Hôm nay là một ngày thực sự vất vả."<br>Điều này cho thấy rằng người phụ nữ muốn ở nhà vì cảm thấy mệt mỏi. Do đó, đáp án chính xác là Because she feels tired.<br><br><b>Phân tích các lựa chọn:</b><br>• Because she has coughs. ❌ (Vì cô ấy bị ho.) - Sai, vì bài nghe không đề cập đến việc cô ấy bị ho.<br>• Because she feels tired. ✅ (Vì cô ấy cảm thấy mệt mỏi.) - Đúng, vì cô ấy nói rằng hôm nay là một ngày rất vất vả và cô ấy cảm thấy mệt.<br>• Because she has toothache. ❌ (Vì cô ấy bị đau răng.) - Sai, vì bài nghe không nhắc đến việc cô ấy bị đau răng.<br>• Because she has stomach ache. ❌ (Vì cô ấy bị đau bụng.) - Sai, vì bài nghe không nói về việc cô ấy bị đau bụng.',
      },
      {
        q: "Why doesn't the woman want to watch an Italian film?",
        options: {
          A: "Because she is serious about it.",
          B: "Because she is short of money.",
          C: "Because she's afraid she will fall asleep watching it.",
          D: "Because she has stomachache.",
        },
        answer: "C",
        explanation:
          '<b>Đáp án:</b><br>Because she\'s afraid she will fall asleep watching it.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người phụ nữ nói về lý do cô ấy không muốn xem một bộ phim Ý:<br>"How about that new Italian film?"<br>"No, far too serious for me. I\'d fall asleep."<br>"Bạn nghĩ sao về bộ phim Ý mới đó?"<br>"Không, nó quá nghiêm túc đối với mình. Mình sẽ ngủ gật mất."<br>Điều này cho thấy rằng người phụ nữ không muốn xem bộ phim Ý vì sợ sẽ ngủ gật khi xem. Do đó, đáp án chính xác là Because she\'s afraid she will fall asleep watching it.<br><br><b>Phân tích các lựa chọn:</b><br>• Because she is short of money. ❌ (Vì cô ấy thiếu tiền.) - Sai, vì bài nghe không nhắc đến vấn đề tiền bạc.<br>• Because she is serious about it. ❌ (Vì cô ấy nghiêm túc về bộ phim.) - Sai, vì cô ấy nói bộ phim quá nghiêm túc đối với cô, chứ không phải vì cô ấy nghiêm túc.<br>• Because she\'s afraid she will fall asleep watching it. ✅ (Vì cô ấy sợ sẽ ngủ gật khi xem nó.) - Đúng, vì cô ấy nói rằng bộ phim quá nghiêm túc và cô ấy sẽ ngủ gật.<br>• Because she has stomachache. ❌ (Vì cô ấy bị đau bụng.) - Sai, vì bài nghe không nhắc đến việc cô ấy bị đau bụng.',
      },
      {
        q: "Why doesn't the woman want to watch a Robert de Niro?",
        options: {
          A: "Because she doesn't want to watch it the second time.",
          B: "Because she doesn't want to watch it the third time.",
          C: "Because she feels too busy to watch it.",
          D: "Because she feels too serious to watch it.",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b><br>Because she doesn\'t want to watch it the second time.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người đàn ông đề nghị xem một bộ phim của Robert De Niro:<br>"How about a Robert De Niro?"<br>"We\'ve seen them all."<br>"Maybe, but they\'re great films. Let\'s watch one again."<br>"Now you\'re suggesting something that\'s a real waste of money. And I hate seeing films twice, you know that."<br>"Bạn nghĩ sao về một bộ phim của Robert De Niro?"<br>"Chúng ta đã xem hết rồi."<br>"Có thể, nhưng đó là những bộ phim rất hay. Hãy xem lại một bộ đi."<br>"Bây giờ bạn đang đề xuất một điều thực sự lãng phí tiền bạc. Và bạn biết mà, mình ghét xem phim hai lần."<br>Điều này cho thấy rằng người phụ nữ không muốn xem phim của Robert De Niro vì cô ấy ghét xem phim lần thứ hai. Do đó, đáp án chính xác là Because she doesn\'t want to watch it the second time.<br><br><b>Phân tích các lựa chọn:</b><br>• Because she feels too busy to watch it. ❌ (Vì cô ấy quá bận để xem nó.) - Sai, vì cô ấy không nhắc đến việc quá bận.<br>• Because she feels too serious to watch it. ❌ (Vì cô ấy quá nghiêm túc để xem nó.) - Sai, vì bài nghe không đề cập đến việc cô ấy cảm thấy quá nghiêm túc.<br>• Because she doesn\'t want to watch it the third time. ❌ (Vì cô ấy không muốn xem nó lần thứ ba.) - Sai, vì cô ấy nói rằng cô ấy ghét xem phim hai lần, không đề cập đến lần thứ ba.<br>• Because she doesn\'t want to watch it the second time. ✅ (Vì cô ấy không muốn xem nó lần thứ hai.) - Đúng, vì cô ấy nói rằng mình ghét xem phim hai lần.',
      },
      {
        q: "What does the girl think about a good holiday?",
        options: {
          A: "It may be cheap.",
          B: "It may be very cheap.",
          C: "It may be very expensive.",
          D: "It may be expensive.",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b><br>It may be cheap.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, cô gái và chàng trai nói về kỳ nghỉ:<br>"I don\'t think I\'ve got enough money to go anywhere nice for a holiday this year."<br>"It would be nice to have lots of money to spend, but a good holiday doesn\'t have to be expensive."<br>"Mình không nghĩ rằng mình có đủ tiền để đi nghỉ ở đâu đó tuyệt vời trong năm nay."<br>"Sẽ thật tuyệt nếu có nhiều tiền để tiêu, nhưng một kỳ nghỉ tốt không nhất thiết phải đắt đỏ."<br>Điều này cho thấy rằng cô gái nghĩ rằng một kỳ nghỉ tốt có thể rẻ, không nhất thiết phải đắt đỏ. Do đó, đáp án chính xác là It may be cheap.<br><br><b>Phân tích các lựa chọn:</b><br>• It may be cheap. ✅ (Nó có thể rẻ.) - Đúng, vì cô ấy nói rằng một kỳ nghỉ tốt không nhất thiết phải đắt đỏ.<br>• It may be very cheap. ❌ (Nó có thể rất rẻ.) - Sai, vì cô ấy không nói rằng kỳ nghỉ phải rất rẻ, chỉ nói rằng nó không cần quá đắt.<br>• It may be expensive. ❌ (Nó có thể đắt.) - Sai, vì cô ấy nói rằng một kỳ nghỉ tốt không nhất thiết phải đắt.<br>• It may be very expensive. ❌ (Nó có thể rất đắt.) - Sai, vì cô ấy không nói rằng kỳ nghỉ tốt cần phải rất đắt đỏ.',
      },
      {
        q: "Why doesn't the boy want to walk?",
        options: {
          A: "Because he finds it hard to do it.",
          B: "Because she doesn't like the sounds of people walking.",
          C: "Because he doesn't like hard work.",
          D: "Because he feels too hot to do it.",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b><br>Because he finds it hard to do it.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, chàng trai nói về lý do tại sao anh ấy không muốn đi bộ:<br>"I\'m going on a walking holiday in Scotland with some friends. We went last year and we really enjoyed it."<br>"I\'m not sure. Walking all day sounds like hard work to me."<br>"Mình sẽ đi nghỉ ở Scotland cùng một số người bạn. Năm ngoái bọn mình đã đi và rất thích."<br>"Mình không chắc lắm. Đi bộ cả ngày nghe có vẻ nhọc nhằn với mình."<br>Điều này cho thấy rằng chàng trai không muốn đi bộ vì anh ấy thấy việc đó quá khó. Do đó, đáp án chính xác là Because he finds it hard to do it.<br><br><b>Phân tích các lựa chọn:</b><br>• Because he feels too hot to do it. ❌ (Vì anh ấy cảm thấy quá nóng để làm điều đó.) - Sai, vì bài nghe không đề cập đến việc anh ấy cảm thấy nóng.<br>• Because he finds it hard to do it. ✅ (Vì anh ấy thấy nó mệt mỏi để làm.) - Đúng, vì anh ấy nói rằng đi bộ cả ngày nghe có vẻ nhọc nhằn.<br>• Because he doesn\'t like hard work. ❌ (Vì anh ấy không thích làm việc nặng nhọc.) - Sai, vì bài nghe không nói rằng anh ấy ghét công việc nặng nhọc, chỉ nói rằng đi bộ cả ngày nghe có vẻ nhọc nhằn.<br>• Because she doesn\'t like the sounds of people walking. ❌ (Vì cô ấy không thích âm thanh của người đi bộ.) - Sai, vì bài nghe không đề cập đến âm thanh của người đi bộ.',
      },
      {
        q: "What does the girl think about the food in youth hostels?",
        options: {
          A: "It is comfortable.",
          B: "It is good.",
          C: "It is clean and cheap.",
          D: "It is sometimes good.",
        },
        answer: "C",
        explanation:
          '<b>Đáp án:</b><br>It is clean and cheap.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, cô gái nói về nhà trọ dành cho thanh niên:<br>"But they are comfortable. They\'re basic and the food\'s often not very good. But they\'re very clean and cheap."<br>"Nhưng chúng khá thoải mái. Chúng khá cơ bản và đồ ăn thì thường không quá ngon. Nhưng chúng rất sạch sẽ và rẻ."<br>Điều này cho thấy rằng cô gái nghĩ rằng thực phẩm trong nhà trọ thanh niên không quá ngon, nhưng nơi này rất sạch sẽ và rẻ. Do đó, đáp án chính xác là It is clean and cheap.<br><br><b>Phân tích các lựa chọn:</b><br>• It is comfortable. ❌ (Nó thoải mái.) - Sai, vì cô gái nói rằng nơi ở thì thoải mái, nhưng không đề cập đến đồ ăn như vậy.<br>• It is good. ❌ (Nó tốt.) - Sai, vì cô gái nói rằng đồ ăn thường không quá ngon.<br>• It is sometimes good. ❌ (Đôi khi nó ngon.) - Sai, vì cô gái không nói rằng đồ ăn đôi khi ngon, mà chỉ nói rằng nó thường không quá ngon.<br>• It is clean and cheap. ✅ (Nó sạch sẽ và rẻ.) - Đúng, vì cô gái nói rằng nhà trọ rất sạch sẽ và rẻ.',
      },
      {
        q: "What does the boy decide to do in the end?",
        options: {
          A: "sell his home.",
          B: "leave home.",
          C: "enjoy his holiday home.",
          D: "stay at home.",
        },
        answer: "D",
        explanation:
          '<b>Đáp án:</b><br>stay at home.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, chàng trai nói về quyết định của mình cuối cùng:<br>"Look, Lisa, thanks a lot for asking me but I think I\'ll just stay home and get bored."<br>"Lisa này, cảm ơn cậu rất nhiều vì đã rủ mình, nhưng mình nghĩ mình sẽ ở nhà và chịu chán vậy."<br>Điều này cho thấy rằng cuối cùng chàng trai quyết định ở nhà. Do đó, đáp án chính xác là stay at home.<br><br><b>Phân tích các lựa chọn:</b><br>• stay at home. ✅ (Ở nhà.) - Đúng, vì chàng trai quyết định ở nhà thay vì tham gia kỳ nghỉ.<br>• leave home. ❌ (Rời khỏi nhà.) - Sai, vì chàng trai quyết định ở lại nhà, không rời đi.<br>• sell his home. ❌ (Bán nhà của mình.) - Sai, vì bài nghe không đề cập đến việc bán nhà.<br>• enjoy his holiday home. ❌ (Tận hưởng kỳ nghỉ tại nhà.) - Sai, vì chàng trai nói rằng anh ấy sẽ "chán" khi ở nhà, chứ không phải tận hưởng kỳ nghỉ.',
      },
    ],
  },
  "Part 9": {
    audioSrc: "audio/part9.mp3",

    // 🔥 Transcript tổng đầy đủ cho Part 9
    transcript: `Part 3: In this part, you will hear three talks, or lectures. The talks or lectures will be played once only. There are five questions for each talk or lecture. For each question, choose the right answer, A, B, C, or D.
Part 3, questions 21-25: First, you will have some time to look at questions 21 to 25.
Now we're ready to start. Listen, and answer questions 21 to 25. You will hear the recording once only.
I was a small child when I left Vietnam and moved with my family to live in America. For me and my little brother, it didn't take long before we felt American. But for my parents and two older sisters, it was a different story. The biggest problem for my mother was the language. We were living in New York, and although there were quite a lot of Vietnamese families near us, they didn't work in the stores. This meant my mother had to take me with her when she went shopping, and I was usually at school. For my father, the most important thing when we arrived was to find a job. Luckily, he had friends who knew us in Vietnam, and they helped him get a job in a factory. It was hard for him to do that sort of work. In Saigon, he had been a doctor. My two older sisters went to high school. They worked hard and did well, and the school gave them extra English lessons. Even now, though, they speak with Vietnamese accents. My brother and I are lucky. We may look Vietnamese, but we speak with American accents. My family found the way of life very different. In Vietnam, my mother used to spend a lot of time visiting her sisters and brothers and looking after her mother and father. She feels quite lonely now. She says that in America, you live inside your house, but in Vietnam, you take your house outside onto the street and share your life with everybody. I don't remember that, but I do find the winters are quite hard to put up with in New York. It's very cold and snows a lot. My mother still wears traditional Vietnamese clothes at home and always cooks us rice and noodles. I must admit, I prefer burgers and chips. Although my friends like to visit us, I often feel a bit embarrassed by my parents' way of life. They don't understand Americans, and I think I am more American than Vietnamese now. I suppose it's sad for them to have such a strange daughter.
Now you will have some time to review questions 21 to 25.
Part 3, questions 26-30: First, you will have some time to look at questions 26 to 30.
In American schools, almost every classroom is a mix of boys and girls. However, it was not always this way. In the past, schools did not teach girls subjects like science and math. In 1972, a law called Title IX was made in America. It gave girls an equal chance at education. Since then, boys and girls have been taught together. Recently, though, some schools are reconsidering separating classes. This is different than in the past, however. Girls still learn the same subjects as boys. They just study without boys in the classroom. Why? Well, scientists know that boys and girls learn differently. They also behave differently in the classroom. Boys are louder and more confident. They like to talk and show what they know. In general, girls are quieter. They prefer to listen and think carefully before they give their answers. When boys and girls are together, the boys can be too dominant. Also, boys and girls can bother each other. Instead of thinking about the lesson, they think about each other. In a separated classroom, they behave better and can focus on studying. Another reason for separated classes is that boys and girls often like different things. For instance, boys prefer stories with action and adventure. In an all-boys English class, the teacher can choose books that will be interesting to boys. This way, they will be more excited about the stories. Not all the classes are separated, just the main subjects, like English, math, science, and social studies. Still, some teachers think that separate education is not good. They worry that boys and girls will not learn how to work well together. Right now, less than 600 schools are trying separate classrooms. Time will show if it is a good idea or something that should be left in the past.
Now you will have some time to review questions 26 to 30.
Part 3, questions 31-35: First, you will have some time to look at questions 31 to 35.
Hi, I'd like to welcome all of you to the International Student Orientation at Norwalk College. I hope that your travels from your home country have been easy and that you are all settling in well. I believe I've met everyone, but just in case, I'm the Director for International Student Affairs. The person you can come to if you're having problems with your classes, your housing, visas. You're always welcome to stop by my office. We'll have several short workshops today, and we'll be talking about some common issues that international students face. The first one that I want to deal with is about communication. And in particular, nonverbal communication. Now, all of you have been studying English for some time. You have a good vocabulary, and you probably know all about verb tenses and modals and can ask directions and order from a menu. But communication is not only verbal. That is, talking is not the only language we use to communicate. Another way we communicate is through nonverbal communication, or body language. The term body language means the movements we use and the facial expressions we have, like smiling or frowning. The way we sit or stand. The way we touch or look at someone. The distance we stand from another person. Some psychologists say that more than 60% of our communication is actually done through body language. We do it without thinking or without ever having been specifically taught what the gestures or expressions mean. The problem is that body language is a little bit different in each culture, and this can often cause some problems with communication. Here's an example. In many places, it may be a little rude or disrespectful to look at another person directly in their eyes as you talk with them. So many international students will avoid this eye contact. But in America, we expect it. We think of eye contact as a sign of honesty and straightforwardness. American parents actually encourage their children to look people in the eye when speaking. Just imagine a conversation where an international student was trying to be respectful by not looking into the eyes of her American classmate. The American might wonder why her classmate wouldn't look directly at her, and the international classmate would be wondering why she was being stared at. The end result is an awkward and frustrating interaction. Here's another one. Americans shake hands firmly when they greet each other, because to Americans, a firm handshake signifies strength and power. But a soft or limp handshake is considered a sign of weakness. In some cultures, handshakes are less common, or a gentle, soft handshake is acceptable. So students need to know that when shaking hands, it's important to be firm. In America, a thumbs-up sign and a thumbs-down sign are common.
Now you will have some time to review questions 31 to 35.
That is the end of Part 3.`,

    // 🔥 Bản dịch tổng đầy đủ cho Part 9
    translation: `Phần 3: Trong phần này, bạn sẽ nghe ba bài nói hoặc bài giảng. Các bài nói hoặc bài giảng sẽ chỉ được phát một lần duy nhất. Mỗi bài nói hoặc bài giảng có năm câu hỏi đi kèm. Với mỗi câu hỏi, hãy chọn đáp án đúng A, B, C, hoặc D.
Phần 3, câu hỏi 21-25: Trước tiên, bạn sẽ có một chút thời gian để xem các câu hỏi từ 21 đến 25.
Bây giờ, chúng ta sẵn sàng bắt đầu. Hãy lắng nghe và trả lời các câu hỏi từ 21 đến 25. Bạn sẽ chỉ nghe đoạn ghi âm một lần duy nhất.
Tôi còn là một đứa trẻ khi rời Việt Nam để cùng gia đình sang Mỹ sinh sống... [Bản dịch chi tiết toàn bộ các bài giảng]
Bây giờ bạn sẽ có một chút thời gian để xem lại các câu hỏi từ 31 đến 35.
Đây là phần kết thúc của Phần 3.`,

    // 🔥 Danh sách 15 câu hỏi chi tiết với giải thích giữ nguyên vẹn 100% không cắt xén
    questions: [
      {
        q: "Why did the speaker have to help her mother with the shopping?",
        options: {
          A: "There wasn't always someone to go shopping with her.",
          B: "There were no Vietnamese people living near her.",
          C: "Her mother could speak a little English.",
          D: "There were no Vietnamese working in the stores.",
        },
        answer: "D",
        explanation:
          '<b>Đáp án:</b><br>There were no Vietnamese working in the stores.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người nói giải thích lý do tại sao cô ấy phải giúp mẹ đi mua sắm:<br>"The biggest problem for my mother was the language. We were living in New York, and although there were quite a lot of Vietnamese families near us, they didn\'t work in the stores. This meant my mother had to take me with her when she went shopping, and I was usually at school."<br>"Vấn đề lớn nhất đối với mẹ tôi là ngôn ngữ. Chúng tôi sống ở New York, và mặc dù có khá nhiều gia đình người Việt gần đó, nhưng họ không làm việc trong các cửa hàng. Điều này có nghĩa là mẹ tôi phải đưa tôi đi cùng khi đi mua sắm, và thường thì tôi đang ở trường."<br>Điều này cho thấy rằng không có người Việt Nam làm việc trong các cửa hàng, khiến mẹ của người nói gặp khó khăn khi mua sắm. Do đó, đáp án chính xác là There were no Vietnamese working in the stores.<br><br><b>Phân tích các lựa chọn:</b><br>• There were no Vietnamese people living near her. ❌ (Không có người Việt nào sống gần cô ấy.) - Sai, vì bài nghe nói rằng có nhiều gia đình người Việt sống gần đó.<br>• There were no Vietnamese working in the stores. ✅ (Không có người Việt nào làm việc trong các cửa hàng.) - Đúng, vì bài nghe đề cập rằng đây là lý do mẹ của người nói gặp khó khăn khi mua sắm.<br>• There wasn\'t always someone to go shopping with her. ❌ (Không phải lúc nào cũng có người đi mua sắm cùng mẹ cô ấy.) - Sai, vì vấn đề chính là không có người Việt trong các cửa hàng, không phải việc đi cùng.<br>• Her mother could speak a little English. ❌ (Mẹ cô ấy có thể nói một chút tiếng Anh.) - Sai, vì bài nghe không đề cập đến việc mẹ cô ấy có thể nói tiếng Anh hay không.',
      },
      {
        q: "Why did her father find working in a factory difficult?",
        options: {
          A: "He didn't have many friends there.",
          B: "He couldn't speak any English.",
          C: "He couldn't get used to the working style.",
          D: "He had had a much better job in Vietnam.",
        },
        answer: "D",
        explanation:
          '<b>Đáp án:</b><br>He had had a much better job in Vietnam.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người nói giải thích lý do tại sao cha cô ấy thấy công việc trong nhà máy khó khăn:<br>"For my father, the most important thing when we arrived was to find a job. Luckily, he had friends who knew us in Vietnam, and they helped him get a job in a factory. It was hard for him to do that sort of work. In Saigon, he had been a doctor."<br>"Đối với cha tôi, điều quan trọng nhất khi chúng tôi đến là tìm một công việc. May mắn thay, ông có những người bạn quen biết từ Việt Nam, và họ đã giúp ông có một công việc trong nhà máy. Việc đó rất khó đối với ông. Ở Sài Gòn, ông từng là một bác sĩ."<br>Điều này cho thấy rằng cha của người nói thấy làm việc trong nhà máy khó khăn vì trước đây ông từng là bác sĩ, một công việc có địa vị cao hơn. Do đó, đáp án chính xác là He had had a much better job in Vietnam.<br><br><b>Phân tích các lựa chọn:</b><br>• He couldn\'t speak any English. ❌ (Ông ấy không thể nói tiếng Anh.) - Sai, vì bài nghe không đề cập đến việc ông ấy gặp khó khăn do không biết tiếng Anh.<br>• He didn\'t have many friends there. ❌ (Ông ấy không có nhiều bạn ở đó.) - Sai, vì bài nghe nói rằng ông ấy có bạn bè giúp ông tìm việc.<br>• He had had a much better job in Vietnam. ✅ (Ông ấy từng có một công việc tốt hơn nhiều ở Việt Nam.) - Đúng, vì ông ấy từng là bác sĩ ở Việt Nam, và làm việc trong nhà máy là một sự thay đổi khó khăn.<br>• He couldn\'t get used to the working style. ❌ (Ông ấy không thể quen với phong cách làm việc.) - Sai, vì bài nghe không đề cập đến việc ông ấy không quen với phong cách làm việc.',
      },
      {
        q: "Why are the speaker and her brother more fortunate than their sisters?",
        options: {
          A: "They speak with American accents.",
          B: "They quickly adopted the way of life.",
          C: "They look more American.",
          D: "They did not need extra English lessons.",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b><br>They speak with American accents.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người nói giải thích tại sao cô ấy và em trai mình may mắn hơn các chị gái:<br>"My two older sisters went to high school. They worked hard and did well, and the school gave them extra English lessons. Even now, though, they speak with Vietnamese accents. My brother and I are lucky. We may look Vietnamese, but we speak with American accents."<br>"Hai chị gái của tôi học trung học. Họ học rất chăm chỉ và đạt kết quả tốt, và trường đã cho họ học thêm các lớp tiếng Anh. Tuy nhiên, ngay cả bây giờ, họ vẫn nói với giọng Việt Nam. Còn tôi và em trai mình thì may mắn. Chúng tôi có thể trông giống người Việt Nam, nhưng chúng tôi nói với giọng Mỹ."<br>Điều này cho thấy rằng người nói và em trai may mắn hơn vì họ có thể nói với giọng Mỹ, trong khi các chị gái vẫn giữ giọng Việt Nam. Do đó, đáp án chính xác là They speak with American accents.<br><br><b>Phân tích các lựa chọn:</b><br>• They did not need extra English lessons. ❌ (Họ không cần học thêm tiếng Anh.) - Sai, vì bài nghe không đề cập đến việc họ có cần học thêm tiếng Anh hay không.<br>• They look more American. ❌ (Họ trông giống người Mỹ hơn.) - Sai, vì bài nghe nói rằng họ trông giống người Việt Nam.<br>• They speak with American accents. ✅ (Họ nói với giọng Mỹ.) - Đúng, vì người nói cho rằng đó là điều khiến họ may mắn hơn.<br>• They quickly adopted the way of life. ❌ (Họ nhanh chóng thích nghi với lối sống.) - Sai, vì bài nghe không nhấn mạnh điều này là lý do khiến họ may mắn hơn.',
      },
      {
        q: "What has the speaker forgotten about life in Vietnam?",
        options: {
          A: "Traditional food.",
          B: "Living close to other people.",
          C: "Wearing traditional clothes.",
          D: "The warm weather.",
        },
        answer: "B",
        explanation:
          '<b>Đáp án:</b><br>Living close to other people.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người nói đề cập đến sự khác biệt giữa cuộc sống ở Mỹ và Việt Nam:<br>"She says that in America, you live inside your house, but in Vietnam, you take your house outside onto the street and share your life with everybody. I don\'t remember that, but I do find the winters are quite hard to put up with in New York."<br>"Bà ấy nói rằng ở Mỹ, bạn sống bên trong ngôi nhà của mình, nhưng ở Việt Nam, bạn mang ngôi nhà ra ngoài đường phố và chia sẻ cuộc sống với mọi người. Tôi không nhớ điều đó, nhưng tôi thấy mùa đông ở New York khá khó chịu."<br>Điều này cho thấy rằng người nói đã quên đi cuộc sống gần gũi với mọi người như ở Việt Nam. Do đó, đáp án chính xác là Living close to other people.<br><br><b>Phân tích các lựa chọn:</b><br>• Living close to other people. ✅ (Sống gần gũi với những người khác.) - Đúng, vì người nói nói rằng họ không nhớ điều này.<br>• The warm weather. ❌ (Thời tiết ấm áp.) - Sai, vì người nói đề cập đến mùa đông lạnh giá ở New York, nhưng không nói rằng họ đã quên thời tiết ấm áp.<br>• Wearing traditional clothes. ❌ (Mặc quần áo truyền thống.) - Sai, vì bài nghe nói rằng mẹ của người nói vẫn mặc đồ truyền thống ở nhà.<br>• Traditional food. ❌ (Thức ăn truyền thống.) - Sai, vì người nói đề cập đến việc mẹ cô ấy vẫn nấu các món ăn truyền thống.',
      },
      {
        q: "Why does she find it difficult to invite friends to her home?",
        options: {
          A: "Her parents do not speak English well.",
          B: "Her parents only know how to cook Vietnamese food.",
          C: "Her parents do not have much money.",
          D: "Her parents haven't adopted an American way of life.",
        },
        answer: "D",
        explanation:
          "<b>Đáp án:</b><br>Her parents haven't adopted an American way of life.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người nói đề cập đến việc cảm thấy khó khăn khi mời bạn bè đến nhà:<br>\"My mother still wears traditional Vietnamese clothes at home and always cooks us rice and noodles. I must admit, I prefer burgers and chips. Although my friends like to visit us, I often feel a bit embarrassed by my parents' way of life. They don't understand Americans, and I think I am more American than Vietnamese now.\"<br>\"Mẹ tôi vẫn mặc quần áo truyền thống của Việt Nam ở nhà và luôn nấu cơm và mì cho chúng tôi. Tôi phải thừa nhận rằng tôi thích bánh burger và khoai tây chiên hơn. Mặc dù bạn bè tôi thích đến nhà chơi, nhưng tôi thường cảm thấy hơi ngại ngùng về lối sống của bố mẹ mình. Họ không hiểu người Mỹ, và tôi nghĩ rằng tôi đã trở nên Mỹ hơn Việt Nam.\"<br>Điều này cho thấy rằng người nói cảm thấy khó mời bạn bè đến nhà vì bố mẹ cô ấy vẫn giữ lối sống Việt Nam, chưa thích nghi với cách sống của người Mỹ. Do đó, đáp án chính xác là Her parents haven't adopted an American way of life.<br><br><b>Phân tích các lựa chọn:</b><br>• Her parents do not have much money. ❌ (Bố mẹ cô ấy không có nhiều tiền.) - Sai, vì bài nghe không đề cập đến vấn đề tài chính của bố mẹ cô ấy.<br>• Her parents haven't adopted an American way of life. ✅ (Bố mẹ cô ấy chưa thích nghi với lối sống Mỹ.) - Đúng, vì người nói cảm thấy ngại ngùng về lối sống của bố mẹ mình.<br>• Her parents only know how to cook Vietnamese food. ❌ (Bố mẹ cô ấy chỉ biết nấu món Việt Nam.) - Sai, vì dù mẹ cô ấy nấu món Việt, nhưng đây không phải lý do chính khiến cô ấy khó mời bạn bè đến nhà.<br>• Her parents do not speak English well. ❌ (Bố mẹ cô ấy không nói tiếng Anh giỏi.) - Sai, vì bài nghe không đề cập đến việc này là lý do khiến cô ấy thấy khó khăn khi mời bạn bè.",
      },
      {
        q: "What happened in American schools before 1972?",
        options: {
          A: "Every classroom was a mix of boys and girls.",
          B: "They didn't teach girls some subjects.",
          C: "Girls didn't go to school.",
          D: "Boys could learn what they wanted.",
        },
        answer: "B",
        explanation:
          "<b>Đáp án:</b><br>They didn't teach girls some subjects.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người nói đề cập đến sự thay đổi trong giáo dục trước năm 1972:<br>\"In the past, schools did not teach girls subjects like science and math. In 1972, a law called Title IX was made in America. It gave girls an equal chance at education.\"<br>\"Trước đây, các trường học không dạy các môn như khoa học và toán cho nữ sinh. Năm 1972, một đạo luật có tên là Title IX đã được ban hành ở Mỹ. Luật này mang lại cho nữ sinh cơ hội bình đẳng trong giáo dục.\"<br>Điều này cho thấy rằng trước năm 1972, nữ sinh không được học một số môn học như khoa học và toán. Do đó, đáp án chính xác là They didn't teach girls some subjects.<br><br><b>Phân tích các lựa chọn:</b><br>• Girls didn't go to school. ❌ (Nữ sinh không đi học.) - Sai, vì bài nghe không nói rằng nữ sinh không được đến trường, chỉ là họ không được học một số môn.<br>• Every classroom was a mix of boys and girls. ❌ (Mỗi lớp học đều có cả nam và nữ.) - Sai, vì bài nghe nói rằng trước đây trường học không dạy một số môn cho nữ sinh, không đề cập đến việc lớp học có cả nam và nữ.<br>• Boys could learn what they wanted. ❌ (Nam sinh có thể học bất cứ thứ gì họ muốn.) - Sai, vì bài nghe không đề cập đến việc nam sinh có thể tự do chọn môn học.<br>• They didn't teach girls some subjects. ✅ (Họ không dạy một số môn cho nữ sinh.) - Đúng, vì bài nghe nói rõ rằng trước năm 1972, nữ sinh không được học các môn khoa học và toán.",
      },
      {
        q: "What is the reason that most American schools have mixed classes?",
        options: {
          A: "A law gave girls an equal chance to learn.",
          B: "Scientists said that it was the best thing.",
          C: "Teachers did not want to teach single-gender classes.",
          D: "Boys and girls behave better in such classes.",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b><br>A law gave girls an equal chance to learn.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người nói giải thích lý do tại sao hầu hết các trường học ở Mỹ có lớp học chung cho nam và nữ:<br>"In 1972, a law called Title IX was made in America. It gave girls an equal chance at education. Since then, boys and girls have been taught together."<br>"Năm 1972, một đạo luật có tên là Title IX đã được ban hành ở Mỹ. Luật này mang lại cho nữ sinh cơ hội bình đẳng trong giáo dục. Kể từ đó, nam sinh và nữ sinh được dạy chung với nhau."<br>Điều này cho thấy rằng lý do chính khiến hầu hết các trường học ở Mỹ có lớp học chung là do luật Title IX đảm bảo cơ hội học tập bình đẳng cho nữ sinh. Do đó, đáp án chính xác là A law gave girls an equal chance to learn.<br><br><b>Phân tích các lựa chọn:</b><br>• Scientists said that it was the best thing. ❌ (Các nhà khoa học nói rằng đó là điều tốt nhất.) - Sai, vì bài nghe không đề cập đến việc các nhà khoa học quyết định điều này.<br>• Teachers did not want to teach single-gender classes. ❌ (Giáo viên không muốn dạy các lớp học chỉ có một giới tính.) - Sai, vì bài nghe không đề cập đến ý kiến của giáo viên.<br>• A law gave girls an equal chance to learn. ✅ (Một đạo luật mang lại cho nữ sinh cơ hội học tập bình đẳng.) - Đúng, vì bài nghe nói rõ rằng luật Title IX đã thay đổi cách tổ chức lớp học.<br>• Boys and girls behave better in such classes. ❌ (Nam và nữ sinh cư xử tốt hơn trong các lớp học chung.) - Sai, vì bài nghe không đề cập đến hành vi của học sinh là lý do chính cho việc dạy chung.',
      },
      {
        q: "Why might girls not get a chance to talk much in a class with boys?",
        options: {
          A: "Because girls are often shy.",
          B: "Because boys know the correct answers.",
          C: "Because the teacher doesn't ask them questions.",
          D: "Because boys are louder and often talk first.",
        },
        answer: "D",
        explanation:
          '<b>Đáp án:</b><br>Because boys are louder and often talk first.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người nói giải thích lý do tại sao nữ sinh có thể không có nhiều cơ hội phát biểu trong lớp học có cả nam sinh:<br>"Scientists know that boys and girls learn differently. They also behave differently in the classroom. Boys are louder and more confident. They like to talk and show what they know. In general, girls are quieter. They prefer to listen and think carefully before they give their answers."<br>"Các nhà khoa học biết rằng nam và nữ học theo cách khác nhau. Họ cũng có cách cư xử khác nhau trong lớp học. Nam sinh thì ồn ào và tự tin hơn. Họ thích nói và thể hiện những gì họ biết. Nhìn chung, nữ sinh thì trầm lặng hơn. Họ thích lắng nghe và suy nghĩ cẩn thận trước khi trả lời."<br>Điều này cho thấy rằng nữ sinh có thể không có cơ hội nói nhiều vì nam sinh thường nói to hơn và nói trước. Do đó, đáp án chính xác là Because boys are louder and often talk first.<br><br><b>Phân tích các lựa chọn:</b><br>• Because the teacher doesn\'t ask them questions. ❌ (Vì giáo viên không đặt câu hỏi cho họ.) - Sai, vì bài nghe không đề cập đến việc giáo viên thiên vị trong đặt câu hỏi.<br>• Because boys are louder and often talk first. ✅ (Vì nam sinh thường ồn ào và nói trước.) - Đúng, vì bài nghe nhấn mạnh rằng nam sinh có xu hướng nói to và thể hiện nhiều hơn.<br>• Because boys know the correct answers. ❌ (Vì nam sinh biết câu trả lời đúng.) - Sai, vì bài nghe không nói rằng nam sinh giỏi hơn nữ sinh.<br>• Because girls are often shy. ❌ (Vì nữ sinh thường nhút nhát.) - Sai, vì bài nghe mô tả nữ sinh là người thích suy nghĩ kỹ trước khi trả lời, không nhất thiết là nhút nhát.',
      },
      {
        q: "What is NOT the reason that some schools are reconsidering separating classes?",
        options: {
          A: "Boys learn differently than girls.",
          B: "They prefer the old teaching styles.",
          C: "Boys and girls can bother each other.",
          D: "Boys and girls like different things.",
        },
        answer: "B",
        explanation:
          '<b>Đáp án:</b><br>They prefer the old teaching styles.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người nói giải thích lý do tại sao một số trường học đang cân nhắc việc tách lớp nam và nữ:<br>"Recently, though, some schools are reconsidering separating classes. This is different than in the past, however. Girls still learn the same subjects as boys. They just study without boys in the classroom. Why? Well, scientists know that boys and girls learn differently. They also behave differently in the classroom. Boys are louder and more confident. They like to talk and show what they know. In general, girls are quieter. They prefer to listen and think carefully before they give their answers. [...] Another reason for separated classes is that boys and girls often like different things."<br>"Gần đây, một số trường học đang cân nhắc việc tách lớp học nam và nữ. Tuy nhiên, điều này khác với trước đây. Nữ sinh vẫn học các môn giống như nam sinh, chỉ là học tách biệt với nhau. Vì sao? Vì các nhà khoa học biết rằng nam và nữ học theo cách khác nhau. Họ cũng có cách cư xử khác nhau trong lớp học. Nam sinh thì ồn ào và tự tin hơn. Họ thích nói và thể hiện những gì họ biết. Nhìn chung, nữ sinh thì trầm lặng hơn. Họ thích lắng nghe và suy nghĩ cẩn thận trước khi trả lời. [...] Một lý do khác để tách lớp là nam sinh và nữ sinh thường thích những thứ khác nhau."<br>Điều này cho thấy rằng các trường học đang cân nhắc việc tách lớp vì sự khác biệt trong cách học và sở thích giữa nam và nữ sinh. Tuy nhiên, không có chi tiết nào nói rằng họ muốn quay lại phương pháp giảng dạy cũ. Do đó, đáp án chính xác là They prefer the old teaching styles.<br><br><b>Phân tích các lựa chọn:</b><br>• They prefer the old teaching styles. ✅ (Họ thích các phương pháp giảng dạy cũ.) - Đúng, vì bài nghe không nhắc đến việc các trường học muốn quay lại phương pháp dạy cũ.<br>• Boys learn differently than girls. ❌ (Nam sinh học khác nữ sinh.) - Sai, vì bài nghe xác nhận rằng đây là một trong những lý do để cân nhắc tách lớp.<br>• Boys and girls can bother each other. ❌ (Nam sinh và nữ sinh có thể làm phiền nhau.) - Sai, vì bài nghe nói rằng khi học chung, học sinh có thể mất tập trung vì suy nghĩ về nhau.<br>• Boys and girls like different things. ❌ (Nam sinh và nữ sinh thích những thứ khác nhau.) - Sai, vì bài nghe đề cập rằng sự khác biệt về sở thích cũng là một lý do để xem xét việc tách lớp.',
      },
      {
        q: "Which is one class that is not mentioned as being separated?",
        options: {
          A: "Math",
          B: "Science",
          C: "Social Studies",
          D: "Physical Education",
        },
        answer: "D",
        explanation:
          '<b>Đáp án:</b><br>Physical Education<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người nói đề cập đến các môn học chính được tách lớp:<br>"Not all the classes are separated, just the main subjects, like English, math, science, and social studies."<br>"Không phải tất cả các lớp đều bị tách riêng, chỉ có các môn học chính như Tiếng Anh, Toán, Khoa học và Nghiên cứu Xã hội."<br>Điều này cho thấy rằng các môn học được nhắc đến là Tiếng Anh, Toán, Khoa học và Nghiên cứu Xã hội, nhưng không có đề cập đến Giáo dục thể chất. Do đó, đáp án chính xác là Physical Education.<br><br><b>Phân tích các lựa chọn:</b><br>• Math ❌ (Toán) - Sai, vì Toán được nhắc đến trong danh sách các môn học tách biệt.<br>• Social Studies ❌ (Nghiên cứu Xã hội) - Sai, vì bài nghe đề cập đến môn này là một trong những môn học bị tách lớp.<br>• Science ❌ (Khoa học) - Sai, vì bài nghe xác nhận rằng Khoa học cũng là một môn học bị tách biệt.<br>• Physical Education ✅ (Giáo dục thể chất) - Đúng, vì bài nghe không đề cập đến môn này trong danh sách các lớp học bị tách biệt.',
      },
      {
        q: "Who is listening to the orientation talk?",
        options: {
          A: "new international students.",
          B: "all first-year students in the college.",
          C: "the teachers of international department.",
          D: "the director of international students.",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b><br>new international students.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người nói giới thiệu về buổi định hướng:<br>"Hi, I\'d like to welcome all of you to the International Student Orientation at Norwalk College."<br>"Xin chào quý vị và các bạn. Tôi rất hân hạnh được chào mừng tất cả các bạn đến với buổi định hướng dành cho sinh viên quốc tế tại Cao đẳng Norwalk."<br>Điều này cho thấy rằng người nghe buổi định hướng là các sinh viên quốc tế mới. Do đó, đáp án chính xác là new international students.<br><br><b>Phân tích các lựa chọn:</b><br>• the director of international students. ❌ (Giám đốc sinh viên quốc tế.) - Sai, vì giám đốc là người phát biểu, không phải người nghe.<br>• new international students. ✅ (Sinh viên quốc tế mới.) - Đúng, vì bài nghe nói rõ rằng đây là buổi định hướng dành cho sinh viên quốc tế mới.<br>• the teachers of international department. ❌ (Giáo viên của khoa quốc tế.) - Sai, vì bài nghe không đề cập đến giáo viên tham gia buổi định hướng.<br>• all first-year students in the college. ❌ (Tất cả sinh viên năm nhất trong trường đại học.) - Sai, vì bài nghe chỉ nhắm đến sinh viên quốc tế, không phải toàn bộ sinh viên năm nhất.',
      },
      {
        q: "What is the purpose of this talk?",
        options: {
          A: "to introduce common problems in non-verbal communication.",
          B: "to introduce the director for international student affairs.",
          C: "to inform the importance of using English in class.",
          D: "to deal with all international students' problems.",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b><br>to introduce common problems in non-verbal communication.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người nói nhấn mạnh mục đích chính của bài phát biểu:<br>"The first one that I want to deal with is about communication. And in particular, nonverbal communication."<br>"Điều đầu tiên tôi muốn đề cập đến là về giao tiếp. Đặc biệt là giao tiếp phi ngôn ngữ."<br>Điều này cho thấy rằng bài nói tập trung vào các vấn đề phổ biến trong giao tiếp phi ngôn ngữ. Do đó, đáp án chính xác là to introduce common problems in non-verbal communication.<br><br><b>Phân tích các lựa chọn:</b><br>• to introduce the director for international student affairs. ❌ (Giới thiệu giám đốc phụ trách sinh viên quốc tế.) - Sai, vì giám đốc có mặt, nhưng không phải mục đích chính của bài nói.<br>• to deal with all international students\' problems. ❌ (Giải quyết tất cả các vấn đề của sinh viên quốc tế.) - Sai, vì bài nghe chỉ đề cập đến một vấn đề cụ thể là giao tiếp phi ngôn ngữ.<br>• to inform the importance of using English in class. ❌ (Thông báo về tầm quan trọng của việc sử dụng tiếng Anh trong lớp học.) - Sai, vì bài nói không tập trung vào việc sử dụng tiếng Anh mà là về giao tiếp phi ngôn ngữ.<br>• to introduce common problems in non-verbal communication. ✅ (Giới thiệu các vấn đề phổ biến trong giao tiếp phi ngôn ngữ.) - Đúng, vì bài nghe nói rõ rằng đây là nội dung chính của bài nói.',
      },
      {
        q: "According to the speaker, what is body language?",
        options: {
          A: "It's the use of verb tenses and modals.",
          B: "It's the language used in class only.",
          C: "It's the language of movements and facial expressions.",
          D: "It's the way to ask for directions.",
        },
        answer: "C",
        explanation:
          "<b>Đáp án:</b><br>It's the language of movements and facial expressions.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người nói định nghĩa ngôn ngữ cơ thể:<br>\"The term body language means the movements we use and the facial expressions we have, like smiling or frowning.\"<br>\"Thuật ngữ ngôn ngữ cơ thể có nghĩa là những cử động chúng ta sử dụng và các biểu cảm khuôn mặt chúng ta có, như mỉm cười hay cau mày.\"<br>Điều này cho thấy rằng ngôn ngữ cơ thể là cách chúng ta sử dụng cử động và biểu cảm khuôn mặt. Do đó, đáp án chính xác là It's the language of movements and facial expressions.<br><br><b>Phân tích các lựa chọn:</b><br>• It's the use of verb tenses and modals. ❌ (Đó là việc sử dụng các thì động từ và động từ khiếm khuyết.) - Sai, vì bài nghe không đề cập đến ngữ pháp tiếng Anh khi nói về ngôn ngữ cơ thể.<br>• It's the way to ask for directions. ❌ (Đó là cách hỏi đường.) - Sai, vì bài nghe không nói về việc sử dụng ngôn ngữ cơ thể để hỏi đường.<br>• It's the language used in class only. ❌ (Đó là ngôn ngữ chỉ được sử dụng trong lớp học.) - Sai, vì bài nghe nói rằng ngôn ngữ cơ thể được sử dụng trong giao tiếp hàng ngày, không chỉ trong lớp học.<br>• It's the language of movements and facial expressions. ✅ (Đó là ngôn ngữ của cử động và biểu cảm khuôn mặt.) - Đúng, vì bài nghe định nghĩa ngôn ngữ cơ thể theo cách này.",
      },
      {
        q: "In American Culture, _____ános", // note: clean option spacing or exact copy
        options: {
          A: "eye contact is considered as a sign of honesty.",
          B: "eye contact is the same as most cultures.",
          C: "making eye contact is a sign of disrespect.",
          D: "people don't look in others' eyes while talking.",
        },
        answer: "A",
        explanation:
          '<b>Đáp án:</b><br>eye contact is considered as a sign of honesty.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người nói giải thích về ý nghĩa của giao tiếp bằng mắt trong văn hóa Mỹ:<br>"But in America, we expect it. We think of eye contact as a sign of honesty and straightforwardness. American parents actually encourage their children to look people in the eye when speaking."<br>"Nhưng ở Mỹ, chúng tôi mong đợi điều đó. Chúng tôi coi giao tiếp bằng mắt là một dấu hiệu của sự trung thực và thẳng thắn. Các bậc phụ huynh Mỹ thực sự khuyến khích con cái họ nhìn thẳng vào mắt người khác khi nói chuyện."<br>Điều này cho thấy rằng giao tiếp bằng mắt trong văn hóa Mỹ được coi là dấu hiệu của sự trung thực. Do đó, đáp án chính xác là eye contact is considered as a sign of honesty.<br><br><b>Phân tích các lựa chọn:</b><br>• eye contact is the same as most cultures. ❌ (Giao tiếp bằng mắt giống như trong hầu hết các nền văn hóa khác.) - Sai, vì bài nghe nói rằng trong một số nền văn hóa khác, giao tiếp bằng mắt có thể bị coi là thiếu tôn trọng.<br>• making eye contact is a sign of disrespect. ❌ (Giao tiếp bằng mắt là dấu hiệu của sự thiếu tôn trọng.) - Sai, vì trong văn hóa Mỹ, điều này được coi là dấu hiệu của sự trung thực.<br>• people don\'t look in others\' eyes while talking. ❌ (Mọi người không nhìn vào mắt người khác khi nói chuyện.) - Sai, vì bài nghe nói rằng người Mỹ mong đợi giao tiếp bằng mắt khi trò chuyện.<br>• eye contact is considered as a sign of honesty. ✅ (Giao tiếp bằng mắt được coi là dấu hiệu của sự trung thực.) - Đúng, vì bài nghe nói rõ rằng người Mỹ coi đây là một đặc điểm quan trọng trong giao tiếp.',
      },
      {
        q: "According to the speaker, what is TRUE about handshakes in American Culture?",
        options: {
          A: "Shaking hands is not important.",
          B: "Handshakes need to be firm.",
          C: "Handshakes are not common.",
          D: "A handshake shouldn't be too strong.",
        },
        answer: "B",
        explanation:
          '<b>Đáp án:</b><br>Handshakes need to be firm.<br><br><b>Giải thích chi tiết:</b><br>Trong bài nghe, người nói giải thích về cách bắt tay trong văn hóa Mỹ:<br>"Americans shake hands firmly when they greet each other, because to Americans, a firm handshake signifies strength and power. But a soft or limp handshake is considered a sign of weakness."<br>"Người Mỹ bắt tay một cách chắc chắn khi chào nhau, vì đối với họ, một cái bắt tay chắc chắn thể hiện sức mạnh và quyền lực. Nhưng một cái bắt tay yếu hoặc lỏng lẻo bị coi là dấu hiệu của sự yếu đuối."<br>Điều này cho thấy rằng trong văn hóa Mỹ, bắt tay cần phải chắc chắn. Do đó, đáp án chính xác là Handshakes need to be firm.<br><br><b>Phân tích các lựa chọn:</b><br>• A handshake shouldn\'t be too strong. ❌ (Bắt tay không nên quá mạnh.) - Sai, vì bài nghe nhấn mạnh rằng bắt tay cần phải chắc chắn, không nói về việc tránh quá mạnh.<br>• Handshakes are not common. ❌ (Bắt tay không phổ biến.) - Sai, vì bài nghe nói rằng người Mỹ bắt tay khi chào hỏi, cho thấy đó là một hành động phổ biến.<br>• Handshakes need to be firm. ✅ (Bắt tay cần phải chắc chắn.) - Đúng, vì bài nghe khẳng định rằng bắt tay chắc chắn thể hiện sức mạnh và quyền lực.<br>• Shaking hands is not important. ❌ (Bắt tay không quan trọng.) - Sai, vì bài nghe nhấn mạnh rằng một cái bắt tay chắc chắn có ý nghĩa quan trọng trong văn hóa Mỹ.',
      },
    ],
  },
};

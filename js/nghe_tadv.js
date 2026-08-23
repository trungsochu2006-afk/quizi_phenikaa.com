const vstepListeningExams = {
  De01_Nghe: {
    title: "Đề thi thử số 01 - Kỹ năng nghe",
    points: 25,
    timeMinutes: 25,
    parts: [
      {
        partNumber: 1,
        directions:
          "In this part, you will hear 5 short announcements or instructions. You will hear each instruction or announcement twice. For each question, choose the correct answer, A, B or C. Then, on your answer sheet, find the number of question and fill in the space that corresponds to the letter of the answer you have chosen. Now, let’s listen to the example. How many people were at the meeting? 13, 50, (C). 30. Before you listen, you have 15 seconds to look at the questions.",
        audioSrc: "../audio/PhenikaaP1.mp3",
        transcript: `
          <strong>Question 1:</strong><br>
          — Good morning, British Council.<br>
          — Hello, may I speak to Miss Proctor?<br>
          — I'm sorry, she is not in. Can I take a message?<br>
          — Yes, please. This is Mister Kale.<br>
          — Is that G-A-L-E?<br>
          — No, it's K-A-L-E. Thank you.<br><br>
          <strong>Question 2:</strong><br>
          — Good afternoon, 651 8935.<br>
          — Hello, could I speak to Wendy?<br>
          — I'm afraid she is not in right now. Can I take a message?<br>
          — Yes. There is a party at Bob's house on Sunday night. Bob's address is flat 4, 45 Church Road.<br>
          — Bob's address is flat 4, 45 Church Road.<br><br>
          <strong>Question 3:</strong><br>
          — Hello, can I help you?<br>
          — Yes, I'd like to see Professor Hanson on Tuesday, please.<br>
          — Who is speaking?<br>
          — David Bell.<br>
          — Yes, would three thirty be convenient?<br>
          — That would be fine. Many thanks, Mister Bell.<br>
          — Would you leave your telephone number, please?<br>
          — Yes, my number is 859 7783.<br>
          — 859 7783. Thank you.<br><br>
          <strong>Question 4:</strong><br>
          — Good morning, Doctor Jenkinson's secretary. Can I help you?<br>
          — Good morning. I'd like to make an appointment to see the doctor on Friday, please.<br>
          — Who is speaking, please?<br>
          — Rita Harper.<br>
          — Thank you. Is two forty any good?<br>
          — That's fine. Thank you very much.<br>
          — Misses Harper, could you leave your telephone number, please?<br>
          — Yes, of course. My telephone number is 563 2860.<br>
          — 563 2860. Thank you, Misses Harper.<br><br>
          <strong>Question 5:</strong><br>
          — Hello, Mister Watson's secretary, can I help you?<br>
          — Good afternoon. I'd like to make an appointment to see Mister Watson next Monday, please.<br>
          — Who's speaking, please?<br>
          — Richard Priest.<br>
          — Yes, Mister Priest. Monday is all right. Would ten fifteen be convenient?<br>
          — Thank you, that's'll be fine.<br>
          — Oh, would you leave your telephone number, please, just in case we need it.<br>
          — My telephone number is 421 7896.<br>
          — 421 7896. Thank you, Mister Priest.
        `,
        questions: [
          {
            id: 1,
            questionText: "1. Who makes the phone call?",
            options: { A: "Ms. Proctor.", B: "Mr. Gale.", C: "Mr. Kale." },
            correct: "C",
            explanation:
              "Người gọi điện nói: 'This is Mister Kale', và khi được hỏi lại tên có phải viết là 'G-A-L-E' không, người này đính chính lại là 'K-A-L-E'. Vậy tên chính xác là Kale, không phải Gale. Ms. Proctor là người mà người gọi muốn nói chuyện cùng, chứ không phải người gọi.",
          },
          {
            id: 2,
            questionText: "2. When is the party at Bob’s house?",
            options: { A: "On Monday.", B: "On Saturday.", C: "On Sunday." },
            correct: "C",
            explanation:
              "Câu thoại nói rõ: 'There is a party at Bob's house on Sunday night.' → Đáp án là On Sunday.",
          },
          {
            id: 3,
            questionText: "3. Who makes the phone call?",
            options: { A: "David Pell.", B: "David Bell.", C: "David Dell." },
            correct: "B",
            explanation:
              "Khi được hỏi 'Who is speaking?', người gọi trả lời rõ ràng: 'David Bell.' Nhân viên cũng xác nhận lại bằng cách gọi 'Mister Bell'.",
          },
          {
            id: 4,
            questionText:
              "4. At what time will Rita have an appointment with the doctor?",
            options: { A: "2:14.", B: "2:40.", C: "4:20." },
            correct: "B",
            explanation:
              "Nhân viên hỏi: 'Is two forty any good?' (2 giờ 40 có được không?), và Rita trả lời 'That's fine' (đồng ý). Vậy giờ hẹn là 2:40. Lưu ý phân biệt cách phát âm 'two forty' (2:40) với 'two fourteen' (2:14) và 'four twenty' (4:20) — đây là bẫy nghe số dễ nhầm.",
          },
          {
            id: 5,
            questionText: "5. What is Mr Priest’s telephone number?",
            options: { A: "421 7896.", B: "241 8796.", C: "421 8769." },
            correct: "A",
            explanation:
              "Ông Priest đọc số điện thoại: 'four two one seven eight nine six' = 421 7896, và nhân viên lặp lại đúng con số này để xác nhận. Hai đáp án còn lại là các số bị đảo vị trí chữ số — dạng bẫy thường gặp khi nghe số điện thoại.",
          },
        ],
      },
      {
        partNumber: 2,
        directions:
          "In this part, you will hear five short conversations. You will hear each conversation twice. There is one question for each conversation. For each question, write down the correct answer in the space corresponding to the number of the question on the answer sheet. Before you listen, you have 15 seconds to look at the questions.",
        audioSrc: "audio/PhenikaaP2.mp3",
        transcript: `📝 TRANSCRIPT — PART 2 <br>

Question 6<br>

— Did you have a good holiday?<br>
— Oh, it was OK. It rained for the first three days.<br>
— But you're really brown. Wasn't it sunny?<br>
— Yes, we had sun for a few days, but in the last two days it was cloudy.<br>

Question 7<br>

— Hello, Gary. I haven't seen you since March.<br>
— Hi, Jane. No, I've been busy with my new job.<br>
— Really? When did you start that?<br>
— May. I left my last job in April.<br>

Question 8<br>

— Are you going to bring your guitar to the party?<br>
— It's broken, I'm afraid. But you can play the piano for us.<br>
— I'm not good enough. Let's just play your new CD's.<br>
— All right, I'll bring the guitar another time.<br>

Question 9<br>

— That's a great football shirt, John. Was it expensive?<br>
— Not really. Thirteen pounds twenty five.<br>
— That's quite cheap.<br>
— Yes, it is.<br>

Question 10<br>

— Can I help you, Mister Stoker? Some soup to take away, as usual?<br>
— Not today, thanks. But I'd like something hot. A slice of that pizza, please.<br>
— OK. Anything else?<br>
— Just a packet of egg sandwiches for Misses Brown. I said I'd take some back for her.`,
        questions: [
          {
            id: 6,
            questionText:
              "6. What was the weather like when the holiday began?",
            options: { A: "Rainy.", B: "Sunny.", C: "Cloudy." },
            correct: "A",
            explanation: `✅ Rainy

Giải thích: Người nói cho biết: "It rained for the first three days" (Trời mưa trong 3 ngày đầu tiên). Vậy khi kỳ nghỉ bắt đầu, thời tiết là mưa. "Sunny" và "cloudy" là thời tiết ở các ngày sau đó — đây là bẫy vì bài nghe có nhắc đến cả 3 kiểu thời tiết, nhưng câu hỏi hỏi cụ thể lúc bắt đầu.`,
          },
          {
            id: 7,
            questionText: "7. When did Gary start his new job?",
            options: { A: "In March.", B: "In April.", C: "In May." },
            correct: "C",
            explanation: `✅ In May

Giải thích: Jane hỏi "When did you start that (job)?", Gary trả lời "May. I left my last job in April." → Gary rời công việc cũ vào tháng 4, nhưng bắt đầu công việc mới vào tháng 5. "March" chỉ là mốc thời gian Jane nhắc đến việc lâu rồi chưa gặp Gary — đây là bẫy dễ nhầm giữa 3 thời điểm (March/April/May).`,
          },
          {
            id: 8,
            questionText: "8. What music will they have at the party?",
            options: { A: "Guitar.", B: "Piano.", C: "CDs." },
            correct: "C",
            explanation: `✅ CDs

Giải thích: Người A hỏi có mang guitar không → guitar bị hỏng ("It's broken"). Người B đề nghị chơi piano → người A từ chối ("I'm not good enough"). Cuối cùng cả hai thống nhất: "Let's just play your new CD's." → Nhạc sẽ dùng tại party là CD, không phải guitar hay piano (cả hai đều bị loại trong cuộc hội thoại).`,
          },
          {
            id: 9,
            questionText: "9. How much did John’s football shirt cost?",
            options: { A: "£13.25.", B: "£30.25.", C: "£35.25." },
            correct: "A",
            explanation: `✅ £13.25

Giải thích: Khi được hỏi áo có đắt không, John trả lời: "Not really. Thirteen pounds twenty five" = £13.25. Đây là bẫy nghe số — £30.25 và £35.25 phát âm gần giống "thirteen" (13) nên dễ nhầm với "thirty" (30) hoặc số ghép khác.`,
          },
          {
            id: 10,
            questionText: "10. What is the man buying for his lunch?",
            options: { A: "Soup.", B: "Pizza.", C: "Egg." },
            correct: "B",
            explanation: `✅ Pizza

Giải thích: Nhân viên hỏi ông Stoker có lấy soup như thường lệ không → ông từ chối: "Not today... I'd like something hot. A slice of that pizza, please." → Ông ấy mua pizza cho mình. Còn egg sandwiches là ông mua hộ cho bà Brown (không phải phần ăn trưa của ông), và soup là món ông thường mua trước đây nhưng hôm nay không lấy.`,
          },
        ],
      },
      {
        partNumber: 3,
        directions:
          "Direction: In this part, you will hear a longer conversation and answer question 11-15. You will hear the conversation twice. Fill in the form with NO MORE THAN THREE WORDS and/or A NUMBER. Write down the correct answer on the corresponding place in the answer sheet. Before you listen, you have 15 seconds to look at the questions. You will hear a telephone conversation. A girl wants to speak to Martin, but he is not there.",
        audioSrc: "audio/PhenikaaP3.mp3",
        transcript: `📝 TRANSCRIPT <br>

— Hello, 785 3126. <br>

— Hello, could I speak to Martin, please? <br>

— I'm afraid he's out at the moment. Can I take a message for him? <br>

— Yes, please. My name's Elaine.<br>
— How do you spell that?<br>
— E-L-A-I-N-E.<br>
— Right, Elaine. And what's the message?<br>
— Tell Martin that the party tonight is at the Grand Hotel. I'll meet him there.<br>
— Does he know the address?<br>
— Oh yes, everyone knows the Grand Hotel.<br>
— OK, I'll tell him.<br>
— And tell him I'll try to be there at half past eight, but I may be a bit late.<br>
— Oh, I'm sure he won't mind waiting. I'll tell him 8:30. Is there anything else?<br>
— Oh yes. Ask him to bring a friend.<br>
— A friend? Oh good, that could be me.<br>
— Hmm, well — and please ask him to phone me if he can't come.<br>
— Has he got your phone number?<br>
— It's 724 5936.<br>
— Right, I've got that.<br>
— Thanks a lot. Bye.<br>
— Bye.`,
        questions: [
          {
            id: 11,
            questionText: "11. Who is the message from?",
            options: { A: "Elaine", B: "Martin", C: "Grand Hotel" },
            correct: "A",
            explanation:
              'Người gọi điện tự giới thiệu "My name\'s Elaine" và đánh vần rõ ràng (E-L-A-I-N-E) để nhân viên ghi đúng tên vào tin nhắn.',
          },
          {
            id: 12,
            questionText: "12. Where is the party?",
            options: {
              A: "At Martin's house",
              B: "At the Grand Hotel",
              C: "At Elaine's house",
            },
            correct: "B",
            explanation:
              'Elaine nói: "the party tonight is at the Grand Hotel. I\'ll meet him there."',
          },
          {
            id: 13,
            questionText: "13. What time will Elaine try to be there?",
            options: { A: "8:00 p.m.", B: "8:13 p.m.", C: "8:30 p.m." },
            correct: "C",
            explanation:
              'Elaine nói "half past eight", và người nhận tin nhắn xác nhận lại: "I\'ll tell him eight point three zero" = 8:30 p.m.',
          },
          {
            id: 14,
            questionText: "14. What should Martin bring?",
            options: { A: "A drink", B: "A friend", C: "A present" },
            correct: "B",
            explanation: 'Elaine dặn rõ: "Ask him to bring a friend."',
          },
          {
            id: 15,
            questionText: "15. What is Elaine's phone number?",
            options: { A: "785 3126", B: "724 5936", C: "724 5396" },
            correct: "B",
            explanation:
              'Khi được hỏi số điện thoại, Elaine đọc: "It\'s seven two four five nine three six" = 724 5936. Đáp án A (785 3126) là số điện thoại của Martin, không phải của Elaine — đây là bẫy hay gặp.',
          },
        ],
      },
      {
        partNumber: 4,
        directions:
          "Direction: In this part, you will hear a longer conversation and answer questions 16-20. You will hear the conversation twice. Write down the correct answer to each question in the space corresponding to the number of question in the answer sheet. Before you listen, you have 15 seconds to look at the questions. Listen to Helen and Alex talking about going shopping.",
        audioSrc: "audio/PhenikaaP4.mp3",
        transcript: `Helen: Hi Alex. Are you coming to the party on Saturday?<br>
Alex: Yes, I am going shopping to buy something new to wear to it.<br>
Helen: What are you going to buy?<br>
Alex: I have seen a nice dress but it is too expensive, so I might buy a skirt instead.<br>
Helen: Why don't you buy some new trousers?<br>
Alex: I have lots of trousers, but I only have two skirts.<br>
Helen: Have you been to the new shop on George Street? It is called Sonic. It has very nice skirts and dresses. It's not too expensive either.<br>
Alex: I will have a look there. I also want to buy some new shoes. What are you going to wear to the party?<br>
Helen: I think I'm going to wear my new jeans, black top and my pink pointy shoes.`,
        questions: [
          {
            id: 16,
            questionText: "16. Alex has seen a nice, but expensive…",
            options: { A: "skirt.", B: "dress.", C: "shirt." },
            correct: "B",
            explanation:
              'Alex nói: "I have seen a nice dress but it is too expensive" — Alex đã thấy một chiếc váy đẹp nhưng quá đắt, nên mới định mua chân váy (skirt) thay thế. Vậy món đồ đẹp nhưng đắt tiền là "dress", không phải "skirt".',
          },
          {
            id: 17,
            questionText: "17. What does Helen suggest Alex buy?",
            options: { A: "trousers", B: "jeans", C: "T-shirt" },
            correct: "A",
            explanation:
              'Helen gợi ý: "Why don\'t you buy some new trousers?" (Sao bạn không mua quần dài mới?) — Helen đề nghị Alex mua trousers.',
          },
          {
            id: 18,
            questionText: "18. How many skirts does Alex have?",
            options: { A: "three", B: "two", C: "one" },
            correct: "B",
            explanation:
              'Alex trả lời: "I have lots of trousers, but I only have two skirts." — Alex có rất nhiều quần dài nhưng chỉ có hai chiếc chân váy (two skirts).',
          },
          {
            id: 19,
            questionText:
              "19. What is the name of the new shop on George Street?",
            options: { A: "Shooz", B: "Raw", C: "Sonic" },
            correct: "C",
            explanation:
              'Helen nói: "Have you been to the new shop on George Street? It is called Sonic." — Cửa hàng mới trên phố George Street tên là Sonic.',
          },
          {
            id: 20,
            questionText: "20. What colour top will Helen wear?",
            options: { A: "black", B: "blue", C: "pink" },
            correct: "A",
            explanation:
              'Helen nói cô sẽ mặc: "my new jeans, black top and my pink pointy shoes" — chiếc áo (top) cô mặc có màu đen (black), còn giày mới là màu hồng (pink).',
          },
        ],
      },
      {
        partNumber: 5,
        directions:
          "Directions: In this part, you will hear a short talk and answer questions 21-25. You will hear a talk twice. Fill in the form with NO MORE THAN 3 WORDS and/or A NUMBER. Write down the correct answer to each question in the space corresponding to the number of the question in the answer sheet. Before you listen, you have 15 seconds to look at the questions. You will hear some information about a travel agency.",
        audioSrc: "audio/PhenikaaP5.mp3",
        transcript: `Hello, this is the South Seas Travel Agency. I'm sorry, no one can speak to you right now. The South Seas Travel Agency has moved to another part of town. We also have a new phone number. Please ring us on 847 2296. Our new address is 98 Warnock Road. That's W-A-R-N-O-C-K. It's easy to find. It's near the park at the end of the road, opposite the bank. We will be open for business at our new office on the 21st of May. We hope to see you soon at our new address. We have many exciting holidays at special prices, and we have a present for anyone who spends £350 or more on a holiday. If your holiday costs £350, we will give you a travel bag absolutely free. This beautiful bag can carry everything you need on a plane journey, and it can be yours free. Thank you for calling the South Seas Travel Agency.`,
        questions: [
          {
            id: 21,
            questionText: "21. What is the new phone number?",
            options: { A: "847 2296", B: "847 2926", C: "874 2296" },
            correct: "A",
            explanation:
              'Trong bài nghe: "Please ring us on eight four seven two two nine six." = 847 2296. Đáp án B và C là các số bị đảo vị trí chữ số — bẫy nghe số điện thoại thường gặp.',
          },
          {
            id: 22,
            questionText: "22. What is the name of the new address's road?",
            options: { A: "Warnock Road", B: "Park Road", C: "Watson Road" },
            correct: "A",
            explanation:
              'Bài nghe nói: "Our new address is ninety eight Warnock Road. That\'s W-A-R-N-O-C-K." — Địa chỉ mới nằm trên đường Warnock Road (được đánh vần rõ ràng để tránh nhầm lẫn).',
          },
          {
            id: 23,
            questionText: "23. What is the agency's new address opposite to?",
            options: { A: "A park", B: "A station", C: "A bank" },
            correct: "C",
            explanation:
              'Bài nghe nói: "It\'s near the park at the end of the road, opposite the bank." — Địa chỉ mới nằm gần công viên ở cuối đường, nhưng đối diện (opposite) với ngân hàng (bank). Đây là bẫy vì bài có nhắc cả "park" lẫn "bank", nhưng từ "opposite" chỉ đi với "bank".',
          },
          {
            id: 24,
            questionText:
              "24. How much do you need to spend on a holiday to get a free gift?",
            options: { A: "£350", B: "£300", C: "£315" },
            correct: "A",
            explanation:
              'Bài nghe nói: "we have a present for anyone who spends three hundred and fifty pounds or more on a holiday" = £350. Đây là số tiền tối thiểu để nhận quà tặng, không phải giá của kỳ nghỉ.',
          },
          {
            id: 25,
            questionText: "25. What is given as a free gift?",
            options: { A: "A map", B: "A travel bag", C: "A guide book" },
            correct: "B",
            explanation:
              'Bài nghe nói: "we will give you a travel bag absolutely free. This beautiful bag can carry everything you need on a plane journey." — Quà tặng miễn phí là một chiếc túi du lịch (travel bag).',
          },
        ],
      },
    ],
  },
  De02_Nghe: {
    title: "Đề thi thử số 02 - Kỹ năng nghe",
    points: 25,
    timeMinutes: 25,
    parts: [
      {
        partNumber: 1,
        directions:
          "Directions: In this part, you will hear 5 short announcements or instructions. You will hear each instruction or announcement twice. For each question, choose the correct answer, A, B or C.",
        audioSrc: "audio/PhenikaaP1TEST.mp3",
        transcript: `Hello, Winfield Tourist Information. How can I help?<br>Hello, I'm hoping to come to Winfield for a few days and I'd like some information about places to stay. I'm looking for somewhere in the centre.<br>There's the Mill Hotel. That's at twenty four Harvest Road.<br>That's fine. Do you have the phone number?<br>It's seven two zero four three three. You can phone them anytime.<br><br>On last week's programme, we interviewed the man behind the idea of the international camps. So I thought that this week you'd be interested to hear more about one of the camps which will be held later this year. Over to you, Michael.<br>Thank you. Yes, the camp is open to everyone between the ages of eighteen to twenty three. You don't have to be a student, you don't even have to be employed, but you must be able to speak one foreign language in addition to your mother tongue.<br><br>And is there anything you need to take?<br>Well, as I've said, tents are provided, but you'll need to bring your own pillow, knife, fork and spoon. If you get chosen, you're also asked to bring along photographs, postcards, anything that shows some of the traditions and customs of your own country.<br><br>What should we do tonight? Shall we go out somewhere?<br>No, I'm tired. I've had a really hard day.<br>That's a bit boring. Come on, let's go to a cinema or see that new play at the theatre.<br>Not tonight. Why don't we rent a video and stay in?<br>Well, I'd rather go out, but if you're tired. OK.<br><br>Ladies and gentlemen, we're arriving at Cambridge now and there are a few important things I need to say. First of all, please remove all valuables from the coach. Now, it would be a good idea to make a note of the number on the front of the coach so that you can recognise it in the coach park. Finally, ladies and gentlemen, the coach will leave the coach park at eighteen fifteen. That's six fifteen. So please be on time.`,
        questions: [
          {
            id: 1,
            questionText: "1. What is the telephone number of the hotel?",
            options: { A: "720 433", B: "730 433", C: "720 443" },
            correct: "A",
            explanation:
              'Nhân viên đọc số điện thoại: "It\'s seven two zero four three three" = 720 433.',
          },
          {
            id: 2,
            questionText: "2. Who can join the camp?",
            options: {
              A: "Students.",
              B: "Employed people.",
              C: "People between the age of 18 and 23.",
            },
            correct: "C",
            explanation:
              "Michael nói: \"the camp is open to everyone between the ages of eighteen to twenty three. You don't have to be a student, you don't even have to be employed\" — trại mở cho người từ 18-23 tuổi, không cần là học sinh hay đã đi làm.",
          },
          {
            id: 3,
            questionText: "3. What do you have to take to the camp?",
            options: { A: "A tent.", B: "A map.", C: "A pillow." },
            correct: "C",
            explanation:
              '"tents are provided, but you\'ll need to bring your own pillow, knife, fork and spoon" — lều trại đã được cung cấp sẵn, người tham gia cần tự mang theo gối (pillow).',
          },
          {
            id: 4,
            questionText: "4. What do they decide to do tonight?",
            options: {
              A: "Go to the theater.",
              B: "Watch a video at home.",
              C: "Go to the cinema.",
            },
            correct: "B",
            explanation:
              'Sau khi từ chối đi xem phim/kịch vì mệt, một người đề nghị: "Why don\'t we rent a video and stay in?" và người kia đồng ý. Vậy họ quyết định ở nhà xem video.',
          },
          {
            id: 5,
            questionText: "5. What time will the coach leave the coach park?",
            options: { A: "6.15 p.m.", B: "6.15 a.m.", C: "8.15 p.m." },
            correct: "A",
            explanation:
              '"the coach will leave the coach park at eighteen fifteen. That\'s six fifteen" = 6:15 chiều (18:15 theo giờ 24h).',
          },
        ],
      },
      {
        partNumber: 2,
        directions:
          "Directions: In this part, you will hear five short conversations. You will hear each conversation twice. There is one question for each conversation.",
        audioSrc: "audio/PhenikaaP2TEST.mp3",
        transcript: `This room looks really dirty. I'm going to clean the windows.<br>It's better to do that after we finish painting the walls.<br>But I must clean the floor before we start painting.<br>OK, you do that and I'll get the paint ready.<br><br>How are you going to go to the airport on Tuesday, Susan?<br>I'm going to take the coach. I can get off just outside the airport. Taxi's too expensive.<br>There's a train you can get. It's very fast.<br>That's only at the weekends.<br><br>What's your father's job, Joe?<br>He was a pilot, but now he's a farmer. What about your father?<br>He's a photographer.<br>Oh, I want to do that if I don't become a pilot.<br><br>What's your favourite sport, Annie?<br>Well, I like all sports, especially summer sports.<br>But which is your favourite? Swimming?<br>No, tennis, I think. Yes, tennis.<br><br>Do you want to sit under that tree, Granny? It won't be so hot there.<br>I'd prefer to sit in the sun. It looks nice there by the river.<br>Shall I put the chairs there, then?<br>Yes, they're in the car. Why don't you go and get them? I'll get the food ready.`,
        questions: [
          {
            id: 6,
            questionText: "6. What will the woman do first?",
            options: {
              A: "Clean the windows.",
              B: "Paint the wall.",
              C: "Clean the floor.",
            },
            correct: "C",
            explanation:
              'Người phụ nữ định lau cửa sổ, nhưng người kia nói nên làm sau khi sơn tường xong. Cô nói lại: "But I must clean the floor before we start painting" — vậy việc đầu tiên cô làm là lau sàn nhà, trước khi sơn tường.',
          },
          {
            id: 7,
            questionText: "7. How is Susan going to get to the airport?",
            options: { A: "By coach.", B: "By taxi.", C: "By train." },
            correct: "A",
            explanation:
              'Susan nói: "I\'m going to take the coach... Taxi\'s too expensive." Khi được gợi ý đi tàu hỏa, cô từ chối vì "That\'s only at the weekends." Vậy Susan đi bằng xe khách (coach).',
          },
          {
            id: 8,
            questionText: "8. What does Joe's father do?",
            options: { A: "A pilot.", B: "A farmer.", C: "Photographer." },
            correct: "B",
            explanation:
              '"He was a pilot, but now he\'s a farmer." — bố của Joe từng là phi công, nhưng hiện tại làm nông dân. "Photographer" là nghề của bố người bạn kia.',
          },
          {
            id: 9,
            questionText: "9. Which sport does Annie like best?",
            options: { A: "Tennis.", B: "Swimming.", C: "Sailing." },
            correct: "A",
            explanation:
              'Khi được hỏi có phải bơi lội không, Annie trả lời: "No, tennis, I think. Yes, tennis." — môn thể thao cô thích nhất là tennis.',
          },
          {
            id: 10,
            questionText: "10. Where will they sit?",
            options: {
              A: "Under the tree.",
              B: "By the river.",
              C: "In the car.",
            },
            correct: "B",
            explanation:
              'Bà từ chối ngồi dưới gốc cây, nói: "I\'d prefer to sit in the sun. It looks nice there by the river." — họ sẽ ngồi cạnh bờ sông. Ghế được lấy từ trong xe (in the car) chứ không phải nơi họ ngồi.',
          },
        ],
      },
      {
        partNumber: 3,
        directions:
          "Direction: In this part, you will hear a longer conversation and answer question 11-15. You will hear the conversation twice. Fill in the form with NO MORE THAN THREE WORDS and/or A NUMBER. You will hear the manager of a shop leaving a message for a customer.",
        audioSrc: "audio/PhenikaaP3TEST.mp3",
        transcript: `Hello, can I speak to Anna Jones, please?<br>I'm afraid she's out, but you can leave a message with me. I'm her mother.<br>Thanks. This is Bob Watson from the shoe shop Forsters.<br>How do you spell that?<br>It's F-O-R-S-T-E-R-S. OK, I've got that.<br>Can you tell her that we now have the boots she wanted in size thirty eight? We only had size forty when she came into the shop last week, and she'll be pleased to know that they're also in the colour she liked, green. Before we only had black ones.<br>That's good news.<br>Yes. And there's even more good news. We're having a sale, so they're forty pounds cheaper now. They're sixty five pounds, which is a good price. They're made of very good leather.<br>Well, she'll be really pleased. Can she come and get them tomorrow at around five o'clock?<br>She'll have to come before two o'clock, I'm afraid, because that's when we shut tomorrow.<br>OK, I'll tell her.`,
        questions: [
          {
            id: 11,
            questionText: "11. Name of shop:",
            options: { A: "Forsters", B: "Fosters", C: "Forsterz" },
            correct: "A",
            explanation:
              'Người gọi giới thiệu: "This is Bob Watson from the shoe shop Forsters" và đánh vần rõ "F-O-R-S-T-E-R-S" để tránh nhầm lẫn.',
          },
          {
            id: 12,
            questionText: "12. Boots size:",
            options: { A: "38", B: "40", C: "35" },
            correct: "A",
            explanation:
              '"we now have the boots she wanted in size thirty eight" = size 38. Size 40 là size cửa hàng chỉ có trước đó khi Anna đến xem tuần trước — là bẫy dễ nhầm.',
          },
          {
            id: 13,
            questionText: "13. Colour:",
            options: { A: "Green", B: "Black", C: "Brown" },
            correct: "A",
            explanation:
              '"they\'re also in the colour she liked, green. Before we only had black ones." — màu Anna thích là xanh lá (green); màu đen (black) là màu cũ trước đây cửa hàng chỉ có.',
          },
          {
            id: 14,
            questionText: "14. Sale Price:",
            options: { A: "£65", B: "£40", C: "£105" },
            correct: "A",
            explanation:
              "\"they're forty pounds cheaper now. They're sixty five pounds\" — giá sau khi giảm là £65 (giảm £40 so với giá gốc £105).",
          },
          {
            id: 15,
            questionText: "15. Tomorrow shop closes at:",
            options: { A: "2 o'clock", B: "5 o'clock", C: "12 o'clock" },
            correct: "A",
            explanation:
              "\"She'll have to come before two o'clock, I'm afraid, because that's when we shut tomorrow.\" — cửa hàng đóng cửa lúc 2 giờ chiều ngày mai. 5 giờ là giờ khách hàng đề xuất đến lấy nhưng bị từ chối vì cửa hàng đã đóng cửa.",
          },
        ],
      },
      {
        partNumber: 4,
        directions:
          "Direction: In this part, you will hear a longer conversation and answer questions 16-20. You will hear the conversation twice. Listen to a man asking for information in a travel agency.",
        audioSrc: "audio/PhenikaaP4TEST.mp3",
        transcript: `Hello.<br>Good morning. Can I help you?<br>Well, I have to go to Argentina next week, so I'd like some information about flying to Buenos Aires.<br>OK, well, there are direct flights on Mondays, Wednesdays and Fridays.<br>And what time do they leave?<br>At two p.m. on all three days.<br>OK, Wednesday is best for me. Now, how can I get to the airport? Is there a bus?<br>Yes. You'll have to check in at the airport at twelve o'clock, so you could take the ten o'clock coach from the bus station in Mill Street.<br>In Mill Street. OK. How long does the coach take?<br>About one and a half hours.<br>And how much is a single ticket to Buenos Aires?<br>Well, a single to Buenos Aires is three hundred pounds. But if you have a student card, there's a twenty percent reduction.<br>Yes, I've got a student card. Here it is.<br>OK, so the flight will be two hundred and forty pounds.<br>Right.<br>And the coach fare, that's thirteen pounds fifty.<br>OK, I'll book it, please.`,
        questions: [
          {
            id: 16,
            questionText: "16. The plane leaves at……",
            options: { A: "12 a.m.", B: "2 p.m.", C: "3 p.m." },
            correct: "B",
            explanation:
              'Nhân viên nói máy bay khởi hành: "At two p.m. on all three days."',
          },
          {
            id: 17,
            questionText: "17. The bus station is in……",
            options: {
              A: "Bill Street.",
              B: "Hill Street.",
              C: "Mill Street.",
            },
            correct: "C",
            explanation:
              '"you could take the ten o\'clock coach from the bus station in Mill Street." Khách hàng cũng nhắc lại "In Mill Street" để xác nhận.',
          },
          {
            id: 18,
            questionText: "18. The journey to the airport takes……",
            options: {
              A: "1 hour 15 minutes.",
              B: "1 hour 30 minutes.",
              C: "1 hour 45 minutes.",
            },
            correct: "B",
            explanation:
              '"How long does the coach take?" — "About one and a half hours" = 1 giờ 30 phút.',
          },
          {
            id: 19,
            questionText: "19. The man's ticket to Buenos Aires will cost……",
            options: { A: "£240.", B: "£300.", C: "£320." },
            correct: "A",
            explanation:
              'Giá gốc £300, giảm 20% nhờ thẻ sinh viên: "the flight will be two hundred and forty pounds" = £240.',
          },
          {
            id: 20,
            questionText: "20. The coach costs……",
            options: { A: "£13.50.", B: "£14.50.", C: "£30.50." },
            correct: "A",
            explanation:
              '"the coach fare, that\'s thirteen pounds fifty" = £13.50.',
          },
        ],
      },
      {
        partNumber: 5,
        directions:
          "Directions: In this part, you will hear a short talk and answer questions 21-25. You will hear a talk twice. You will hear some information about a competition to win a holiday.",
        audioSrc: "audio/PhenikaaP5TEST.mp3",
        transcript: `Here's some good news for all our listeners. Would you like to win a free holiday in Scotland? Well, the lucky winner of the travel programme's holiday competition will win a three night stay for two people in the wonderful Scottish countryside. We have chosen a fine hotel for you. It's called the Falkirk. That's F-A-L-K-I-R-K, and it's an old castle in the mountains. You won't have to pay for anything during your stay. The hotel has excellent food, and the competition winners can even use the beautiful hotel golf course when they are there. All you have to do to win this great holiday is call the travel programme and answer the simple question we will ask you. Don't delay, because the competition closes at midnight on Thursday, and we'll tell you the name of the winner next Saturday. The number to call is 020 8668 73.`,
        questions: [
          {
            id: 21,
            questionText: "21. How many nights does the winner stay?",
            options: { A: "Two nights", B: "Three nights", C: "Four nights" },
            correct: "B",
            explanation:
              '"will win a three night stay for two people" — người thắng cuộc được ở lại 3 đêm.',
          },
          {
            id: 22,
            questionText: "22. What is the name of the hotel?",
            options: {
              A: "Falkland Hotel",
              B: "Falkirk Hotel",
              C: "Fairkirk Hotel",
            },
            correct: "B",
            explanation:
              "\"It's called the Falkirk. That's F-A-L-K-I-R-K\" — tên khách sạn được đánh vần rõ ràng.",
          },
          {
            id: 23,
            questionText: "23. At the hotel, you can play……",
            options: { A: "Tennis", B: "Golf", C: "Swimming" },
            correct: "B",
            explanation:
              '"the competition winners can even use the beautiful hotel golf course" — người thắng cuộc có thể chơi golf.',
          },
          {
            id: 24,
            questionText: "24. You must phone before midnight on……",
            options: { A: "Wednesday", B: "Thursday", C: "Friday" },
            correct: "B",
            explanation:
              '"the competition closes at midnight on Thursday" — hạn chót gọi điện là nửa đêm thứ Năm.',
          },
          {
            id: 25,
            questionText: "25. What is the phone number?",
            options: { A: "020 8668 73", B: "020 8686 73", C: "028 8668 73" },
            correct: "A",
            explanation:
              '"zero two zero eight double six eight seven three" = 020 8668 73.',
          },
        ],
      },
    ],
  },
  De03_Nghe: {
    title: "Đề thi thử số 03 - Kỹ năng nghe",
    points: 25,
    timeMinutes: 25,
    parts: [
      {
        partNumber: 1,
        directions:
          "This is the listening test for level 2 for adults of the Vietnam's 6-level Language Proficiency Test. In this part, you will hear 5 short announcements or instructions. For each of them, there is one question with three options. You will hear each announcement or instruction TWICE.",
        audioSrc: "audio/P1Test03.mp3",
        transcript: `My schedule is as busy as my friends' schedules. Usually I wake up at 7 o'clock, I get on a bus at 8 o'clock, and arrive at work at 9. After I get off work at about 6 o'clock, I go shopping or walk through the park with my wife. Sometimes, when I want a quiet evening, I just stay at home and watch TV.<br><br>Hop on down to Bunny Motors for our huge sales event. We have the fastest and most expensive cars on the market, but you can now save up to 50% on the purchase of a new automobile. Want to seem richer and be smarter than all your neighbors? Then hop on down to Bunny Motors today.<br><br>I have been studying judo for over 10 years. During my last competition, one opponent pulled my shoulder out of its socket. Despite the pain, I was able to throw my opponent to the ground because I really didn't want to lose. After, the referee raised my hand in victory.<br><br>Over the past few years, I've had many jobs in the service industry. My duties included watering plants, sweeping floors, and serving customers in a restaurant. So even though I look very young, I have a lot of experience. If you choose to hire me, I can be available to start work as soon as tomorrow morning.<br><br>Do you find it difficult to relax? Are you always stressed? If so, the answer to your problem is yoga. Yoga can help your body relax and give you a lot more energy. Contact the Rama Yoga Center at 311 4265 for more information.`,
        questions: [
          {
            id: 1,
            questionText: "1. How does the speaker get to work?",
            options: {
              A: "He drives to work",
              B: "He walks",
              C: "He takes a bus",
            },
            correct: "C",
            explanation:
              'Người nói kể: "I get on a bus at 8 o\'clock, and arrive at work at 9" — người này đi làm bằng xe buýt.',
          },
          {
            id: 2,
            questionText: "2. What is on sale?",
            options: { A: "Pets", B: "Markets", C: "Vehicles" },
            correct: "C",
            explanation:
              '"Hop on down to Bunny Motors... save up to 50% on the purchase of a new automobile" — đây là quảng cáo giảm giá ô tô (vehicles), không phải thú cưng hay chợ.',
          },
          {
            id: 3,
            questionText: "3. How long has the speaker been studying judo?",
            options: {
              A: "Over ten years",
              B: "Since he was ten",
              C: "Before he was ten",
            },
            correct: "A",
            explanation:
              '"I have been studying judo for over 10 years." — người nói đã học judo hơn 10 năm.',
          },
          {
            id: 4,
            questionText: "4. What does the speaker NOT have experience doing?",
            options: { A: "Sweeping", B: "Cooking", C: "Watering" },
            correct: "B",
            explanation:
              'Người nói kể các công việc đã làm: "watering plants, sweeping floors, and serving customers in a restaurant" (tưới cây, quét sàn, phục vụ khách) — không nhắc đến nấu ăn (cooking).',
          },
          {
            id: 5,
            questionText: "5. Who do you think this ad is for?",
            options: {
              A: "People who find it difficult to relax.",
              B: "People who are relaxed.",
              C: "People who have lots of energy.",
            },
            correct: "A",
            explanation:
              'Quảng cáo mở đầu bằng câu hỏi: "Do you find it difficult to relax? Are you always stressed?" rồi giới thiệu yoga là giải pháp — nhắm đến người khó thư giãn, hay căng thẳng.',
          },
        ],
      },
      {
        partNumber: 2,
        directions:
          "In this part, you will hear five short conversations. There is one question for each conversation. You will hear each conversation TWICE.",
        audioSrc: "audio/P2Test03.mp3",
        transcript: `Hello, Jack. Are you having a good holiday?<br>Hi, Mum. Not really. It's rained every day since I got here.<br>That's a pity. It's been nice and sunny here. When will you be home?<br>In two days time. I hope it doesn't snow before then.<br><br>Shall we have pizza tonight?<br>No, I don't fancy pizza. How about spaghetti?<br>We had that on Monday. I know. Let's have fish and chips.<br><br>We were going to change the meeting from room eighteen to room eight or eighty.<br>So which one did you change it to?<br>In the end we decided not to change it after all.<br><br>Cindy, did you find them? Then I bet they're under the stairs.<br>I looked in the car as I'd had them there yesterday, but I couldn't see them anywhere. Then I was sure I'd left them on the window, but they weren't there either.<br>Oh, here they are — under the stairs. Told you so. They're under the stairs.<br><br>I like your shirt, Sue. Is it new?<br>Thanks. It's the first time I've worn it.<br>How much do you think it cost? It looks very expensive. About forty pounds.<br>A lot less. It was thirty five pounds but I got it for thirty pounds because there was a small mark on the front.`,
        questions: [
          {
            id: 6,
            questionText: "6. What's the weather like for Jack's holiday?",
            options: { A: "rainy", B: "sunny", C: "snowy" },
            correct: "A",
            explanation:
              'Jack nói: "It\'s rained every day since I got here." — thời tiết ở nơi Jack đang nghỉ là mưa. Trời nắng ("sunny") là thời tiết ở nhà (nơi mẹ Jack đang ở), không phải nơi Jack đi nghỉ.',
          },
          {
            id: 7,
            questionText: "7. What will they have for dinner?",
            options: { A: "pizzas", B: "spaghetti", C: "fish and chips" },
            correct: "C",
            explanation:
              'Sau khi từ chối pizza và spaghetti (đã ăn thứ Hai), họ thống nhất: "Let\'s have fish and chips."',
          },
          {
            id: 8,
            questionText: "8. Which room will the meeting be in?",
            options: { A: "8", B: "18", C: "80" },
            correct: "B",
            explanation:
              'Họ định đổi phòng họp từ 18 sang 8 hoặc 80, nhưng "In the end we decided not to change it after all" — nghĩa là vẫn giữ nguyên phòng 18.',
          },
          {
            id: 9,
            questionText: "9. Where are Cindy's trainers now?",
            options: {
              A: "in the car",
              B: "on the window",
              C: "under the stairs",
            },
            correct: "C",
            explanation:
              'Sau khi tìm ở xe hơi và cửa sổ đều không thấy, cuối cùng tìm thấy: "Oh, here they are — under the stairs."',
          },
          {
            id: 10,
            questionText: "10. How much did Sue pay for the shirt?",
            options: { A: "£30", B: "£35", C: "£40" },
            correct: "A",
            explanation:
              'Giá gốc là £35, nhưng Sue nói: "I got it for thirty pounds because there was a small mark on the front" — cô mua với giá £30 vì áo có vết bẩn nhỏ.',
          },
        ],
      },
      {
        partNumber: 3,
        directions:
          "In this part, you will hear a longer conversation and answer questions 11 to 15. For each question, fill in the blank with NO MORE THAN THREE WORDS and/or A NUMBER. You will hear the conversation TWICE. You will hear Sally asking a friend about some homework.",
        audioSrc: "audio/P3Test03.mp3",
        transcript: `Hello, Richard. I wasn't at school today because I was ill. Can you tell me what our biology homework is?<br>Yes, Sally. In class we talked about animals that live in water. For homework we have to read a book about them. The book's called Rivers. It's in the school library.<br>OK. Who is it by?<br>Let me see. It's by Martin Cooper.<br>Is that C, double O, P, E, R?<br>That's right. You'll find the books on the third shelf on the biology bookshelf. We have to look at part seven, pages one hundred and twenty three to one hundred and twenty seven.<br>OK. That's not very much. What is it about?<br>That part's all about fish. It's quite interesting. Misses Knight says we're going to study lakes next week.<br>Oh, right. Do we have to read these pages for the lesson on Monday?<br>We have until Friday to do it.<br>Oh good. I'll go to the library on Thursday. Thanks, Richard. See you tomorrow.`,
        questions: [
          {
            id: 11,
            questionText: "11. Name of book:",
            options: { A: "Rivers", B: "Lakes", C: "Oceans" },
            correct: "A",
            explanation:
              'Richard nói: "The book\'s called Rivers." Tên "Lakes" là chủ đề họ sẽ học tuần sau, không phải tên sách hiện tại — đây là bẫy.',
          },
          {
            id: 12,
            questionText: "12. Written by:",
            options: {
              A: "Martin Cooper",
              B: "Martin Cowper",
              C: "Martin Copper",
            },
            correct: "A",
            explanation:
              'Richard trả lời: "It\'s by Martin Cooper" và đánh vần rõ "C, double O, P, E, R" = Cooper.',
          },
          {
            id: 13,
            questionText: "13. Read pages:",
            options: { A: "123 to 127", B: "113 to 117", C: "130 to 137" },
            correct: "A",
            explanation:
              '"We have to look at part seven, pages one hundred and twenty three to one hundred and twenty seven" = trang 123 đến 127.',
          },
          {
            id: 14,
            questionText: "14. Learn about:",
            options: { A: "Fish", B: "Lakes", C: "Insects" },
            correct: "A",
            explanation:
              'Richard nói: "That part\'s all about fish." Chủ đề "lakes" (hồ) là bài học của tuần sau, không phải nội dung cần đọc hiện tại.',
          },
          {
            id: 15,
            questionText: "15. Finish by:",
            options: { A: "Friday", B: "Monday", C: "Thursday" },
            correct: "A",
            explanation:
              'Richard nói: "We have until Friday to do it." — hạn hoàn thành bài tập là thứ Sáu. Thứ Hai là ngày ban đầu Sally tưởng phải nộp; thứ Năm là ngày Sally định đi thư viện.',
          },
        ],
      },
      {
        partNumber: 4,
        directions:
          "In this part, you will hear a longer conversation and answer questions 16 to 20. You will hear the conversation TWICE. Listen to Michael talking to Marina about a new sports centre.",
        audioSrc: "audio/P4Test03.mp3",
        transcript: `Hello, Marina. Have you been to the new sports centre yet?<br>No, Michael.<br>Where is it? In Long Road. You know, near Bridge street, behind the station.<br>Oh, is it good?<br>Yes, it's great. You can do a lot of sports. I played table tennis and volleyball last week.<br>What about tennis?<br>Not yet. They're going to build some tennis courts next year.<br>Is it expensive?<br>Not really, Marina. It's fifty pounds a year if you're fifteen to eighteen and thirty pounds if you're under fifteen.<br>Oh, that's good because I'm still fourteen.<br>And on Tuesday, Thursday and Friday it stays open late till ten o'clock.<br>Oh, great. How did you get there?<br>I got the number sixteen bus. It's only ten minutes from the bus station. Do you want to go next week?<br>OK, any day except Thursday.<br>Well, why don't we go on Friday? Then we can stay late.<br>Yes, OK, let's meet after school.`,
        questions: [
          {
            id: 16,
            questionText:
              "16. What sport can't people do at the sports centre?",
            options: { A: "tennis", B: "table-tennis", C: "volleyball" },
            correct: "A",
            explanation:
              'Michael nói: "Not yet. They\'re going to build some tennis courts next year." — sân tennis chưa có, sẽ xây năm sau. Table tennis và volleyball đã chơi được (Michael đã chơi tuần trước).',
          },
          {
            id: 17,
            questionText: "17. How much must Marina pay?",
            options: { A: "£14 a year", B: "£30 a year", C: "£50 a year" },
            correct: "B",
            explanation:
              '"fifty pounds a year if you\'re fifteen to eighteen and thirty pounds if you\'re under fifteen" — Marina nói cô "still fourteen" (14 tuổi), nên phải trả £30/năm.',
          },
          {
            id: 18,
            questionText:
              "18. How many days a week is the sports centre open late?",
            options: { A: "2", B: "3", C: "4" },
            correct: "B",
            explanation:
              '"on Tuesday, Thursday and Friday it stays open late till ten o\'clock" — 3 ngày một tuần mở cửa muộn.',
          },
          {
            id: 19,
            questionText: "19. Which bus goes to the sports centre?",
            options: { A: "number 10", B: "number 16", C: "number 60" },
            correct: "B",
            explanation: 'Michael nói: "I got the number sixteen bus."',
          },
          {
            id: 20,
            questionText:
              "20. When will Michael and Marina go to the sports centre?",
            options: { A: "Tuesday", B: "Thursday", C: "Friday" },
            correct: "C",
            explanation:
              'Marina nói được, trừ thứ Năm ("any day except Thursday"), Michael đề nghị: "why don\'t we go on Friday? Then we can stay late" và Marina đồng ý.',
          },
        ],
      },
      {
        partNumber: 5,
        directions:
          "In this part, you will hear a short talk and answer questions 21 to 25. For each question, fill in the blank with NO MORE THAN THREE WORDS and/or A NUMBER. You will hear the talk TWICE. Listen to the introduction of a hotel in Ireland.",
        audioSrc: "audio/P5Test 03.mp3",
        transcript: `This week I'm going to tell you about my favourite hotel. It's in the west of Ireland and the best time to go there is June. I've loved this hotel since I was a child. It's called the White Hotel because it's always painted that colour. It's built on one of the most beautiful islands I have ever visited, Achill Island. You say Achill, but it's spelt A-C-H-I-double-L. It's one of the oldest hotels in this part of the country. It was built in eighteen fifty nine, and the rich and famous have enjoyed going there ever since. You can see the sea or mountains from every room, but it's difficult to book a bedroom there because there are only thirty six of them, and the hotel can't take more than fifty guests at one time. Visitors also enjoy the hotel restaurant. People go there from all over the world to eat its fish. It's caught that day in the sea round the island. Try it cooked with tomatoes.`,
        questions: [
          {
            id: 21,
            questionText: "21. Name: The ...... Hotel",
            options: { A: "White", B: "Black", C: "Green" },
            correct: "A",
            explanation:
              "\"It's called the White Hotel because it's always painted that colour.\"",
          },
          {
            id: 22,
            questionText: "22. Where: ...... Island",
            options: {
              A: "Achill Island",
              B: "Ashell Island",
              C: "Aitchel Island",
            },
            correct: "A",
            explanation:
              '"It\'s built on one of the most beautiful islands I have ever visited, Achill Island", đánh vần rõ "A-C-H-I-double-L".',
          },
          {
            id: 23,
            questionText: "23. Hotel first built in the year:",
            options: { A: "1859", B: "1958", C: "1889" },
            correct: "A",
            explanation: '"It was built in eighteen fifty nine" = năm 1859.',
          },
          {
            id: 24,
            questionText: "24. Number of bedrooms:",
            options: { A: "36", B: "50", C: "63" },
            correct: "A",
            explanation:
              '"there are only thirty six of them" — khách sạn chỉ có 36 phòng. Số 50 là số khách tối đa ("the hotel can\'t take more than fifty guests at one time"), không phải số phòng — đây là bẫy.',
          },
          {
            id: 25,
            questionText: "25. Restaurant famous for:",
            options: { A: "Fish", B: "Steak", C: "Bread" },
            correct: "A",
            explanation:
              '"People go there from all over the world to eat its fish. It\'s caught that day in the sea round the island."',
          },
        ],
      },
    ],
  },
};

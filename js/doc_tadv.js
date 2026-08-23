const vstepReadingExams = {
  De01_Doc: {
    title: "Đề thi thử số 01 - Kỹ năng đọc",
    points: 30,
    timeMinutes: 40,
    parts: [
      {
        partNumber: 1,
        directions:
          "PART 1: Read a text about a girl going to college. Choose the best word for each space. For questions 1-8, write the correct letter (A, B or C) on your answer sheet.",
        imageSrc: "photo/part101.png",
        passageText: `PART 1: Read a text about a girl going to college. Choose the best word for each space.<br>For questions 1-8, write the correct letter (A, B or C) on your answer sheet.<br><br>Example: Susan is (0) ... TV now.<br>1. A. watching B. looking C. seeing<br>Answer sheet: 0. A<br><br>Today I went through a change that will make my life different. I left my home and went across the country with my mom and dad to go off to college. Some people might (1) ... it is not a big thing, but it is the most (2) ... thing that I have ever had to do. I hated leaving my family, but I am happy to live in a new home and (3) ... out new things.<br><br>I have lived in the same house for eighteen years. I am from North Carolina, and I love everything about it. Now I am going to college in California. I think I can do it. I think I can go and live away from all my family and friends, but I am still (4) ... .<br><br>I met the girl I am (5) ... my room with, and she seems very nice. Her name is Macy. She is from California and she can show me all the good things about it. We found out that we had lots of things in (6) ... . We both love books and want to study English in college. We both do not like country music and dogs, even though everyone from North Carolina and California does. I think we will get (7) ... very well. My mom and dad thought that Macy was very nice, and told me that they were (8) ... I was living with someone like her.`,
        questions: [
          {
            id: 1,
            questionText: "1.",
            options: { A: "tell", B: "think", C: "wonder" },
            correct: "B",
            explanation:
              '"Some people might think it is not a big thing" — dùng động từ "think" (nghĩ) là phù hợp nhất trong ngữ cảnh diễn đạt suy nghĩ của người khác về sự việc.',
          },
          {
            id: 2,
            questionText: "2.",
            options: { A: "difficult", B: "comfortable", C: "memorable" },
            correct: "A",
            explanation:
              '"the most difficult thing that I have ever had to do" — việc rời nhà đi học xa là điều khó khăn nhất, phù hợp với câu tiếp theo "I hated leaving my family".',
          },
          {
            id: 3,
            questionText: "3.",
            options: { A: "try", B: "turn", C: "put" },
            correct: "A",
            explanation:
              '"try out new things" là cụm động từ có nghĩa "thử nghiệm những điều mới", phù hợp với ngữ cảnh sống ở nhà mới và khám phá điều mới mẻ.',
          },
          {
            id: 4,
            questionText: "4.",
            options: { A: "proud", B: "confident", C: "scared" },
            correct: "C",
            explanation:
              'Câu có ý nghịch: "I think I can do it... but I am still scared" — mặc dù tự tin có thể làm được, cô gái vẫn cảm thấy sợ hãi khi sống xa gia đình và bạn bè.',
          },
          {
            id: 5,
            questionText: "5.",
            options: { A: "living", B: "sharing", C: "having" },
            correct: "B",
            explanation:
              '"the girl I am sharing my room with" = cô gái mà tôi ở cùng phòng (chia sẻ phòng) — đây là bạn cùng phòng ký túc xá.',
          },
          {
            id: 6,
            questionText: "6.",
            options: { A: "common", B: "general", C: "fact" },
            correct: "A",
            explanation:
              '"have lots of things in common" là cụm cố định nghĩa là "có nhiều điểm chung", phù hợp với các ví dụ liệt kê sau đó (cùng thích sách, cùng học tiếng Anh...).',
          },
          {
            id: 7,
            questionText: "7.",
            options: { A: "up", B: "along", C: "together" },
            correct: "B",
            explanation:
              '"get along very well" là cụm động từ nghĩa "hòa hợp, hòa thuận với nhau" — phù hợp với ngữ cảnh hai người có nhiều điểm chung.',
          },
          {
            id: 8,
            questionText: "8.",
            options: { A: "sad", B: "worried", C: "happy" },
            correct: "C",
            explanation:
              'Bố mẹ thấy Macy rất tốt ("Macy was very nice"), nên họ cảm thấy vui ("happy") khi con gái sống cùng người như vậy — phù hợp mạch cảm xúc tích cực.',
          },
        ],
      },
      {
        partNumber: 2,
        directions:
          "PART 2: Which notice (A-K) says this (9-16)? For questions 9-16, write the correct letter on your answer sheet.",
        imageSrc: "photo/part201n.png",
        noticesData: {
          example: {
            num: "0",
            text: "Get your tickets during your journey.",
            answer: "H",
          },
          leftItems: [
            { num: "9", text: "You cannot travel by railway until tomorrow." },
            {
              num: "10",
              text: "Children and parents travel for less with this.",
            },
            { num: "11", text: "You must pay before you travel on this." },
            { num: "12", text: "Only adults pay to go in here." },
            { num: "13", text: "This is late because of bad weather." },
            { num: "14", text: "You can look at and buy cars here." },
            {
              num: "15",
              text: "Only certain people may leave their cars here.",
            },
            { num: "16", text: "This can help prevent crimes." },
          ],
          rightNotices: [
            {
              letter: "A",
              lines: [
                "MUSEUM OF TRAVEL AND TRANSPORT",
                "Entrance free for children",
              ],
            },
            { letter: "B", lines: ["CAR DEALERS!", "The best cars"] },
            {
              letter: "C",
              lines: ["GET CHEAPER TICKET WITH A", "FAMILY RAILCARD"],
            },
            {
              letter: "D",
              lines: ["NO TRAINS TODAY BECAUSE OF", "VERY HIGH WINDS"],
            },
            {
              letter: "E",
              lines: ["This Block is Protected by", "NEIBOURHOOD WATCH"],
            },
            {
              letter: "F",
              lines: ["8:30 LONDON TRAIN", "delayed because of fog"],
            },
            {
              letter: "G",
              lines: ["DO NOT GET ON THE TRAIN", "WITHOUT A TICKET"],
            },
            {
              letter: "H",
              lines: ["TICKET OFFICE CLOSED", "BUY YOUR TICKET ON THE TRAIN"],
            },
            { letter: "I", lines: ["Disable Parking", "TOWING ENFORCED"] },
            { letter: "K", lines: ["OLD FORD INN"] },
          ],
        },
        questions: [
          {
            id: 9,
            questionText: "9. You cannot travel by railway until tomorrow.",
            options: { A: "D", B: "F", C: "G" },
            correct: "A",
            explanation:
              'Biển D "NO TRAINS TODAY BECAUSE OF VERY HIGH WINDS" (Không có tàu hôm nay vì gió to) — nghĩa là không thể đi tàu hôm nay, phải đợi đến ngày mai.',
          },
          {
            id: 10,
            questionText: "10. Children and parents travel for less with this.",
            options: { A: "A", B: "C", C: "H" },
            correct: "B",
            explanation:
              'Biển C "GET CHEAPER TICKET WITH A FAMILY RAILCARD" (Được vé rẻ hơn với thẻ gia đình) — dành cho phụ huynh và con cái đi cùng nhau với giá ưu đãi.',
          },
          {
            id: 11,
            questionText: "11. You must pay before you travel on this.",
            options: { A: "G", B: "H", C: "F" },
            correct: "A",
            explanation:
              'Biển G "DO NOT GET ON THE TRAIN WITHOUT A TICKET" (Không được lên tàu nếu không có vé) — nghĩa là phải mua vé (trả tiền) trước khi đi.',
          },
          {
            id: 12,
            questionText: "12. Only adults pay to go in here.",
            options: { A: "A", B: "K", C: "B" },
            correct: "A",
            explanation:
              'Biển A "MUSEUM OF TRAVEL AND TRANSPORT — Entrance free for children" (Bảo tàng — Trẻ em vào cửa miễn phí) — vậy chỉ người lớn mới phải trả tiền vào cửa.',
          },
          {
            id: 13,
            questionText: "13. This is late because of bad weather.",
            options: { A: "D", B: "F", C: "E" },
            correct: "B",
            explanation:
              'Biển F "8:30 LONDON TRAIN delayed because of fog" (Tàu 8:30 đi London bị trễ vì sương mù) — chậm trễ do thời tiết xấu.',
          },
          {
            id: 14,
            questionText: "14. You can look at and buy cars here.",
            options: { A: "B", B: "K", C: "I" },
            correct: "A",
            explanation:
              'Biển B "CAR DEALERS! The best cars" (Đại lý ô tô! Xe tốt nhất) — nơi bạn có thể xem và mua xe hơi.',
          },
          {
            id: 15,
            questionText: "15. Only certain people may leave their cars here.",
            options: { A: "I", B: "E", C: "B" },
            correct: "A",
            explanation:
              'Biển I "Disable Parking — TOWING ENFORCED" (Bãi đỗ dành cho người khuyết tật — xe vi phạm sẽ bị kéo đi) — chỉ những người có giấy phép đặc biệt (người khuyết tật) mới được đỗ xe ở đây.',
          },
          {
            id: 16,
            questionText: "16. This can help prevent crimes.",
            options: { A: "E", B: "I", C: "D" },
            correct: "A",
            explanation:
              'Biển E "This Block is Protected by NEIGHBOURHOOD WATCH" (Khu vực này được bảo vệ bởi tổ dân phòng khu dân cư) — chương trình cộng đồng giúp ngăn ngừa tội phạm.',
          },
        ],
      },
      {
        partNumber: 3,
        directions:
          "PART 3: Read the advertisement and the email. Fill in the information in Minh's notes. For questions 17-23, write the information on your answer sheet. The information should be NO MORE THAN THREE WORDS and/or A NUMBER.",
        imageSrc: "photo/part301.png",
        adEmailData: {
          poster: {
            logoText: "CEC TalkShow",
            logoTagline: "talk, think, and act",
            lines: [
              "STEVE SMITH",
              "(University's English Club)",
              "Will speak to all members about",
              "Speaking English naturally",
              "Friday 15th May, 8.00 p.m.",
              "Everyone wears the club's uniform.",
              "Be on time!",
            ],
          },
          email: {
            greeting: "Hi Minh,",
            paragraphs: [
              "Steve Smith can't come to the English club for the talk, so Dr. Hai is sending Ryan Maidstone instead to talk about the same topic.",
              "Can you pick him up at the train station, should be thirty minutes before the start of the talk? Bring him to my office.",
              "If you can't find Ryan then, phone him at 0972 000 899.",
              "Thanks,",
              "Tuan",
            ],
          },
          notes: {
            title: "MINH's Notes",
            date: "15th May",
            items: [
              { num: "17", label: "Name of guest speaker:" },
              { num: "18", label: "Collection time:" },
              { num: "19", label: "Meeting place:" },
              { num: "20", label: "Take him to:" },
              { num: "21", label: "His phone number:" },
              { num: "22", label: "Subject of talk:" },
              { num: "23", label: "Wear:" },
            ],
          },
        },
        questions: [
          {
            id: 17,
            questionText: "17. Name of guest speaker:",
            options: { A: "Ryan Maidstone", B: "Steve Smith", C: "Dr. Hai" },
            correct: "A",
            explanation:
              'Email nói rõ: "Steve Smith can\'t come... Dr. Hai is sending Ryan Maidstone instead" — người diễn giả mới thay thế là Ryan Maidstone.',
          },
          {
            id: 18,
            questionText: "18. Collection time:",
            options: { A: "7:30 p.m.", B: "8:00 p.m.", C: "8:30 p.m." },
            correct: "A",
            explanation:
              'Buổi nói chuyện bắt đầu lúc 8:00 p.m. (theo quảng cáo), và email yêu cầu đón Ryan "thirty minutes before the start of the talk" = 7:30 p.m.',
          },
          {
            id: 19,
            questionText: "19. Meeting place:",
            options: {
              A: "Train station",
              B: "University office",
              C: "English club",
            },
            correct: "A",
            explanation:
              'Email viết: "Can you pick him up at the train station" — nơi đón Ryan là ga tàu.',
          },
          {
            id: 20,
            questionText: "20. Take him to:",
            options: {
              A: "Tuan's office",
              B: "The train station",
              C: "The English club",
            },
            correct: "A",
            explanation:
              'Email viết: "Bring him to my office" — người viết email (Tuan) yêu cầu đưa Ryan đến văn phòng của mình.',
          },
          {
            id: 21,
            questionText: "21. His phone number:",
            options: {
              A: "0972 000 899",
              B: "0927 000 899",
              C: "0972 800 099",
            },
            correct: "A",
            explanation:
              'Email ghi rõ: "phone him at 0972 000 899" nếu không tìm thấy Ryan tại ga tàu.',
          },
          {
            id: 22,
            questionText: "22. Subject of talk:",
            options: {
              A: "Speaking English naturally",
              B: "Writing English fluently",
              C: "Learning English abroad",
            },
            correct: "A",
            explanation:
              'Quảng cáo ghi rõ chủ đề buổi nói chuyện: "Speaking English naturally" — và Ryan sẽ nói về cùng chủ đề này ("to talk about the same topic").',
          },
          {
            id: 23,
            questionText: "23. Wear:",
            options: {
              A: "The club's uniform",
              B: "Formal suit",
              C: "Casual clothes",
            },
            correct: "A",
            explanation:
              'Quảng cáo ghi: "Everyone wears the club\'s uniform" — mọi thành viên tham dự phải mặc đồng phục câu lạc bộ.',
          },
        ],
      },
      {
        partNumber: 4,
        directions:
          "PART 4: Read a text about tooth traditions. For questions 24-30, write A, B or C on your answer sheet.",
        imageSrc: "photo/part401.png",
        passageText: `Different cultures follow their own special customs when a child's baby teeth fall out. In Korea, for example, they have the custom of throwing lost teeth up on the roof of a house. According to tradition, a magpie will come and take the tooth and then will return with a new tooth for the child. In other Asian countries, children follow a similar tradition of throwing lost teeth onto the roofs of houses.<br><br>Birds aren't the only animals to take lost teeth. In Mexico and Spain, tradition says a mouse takes a lost tooth and leaves some money. However, in Mongolia, instead of mice, dogs are responsible for taking teeth away. Dogs are highly respected in Mongolian culture and are considered guardian angels of the people. Tradition says the new tooth will grow in good and strong if the baby tooth is fed to a guardian angel. Accordingly, parents in Mongolia will put their child's lost tooth in the fat of a piece of meat and feed it to a dog.<br><br>Many children in Western countries count on the Tooth Fairy to leave money or presents in exchange for a tooth. The origins of the Tooth Fairy are a mystery, although the story probably began in England or Ireland centuries ago. According to tradition, a child puts a lost tooth under his or her pillow before going to bed. In the wee hours, while the child is sleeping, the Tooth Fairy takes the tooth and leaves something else under the pillow. In the United States, however, the Tooth Fairy usually leaves money. These days, the rate is $1 to $5 per tooth. That can add up to a lot of money from the Tooth Fairy!`,
        questions: [
          {
            id: 24,
            questionText:
              "24. According to the text, some people throw a tooth on the roof",
            options: {
              A: "to get a larger house.",
              B: "to get a new tooth.",
              C: "to have a long life.",
            },
            correct: "B",
            explanation:
              'Bài đọc nói: "a magpie will come and take the tooth and then will return with a new tooth for the child" — ném răng lên mái nhà để chim khách mang răng mới về cho trẻ.',
          },
          {
            id: 25,
            questionText: "25. In Asian countries, birds are responsible for",
            options: {
              A: "taking the lost tooth away.",
              B: "giving gifts or candies.",
              C: "feeding the angle.",
            },
            correct: "A",
            explanation:
              'Bài đọc nói ở các nước châu Á, chim (magpie) đến lấy chiếc răng bị rụng ("a magpie will come and take the tooth").',
          },
          {
            id: 26,
            questionText:
              "26. People in Mongolia respect dogs a lot and consider them as",
            options: {
              A: "protectors of the people.",
              B: "lucky symbols of life.",
              C: "important as other pets.",
            },
            correct: "A",
            explanation:
              'Bài đọc nói: "Dogs are highly respected in Mongolian culture and are considered guardian angels of the people" — chó được coi là thiên thần hộ mệnh, tức là người bảo vệ (protectors) của con người.',
          },
          {
            id: 27,
            questionText: "27. The story of the Tooth Fairy probably came from",
            options: {
              A: "Western Africa.",
              B: "Eastern Asia.",
              C: "Northern Europe.",
            },
            correct: "C",
            explanation:
              'Bài đọc nói: "the story probably began in England or Ireland centuries ago" — Anh và Ireland đều thuộc khu vực Bắc Âu (Northern Europe).',
          },
          {
            id: 28,
            questionText: "28. The wee hours refer to",
            options: {
              A: "between midnight and 5:00 a.m.",
              B: "happy hours.",
              C: "late afternoon.",
            },
            correct: "A",
            explanation:
              '"the wee hours" là thành ngữ chỉ khoảng thời gian rất sớm trong đêm, thường được hiểu là giữa nửa đêm và 5 giờ sáng — khoảng thời gian Tiên Răng lấy răng trong khi trẻ đang ngủ.',
          },
          {
            id: 29,
            questionText:
              "29. In Mexico and the United States, the mouse and the Tooth Fairy",
            options: {
              A: "both eat the tooth.",
              B: "take the tooth and leave money.",
              C: "feed the guardian.",
            },
            correct: "B",
            explanation:
              'Bài đọc nói ở Mexico: "a mouse takes a lost tooth and leaves some money"; ở Mỹ: "the Tooth Fairy usually leaves money" — cả hai đều lấy răng và để lại tiền.',
          },
          {
            id: 30,
            questionText: "30. It is understood from the text that",
            options: {
              A: "different cultures have different traditions about teeth.",
              B: "the tooth fairy leaves the money for teeth.",
              C: "some tooth customs involve animals.",
            },
            correct: "A",
            explanation:
              "Đây là câu hỏi ý chính bao quát toàn bài — bài đọc trình bày nhiều phong tục khác nhau về răng ở Hàn Quốc, Mông Cổ, Mexico, phương Tây... cho thấy các nền văn hóa khác nhau có truyền thống khác nhau về răng. Hai đáp án B và C chỉ là các chi tiết cụ thể, không bao quát được toàn bộ nội dung bài.",
          },
        ],
      },
    ],
  },
  De02_Doc: {
    title: "Đề thi thử số 02 - Kỹ năng đọc",
    points: 30,
    timeMinutes: 40,
    parts: [
      {
        partNumber: 1,
        directions:
          "PART 1: Read a text about global fashion. Choose the best word for each space. For questions 1-8, write the correct letter (A, B or C) on your answer sheet.",
        imageSrc: "photo/part102.png",
        passageText: `Example: Susan is (0) ... TV now.<br>1. A. watching B. looking C. seeing<br>Answer sheet: 0. A<br><br>Global fashion<br><br>Gillian Turner-Niles is a fashion photographer. She (1) ... in New York and works in the fashion capitals of the world. You can see her photographs on the (2) ... of fashion magazines across the world. Her clients include famous fashion brands Gucci, Dior, Ferragamo, even the sports clothing company Nike. But today she's (3) ... to me by phone from the middle of Sudan. So, what is she doing there?<br><br>'I'm (4) ... photographs, of course!' She explains, 'But not for Vogue or anyone else. It's (5) ... a holiday. In my business, it's easy to forget there's another world out there. And I like looking at clothes in a different way when I travel.'<br><br>But in this world of global fashion, people all over the world (6) ... the same clothes. The businessman's suit in Beijing is like the businessman's suit in Berlin. And jeans and T-shirts are almost a type of uniform these (7) ....<br><br>'Yes, I think that's true in the big international cities,' Gillian says. 'But I'm visiting regions of the world with their own (8) ... clothes and their own fashions, which have been remained from generation to generation and are very different from clothes of other cultures.'`,
        questions: [
          {
            id: 1,
            questionText: "1.",
            options: { A: "lives", B: "stays", C: "exists" },
            correct: "A",
            explanation:
              '"She lives in New York and works in the fashion capitals of the world" — động từ "live" phù hợp để diễn tả nơi cô ấy sinh sống.',
          },
          {
            id: 2,
            questionText: "2.",
            options: { A: "sheets", B: "pages", C: "categories" },
            correct: "B",
            explanation:
              '"You can see her photographs on the pages of fashion magazines" — ảnh của cô xuất hiện trên các trang (pages) tạp chí thời trang.',
          },
          {
            id: 3,
            questionText: "3.",
            options: { A: "saying", B: "talking", C: "telling" },
            correct: "B",
            explanation:
              '"she\'s talking to me by phone from the middle of Sudan" — "talk to somebody" là cụm đúng ngữ pháp khi nói chuyện điện thoại với ai đó.',
          },
          {
            id: 4,
            questionText: "4.",
            options: { A: "using", B: "making", C: "taking" },
            correct: "C",
            explanation:
              '"I\'m taking photographs, of course!" — cụm "take photographs" (chụp ảnh) là cách diễn đạt chuẩn.',
          },
          {
            id: 5,
            questionText: "5.",
            options: { A: "like", B: "as", C: "same" },
            correct: "A",
            explanation:
              '"It\'s like a holiday" — "like" dùng để so sánh, diễn tả cảm giác giống như một kỳ nghỉ.',
          },
          {
            id: 6,
            questionText: "6.",
            options: { A: "dress", B: "wear", C: "put" },
            correct: "B",
            explanation:
              '"people all over the world wear the same clothes" — động từ "wear" đi với "clothes" là cách diễn đạt đúng (mặc quần áo).',
          },
          {
            id: 7,
            questionText: "7.",
            options: { A: "periods", B: "times", C: "days" },
            correct: "C",
            explanation:
              '"a type of uniform these days" — cụm "these days" (ngày nay/dạo này) là cách diễn đạt tự nhiên và phổ biến nhất.',
          },
          {
            id: 8,
            questionText: "8.",
            options: { A: "traditional", B: "modern", C: "outdated" },
            correct: "A",
            explanation:
              '"their own traditional clothes and their own fashions, which have been remained from generation to generation" — trang phục truyền thống (traditional) phù hợp với ý được lưu truyền qua nhiều thế hệ.',
          },
        ],
      },
      {
        partNumber: 2,
        directions:
          "PART 2: Which notice (A-K) says this (9-16)? For questions 9-16, write the correct letter on your answer sheet.",
        imageSrc: "photo/part202.png",
        noticesData: {
          example: {
            num: "0",
            text: "You can't travel very early in the morning if you want to buy this ticket.",
            answer: "G",
          },
          leftItems: [
            { num: "9", text: "You need to control pets." },
            {
              num: "10",
              text: "This company can take you to catch your plane at any time.",
            },
            {
              num: "11",
              text: "If you need to buy something to wear, this may be the cheapest place to look.",
            },
            {
              num: "12",
              text: "This restaurant always has special menu for children.",
            },
            {
              num: "13",
              text: "If you need to know about the traffic, you can call this number.",
            },
            {
              num: "14",
              text: "You can have a drink and stay a few nights here.",
            },
            { num: "15", text: "You can ask for information." },
            { num: "16", text: "This tells you how to clean your cloth." },
          ],
          rightNotices: [
            {
              letter: "A",
              lines: ["Colour may fade", "Wash dark colours separately"],
            },
            {
              letter: "B",
              lines: [
                "Telephone",
                "2222 for motorway news and",
                "2223 for airport information",
              ],
            },
            { letter: "C", lines: ["UNDERGROUND TRAIN"] },
            {
              letter: "D",
              lines: ["Ask Your Waiter for Our UNDER-12s'", "menu"],
            },
            {
              letter: "E",
              lines: [
                "HARRISONS DEPARTMENT STORE",
                "New Season's Jackets",
                "Lowest prices in town",
              ],
            },
            { letter: "F", lines: ["DOGS MUST BE KEPT ON A LEAD"] },
            {
              letter: "G",
              lines: [
                "For cheap day return tickets,",
                "you must travel after 10 a.m",
              ],
            },
            {
              letter: "H",
              lines: [
                "Jenni's Airport Taxis",
                "(433587)",
                "24 hours/ 7 days a week",
              ],
            },
            { letter: "I", lines: ["The Spotted Cow Rooms and Pub"] },
            { letter: "K", lines: ["Help Desk Open"] },
          ],
        },
        questions: [
          {
            id: 9,
            questionText: "9. You need to control pets.",
            options: { A: "F", B: "D", C: "A" },
            correct: "A",
            explanation:
              'Biển F "DOGS MUST BE KEPT ON A LEAD" (Chó phải được xích dây) — yêu cầu kiểm soát thú cưng.',
          },
          {
            id: 10,
            questionText:
              "10. This company can take you to catch your plane at any time.",
            options: { A: "B", B: "H", C: "C" },
            correct: "B",
            explanation:
              'Biển H "Jenni\'s Airport Taxis — 24 hours/7 days a week" — dịch vụ taxi sân bay hoạt động mọi lúc.',
          },
          {
            id: 11,
            questionText:
              "11. If you need to buy something to wear, this may be the cheapest place to look.",
            options: { A: "E", B: "K", C: "B" },
            correct: "A",
            explanation:
              'Biển E "HARRISONS DEPARTMENT STORE — New Season\'s Jackets — Lowest prices in town" — cửa hàng bán áo khoác với giá thấp nhất thị trấn.',
          },
          {
            id: 12,
            questionText:
              "12. This restaurant always has special meals for children.",
            options: { A: "D", B: "A", C: "I" },
            correct: "A",
            explanation:
              'Biển D "Ask Your Waiter for Our UNDER-12s\' menu" (Hỏi phục vụ về thực đơn dành cho trẻ dưới 12 tuổi) — thực đơn đặc biệt cho trẻ em.',
          },
          {
            id: 13,
            questionText:
              "13. If you need to know about the traffic, you can call this number.",
            options: { A: "B", B: "H", C: "K" },
            correct: "A",
            explanation:
              'Biển B "Telephone — 2222 for motorway news and 2223 for airport information" — số điện thoại cung cấp tin tức giao thông đường cao tốc.',
          },
          {
            id: 14,
            questionText:
              "14. You can have a drink and stay a few nights here.",
            options: { A: "I", B: "E", C: "G" },
            correct: "A",
            explanation:
              'Biển I "The Spotted Cow Rooms and Pub" — quán rượu kèm phòng nghỉ, có thể uống và ở lại qua đêm.',
          },
          {
            id: 15,
            questionText: "15. You can ask for information.",
            options: { A: "K", B: "C", C: "F" },
            correct: "A",
            explanation:
              'Biển K "Help Desk Open" (Quầy hỗ trợ thông tin mở cửa) — nơi để hỏi thông tin.',
          },
          {
            id: 16,
            questionText: "16. This tells you how to clean your clothes.",
            options: { A: "A", B: "D", C: "G" },
            correct: "A",
            explanation:
              'Biển A "Colour may fade — Wash dark colours separately" (Màu có thể phai — Giặt riêng đồ màu tối) — hướng dẫn cách giặt quần áo.',
          },
        ],
      },
      {
        partNumber: 3,
        directions:
          "PART 3: Read the advertisement and the email. Fill in the information in Nguyet's notes. For questions 17-23, write the information on your answer sheet. The information should be NO MORE THAN THREE WORDS and/or A NUMBER.",
        imageSrc: "photo/part302.png",
        adEmailData: {
          poster: {
            logoText: "I ❤ TaeKwondo",
            logoTagline: "",
            lines: [
              "TAEKWONDO COURSES",
              "Days: Tuesday or Saturday",
              "Times: 4.30 p.m. or 5.50 p.m.",
              "Price (per month)",
              "Beginners: 200.000 VND",
              "Improvers: 250.000 VND",
              "Get a uniform at the reception desk before the first lesson.",
              "Call 02083876345 to book now!",
            ],
          },
          email: {
            from: "Thu",
            to: "Nguyet",
            greeting:
              "Hi! Thanks for inviting me to do a taekwondo course with you – what a great idea! I prefer the earlier time at weekends if that's OK with you as I have to study during the weekdays as today, Wednesday, I am in English class all day.",
            paragraphs: [
              "We should register for the easiest class because I have never done any courses before.",
              "I'll book for both of us tomorrow.",
              "My phone number is 0963888912 – call me before my booking if there are any changes.",
            ],
          },
          notes: {
            title: "NGUYET's Notes",
            date: "",
            subtitle: "Course with Thu",
            subtitle2: "Sports course: Taekwondo",
            items: [
              { num: "17", label: "Level:" },
              { num: "18", label: "Time:" },
              { num: "19", label: "Day:" },
              { num: "20", label: "Monthly price:" },
              { num: "21", label: "Book course on:" },
              { num: "22", label: "Thu's phone number:" },
              { num: "23", label: "Place to take the uniform:" },
            ],
          },
        },
        questions: [
          {
            id: 17,
            questionText: "17. Level:",
            options: { A: "Beginners", B: "Improvers", C: "Advanced" },
            correct: "A",
            explanation:
              'Thu viết trong email: "We should register for the easiest class because I have never done any courses before" — vì chưa từng học nên chọn lớp dễ nhất, tức là lớp cho người mới bắt đầu (Beginners).',
          },
          {
            id: 18,
            questionText: "18. Time:",
            options: { A: "4.30 p.m.", B: "5.50 p.m.", C: "6.30 p.m." },
            correct: "A",
            explanation:
              'Thu nói: "I prefer the earlier time at weekends" — trong 2 khung giờ quảng cáo đưa ra (4.30 p.m. hoặc 5.50 p.m.), giờ sớm hơn là 4.30 p.m.',
          },
          {
            id: 19,
            questionText: "19. Day:",
            options: { A: "Saturday", B: "Tuesday", C: "Sunday" },
            correct: "A",
            explanation:
              'Thu nói cô thích giờ sớm "at weekends" (vào cuối tuần) vì phải học các ngày trong tuần. Trong 2 lựa chọn của quảng cáo (Tuesday hoặc Saturday), chỉ có Saturday là ngày cuối tuần.',
          },
          {
            id: 20,
            questionText: "20. Monthly price:",
            options: { A: "200.000 VND", B: "250.000 VND", C: "450.000 VND" },
            correct: "A",
            explanation:
              'Vì đăng ký mức Beginners (người mới bắt đầu), giá theo quảng cáo là "Beginners: 200.000 VND".',
          },
          {
            id: 21,
            questionText: "21. Book course on:",
            options: { A: "Thursday", B: "Wednesday", C: "Friday" },
            correct: "A",
            explanation:
              'Thu viết: "as today, Wednesday, I am in English class all day... I\'ll book for both of us tomorrow." — hôm nay là thứ Tư, nên "tomorrow" (ngày mai) là thứ Năm.',
          },
          {
            id: 22,
            questionText: "22. Thu's phone number:",
            options: { A: "0963888912", B: "0968388912", C: "0963889812" },
            correct: "A",
            explanation:
              'Thu ghi rõ trong email: "My phone number is 0963888912 – call me before my booking if there are any changes."',
          },
          {
            id: 23,
            questionText: "23. Place to take the uniform:",
            options: {
              A: "Reception desk",
              B: "Sports shop",
              C: "Training hall",
            },
            correct: "A",
            explanation:
              'Quảng cáo ghi: "Get a uniform at the reception desk before the first lesson." — đồng phục được lấy tại quầy lễ tân trước buổi học đầu tiên.',
          },
        ],
      },
      {
        partNumber: 4,
        directions:
          "PART 4: Read a memorandum about a change in forms of transport to hospital. For questions 24-30, write A, B or C on your answer sheet.",
        imageSrc: "photo/part402.png",
        passageText: `------<br><br>The hospital is always trying to cut its carbon footprint, and to do this, we want to encourage staff, visitors and patients to use environmentally-friendly forms of transport to and from the hospital. Therefore, we are making the following changes, which will come into effect from 1st April:<br><br>Car Park A will stay as a staff car park, but, to encourage car sharing, it will only be available to cars containing three passengers or more. This rule will be in place between 7 a.m. and 6 p.m. A car park attendant will monitor users. The parking fee will remain at the current price of £1 an hour up to a maximum of £5 per day. If you are interested in car sharing and wish to find members of staff who live in your area or along your route, please click on the link on the human resources page of the hospital website. Car Park C, previously a staff-only car park, will now also be open to visitors at the increased cost of £2/hour up to 5 hours, and £1 an hour after that. These new rates will also apply to staffs or visitors of Car Park E. Car Park B will only be open to blue card holders, which are for seniors and emergency staff. Car Park D will no longer be in use, as it will make way for an improved bus park.<br><br>There will also be an improved lock-up shed for bicycles and motorcycles in the former Car Park D. Hospital staff may wish to take advantage of the voucher giving 50% off all cycles and cycle accessories bought from Perkin's Wheels, which is downloadable from the Human Resources website. We hope you will take advantages of these schemes.`,
        questions: [
          {
            id: 24,
            questionText:
              "24. According to the rules, staff can only park in Car Park A at noon if",
            options: {
              A: "they have a blue card.",
              B: "there are 3 people in the car.",
              C: "they stay for more than 8 hours.",
            },
            correct: "B",
            explanation:
              'Văn bản nói: "it will only be available to cars containing three passengers or more. This rule will be in place between 7 a.m. and 6 p.m." — giữa khung giờ 7h-18h (bao gồm giữa trưa), xe phải có từ 3 người trở lên mới được đỗ ở Car Park A.',
          },
          {
            id: 25,
            questionText:
              "25. The cost to park in Car Park A for 3 hours will be",
            options: { A: "£1.", B: "£3.", C: "£5." },
            correct: "B",
            explanation:
              'Văn bản nói: "The parking fee will remain at the current price of £1 an hour" — 3 giờ × £1 = £3.',
          },
          {
            id: 26,
            questionText: "26. To find people to share a car, staff should",
            options: {
              A: "go online.",
              B: "speak to the manager.",
              C: "visit the HR department.",
            },
            correct: "A",
            explanation:
              'Văn bản nói: "please click on the link on the human resources page of the hospital website" — nhấp vào liên kết trên website, tức là tìm kiếm trực tuyến (go online).',
          },
          {
            id: 27,
            questionText: "27. In the past, Car Park C was open to",
            options: {
              A: "the hospital's staff.",
              B: "the patients.",
              C: "the visitors.",
            },
            correct: "A",
            explanation:
              'Văn bản nói: "Car Park C, previously a staff-only car park" — trước đây Car Park C chỉ dành riêng cho nhân viên bệnh viện.',
          },
          {
            id: 28,
            questionText: "28. After April 1st, Car Park C will be for",
            options: {
              A: "staff only.",
              B: "visitors only.",
              C: "staff and visitors.",
            },
            correct: "C",
            explanation:
              'Văn bản nói: "will now also be open to visitors" — Car Park C giờ đây mở cửa cho cả khách thăm (visitors) bên cạnh nhân viên (staff).',
          },
          {
            id: 29,
            questionText:
              "29. The cost to park in Car Park C for 6 hours will be",
            options: { A: "£2.", B: "£11.", C: "£12." },
            correct: "B",
            explanation:
              'Văn bản nói: "the increased cost of £2/hour up to 5 hours, and £1 an hour after that" — 5 giờ đầu: 5×£2=£10, giờ thứ 6: +£1 = tổng £11.',
          },
          {
            id: 30,
            questionText:
              "30. A member of staff who does not have a blue card can park in",
            options: {
              A: "Car Park A, C, E.",
              B: "Car Park C, D, E.",
              C: "Car Park A, C, D.",
            },
            correct: "A",
            explanation:
              'Văn bản nói: "Car Park B will only be open to blue card holders" (chỉ dành cho người có thẻ xanh) và "Car Park D will no longer be in use" (không còn sử dụng). Vậy nhân viên không có thẻ xanh vẫn có thể đỗ ở Car Park A, C, E — không thể dùng B (cần thẻ xanh) hay D (đã ngừng hoạt động).',
          },
        ],
      },
    ],
  },
  De03_Doc: {
    title: "Đề thi thử số 03 - Kỹ năng đọc",
    points: 30,
    timeMinutes: 40,
    parts: [
      {
        partNumber: 1,
        directions:
          "PART 1: Read a text about amazing adventurers. For questions 1-8, choose the best option to complete each gap. Choose A, B or C.",
        imageSrc: "photo/part103.png",
        passageText: `Example: Susan is (0) ... TV now.<br>1. A. watching B. looking C. seeing<br>Answer sheet: 0. A<br><br>Amazing adventurers<br><br>Do you ever dream about climbing Mount Everest or visiting Antarctica? If so, you're not alone. Every year, thousands of people try to climb the world's (1) ... mountains or walk across continents. Let's take a (2) ... at some of the 21st century's greatest adventurers.<br><br>Ed Stafford from the UK is the first person to walk along the Amazon River from the mountains of Peru to the mouth of the river in Brazil. His amazing journey (3) ... two years and four months. There are many dangerous animals in the rainforest, like snakes and crocodiles, but Ed was (4) ... ; he was only bitten by ants and mosquitoes. On his trip, Ed had to find fruit and nuts or (5) ... fish each morning. Sometimes food was (6) ... to find and Ed was often tired and hungry. While he walked, Ed wrote a blog to tell the world about climate change and destruction of the rainforest.<br><br>Gerlinde Kaltenbrunner from Austria is one among more than 4,000 people who have climbed Everest. She is one of the world's (7) ... climbers and has climbed all the world's mountains over 8,000 metres. It's very difficult to climb in cold weather and storms, but Gerlinde loves it. Now she (8) ... her time climbing and helping a charity for poor children in Nepal.`,
        questions: [
          {
            id: 1,
            questionText: "1.",
            options: { A: "tallest", B: "highest", C: "shortest" },
            correct: "B",
            explanation:
              '"thousands of people try to climb the world\'s highest mountains" — dùng "highest" để nói về độ cao của núi.',
          },
          {
            id: 2,
            questionText: "2.",
            options: { A: "look", B: "see", C: "ride" },
            correct: "A",
            explanation:
              '"Let\'s take a look at some of the 21st century\'s greatest adventures" — cụm "take a look at" là cách diễn đạt chuẩn.',
          },
          {
            id: 3,
            questionText: "3.",
            options: { A: "made", B: "spent", C: "took" },
            correct: "C",
            explanation:
              '"His amazing journey took two years and four months" — "take + khoảng thời gian" nghĩa là mất bao lâu.',
          },
          {
            id: 4,
            questionText: "4.",
            options: { A: "lucky", B: "unlucky", C: "happy" },
            correct: "A",
            explanation:
              '"but Ed was lucky; he was only bitten by ants and mosquitoes" — so với rắn, cá sấu nguy hiểm thì chỉ bị kiến, muỗi cắn là may mắn.',
          },
          {
            id: 5,
            questionText: "5.",
            options: { A: "bring", B: "catch", C: "hold" },
            correct: "B",
            explanation:
              '"Ed had to find fruit and nuts or catch fish each morning" — "catch fish" (bắt cá) là cụm đúng.',
          },
          {
            id: 6,
            questionText: "6.",
            options: { A: "nice", B: "easy", C: "hard" },
            correct: "C",
            explanation:
              '"Sometimes food was hard to find and Ed was often tired and hungry" — thức ăn khó tìm nên anh đói và mệt.',
          },
          {
            id: 7,
            questionText: "7.",
            options: { A: "biggest", B: "greatest", C: "luckiest" },
            correct: "B",
            explanation:
              '"She is one of the world\'s greatest climbers" — "greatest" phù hợp để khen ngợi khả năng leo núi xuất sắc.',
          },
          {
            id: 8,
            questionText: "8.",
            options: { A: "uses", B: "wastes", C: "spends" },
            correct: "C",
            explanation:
              '"Now she spends her time climbing and helping a charity" — "spend time doing something" là cụm chuẩn.',
          },
        ],
      },
      {
        partNumber: 2,
        directions:
          "PART 2: Which notice (A-K) says this (9-16)? For questions 9-16, write the correct letter on your answer sheet.",
        imageSrc: "photo/part203.png",
        noticesData: {
          example: {
            num: "0",
            text: "It is open from 10am-10pm.",
            answer: "G",
          },
          leftItems: [
            { num: "9", text: "Not all drivers can stop here." },
            { num: "10", text: "Children cannot come here in the evening." },
            { num: "11", text: "Drivers must be careful." },
            { num: "12", text: "Not everyone can make a call from here." },
            { num: "13", text: "Only adults have to pay here." },
            { num: "14", text: "Children pay less than adult here." },
            { num: "15", text: "Be careful because this will burn." },
            { num: "16", text: "We don't want any money yet." },
          ],
          rightNotices: [
            { letter: "A", lines: ["SWIMMING POOL", "ADULTS ONLY 6-8 p.m"] },
            { letter: "B", lines: ["TELEPHONE for customers' use only"] },
            { letter: "C", lines: ["DANGER!", "No Traffic Lights Ahead"] },
            { letter: "D", lines: ["PARKING FOR POLICE CARS ONLY"] },
            { letter: "E", lines: ["LEEDS CASTLE", "FREE FOR CHILDREN"] },
            { letter: "F", lines: ["Film matinee 2 p.m £3.00"] },
            {
              letter: "G",
              lines: [
                "NEW Department store!",
                "Open July 22nd",
                "Opening times: 10 a.m – 10 p.m",
                "Free parking for customers only!",
              ],
            },
            { letter: "H", lines: ["BUY NOW PAY NEXT YEAR"] },
            { letter: "I", lines: ["Keep this nightdress away from fire"] },
            { letter: "K", lines: ["Under 12s", "HALF PRICE"] },
          ],
        },
        questions: [
          {
            id: 9,
            questionText: "9. Not all drivers can stop here.",
            options: { A: "D", B: "C", C: "H" },
            correct: "A",
            explanation:
              'Biển D "PARKING FOR POLICE CARS ONLY" — chỉ xe cảnh sát được đỗ, các tài xế khác không được dừng ở đây.',
          },
          {
            id: 10,
            questionText: "10. Children cannot come here in the evening.",
            options: { A: "A", B: "E", C: "K" },
            correct: "A",
            explanation:
              'Biển A "SWIMMING POOL — ADULTS ONLY 6-8 p.m." — buổi tối (6-8pm) chỉ dành cho người lớn, trẻ em không được vào.',
          },
          {
            id: 11,
            questionText: "11. Drivers must be careful.",
            options: { A: "D", B: "C", C: "F" },
            correct: "B",
            explanation:
              'Biển C "DANGER! No Traffic Lights Ahead" — cảnh báo nguy hiểm phía trước không có đèn giao thông, tài xế phải cẩn thận.',
          },
          {
            id: 12,
            questionText: "12. Not everyone can make a call from here.",
            options: { A: "B", B: "G", C: "H" },
            correct: "A",
            explanation:
              'Biển B "TELEPHONE for customers\' use only" — điện thoại chỉ dành cho khách hàng sử dụng, không phải ai cũng gọi được.',
          },
          {
            id: 13,
            questionText: "13. Only adults have to pay here.",
            options: { A: "K", B: "E", C: "A" },
            correct: "B",
            explanation:
              'Biển E "LEEDS CASTLE — FREE FOR CHILDREN" — trẻ em miễn phí, ngầm hiểu chỉ người lớn phải trả tiền.',
          },
          {
            id: 14,
            questionText: "14. Children pay less than adult here.",
            options: { A: "E", B: "K", C: "I" },
            correct: "B",
            explanation:
              'Biển K "Under 12s — HALF PRICE" — trẻ dưới 12 tuổi được giảm nửa giá, tức trả ít hơn người lớn.',
          },
          {
            id: 15,
            questionText: "15. Be careful because this will burn.",
            options: { A: "C", B: "I", C: "D" },
            correct: "B",
            explanation:
              'Biển I "Keep this nightdress away from fire" — cảnh báo áo ngủ dễ bắt lửa, cần tránh xa lửa.',
          },
          {
            id: 16,
            questionText: "16. We don't want any money yet.",
            options: { A: "H", B: "G", C: "F" },
            correct: "A",
            explanation:
              'Biển H "BUY NOW PAY NEXT YEAR" — mua trước, trả tiền sau, tức chưa cần trả tiền ngay.',
          },
        ],
      },
      {
        partNumber: 3,
        directions:
          "PART 3: Read the two email messages. Fill in the information on the visa application form for questions 17-23. The information should be NO MORE THAN THREE WORDS and/or A NUMBER.",
        imageSrc: "photo/part303.png",
        twoEmailsData: {
          email1: {
            to: "Atlas Language School, Oxford",
            from: "Mariko Mori",
            paragraphs: [
              "I would like to study at your school. I work in the reception of a hotel in my home town, Nagoya, Japan, and English is important for my job. I have to communicate in English every day, so I would like to improve my English skills, especially listening and speaking.",
              "Where can I stay in Oxford? I shall spend 3 months in Britain.",
              "Mariko Mori",
            ],
          },
          email2: {
            to: "Mariko Mori",
            from: "Atlas Language School, Oxford",
            paragraphs: [
              "We have 10-week courses for people who want to study English. There is a house for students next to the school, in Park Road, at number 324.",
              "You will need a visa.",
              "St. Clare's Language School",
            ],
          },
        },
        questions: [
          {
            id: 17,
            questionText: "17. Name of applicant:",
            options: { A: "Mariko Mori", B: "Nagoya", C: "Oxford" },
            correct: "A",
            explanation:
              'Email được ký tên "Mariko Mori" — đây là người viết thư và cũng là người xin visa.',
          },
          {
            id: 18,
            questionText: "18. Nationality:",
            options: { A: "British", B: "Japanese", C: "Chinese" },
            correct: "B",
            explanation:
              'Mariko viết cô làm việc "in the reception of a hotel in my home town, Nagoya, Japan" — quê cô ở Nhật Bản nên quốc tịch là Japanese.',
          },
          {
            id: 19,
            questionText: "19. Job:",
            options: { A: "Teacher", B: "Hotel receptionist", C: "Student" },
            correct: "B",
            explanation:
              '"I work in the reception of a hotel in my home town" — công việc của cô là lễ tân khách sạn.',
          },
          {
            id: 20,
            questionText: "20. Address in Oxford:",
            options: {
              A: "324 Park Road",
              B: "Nagoya Street",
              C: "Atlas Road",
            },
            correct: "A",
            explanation:
              'Trường trả lời: "There is a house for students next to the school, in Park Road, at number 324" — địa chỉ nhà ở là 324 Park Road.',
          },
          {
            id: 21,
            questionText: "21. School to apply for:",
            options: {
              A: "Atlas Language School",
              B: "Oxford University",
              C: "Nagoya School",
            },
            correct: "A",
            explanation:
              'Email đầu tiên gửi "To: Atlas Language School, Oxford" — đây là trường Mariko muốn đăng ký học.',
          },
          {
            id: 22,
            questionText: "22. The language you want to learn:",
            options: { A: "Japanese", B: "English", C: "French" },
            correct: "B",
            explanation:
              '"I would like to improve my English skills, especially listening and speaking" — cô muốn học tiếng Anh.',
          },
          {
            id: 23,
            questionText: "23. How long will you stay?",
            options: { A: "10 weeks", B: "3 months", C: "1 year" },
            correct: "B",
            explanation:
              'Mariko viết: "I shall spend 3 months in Britain" — thời gian ở lại là 3 tháng.',
          },
        ],
      },
      {
        partNumber: 4,
        directions:
          "PART 4: Read a text about Dany Cotton – a firefighter. For questions 24-30, choose the best option.",
        imageSrc: "photo/part403.png",

        passageText: `------<br><br>People who think firefighting is a job for men would be surprised to learn that there are now over 230 women in the London Fire Brigade. One of them is Dany Cotton, who has been with the fire service for over 22 years.<br><br>Dany always tries to change the image of the Fire Brigade. She took part in a national campaign promoting firefighting as a career for girls in secondary schools. During the campaign, she explained that women do the same training and assessment as men and they are expected to do the same jobs. Both men and women must be fit and healthy, but height is not important.<br><br>However, Dany's favourite question is this: "How can women carry a man down a ladder from a building which is on fire?" She says that in all her years of firefighting, she has never seen anyone try this, although she was trained to do it. She describes this as something we only see in films and explains that today's firefighters enter a building as a team to rescue people.<br><br>Dany says that saving people from burning buildings is not the only thing that firefighters do. One of the most important jobs they do these days is in the community. Fire officers visit homes, businesses and schools giving advice that can often save lives. Women are often good at doing this because of their ability to communicate well.<br><br>Most of Dany's work in the Fire Brigade these days is as manager in an office, but she still attends emergencies. One of the things she finds most interesting about her job is this combination of using her skills with people and working in real life emergency situations.`,

        questions: [
          {
            id: 24,
            questionText: "24. Dany has worked for the fire service",
            options: {
              A: "for nearly twenty years.",
              B: "for more than twenty years.",
              C: "since she was twenty-two years old.",
            },
            correct: "B",
            explanation:
              'Bài viết nói: "Dany Cotton, who has been with the fire service for over 22 years" — hơn 22 năm nghĩa là hơn hai mươi năm.',
          },
          {
            id: 25,
            questionText: "25. Dany worked on a campaign to",
            options: {
              A: "encourage girls to train to become firefighters.",
              B: "explain the training and assessment needs for firefighters.",
              C: "advise girls at secondary school to keep fit and stay healthy.",
            },
            correct: "A",
            explanation:
              '"She took part in a national campaign promoting firefighting as a career for girls in secondary schools" — mục đích là khuyến khích các bạn nữ theo nghề cứu hỏa.',
          },
          {
            id: 26,
            questionText: "26. Male firefighters",
            options: {
              A: "have the same training as female firefighters.",
              B: "often carry people down ladders in burning buildings.",
              C: "have to be taller than female firefighters.",
            },
            correct: "A",
            explanation:
              '"women do the same training and assessment as men and they are expected to do the same jobs" — nam và nữ có cùng chương trình đào tạo.',
          },
          {
            id: 27,
            questionText: "27. Dany has never",
            options: {
              A: "seen a woman carry a man from a burning building.",
              B: "been trained to carry a man from a burning building.",
              C: "worked in a team to rescue people.",
            },
            correct: "A",
            explanation:
              '"she has never seen anyone try this, although she was trained to do it" — cô chưa từng chứng kiến cảnh này dù đã được huấn luyện.',
          },
          {
            id: 28,
            questionText: "28. Firefighters can save people's lives by",
            options: {
              A: "visiting houses.",
              B: "doing business.",
              C: "giving advice.",
            },
            correct: "C",
            explanation:
              '"Fire officers visit homes, businesses and schools giving advice that can often save lives" — chính lời khuyên của họ có thể cứu mạng người.',
          },
          {
            id: 29,
            questionText: "29. Female firefighters seem to be good at",
            options: {
              A: "saving lives.",
              B: "office work.",
              C: "talking to the public.",
            },
            correct: "C",
            explanation:
              '"Women are often good at doing this because of their ability to communicate well" — nữ giới giỏi giao tiếp với công chúng.',
          },
          {
            id: 30,
            questionText: "30. Dany is interested in",
            options: {
              A: "the danger of emergencies.",
              B: "the variety in her work.",
              C: "being a manager.",
            },
            correct: "B",
            explanation:
              '"One of the things she finds most interesting about her job is this combination of using her skills with people and working in real life emergency situations" — cô thích sự đa dạng trong công việc.',
          },
        ],
      },
    ],
  },
};

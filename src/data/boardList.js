export const boardList = [
    {
        type: 'free',                   // 게시판 종류
        path: '/board/free',            // 게시판 URL
        name: 'freeboard',              // 내부 URL/저장 식별자
        title: '자유게시판',             // 화면에 보이는 제목
        description: '자유로운 공간입니다.' // 게시판 설명
      },
      {
        type: 'global',
        path: '/board/global',
        name: 'globalboard',
        title: '해외 생활 팁',
        description: '국가별 생활 노하우를 공유해보세요.'
      },
      {
        type: "lang",
        path: "/board/lang",
        name: "langboard",
        title: "언어공부",
        description: "언어 학습에 도움이 되는 정보를 나눠요."
      },
      {
        type: "art",
        path: "/board/art",
        name: "artboard",
        title: "창작/취미",
        description: "그림, 글, 음악 등 당신의 작품을 공유하세요."
      },
      {
        type: "translate",
        path: "/board/translate",
        name: "translateboard",
        title: "AI 번역체험",
        description: "AI 번역결과를 비교/체험해보세요. papago, deepl, google 등 다양한 번역기를 사용해보세요."
      },
      {
        type: "notice",
        path: "/board/notice",
        name: "noticeboard",
        title: "공지사항",
        description: "서비스 관련 중요한 소식을 알려드립니다."
      }
    ];
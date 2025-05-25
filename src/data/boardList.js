export const boardList = [
    {
        type: 'free',                   // 게시판 종류
        path: '/board/free',            // 게시판 URL
        name: 'freeboard',              // 내부 URL/저장 식별자
        title: '자유게시판',             // 화면에 보이는 제목
        description: '자유로운 공간입니다.' // 게시판 설명
      },      
      {
        type: "question",
        path: "/board/question",
        name: "questionboard",
        title: "질문과 답변",
        description: "궁금한 점들에 대해 질문해보아요."
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
        title: "문화/취미",
        description: "당신의 작품을 공유하세요."
      },
      {
        type: "topic",
        path: "/board/topic",
        name: "topicboard",
        title: "오늘의 뉴스",
        description: "오늘의 뉴스 입니다."
      },
      {
        type: "notice",
        path: "/board/notice",
        name: "noticeboard",
        title: "공지사항",
        description: "서비스 관련 중요한 소식을 알려드립니다."
      }
    ];
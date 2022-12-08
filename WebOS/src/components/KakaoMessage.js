const sendKakaoMessage = () => {
  window.Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "[Stand by baby]",
      description: "스탠바이미에서 아기의 울음소리를 감지햇습니다",
    },
    buttons: [
      {
        title: "확인",
        link: {},
      },
    ],
  });
};

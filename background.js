const body = document.querySelector("body");

const IMG_NUMBER = 18; // 이미지의 개수 

function registImage(){
  const image = new Image();

  image.classList.add("bgImage");
  image.src = "/images/background.png";
  body.prepend(image);
}

function paintImage(imgNumber){
  const image = new Image(); // 새로운 Image 타입을 생성 

  image.classList.add("bgImage") // css용 classList 추가 
  image.src = `/images/background${
    imgNumber < 10 ? `0${imgNumber}` : imgNumber
  }.jpg`; // image의 url을 입력
  // prepend : 선택한 요소의 내용의 앞에 콘텐트를 추가합니다.
  body.prepend(image);
}

function randomNumber(){
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number+1;
}

function init(){
  const randomNum = randomNumber();
  paintImage(randomNum);
}

init();
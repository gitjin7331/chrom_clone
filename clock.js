const time = document.querySelector(".clock-container"),
timeDate = time.querySelector(".clock-date"),
timeClock = time.querySelector(".clock-time"),
clockHour = timeClock.querySelector(".clock-hour"),
clockSec = timeClock.querySelector(".clock-second");

function getTime(){
  const today = new Date();
  
  const year = today.getFullYear(),
  month = today.getMonth()+1,
  date = today.getDate(),
  day = week[today.getDay()];

  const hours = today.getHours(),
  minutes = today.getMinutes(),
  seconds = today.getSeconds();

  timeDate.innerHTML = `${year}.${month}.${date}(${day})`;

  clockHour.innerHTML = `${
    hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes}`;

  clockSec.innerHTML = `${
  seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
  setInterval(getTime, 1000); // 일정시간(1초)마다 getTime을 실행
}
var week = new Array('일', '월', '화', '수', '목', '금', '토');


init();
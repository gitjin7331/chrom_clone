/* 이름 설정 */

NAME = "username";
UNSHOWING = "unshowing";

const nameContainer = document.querySelector(".name-container"),
form = nameContainer.querySelector(".name-form"),
input = form.querySelector("input"),
mainContainer = document.querySelector(".main-container");

function saveName(text){
  localStorage.setItem(NAME, text)
}

function paintPage(){
  nameContainer.classList.add(UNSHOWING);
  mainContainer.classList.remove(UNSHOWING);
}

function submitHandler(event){
  event.preventDefault(); // 이벤트의 새로고침을 막는다.
  paintPage();
  saveName(input.value);
}

function loadName(){
  const name = localStorage.getItem(NAME);
  
  if (name !== null){
    paintPage();
  } 
}

function init(){
  loadName();
  form.addEventListener("submit", submitHandler);
}

init();
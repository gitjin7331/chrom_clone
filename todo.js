const toDo = document.querySelector(".js-todo"),
toDoButton = toDo.querySelector(".js-todo__btn"),
toDoList = document.querySelector(".js-todo__list");

UNSHOWING = "unshowing";

function handleClick(event){
  //toDoButton.classList.toggle(UNSHOWING);
  toDoList.classList.toggle(UNSHOWING);
}

function init(){
  toDoButton.addEventListener("click", handleClick);
}

init();
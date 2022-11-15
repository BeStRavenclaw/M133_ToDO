import { ToDo } from "./todo.js";



let todos = [

  new ToDo("Zugticket kaufen", false),

  new ToDo("Wäsche waschen", true),

  new ToDo("Hausaufgaben machen", true),

];



var todoInput = document.getElementById("neuesToDo");



todoInput.addEventListener("keypress", function (event) {

  if (event.key === 'Enter') {

    let todo = new ToDo(todoInput.value, false);

    todoInput.value = '';

    let todoList = document.getElementById("todolist");

    todoList.appendChild(todo.element());

  }

});



let deleteAllButton = document.getElementById("aufraeumen");



deleteAllButton.addEventListener("click", function (event) {

  for (let i = 0; i < todos.length; i++) {

    if (todos[i].erledigt) {

      todos.slice(i, 1);   

    }

  }

  updateToDoListOnScreen();

});



function updateToDoListOnScreen() {

  const todoListElement = document.getElementById("todolist");



  // Liste leeren

  todoListElement.innerHTML = "";



  // ToDo's einfügen

  for (const todo of todos) {

    const toDoListEntry = todo.element();

    todoListElement.appendChild(toDoListEntry);

  }



  // offene ToDo's

  const offeneToDos = todos.filter((offen) => !offen.erledigt);

  const elementAnzahl = document.getElementById("anzahl");

  elementAnzahl.textContent = `${offeneToDos.length} ToDo's offen`;

}



document.addEventListener("DOMContentLoaded", (event) => {

  updateToDoListOnScreen();

});
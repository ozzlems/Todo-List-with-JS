//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listener
todoButton.addEventListener('click' , addTodo);



function addTodo(event){
    
event.preventDefault();
const  todoDiv = document.createElement('div');
todoDiv.classList.add("todo");

const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
//check mark button
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class = "fas fa-check"></i>'
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);
//check trash button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class = "fas fa-trash "></i>'
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);

todoList.appendChild(todoDiv);
//clear input value
todoInput.value = "";
}
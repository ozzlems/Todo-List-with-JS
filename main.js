//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listener
todoButton.addEventListener('click' , addTodo);
todoList.addEventListener('click' , deleteCheck);



function addTodo(event){
    
event.preventDefault();
const  todoDiv = document.createElement('div');
todoDiv.classList.add("todo");

const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value ;
if(todoInput.value !== ""){
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
todoInput.value = ""; }
}

function deleteCheck(e){
const item = e.target;
//delete todo
if(item.classList[0] == 'trash-btn'){
    const todo = item.parentElement;
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function(){
        todo.remove();
    })
   
}
//check mark button
if(item.classList[0] === 'complete-btn'){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
    
}
}
//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


//Event Listners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);


//Functions
function addTodo(event)
{
    //Prevent form from submitting
    event.preventDefault();

    //ToDo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create Li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Add todo to local Stroage
    saveLocalTodos(todoInput.value);

    //Check Mark Button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = `<i class="fa fa-check"></i>`;
    completeButton.classList.add("complete-button");
    todoDiv.appendChild(completeButton);

    //Check Trash Button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fa fa-trash"></i>`;
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);
    //Append to List
    todoList.appendChild(todoDiv);
    //Clear todo input value
    todoInput.value = "";
};

function deleteCheck(event){
    const item = event.target;
    //Delete TODO
    if(item.classList[0] === "trash-button"){
       const todo = item.parentElement;
       todo.classList.add("fall");
       removeLocalTodos(todo)
       todo.addEventListener("transitionend", ( ) =>{
           todo.remove();
       });
    }

    if(item.classList[0] === "complete-button"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }
                else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }
                else{
                    todo.style.display = "none";
                }
                break;
        }
    });
};

//Local Storage

function saveLocalTodos(todo){
    //Check
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
};

function getTodos(){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){
        //ToDo Div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        //Create Li
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        //Check Mark Button
        const completeButton = document.createElement("button");
        completeButton.innerHTML = `<i class="fa fa-check"></i>`;
        completeButton.classList.add("complete-button");
        todoDiv.appendChild(completeButton);

        //Check Trash Button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = `<i class="fa fa-trash"></i>`;
        trashButton.classList.add("trash-button");
        todoDiv.appendChild(trashButton);
        //Append to List
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}
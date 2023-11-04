// variables 
const addBtn = document.getElementById('add-todo');
const todoContainer = document.getElementById('todo-container');
const input = document.getElementById('input-todo');

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
    todos.forEach(todo => addTodo(todo));
}

addBtn.addEventListener("click", addTodo);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter")
        addTodo();
});

function addTodo(todo) {
    let text = input.value;

    if (todo)
        text = todo.text;

    if (text) {
        const todoEl = document.createElement("div");
        todoEl.classList.add("todo");
        if (todo && todo.completed) {
            todoEl.classList.add("completed");
        }

        todoEl.innerHTML = `<p>${text}</p>`;

        const checkBtn = document.createElement("button");
        checkBtn.classList.add("check-todo");
        checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;

        checkBtn.addEventListener("click", () => {
            todoEl.classList.add("completed");
            updateLS();
        });


        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-todo");
        deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

        deleteBtn.addEventListener("click", () => {
            if(confirm("Do you really want to delete this task?")) {
                todoEl.remove();
                updateLS();
            }
        });

        todoEl.appendChild(checkBtn);
        todoEl.appendChild(deleteBtn);

        todoContainer.appendChild(todoEl);
        input.value = "";
        updateLS();
    }
}

function updateLS() {
    const todosEl = document.querySelectorAll(".todo");
    const todos = [];

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed")
        });
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}
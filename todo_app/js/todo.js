// Grab elements
const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add");
const saveBtn = document.getElementById("save");
const loadBtn = document.getElementById("load");
const clearBtn = document.getElementById("clear");
const todosDiv = document.getElementById("todos");
const output = document.getElementById("output");

// Store todos in an array
let todos = [];

// Function to display todos in the list
function displayTodos() {
  todosDiv.innerHTML = "";
  todos.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    todosDiv.appendChild(li);
  });
}

// Add new item
addBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task) {
    todos.push(task);
    displayTodos();
    taskInput.value = "";
  }
});

// Save todos to JSON + localStorage
saveBtn.addEventListener("click", () => {
  const jsonString = JSON.stringify(todos);
  output.textContent = jsonString;
  localStorage.setItem("todos", jsonString);
  console.log("Saved to localStorage:", jsonString);
});

// Load todos from JSON (localStorage if available)
loadBtn.addEventListener("click", () => {
  const stored = localStorage.getItem("todos");
  if (stored) {
    todos = JSON.parse(stored);
    displayTodos();
    output.textContent = stored;
    console.log("Loaded from localStorage:", todos);
  }
});

// Clear todos from memory + localStorage
clearBtn.addEventListener("click", () => {
  todos = [];
  todosDiv.innerHTML = "";
  output.textContent = "";
  localStorage.removeItem("todos");
  console.log("Cleared todos from localStorage.");
});

// Auto-load todos on page refresh
window.addEventListener("load", () => {
  const stored = localStorage.getItem("todos");
  if (stored) {
    todos = JSON.parse(stored);
    displayTodos();
    output.textContent = stored;
    console.log("Todos restored from localStorage on page load:", todos);
  }
});

/* this function gets the task from input*/
function get_todos() {
  /*This creates an array of task that are inputed*/
  var todos = new Array;
  /*this pulls the task that was saved in the web browser memory*/
  var todos_str = localStorage.getItem('todo');
  /*If the input is not null then JSON.parse will
    communicate with the web browser to make the task a JavaScript object.*/
  if (todos_str !== null) {
    todos = JSON.parse(todos_str);
  }
  return todos;
}

/*This function adds the inputed task to the get_todos function array*/
function add() {
  /*This takes the inputed task and creates a variable of it*/
  var task = document.getElementById('task').value;

  var todos = get_todos();
  /*This adds a new task the end of the array*/
  todos.push(task);
  /*this converts the task input to a JSON string*/
  localStorage.setItem('todo', JSON.stringify(todos));
  document.getElementById("task").value = "";

  show();

  return false;
}

/*this function keeps the tasks permanently displayed on the screen*/
function show() {
  /*this sets the task that was retrieved as a variable*/
  var todos = get_todos();

  /*This sets up each task as an unordered list*/
  var html = '<ul>';
  /*This displays a task to the list in the order that it is inputed*/
  for (var i = 0; i < todos.length; i++) {
    /*this also displays the task as a list and creates the button with the "x"*/
    html += '<li>' + todos[i] + ' <button class="remove" id="' + i + '">x</button></li>';
  };
  html += '</ul>';
  /*This displays the task as a list*/
  document.getElementById('todos').innerHTML = html;
}

/*This displays the inputed task when the 'Add Item' button is clicked*/
document.getElementById('add').addEventListener('click', add);
/*this will keep the inputs displayed permantaly on the screen*/
show();
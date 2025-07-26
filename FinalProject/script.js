let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editIndex = null;

document.addEventListener("DOMContentLoaded", () => {
  displayTasks();

  document.getElementById("taskForm").addEventListener("submit", e => {
    e.preventDefault();
    addTask();  
  }); 

  document.getElementById("priorityFilter").addEventListener("change", displayTasks);
});

function addTask() {
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const dueDate = document.getElementById("dueDate").value;
  const priority = document.getElementById("priority").value;

  if (!title || !dueDate || !priority) {
    alert("Please enter title, due date, and priority.");
    return;
  }

  const task = { title, description, dueDate, priority };

  if (editIndex !== null) {
    tasks[editIndex] = task;
    editIndex = null;
  } else {
    tasks.push(task);
  }

  saveTasks();
  clearForm();
  displayTasks();
}

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  const filter = document.getElementById("priorityFilter").value;

  tasks.forEach((task, index) => {
    if (filter !== "all" && task.priority !== filter) return;

    const taskDiv = document.createElement("div");
    taskDiv.className = `task ${task.priority}`;
    taskDiv.innerHTML = `
      <h3>${task.title}</h3>
      <p><strong>Description:</strong> ${task.description || "N/A"}</p>
      <p><strong>Due Date:</strong> ${task.dueDate}</p>
      <p><strong>Priority:</strong> ${task.priority}</p>
      <div class="task-actions">
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;

    taskList.appendChild(taskDiv);
  });
}

function editTask(index) {
  const task = tasks[index];
  document.getElementById("title").value = task.title;
  document.getElementById("description").value = task.description;
  document.getElementById("dueDate").value = task.dueDate;
  document.getElementById("priority").value = task.priority;
  editIndex = index;
}

function deleteTask(index) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
  }
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function clearForm() {
  document.getElementById("taskForm").reset();
}

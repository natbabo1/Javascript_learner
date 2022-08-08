let addBtn = document.getElementById("addBtn");
let taskContainer = document.getElementById("taskContainer");

function addAction() {
  let newTask = document.createElement("div");
  let textTask = prompt("Enter new task:");
  let newTaskOpener = `<span class="textTask">${textTask}</span>`;
  let editBtnText = `<button class="edit">Edit</button>`;
  let delBtnText = `<button class="delete">Del</button>`;

  newTask.innerHTML = newTaskOpener + editBtnText + delBtnText;
  taskContainer.append(newTask);

  let editBtn = taskContainer.lastChild.querySelector(".edit");
  let delBtn = taskContainer.lastChild.querySelector(".delete");
  let detailTask = taskContainer.lastChild.querySelector(".textTask");

  editBtn.addEventListener("click", editTask);
  delBtn.addEventListener("click", delTask);
  detailTask.addEventListener("click", toggleTask);
  //   console.log(editBtn);
}

function editTask() {
  let newTextTask = prompt("Edit task:");
  this.previousSibling.innerHTML = newTextTask;
}
function delTask() {
  this.parentNode.remove();
}
function toggleTask() {
  this.classList.toggle("checkedTask");
}

addBtn.addEventListener("click", addAction);

// const container = document.querySelector(".container");
// const todoForm = document.querySelector("#todoForm");
// const toDoInput = document.querySelector("#toDoInput");
// const toDoButton = document.querySelector("#toDobtn");
// const toDoLists = document.querySelector("#toDoLists");
// const message = document.querySelector("#message");

// // showMessage()
// const showMessage = (text, status) => {
//   message.textContent = text;
//   message.classList.add(`bg-${status}`);
//   setTimeout(() => {
//     message.textContent = "";
//     message.classList.remove(`bg-${status}`);
//   }, 1000);
// };

// // createToDo
// const createToDo = (toDoId, toDoInputValue) => {
//   const todoElement = document.createComment("li");
//   todoElement.id = toDoId;
//   todoElement.classList.add("li-style");
//   todoElement.innerHTML = `
//   <span>${toDoInputValue}</span>
//   <span><button class="btn" id="deleteBtn"> <i class="fa-solid fa-trash-can"></i> </button></span>
//   `;
//   toDoLists.appendChild(todoElement);

//   // deleting list and showing message
//   const deleteBtn = todoElement.querySelector("#deleteBtn");
//   deleteBtn.addEventListener("click", (event) => {
//     const selectedToDo = event.target.parentElement.parentElement.parentElement;
//     toDoLists.removeChild(selectedToDo);
//     showMessage("to do is deleted", "danger");

//     // deleting from localstorage
//     const deletingtodoId = selectedToDo.id;
//     let todos = getTodosFromLocalStorage();
//     todos = todos.filter((todo) => {
//       todo.toDoId !== deletingtodoId;
//     });
//     localStorage.setItem("mytodos", JSON.stringify(todos));
//   });
// };

// // getTodosFromLocalStorage()
// const getTodosFromLocalStorage = () => {
//   return localStorage.getItem("mytodos")
//     ? JSON.parse(localStorage.getItem("mytodos"))
//     : [];
// };

// // adding listeners
// todoForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const toDoInputValue = toDoInput.value;
//   // console.log(toDoInputValue);

//   // generating unique id
//   const toDoId = Date.now().toString();

//   // calling createtoDo()
//   createToDo(toDoId, toDoInputValue);

//   // showMessage()
//   showMessage("to do is added", "success");

//   // add to do in localStorage
//   const todos = getTodosFromLocalStorage();
//   todos.push({ toDoId, toDoInputValue });
//   localStorage.setItem("mytodos", JSON.stringify(todos));

//   // clearing input field
//   toDoInputValue.value = "";
// });

// // loading/reading to do from localStorage
// window.addEventListener("DOMContentLoaded", () => {
//   const todos = getTodosFromLocalStorage();
//   todos.map((todo) => {
//     createToDo(todo.toDoId, todo.toDoInputValue);
//   });
// });

// practice
const card = document.querySelector(".card");
const form = card.querySelector("#todoForm");
const toDoInput = form.querySelector("#toDoInput");
const toDobtn = form.querySelector("#toDobtn");
const message = card.querySelector("#message");
const toDoUL = card.querySelector("#toDoLists");

// createtodo()
let createtodo = (uniqueId, inputValue) => {
  const todoLi = document.createElement("li");
  todoLi.id = uniqueId;
  todoLi.classList.add("li-style");
  todoLi.innerHTML = `
  <span>${inputValue}</span>
  <button class="btn" id="deletebtn"><i class="fa-solid fa-trash-can"></i></button>
  `;
  toDoUL.appendChild(todoLi);
  // selecting deleted to do
  const deletebtn = todoLi.querySelector("#deletebtn");
  deletebtn.addEventListener("click", deletetodo);
};

// deleting selected to do
const deletetodo = (event) => {
  const selectedtodo = event.target.parentElement;
  // console.log(selectedtodo);
  toDoUL.removeChild(selectedtodo);
  showmessage("to do is deleted !", "danger");

  // deleting from localStorage
  let todos = responseFromLs();
  todos = todos.filter((todo) => {
    todo.id !== selectedtodo.id;
  });
  localStorage.setItem("mytodo", JSON.stringify(todos));
};

//////////////////////////////
// showmessage()
const showmessage = (text, status) => {
  message.textContent = `${text}`;
  message.classList.add(`bg-${status}`);

  setTimeout(() => {
    message.textContent = "";
    message.classList.remove(`bg-${status}`);
  }, 1000);
};

// save to do in localStorage
const responseFromLs = () => {
  return localStorage.getItem("mytodo")
    ? JSON.parse(localStorage.getItem("mytodo"))
    : [];
};

// content loaded
let loadcontent = () => {
  const todos = responseFromLs();
  todos.map((todo) => {
    createtodo(todo.uniqueId, todo.inputValue);
  });
};

// todoApp()
const todoApp = (event) => {
  event.preventDefault();

  const inputValue = toDoInput.value;
  const uniqueId = Date.now().toString();

  // createtodo()
  createtodo(uniqueId, inputValue);

  // showmessage()
  showmessage("to do is created", "success");

  // save todo in localStorage
  const mytodos = responseFromLs();
  mytodos.push({ uniqueId, inputValue });
  localStorage.setItem("mytodo", JSON.stringify(mytodos));

  // clearing input field
  toDoInput.value = "";
};
// adding listener
form.addEventListener("submit", todoApp);
window.addEventListener("DOMContentLoaded", loadcontent);

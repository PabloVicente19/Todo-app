const $form = document.getElementById('form');
const $taskInput = document.getElementById('task');
const $taskCoontainer = document.querySelector('.task-list-container');

// Variable que que almecena las tasks;
let task = JSON.parse(localStorage.getItem('tasks')) || [];

// Funcion que almacena en LS:
const saveLocalStorage = (taskList) => {
   return localStorage.setItem('tasks', JSON.stringify(taskList))
}

// Creo la card de la tarea
const createTaskCard = (tasks) => {
  const {name} = tasks;
  return `<li> ${name} </li>`
}

// funcion para renderizal las tareas
const renderCards = (container,task) => {
  return container.innerHTML += task.map(createTaskCard).join("");
}

$form.addEventListener('submit', (e) => {
  e.preventDefault()

  let taskName = $taskInput.value.trim();
  
  task = [...task, {name: taskName}]
  
  console.log(taskName);
  console.log(task);
})
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
  const {name, id} = tasks;
  return `<li class="todo-task"> ${name} <i class="fa-solid fa-trash icon-remove-task" data-id=${id}></i></li>`
}

// funcion para renderizal las tareas
const renderCards = (container) => {
  return container.innerHTML = task.map(createTaskCard).join("");
}
// Obtengo el dato del input, lo guado en LS y lo renderizo
$form.addEventListener('submit', (e) => {
  e.preventDefault()

  let taskName = $taskInput.value.trim();
  // Le doy formato a la task
  task = [...task, {id:task.length + 1, name: taskName}]
  // Almaceno la task
  saveLocalStorage(task);
  renderCards($taskCoontainer);


})
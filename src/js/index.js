const $form = document.getElementById('form');
const $taskInput = document.getElementById('task');
const $taskCoontainer = document.querySelector('.task-list-container');
const $removeTask = document.querySelector('.icon-remove-task');

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
// funcion para renderizar las tareas
const renderCards = (container, arr) => {
  return container.innerHTML = arr.map(createTaskCard).join("");
}
// Alerta cuando no hay nada escrito
const showAlert = (message) => {
  return alert(message)
}
// comparo si existe una tarea con el mismo nombre y 
const equalTask = (arr, input) => {
 return arr.some( task =>  task.name == input)
}

// Obtengo el dato del input, lo guado en LS y lo renderizo
const addTasks = (even) => {
  even.preventDefault();
  let taskName = $taskInput.value.trim();
  
  // Si no escribio nada ejecuta la funcion
  if(taskName == ""){
    return showAlert("Debe ingresar Texto");
  }else if(equalTask(task, taskName)){
    return showAlert("Existe una tarea con ese nombre");
  }

  // Formateo la task
  task = [...task, {id:task.length + 1, name: taskName}];

  // La guarda y renderiza
  saveLocalStorage(task);
  renderCards($taskCoontainer, task);
  $form.reset()

}
// Funcion para eliminar una sola tarea
const removeTask = (target) => {
  let taskId = parseInt(target.target.dataset.id);
  if(!taskId) return;
    // Filta los que no son iguales al ID, los guarda y vuelve a renderizar
    task = task.filter(task => task.id !== taskId)
    renderCards($taskCoontainer,task);
    saveLocalStorage(task);
}

const init = () => {
  $form.addEventListener('submit', addTasks)
  $taskCoontainer.addEventListener('click', removeTask)
  renderCards($taskCoontainer,task);
}
init ()
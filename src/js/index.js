const form = document.getElementById('form');
const taskInput = document.getElementById('input');
const taskBtn = document.getElementById('btn');
const taskContainer = document.querySelector('.task-container');
const removeAll = document.querySelector('.btn-removeAll');

  // Variable a guardar las tareas
let task = JSON.parse(localStorage.getItem('task')) || [];

  // Guarda los datos en Ls
const saveLocalStorage = (taskList) => localStorage.setItem('task', JSON.stringify(taskList));

  // Crea la card de la tarea
const createCard = (task) => {
  const {name, id } = task;
  return`<div class="task-content">
  <span class="task-name">${name}</span>
  <button class="task-delete" data-id=${id}><i class="fa-solid fa-trash task-delete-icon"></i></button>
</div> `
}

  // Renderiza La card
const renderCard = (taskList) => taskContainer.innerHTML = taskList.map(task => createCard(task)).join("");

  // Obtener dato del input
form.addEventListener('submit', (e) => {
  e.preventDefault(e)
  const taskName = taskInput.value.trim();

  if( isEmpty (taskName) ) {
    return showError("¡Ingrese una tarea!");
  } else if ( checkEqualTask(task, taskName) ) {
     return showError("¡Existe una tarea con ese nombre!");
    } else{
      addTask(taskName) 
     } 
    form.reset(form)
  
})
  // Funcion para mostrar errores
const showError = (message) => alert(message);

// Verifica si el input esta vacio cuando se hace click
const isEmpty = (input) => input == "";

  // Verifico si existe la tarea con el mismo nombre
const checkEqualTask = ( task, input) => task.some(tarea => tarea.name == input) ;

  // añado la tarea
const addTask = (input) =>{
  task = [ ...task, { name: input, id: task.length + 1} ];
  renderCard(task);
  saveLocalStorage(task);; 
}

  // Remover una sola tarea
const deleteTask = (e) => {
  
  if(!e.target.dataset.id) return;

  let filter = Number(e.target.dataset.id);
  
  task = task.filter(task => task.id !== filter)

  renderCard(task)
  saveLocalStorage(task)
}

  // Remover el texto dentro del atributo placeholder del input
const deleteTextInInput = () => {
  if(taskInput.placeholder = ""){
    return taskInput.placeholder = "Ingrese una tarea";
  } 
}

// Remover Todas las Tareas
const removeAllTasks = () => {
  task = []
  renderCard(task)
  saveLocalStorage(task)
}

const init = () => {
  renderCard(task)
  taskContainer.addEventListener('click', deleteTask)
  removeAll.addEventListener('click',removeAllTasks )
  taskInput.addEventListener('click', deleteTextInInput)
}
init()

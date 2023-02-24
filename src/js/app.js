  
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

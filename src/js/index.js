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
const createCard = (tarea) => {
  const {name, id } = tarea
  return`<div class="task-content">
  <span class="task-name">${name}</span>
  <button class="task-delete" data-id=${id}><i class="fa-solid fa-trash task-delete-icon"></i></button>
</div> `
}

// Renderiza La card
const renderCard = (taskList) => taskContainer.innerHTML = taskList.map(task => createCard(task)).join("");


// Obtiene los datos
form.addEventListener('submit', (e) => {
  e.preventDefault(e)
  const taskName = taskInput.value.trim();
  if( !taskName.length ){
    taskInput.classList.add('empty');
    console.log('Ingrese una tarea');
  }else if (task.some(task => task.name === taskName)) {
   return console.log("existe")
  }
  else{
    taskInput.classList.remove('empty')
    task = [ ...task,{ name: taskName, id: task.length + 1,}]
    renderCard(task)
    saveLocalStorage(task)
} 
  form.reset(form)
})
// Remover una sola tarea
taskContainer.addEventListener('click', e => {

  if(!e.target.dataset.id) return;

  let filter = Number(e.target.dataset.id);
  
  task = task.filter(task => task.id !== filter)

  renderCard(task)
  saveLocalStorage(task)
})
// Remover todas las tareas
removeAll.addEventListener('click' ,e => {
  task = []
  renderCard(task)
  saveLocalStorage(task)
})

// Remover el texto dentro del atributo placeholder
taskInput.addEventListener('click',e => {
  if(taskInput.placeholder = ""){
    return taskInput.placeholder = "Ingrese una tarea";
  }
})
renderCard(task)


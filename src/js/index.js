const form = document.getElementById('form');
const taskInput = document.getElementById('input');
const taskBtn = document.getElementById('btn');
const taskContainer = document.querySelector('.task-container');

// mostrar en Ls
let task = JSON.parse(localStorage.getItem('task')) || [];

// guardar en ls
const saveLocalStorage = (taskList) => {
  return localStorage.setItem('task', JSON.stringify(taskList));
}

// Crear la card de la tarea

const createCard = (tarea) => {
  const {name, id } = tarea
  return`<div class="task-content">
  <span class="task-name">${name}</span>
  <button class="task-delete" data-id=${id}>X</button>
</div> `
}

// Renderizar
const renderCard = (taskList) => {
 return  taskContainer.innerHTML = taskList.map(task => createCard(task)).join("")
}

// obtener el dato
form.addEventListener('submit', (e) => {
    e.preventDefault(e)

  const taskName = taskInput.value.trim();

  if( !taskName.length ){
    taskInput.classList.add('empty')
    return console.log('Ingrese una tarea') 
  } else{
    taskInput.classList.remove('empty')
    task = [ ...task,{
      name: taskName,
      id: task.length + 1,
    }]
  renderCard(task)
  saveLocalStorage(task)
  }



  

  
 
  form.reset()
  })
  renderCard(task)



//

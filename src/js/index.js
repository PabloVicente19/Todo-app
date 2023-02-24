const form = document.getElementById('form');
const taskInput = document.getElementById('input');
const taskBtn = document.getElementById('btn');
const taskContainer = document.querySelector('.task-container');
const removeAll = document.querySelector('.btn-removeAll');

  // Obtener dato del input
const createTask = (even) => {
  even.preventDefault(even);

  const taskName = taskInput.value.trim();

  if( isEmpty(taskName) ){
    return showError( "¡Ingrese una tarea! ");
  } else if( checkEqualTask(task, taskName) ){
    return showError( " ¡Existe una tarea con ese nombre! ");
  } else{
    addTask(taskName);
    form.reset(form);
  }
  form.reset(form);
}


const init = () => {
  renderCard(task);
  form.addEventListener('submit', createTask)
  taskContainer.addEventListener('click', deleteTask)
  removeAll.addEventListener('click',removeAllTasks )
  taskInput.addEventListener('click', deleteTextInInput)
}
init()

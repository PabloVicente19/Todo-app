// Funcion para mostrar errores.
const showError = (message) => alert(message);

// Verifica si el input esta vacio cuando se hace click.
const isEmpty = (input) => input == "";

// agrega el boton de eliminar todas las tareas 
const showBtn = (task) => {
  if( task.length > 1) {
    removeAll.classList.remove('hidden')
  } else{
    removeAll.classList.add('hidden');
  }
}
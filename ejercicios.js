const formularioTarea = document.querySelector("#formulario-tarea");
const nombreTarea = document.querySelector("#nombre-tarea");
const listaTareas = document.querySelector("#lista-tareas");
const sinTareas = document.querySelector("#sin-tareas");
const mensaje = document.querySelector("#mensaje");

formularioTarea.addEventListener("submit", event => {
    event.preventDefault();

    const tarea = nombreTarea.value.trim();
    if (!tarea) {
        mensaje.textContent = "Escribe una tarea antes de agregarla.";
        nombreTarea.focus();
        return;
    }

    const elementoTarea = document.createElement("li");
    elementoTarea.textContent = tarea;
    listaTareas.append(elementoTarea);

    sinTareas.hidden = true;
    formularioTarea.reset();
    nombreTarea.focus();
    mensaje.textContent = "Tarea agregada.";
});

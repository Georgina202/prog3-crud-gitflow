console.log("UI cargada correctamente.");

let tasks = [];
let nextId = 1;


const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");


function renderTasks() {
 
  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.dataset.id = task.id;

    // Texto de la tarea
    const span = document.createElement("span");
    span.textContent = task.text;
    li.appendChild(span);

    const editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.addEventListener("click", () => {
      const nuevoTexto = prompt("Edita la tarea:", task.text);

      if (nuevoTexto === null) {
        return;
      }

      const limpio = nuevoTexto.trim();
      if (limpio === "") {
        alert("La tarea no puede quedar vacía.");
        return;
      }

      task.text = limpio;
      renderTasks();
    });
    li.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    li.appendChild(deleteButton);

    list.appendChild(li);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (text === "") return;

  const newTask = {
    id: nextId++,
    text: text,
  };

  tasks.push(newTask);
  input.value = ""; 
  renderTasks();
});

// Render inicial
renderTasks();

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

    const span = document.createElement("span");
    span.textContent = task.text;

    // Botón Editar
    const editBtn = document.createElement("button");
    editBtn.textContent = "Editar";

    // Botón Eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";

    // --- Lógica Editar ---
    editBtn.addEventListener("click", () => {
      const nuevoTexto = prompt("Edita la tarea:", task.text);
      if (!nuevoTexto) return;
      const limpio = nuevoTexto.trim();
      if (!limpio) return;

      task.text = limpio;
      renderTasks();
    });

    // --- Lógica Eliminar ---
    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      renderTasks();
    });

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    list.appendChild(li);
  });
}


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  const newTask = {
    id: nextId++,
    text,
  };

  tasks.push(newTask);
  input.value = "";
  renderTasks();
});

// Render inicial
renderTasks();

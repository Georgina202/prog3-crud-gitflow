console.log("UI cargada correctamente.");

// Estado
let tasks = [];
let nextId = 1;

// Elementos del DOM
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
        li.appendChild(span);

        // Botón Editar
        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.addEventListener("click", () => {
            const nuevoTexto = prompt("Edita la tarea:", task.text);
            if (nuevoTexto === null) return;

            const limpio = nuevoTexto.trim();
            if (limpio === "") {
                alert("La tarea no puede quedar vacía.");
                return;
            }

            task.text = limpio;
            renderTasks();
        });
        li.appendChild(editButton);

        // Botón Eliminar
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", () => {
            tasks = tasks.filter(t => t.id !== task.id);
            renderTasks();
        });
        li.appendChild(deleteButton);

        list.appendChild(li);
    });

    console.log("Total de tareas:", tasks.length);
}

// Evento submit para agregar tarea
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.trim();
    if (text === "") return;

    const newTask = {
        id: nextId++,
        text: text
    };

    tasks.push(newTask);
    input.value = "";
    renderTasks();
});

// Render inicial
renderTasks();

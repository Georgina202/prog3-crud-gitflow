function renderTasks() {
    list.innerHTML = "";

    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.dataset.id = task.id;

        const span = document.createElement("span");
        span.textContent = task.text;
        li.appendChild(span);

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

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        li.appendChild(deleteButton);

        list.appendChild(li);
    });

    
    console.log("Total de tareas:", tasks.length);
}

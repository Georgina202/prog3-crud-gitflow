console.log("UI cargada correctamente.");

let tasks = [];
let nextId = 1;

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

function renderTasks() {

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.dataset.id = task.id;

      task.text = limpio;
      renderTasks();
    });


   
    list.appendChild(li);
  });
}


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();


  renderTasks();
});

// Render inicial
renderTasks();


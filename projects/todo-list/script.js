document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    // Load tasks from localStorage
    loadTasks();

    // Add new task
    addTaskButton.addEventListener("click", function () {
        addTask();
    });

    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="delete-btn">X</button>
        `;

        // Mark as completed on click
        li.addEventListener("click", function () {
            li.classList.toggle("completed");
            saveTasks();
        });

        // Delete task
        li.querySelector(".delete-btn").addEventListener("click", function (e) {
            e.stopPropagation(); // Prevents triggering mark complete
            li.remove();
            saveTasks();
        });

        taskList.appendChild(li);
        taskInput.value = "";
        saveTasks();
    }

    function saveTasks() {
        const tasks = [];
        document.querySelectorAll("#task-list li").forEach(li => {
            tasks.push({
                text: li.querySelector(".task-text").textContent,
                completed: li.classList.contains("completed")
            });
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasks() {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        savedTasks.forEach(task => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span class="task-text">${task.text}</span>
                <button class="delete-btn">X</button>
            `;
            if (task.completed) {
                li.classList.add("completed");
            }

            li.addEventListener("click", function () {
                li.classList.toggle("completed");
                saveTasks();
            });

            li.querySelector(".delete-btn").addEventListener("click", function (e) {
                e.stopPropagation();
                li.remove();
                saveTasks();
            });

            taskList.appendChild(li);
        });
    }
});

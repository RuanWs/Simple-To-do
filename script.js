
    const taskInput = document.getElementById("task-input");
    const list = document.getElementById("task-list");

    function addTask() {
        if (taskInput.value === "") {
            alert("Insira uma tarefa.");
        } else {
            let li = document.createElement("li");
            li.innerHTML = taskInput.value;

            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);

            list.appendChild(li);
        }
        taskInput.value = "";
        saveData();
    }

    list.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
        }
    });
;
function saveData(){
    localStorage.setItem("taskList", list.innerHTML);
}
function showTask(){
    list.innerHTML= localStorage.getItem("taskList")
}
showTask();
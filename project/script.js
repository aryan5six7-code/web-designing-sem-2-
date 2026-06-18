let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function updateClock(){
    document.getElementById("clock").innerHTML =
        new Date().toLocaleTimeString();
}

setInterval(updateClock,1000);

function saveTasks(){
    localStorage.setItem("tasks",
        JSON.stringify(tasks));
}

function addTask(){

    let task =
    document.getElementById("taskInput").value;

    if(task==="") return;

    tasks.push({
        text:task,
        completed:false
    });

    document.getElementById("taskInput").value="";
    saveTasks();
    renderTasks();
}

function toggleTask(index){
    tasks[index].completed =
        !tasks[index].completed;

    saveTasks();
    renderTasks();
}

function renderTasks(){

    let list =
    document.getElementById("taskList");

    list.innerHTML="";

    let completed=0;

    tasks.forEach((task,index)=>{

        if(task.completed) completed++;

        let li=document.createElement("li");

        li.innerHTML=`
        <span class="${task.completed ?
        'completed':''}">
        ${task.text}
        </span>

        <button onclick="toggleTask(${index})">
        Done
        </button>
        `;

        list.appendChild(li);
    });

    document.getElementById("completed").innerHTML=
        completed;

    document.getElementById("total").innerHTML=
        tasks.length;
}

updateClock();
renderTasks();
document.getElementById("discover-btn")
  .addEventListener("click", function () {
    window.location.href = "blog.html";
  });


const taskAssainedElement = document.getElementById("task-num");
let taskNumber = parseInt(taskAssainedElement.innerText);

const completeTaskElement = document.getElementById("nav-task");
let completeTaskNumber = parseInt(completeTaskElement.innerText);


function buttonColor(button) {
  button.style.backgroundColor = "gray";
  button.disabled = true; 
  button.style.color = "lightgray";
}
function currentTime() {
    const now = new Date();
    return now.toLocaleTimeString(); 
  }

  const logContainer = document.getElementById("activity-container");
  
  function addEntry(taskTitle) {
    const time = currentTime();
    const log = document.createElement("div");
    log.className = "log-entry";
    log.innerText = `
    
    You have completed the task "${taskTitle}" at ${time}
    
    
    `;
    logContainer.appendChild(log);
}
const buttons = document.querySelectorAll(".disable ");
buttons.forEach(button => {
  button.addEventListener("click", function () {
    buttonColor(button);

    if (taskNumber > 0) {
      taskNumber--;
      taskAssainedElement.innerText = taskNumber;
      alert("Task complete!");
    }

    completeTaskNumber++;
    completeTaskElement.innerText = completeTaskNumber;

    if (taskNumber === 0) {
      alert("All tasks are finished!");
    }
     const taskBox = button.closest(".dash-box");
     const taskTitle = taskBox.querySelector("#task-headline").innerText;





     addEntry(taskTitle);
    
  });
});

const clearHistory = document.getElementById("clear-btn").addEventListener("click",function(){
   
      logContainer.innerHTML = "";
})
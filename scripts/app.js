function saveTask() {
    console.log("saving task");

    // get values 

    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#txtColor").val();
    const date = $("#txtDate").val();
    const status = $("#txtStatus").val();
    const budget = $("#txtBudget").val();
    console.log(title, description, color, date, status, budget);

    // build an object 

    let taskToSave = new Task(title, description, color, date, status, budget);
    console.log(taskToSave);

    // save to server 
    $.ajax({
        type: "POST",
        url: "http://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(taskToSave),
        contentType: "application/json",
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.log(error);
        }
    });

    // display the task
    displayTask(taskToSave);
}

function displayTask(task) {

    console.log(task);
    let syntax = `<div class="task">
    <h5>${task.title}</h5>
    <p>${task.description}</p>
        </div>
        <div><label>${task.status}</label></div>
        <div><label>${task.date}</label>
        <label>${task.budget}</label></div>`
        ;

    $(".list").append(syntax);
    
}

function testRequest() {
    $.ajax({
        type: "get",
        url: "http://fsdiapi.azurewebsites.net",
        success: function(response){
            console.log(response);
        },
        error: function(error) {
            console.log(error);
        }
    });
}


function init() {
    console.log("task manager");
    // load data

    // hook the events 
    $("#btnSave").click(saveTask);
}

window.onload = init();
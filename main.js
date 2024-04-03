/* Title: To-Do List Web Application Script */
/* Author: Rashed Hadi */
/* Date Started: Thursday March 28th, 2024 */
/* Date Completed: */

// create variables to hold inputs and tsks
const input = document.getElementById("new-task-input");
const task_list = document.getElementById("user-tasks");

// funtion to create a task once 'Create Task' button is clicked
function create_task() {

    // first we have to check if the input field is empty
    if (input.value === '') {
        // change the colour of the text to red
        input.classList.add('color-class');
    }
    else {
        // create variable to hold the task
        let li = document.createElement("li");
        // fill variable with input field
        li.innerHTML = input.value;
        //add to the task list
        task_list.appendChild(li);

        //add delete button in span of the html text
        let span = document.createElement("span");
        span.innerHTML = "delete";
        li.appendChild(span);
        
        // house keeping:
        input.classList.remove("color-class"); // switch placeholder color back
        input.value = ""; // reset the input box
    }
};

task_list.addEventListener("click", 

    function(event) {
        // check if user clicked on a task, then toggle the completed status
        if (event.target.nodeName === "LI"){
            event.target.classList.toggle('completed');
        }

        //check if user clicked on a delete button, then remove from list
        if (event.target.nodeName === "SPAN"){
            event.target.parentElement.remove();
        }
    }
);

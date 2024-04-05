/* Title: To-Do List Web Application Script */
/* Author: Rashed Hadi */
/* Date Started: Thursday March 28th, 2024 */
/* Date Completed: */

// create variables to hold inputs and tsks
const input = document.getElementById("new-task-input");
const task_list = document.getElementById("user-tasks");

// call load list function to load the list on startup
load_list();

// call to start checking length
checkLength();

// funtion to create a task once 'Create Task' button is clicked
function create_task() {

    // first we have to check if the input field is empty
    if (input.value === '') {
        // change the colour of the placeholder text to red
        input.classList.add('color-class-empty');
    }
    // then we check if the input is greater than 60
    else if (input.value.length > 60) {
        // change the colour of the input text to red
        input.classList.add('color-class-length');
    }
    // if both pass, we can add to the list
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

        //save the list 
        save_list();
        
        // house keeping:
        input.classList.remove("color-class-empty"); // switch placeholder color back
        input.classList.remove("color-class-length"); // switch input color back
        input.value = ""; // reset the input box
    }
};

// function that constantly checks the input length so it does not stay red after user
// adds an input that is valid (less than 60 characters long)
function checkLength(){
    //interal that checks every 0.25 seconds
    const intervalId = setInterval(() => {
        if (input.value.length > 60) {
            input.classList.add("color-class-length"); // switch input color to red
        }
        else {
            input.classList.remove("color-class-length"); // switch input color back
        }
    }, 250) // 250 ms = 0.25 s
}

// function that allows the use of 'enter' key to add a task
function handleKeyPress(event) {
    if (event.keyCode === 13) { // 13 is the key code for Enter key
        // call create task function to take care of the rest
        create_task();
    }
}

// Event listner used to check when user is interacting with task list
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

        //save the to do list
        save_list();
    }
);

// function to save the To Do List in local storage
function save_list() {
    //save the task_list variable to local storage
    localStorage.setItem("to_do_list", task_list.innerHTML);
}

// function to load the To Do List on launch
function load_list(){
    //get the task list from local storage
    task_list.innerHTML = localStorage.getItem("to_do_list");
}
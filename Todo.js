var taskInput = document.getElementById('taskInput');
var taskList = document.getElementById('taskList');

function addTask() {
    var taskText = taskInput.value.trim();
    if (taskText !== '') {
        var li = document.createElement('li');
        li.textContent = taskText;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            li.remove();
        };

        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}

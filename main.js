
document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.querySelector('.add-task input'); 
    const addButton = document.querySelector('.add-task button'); 
    const todoList = document.getElementById('todo-list'); 

    function addTask() {
        const taskText = inputField.value.trim(); 

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.classList.add('task');

        const taskName = document.createElement('h6');
        taskName.textContent = taskText;

        const completedButton = document.createElement('button');
        completedButton.textContent = 'Completed';
        completedButton.addEventListener('click', function () {
            taskItem.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            todoList.removeChild(taskItem); 
        });

        taskItem.appendChild(taskName);
        taskItem.appendChild(completedButton);
        taskItem.appendChild(deleteButton);

        todoList.appendChild(taskItem);

        inputField.value = '';
    }

    addButton.addEventListener('click', addTask);

    inputField.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

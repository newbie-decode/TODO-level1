
function addTask() {
    const taskInput = document.querySelector('.add-task input'); 
    const taskText = taskInput.value.trim(); 
    
    if (taskText !== '') {
      const taskList = document.querySelector('.tasks-list'); 
      const taskItem = document.createElement('div');
      taskItem.classList.add('task'); 
  
      const taskContent = document.createElement('h6');
      taskContent.textContent = taskText;
  
      const completeButton = document.createElement('button');
      completeButton.textContent = 'Complete';
      completeButton.classList.add('complete'); 
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete');

      taskItem.appendChild(taskContent);
      taskItem.appendChild(completeButton);
      taskItem.appendChild(deleteButton);
  
      taskList.appendChild(taskItem);
  
      taskInput.value = '';
  
      completeButton.addEventListener('click', () => {
        taskContent.style.textDecoration = 'line-through';
      });
  
      deleteButton.addEventListener('click', () => {
        taskItem.remove(); 
      });
    }
  }
  
  document.querySelector('.add-task button').addEventListener('click', addTask);
  
  document.querySelector('.add-task input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask(); 
    }
  });
  
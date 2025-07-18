const taskInput = document.getElementById('id-input');
const addTaskBtn = document.getElementById('enter-btn');
const taskList = document.getElementById('add-list');

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});


function addTask() {
    const taskText = taskInput.value.trim();


    if (taskText === '') {
        alert('Por favor, digite uma tarefa válida.');
        return; // Sai da função se estiver vazio
    }

 
    const listItem = document.createElement('li');
    
    
    const taskSpan = document.createElement('span');
    taskSpan.className = 'task-text';
    taskSpan.textContent = taskText;

    
    const taskActionsDiv = document.createElement('div');
    taskActionsDiv.className = 'task-actions';

   
    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.innerHTML = '✓';
    completeBtn.title = 'Marcar como concluída';

   
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '✖';
    deleteBtn.title = 'Excluir tarefa';

    
    taskActionsDiv.appendChild(completeBtn);
    taskActionsDiv.appendChild(deleteBtn);
    
   
    listItem.appendChild(taskSpan);
    listItem.appendChild(taskActionsDiv);

    
    taskList.appendChild(listItem);

   
    taskInput.value = '';

  
    completeBtn.addEventListener('click', () => {
       
        listItem.classList.toggle('completed');
    });

    deleteBtn.addEventListener('click', () => {
       
        listItem.remove();
    });
}
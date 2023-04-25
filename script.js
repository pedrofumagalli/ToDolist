document.addEventListener('DOMContentLoaded', () => {
  

  //função que adiciona tarefa
  function addlisttasks() {
    //titulo da tarefa
    const taskTitle = document.getElementById('input-title-tasks').value;
    console.log('input recebe tarefa', taskTitle);
    if(taskTitle) {

      //clona template
      const template = document.querySelector('.template');
      console.log('clona a clase template', template);
      const newTask = template.cloneNode(true);
      console.log('clone template ja com nova tarefa', newTask);

      //adiciona titulo de tarefa na lista
      newTask.querySelector('.title-tasks').textContent = taskTitle;
      console.log('nova tarefa', newTask);

      //remover as classes desnecessarias na lista
      newTask.classList.remove("template");
      newTask.classList.remove("hide");

      //adiciona tarefa na lista (ul)
      const list = document.getElementById('list-tasks');
      list.appendChild(newTask);
      console.log('appendchild', newTask);

     //adiciona evento de completar tarefa
     const btnDone = newTask.querySelector('.btn-done');
     console.log('btndone', btnDone);
     btnDone.addEventListener('click', function() {
       completeTask(this);
     })
     
      //adiciona evento de remover tarefas
      const btnRemove = newTask.querySelector('.btn-remove');
      btnRemove.addEventListener('click', function(){
        removeTask(this);
      })
      
      //limpar texto das tarefas elencadas
      document.getElementById('input-title-tasks').value = '';
    }
  }

  //função para completar a tarefa
  function completeTask(task) {
    console.log(task);
    const taskComplete = task.parentNode;
    taskComplete.classList.toggle("done");  
  }

  //função de remover tarefas
  function removeTask(task) {
    task.parentNode.remove(true);
    console.log('remove task', task);
  }

  //evento de adicionar tarefas
  const btnAdd = document.getElementById('btn-add');
  btnAdd.addEventListener('click', function(e) {
    e.preventDefault();
    addlisttasks();
  })
})
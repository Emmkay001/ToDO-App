let todoList = [];
    displayTodo()

function displayTodo() {
  let todoListHtml = '';

  for(let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];

    //can also be
    //todoPlan
    //todoDate
    const todoPlan = todoObject.todoPlan;
    const todoDate = todoObject.todoDate;
    const html =`
     <div>${todoPlan}</div>
     <div>${todoDate}</div> 
     <button class="delete-button" onclick="
     todoList.splice(${i},1);
     displayTodo();
     ">Delete</button>
    `;

    todoListHtml += html;
  }

  document.querySelector('.js-todo-display').innerHTML = todoListHtml;
}


function addTodoList() {
    const inputElement = document.querySelector('.js-todo-input');
    const dateInputElement = document.querySelector('.js-todo-date');
    let todoPlan = inputElement.value.trim();
    let todoDate = dateInputElement.value;
  
    if (todoPlan !== '' && todoDate !== '') {

        //todoList.push({ todoPlan, todoDate }); 
        //todoList.push({ todoPlan: todoPlan, todoDate: todoDate });
        //both comment does same thing as running code below

      todoList.push({ todoPlan: todoPlan, todoDate: todoDate });
      inputElement.value = '';
      dateInputElement.value = '';
      displayTodo();
    } else {
      alert('Please enter both todo plan and date!');
    }
  }
  

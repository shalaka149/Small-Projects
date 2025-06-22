const todoList = [{
    name: 'make dinner',
    dueDate: '2022-12-22'
}, {
    name: 'washing dishes',
    dueDate: '2022-12-22'
}];

document.querySelector('.js-name-input')
  .addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addTodo();
    }
});


renderTodoList();
function renderTodoList() {
    let todoListHTML = "";
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const html =
         `<div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        " class="delete-todo-button">Delete</button>`;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-due-date-input');

    const name = inputElement.value;
    const dueDate = dateInputElement.value;

    todoList.push({
        //name: name,
        //dueDate: duedate
        name,
        dueDate
    });

    inputElement.value = '';//to let user add more activities

    renderTodoList();
}
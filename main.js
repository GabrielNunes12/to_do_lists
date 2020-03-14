var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_to_do'));

function renderTodos() {
    //recuperar o valor do input
    listElement.innerHTML = ' ';
    for(todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        
        //removendo itens da lista
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href' , '#');

        //pesquisando pelos arrays para deletar
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteToDo('+ pos +')');

        var linkText = document.createTextNode('Excluir');

        //dando append
        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

//adicionar a funcionalidade de escutar o campo
function addToDo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = ' ';
    renderTodos();
    saveToStorage();
}

//adicionar ao array de to-do
buttonElement.onclick = addToDo;

//function para deletar itens
function deleteToDo(pos) { 
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

//salvando localmente a lista
function saveToStorage() {
    localStorage.setItem('list_to_do', JSON.stringify(todos));
}

renderTodos();
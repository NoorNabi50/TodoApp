const addTodo =  document.querySelector('.add');
const list = document.querySelector('.todos');
function CreateTemplate(todo)
{

    let html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;

 list.innerHTML += html;

};
addTodo.addEventListener('submit', e => {
e.preventDefault();


const todo = addTodo.add.value.trim();
// trim removes spacee

if(todo.length>0)
{
CreateTemplate(todo);


}
else {
    alert("Please Enter To do List");
}

addTodo.reset();

});


list.addEventListener('click', e =>
{

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
   

});


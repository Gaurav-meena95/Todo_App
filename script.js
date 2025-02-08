let saveList=localStorage.getItem('totdList');
todoList=saveList ?JSON.parse(todoList):[]

displayItems()
function addTodo(){
    let input_select=document.querySelector('.todo_input');
    let date_select=document.querySelector('.todo-date');
    let todoItem=input_select.value;
    let todo_date=date_select.value;
    todoList.push({item:todoItem,dueDate:todo_date});
    input_select.value='';
    date_select.value='';

    localStorage.setItem('todoList',JSON.stringify(todoList));
    displayItems()
}
function displayItems(){
    let disElement=document.querySelector('.todo-container');
    let newHtml='';
    for (i=0;i<todoList.length;i++){
        let {item,dueDate}=todoList[i];
        newHtml+=`

            <span>${item}</span>
            <span>${dueDate}</span>
            <button class='delete' onclick="todoList.splice(${i},1);displayItems(); localStorage.clear();">Delete</button>
      
        `;

    }
    disElement.innerHTML=newHtml;

}
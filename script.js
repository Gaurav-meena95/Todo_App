todoList=[
    {
        item:'knvdfn',
        dueDate:'10/23/2025'
    },
    {
        item:'knvdfn',
        dueDate:'10/23/2025'
    },
    {
        item:'knvdfn',
        dueDate:'10/23/2025'
    },
    {
        item:'knvdfn',
        dueDate:'10/23/2025'
    },
]
displayItems()
function addTodo(){
    let input_select=document.querySelector('.todo_input');
    let date_select=document.querySelector('.todo-date');
    let todoItem=input_select.value;
    let todo_date=date_select.value;
    todoList.push({item:todoItem,dueDate:todo_date});
    input_select.value='';
    date_select.value='';
    
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
            <button class='delete' onclick="todoList.splice(${i},1);displayItems();">Delete</button>
      
        `;

    }
    disElement.innerHTML=newHtml;

}
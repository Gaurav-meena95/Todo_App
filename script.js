todoList=[]
displayItems()
function addTodo(){
    let input_select=document.querySelector('.todo_input');
    let totdItem=input_select.value;
    todoList.push(totdItem);
    input_select.value='';
    
    displayItems()
}
function displayItems(){
    let disElement=document.querySelector('.todo-container');
    let newHtml='';
    for (i=0;i<todoList.length;i++){
        newHtml+=`
         <div>
            <span>${todoList[i]}</span>
            <button>Delete</button>
        </div>`

        disElement.innerHTML=newHtml;
    }

}
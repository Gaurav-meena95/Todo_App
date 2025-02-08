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
    let disElement=document.querySelector('.list-item');
    for (i=0;i<todoList.length;i++){
        disElement.innerText=disElement.innerText+todoList[i];
    }

}
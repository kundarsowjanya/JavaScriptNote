let boardData=JSON.parse(localStorage.getItem("boardData")) ||
[
    {id:1, title:"Todo", tasks:[]},
    {id:2, title:"In Progress", tasks:[]}, 
    {id:3, title:"Review", tasks:[]},   
    {id:4, title:"Done", tasks:[]},   
];


//Function to render the board;

function renderBoard(){
    const board= document.getElementById("board")
    board.innerHTML="";

    boardData.forEach((list,listIndex)=>{
           //Create the list container
           const listContainer=document.createElement("div");
           listContainer.className="list";
           listContainer.setAttribute("draggable","true");
           listContainer.dataset.index=listIndex;

           // list header with editable name

           const listHeader= document.createElement("div");
           listHeader.className="list-header";
           const listName=document.createElement("input");
           listName.value=list.title;

           listName.oninput=(e)=>{
             boardData[listIndex].title=e.target.value;
             saveToLocalStorage();
           }
         
          listHeader.appendChild(listName);
          listContainer.appendChild(listHeader);

          //Drop zone

          const dropZone= document.createElement("div");
          dropZone.className="drop-zone";

          list.tasks.map((task,taskIndex)=>{
            const taskItem=document.createElement("div");
            taskItem.className="task";
            taskItem.setAttribute("draggable","true");
            taskItem.dataset.list=listIndex;
            taskItem.dataset.task=taskIndex;

            //task name editable
            const taskName=document.createElement("span");
            taskName.textContent=task.name;
            taskName.contentEditable = true;

            //When user edits the task name
            taskName.oninput=(e)=>{
                boardData[listIndex].tasks[taskIndex].name=e.target.value;
                saveToLocalStorage();
            }

            //Delete button for task
            const deleteBtn= document.createElement("button");
            deleteBtn.textContent="X";
            deleteBtn.onclick=()=>deleteTask(listIndex,taskIndex);

            //Append task name and delete button to task item
            taskItem.appendChild(taskName); 
            taskItem.appendChild(deleteBtn);
            dropZone.appendChild(taskItem);


          })

          listContainer.appendChild(dropZone);

          //Add Task Input and Button
          const addDiv= document.createElement("div");
          addDiv.className="add-task";
          const input= document.createElement("input");
          input.placeholder="New Task....";
          input.id=`new-${listIndex}`;
          const btn=document.createElement("button");
          btn.textContent="Add";
          btn.onclick=()=>addTask(listIndex);

          addDiv.appendChild(input);
          addDiv.appendChild(btn);
          listContainer.appendChild(addDiv);
          
          //Append the list container to the board
          board.appendChild(listContainer);

    })

    //Enable drag and drop functionality
    enableDragAndDrop();


}

//Function to add a new task

function addTask(listIndex){
    const input=document.getElementById(`new-${listIndex}`);
    if(input.value.trim()!==""){
       boardData[listIndex].tasks.push({name:input.value.trim()});
       input.value="";
       saveToLocalStorage();
       renderBoard();
    }
}

//function to delete a task

function deleteTask(listIndex, taskIndex){
    boardData[listIndex].tasks.splice(taskIndex,1);
    saveToLocalStorage();
    renderBoard();
}

//function enable drag and drop

function enableDragAndDrop(){
    const tasks= document.querySelectorAll(".task");
    const lists= document.querySelectorAll(".list");

    //drag start for tasks

    tasks.forEach((task)=>{
        task.addEventListener("dragstart",(e)=>{
            //Store the source task's list and task index
            e.dataTransfer.setData("task",JSON.stringify({
                fromList: e.target.dataset.list,
                fromTask: e.target.dataset.task
            }))
        })
    })

    lists.forEach((list)=>{
         const dropZone=list.querySelector(".drop-zone");
         dropZone.addEventListener("dragover",(e)=>{
            e.preventDefault();
         })
         dropZone.addEventListener("drop",(e)=>{
            e.preventDefault();
            const data=JSON.parse(e.dataTransfer.getData("task"));
            const fromList=Number(data.fromList);
            const fromTask=Number(data.fromTask);
            const toList=Number(list.dataset.index);

            if(fromList!==toList){
                //Move the task to the new list
                const taskToMove=boardData[fromList].tasks.splice(fromTask,1)[0];
                boardData[toList].tasks.push(taskToMove);
                saveToLocalStorage();
                renderBoard();
            }
         })
    })
    
}

function saveToLocalStorage() {
  localStorage.setItem("boardData", JSON.stringify(boardData));
}


renderBoard();
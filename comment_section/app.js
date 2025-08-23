// A Single Comment entity

class Comment{
    constructor(id, author, comment, parentId=null){
         this.id=id;
         this.author=author;
         this.comment=comment;
         this.parentId=parentId;
         this.children=[];
         this.timeStamp=new Date();
    }
}

// Comment Manager to handle all comment operations

class CommentManager{
    constructor(){
       this.comments=this.loadFromStorage()||[]
    }

    // add new comment or reply

    addComment(author,comment,parentId=null){
        const newCommnet= new Comment(Date.now(),author,comment,parentId)
         if(parentId){
            // find the parent and add children
            const parent=this.findComment(this.comments,parentId)
            if(parent){
                parent.children.push(newCommnet)
            }
         }
         else{
            this.comments.push(newCommnet)
         }
        this.saveStorage();
    }

    //Edit a comment;

    editCommnet(id,editedText){
        const comment=this.findComment(this.comments,id)
        if(comment){
            comment.comment=editedText;
            this.saveStorage()
        }
    }

    //Delete a commnt

    deleteComment(id){
      this.comments=this.deleteRecursively(this.comments,id)
      this.saveStorage()

    }

    deleteRecursively(comments,id){
        return comments.filter(comment=>comment.id!==id).map(comment=>({...comment,children:this.deleteRecursively(comment.children,id)}))
    }

    findComment(comments,id){
        return comments.reduce((found,comment)=>{
            if(found) return found;
            if(comment.id===id) return comment;
            return this.findComment(comment.children,id)
        },null)
    } 

    //Save to local storage

    saveStorage(){
        localStorage.setItem('comments',JSON.stringify(this.comments))
    }

    loadFromStorage(){
        const data= localStorage.getItem('comments')
        return data? JSON.parse(data):null;
    }



}


// UI Handling

class UIHandler{
   constructor(manager){
    this.manager=manager;
    this.commentList=document.getElementById('comment-list');
    this.loadMoreBtn=document.getElementById('load-more');

    this.attachEvent();
    this.render();
   }

   // Attach event listeners
   attachEvent(){

    document.getElementById('add-comment-btn').addEventListener('click',()=>{
         const author=document.getElementById('author').value;
         const comment=document.getElementById('comment-text').value;
         if(author&& comment){
             this.manager.addComment(author,comment);
             this.render();
             // Clear input fields
             document.getElementById('author').value='';    
             document.getElementById('comment-text').value='';
         }
    })
     
    this.loadMoreBtn.addEventListener('click',()=>{
             this.render(true); //Show all comments
    })


   }

   render(showAll=false){
    this.commentList.innerHTML="";

    // Show first 4 or all comments if button clicked
    // let commentToShow= this.manager.comments.slice(0,4)   first 4 comments
    let commentToShow= this.manager.comments.slice(-4).reverse(); // latest comments
    if(showAll){
        commentToShow=this.manager.comments;

    }

     this.loadMoreBtn.classList.toggle('hidden', this.manager.comments.length<=4 ||showAll);

     commentToShow.forEach(comment=>{
         this.commentList.appendChild(this.createCommentElement(comment)); 
     })

    }

    //create comment element
    createCommentElement(comment){
        const div=document.createElement('div');
        div.className="comment";

        //comment dispay

        div.innerHTML=`
           <div class="comment-header">${comment.author}</div>
           <div class="comment-text">${comment.comment}</div>
           <div class="comment-actions">
             <button class="reply">Reply</button>
             <button class="edit">Edit</button>
             <button class="delete">Delete</button>
           </div>
        `;

        //Reply Event;

        div.querySelector('.reply').addEventListener('click',()=>{
             const author=prompt("Enter your name:");
             const replyText=prompt("Enter your reply:");
             if(author && replyText){
                 this.manager.addComment(author,replyText,comment.id);
                 this.render();
             }
        })

        //Edit Event

        div.querySelector('.edit').addEventListener('click',()=>{
            const editedText=prompt("Edit your comment:",comment.comment);
            if(editedText){
                this.manager.editCommnet(comment.id,editedText);
                this.render();
            }
        })

        //Delete Event

        div.querySelector('.delete').addEventListener('click',()=>{
            if(confirm("Are you sure you want to delete this comment?")){
                this.manager.deleteComment(comment.id);
                this.render();
            }
        })

        // Render children commnets

        if(comment.children.length>0){
            const childList=document.createElement('div');
            childList.className="child-comments";
            comment.children.forEach(childComment=>{
                childList.appendChild(this.createCommentElement(childComment));
            })

            div.appendChild(childList);
        }

        return div;
    }

  

}

  const manager= new CommentManager();
  new UIHandler(manager);




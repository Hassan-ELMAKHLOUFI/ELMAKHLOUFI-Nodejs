
   function addComment(){
    let content= document.getElementById('newContent').value;
    const createdAt=new Date().toString();
    const updatedAt=new Date().toString();
    let ArticleId= document.getElementById('idArticleComment').value;
  
    let tbody=document.getElementById('commenttable');
  while(tbody.hasChildNodes()){
    tbody.removeChild(tbody.firstChild);
  }

  let sel=document.getElementById('idComment');
while(sel.hasChildNodes()){
  sel.removeChild(sel.firstChild);
}

let seldelcomment=document.getElementById('idCommentDelete');
while(seldelcomment.hasChildNodes()){
  seldelcomment.removeChild(seldelcomment.firstChild);
}


var select = document.getElementById("idComment");
var length = select.options.length;
for (i = length-1; i >= 0; i--) {
  select.options[i] = null;
}


var select1 = document.getElementById("idCommentDelete");
var length = select1.options.length;
for (i = length-1; i >= 0; i--) {
  select1.options[i] = null;
}


data={content,createdAt,updatedAt,ArticleId};
        fetch('/comments', {
          method: 'POST',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(res => res.json())
        .then(function(data) {
         console.log(data);
         let ob = Object.keys(data.comments)
         var tab=document.getElementById('commenttable');
         var row=document.createElement("tr");
         var cell =document.createElement("th");
      
         var sizeArt =Object.keys(data.articles).length;;
      
         for(var i=0;i<sizeArt;i++){ 
         var sel = document.getElementById('idArticleComment');
        // create new option element
        var opt = document.createElement('option');
        
        // create text node to add to option element (opt)
        opt.appendChild( document.createTextNode(data.articles[i].title) );
        
        // set value property of opt
        opt.value = data.articles[i].id; 
        
        // add opt to end of select box (sel)
        sel.appendChild(opt);
        
      }
      
      
     
      
         for(var i=0;i<ob.length;i++){
        // get reference to select element
        var sel = document.getElementById('idComment');
        
        // create new option element
        var opt = document.createElement('option');
        
        // create text node to add to option element (opt)
        opt.appendChild( document.createTextNode(data.comments[i].content) );
        
        // set value property of opt
        opt.value = data.comments[i].id; 
        
        // add opt to end of select box (sel)
        sel.appendChild(opt);
        
        
        
        // get reference to select element
         sel = document.getElementById('idCommentDelete');
        
        // create new option element
         opt = document.createElement('option');
        
        // create text node to add to option element (opt)
        opt.appendChild( document.createTextNode(data.comments[i].content) );
        
        // set value property of opt
        opt.value = data.comments[i].id; 
        
        // add opt to end of select box (sel)
        sel.appendChild(opt);
        
        
        
           var row = document.createElement("tr");  
           var cell = document.createElement("th");   
           cellText=  document.createTextNode(i);
           cell.appendChild(cellText);
           cell.setAttribute("id", "comment_id");
           row.appendChild(cell);
           
        
        
           cell = document.createElement("td");
           span=  document.createElement("span");  
           cellText=  document.createTextNode(data.comments[i].content);
          span.appendChild(cellText);
           span.setAttribute("id", "content");
           cell.appendChild(span);
           row.appendChild(cell);
           
           cell = document.createElement("td");   
           cellText=  document.createTextNode(data.comments[i].ArticleId);
           span=  document.createElement("span");
           span.appendChild(cellText);
           span.setAttribute("id", "CommentArticleId");
           cell.appendChild(span);
           row.appendChild(cell);
           
           cell = document.createElement("td");   
            cellText=  document.createTextNode(data.comments[i].createdAt);
            span=  document.createElement("span");
            span.appendChild(cellText);
           span.setAttribute("id", "createdAt");
           cell.appendChild(span);
           row.appendChild(cell);
        
        
      
         
           tab.appendChild(row)
        
         }

        })
        }
function getUser(){

  document.body.style.background = "#FFFF"; 
  var nodes = document.getElementById('usersId');
nodes.style.setProperty("display", "inline", "important");

 var nodeArticle= document.getElementById('article');
 nodeArticle.style.setProperty("display", "none", "important");


var nodes1 = document.getElementById('ArticlePage');
nodes1.style.setProperty("display", "none", "important");


var nodes2 = document.getElementById('auth');
nodes2.style.setProperty("display", "none", "important");




let tbody=document.getElementById('usertable');
while(tbody.hasChildNodes()){
  tbody.removeChild(tbody.firstChild);
}

let sel=document.getElementById('idUser');
while(sel.hasChildNodes()){
  sel.removeChild(sel.firstChild);
}

     fetch('/users', {
      method: 'GET',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      
    }).then(res => res.json())
    .then(function(data) {
     console.log(data);
     let ob = Object.keys(data.users)
     var tab=document.getElementById('usertable');
     var row=document.createElement("tr");
     var cell =document.createElement("th");
     for(var i=0;i<ob.length;i++){
    // get reference to select element
    var sel = document.getElementById('idUser');
    
    // create new option element
    var opt = document.createElement('option');
    
    // create text node to add to option element (opt)
    opt.appendChild( document.createTextNode(data.users[i].username) );
    
    // set value property of opt
    opt.value = data.users[i].id; 
    
    // add opt to end of select box (sel)
    sel.appendChild(opt);
    
    
    
    // get reference to select element
     sel = document.getElementById('idUserDelete');
    
    // create new option element
     opt = document.createElement('option');
    
    // create text node to add to option element (opt)
    opt.appendChild( document.createTextNode(data.users[i].username) );
    
    // set value property of opt
    opt.value = data.users[i].id; 
    
    // add opt to end of select box (sel)
    sel.appendChild(opt);
    
    
    
       var row = document.createElement("tr");  
       var cell = document.createElement("th");   
       cellText=  document.createTextNode(i);
       cell.appendChild(cellText);
       cell.setAttribute("id", "user_id");
       row.appendChild(cell);
       
    
    
       cell = document.createElement("td");
       span=  document.createElement("span");  
       cellText=  document.createTextNode(data.users[i].username);
      span.appendChild(cellText);
       span.setAttribute("id", "username");
       cell.appendChild(span);
       row.appendChild(cell);
       
       cell = document.createElement("td");   
       cellText=  document.createTextNode(data.users[i].email);
       span=  document.createElement("span");
       span.appendChild(cellText);
       span.setAttribute("id", "email");
       cell.appendChild(span);
       row.appendChild(cell);
       
       cell = document.createElement("td");   
        cellText=  document.createTextNode(data.users[i].role);
        span=  document.createElement("span");
        span.appendChild(cellText);
       span.setAttribute("id", "role");
       cell.appendChild(span);
       row.appendChild(cell);
    
    
        cell = document.createElement("td");   
        cellText=  document.createTextNode(data.users[i].password);
        span=  document.createElement("span");
        span.appendChild(cellText);
       span.setAttribute("id", "role");
       cell.appendChild(span);
       row.appendChild(cell);
    
    
     
       tab.appendChild(row)
    
     }

     
    })
    }


function updateComment(){
  let tbody=document.getElementById('commenttable');
  while(tbody.hasChildNodes()){
    tbody.removeChild(tbody.firstChild);
  }
  let id=document.getElementById('idComment').value;;
  let content= document.getElementById('content').value;





  var select = document.getElementById("idComment");
  var length = select.options.length;
  for (i = length-1; i >= 0; i--) {
    select.options[i] = null;
  }
  
  
  var select1 = document.getElementById("idCommentDelete");
 length = select1.options.length;
  for (i = length-1; i >= 0; i--) {
    select1.options[i] = null;
  }

data={id,content};
 fetch('/comments', {
  method: 'PUT',
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}).then(res => res.json())
.then(function(data) {
 console.log(data);
 let ob = Object.keys(data.comments)
 var tab=document.getElementById('commenttable');
 var row=document.createElement("tr");
 var cell =document.createElement("th");

 var sizeArt =Object.keys(data.articles).length;;

 for(var i=0;i<sizeArt;i++){ 
 var sel = document.getElementById('idArticleComment');
// create new option element
var opt = document.createElement('option');

// create text node to add to option element (opt)
opt.appendChild( document.createTextNode(data.articles[i].title) );

// set value property of opt
opt.value = data.articles[i].id; 

// add opt to end of select box (sel)
sel.appendChild(opt);

}




 for(var i=0;i<ob.length;i++){
// get reference to select element
var sel = document.getElementById('idComment');

// create new option element
var opt = document.createElement('option');

// create text node to add to option element (opt)
opt.appendChild( document.createTextNode(data.comments[i].content) );

// set value property of opt
opt.value = data.comments[i].id; 

// add opt to end of select box (sel)
sel.appendChild(opt);



// get reference to select element
 sel = document.getElementById('idCommentDelete');

// create new option element
 opt = document.createElement('option');

// create text node to add to option element (opt)
opt.appendChild( document.createTextNode(data.comments[i].content) );

// set value property of opt
opt.value = data.comments[i].id; 

// add opt to end of select box (sel)
sel.appendChild(opt);



   var row = document.createElement("tr");  
   var cell = document.createElement("th");   
   cellText=  document.createTextNode(i);
   cell.appendChild(cellText);
   cell.setAttribute("id", "comment_id");
   row.appendChild(cell);
   


   cell = document.createElement("td");
   span=  document.createElement("span");  
   cellText=  document.createTextNode(data.comments[i].content);
  span.appendChild(cellText);
   span.setAttribute("id", "content");
   cell.appendChild(span);
   row.appendChild(cell);
   
   cell = document.createElement("td");   
   cellText=  document.createTextNode(data.comments[i].ArticleId);
   span=  document.createElement("span");
   span.appendChild(cellText);
   span.setAttribute("id", "CommentArticleId");
   cell.appendChild(span);
   row.appendChild(cell);
   
   cell = document.createElement("td");   
    cellText=  document.createTextNode(data.comments[i].createdAt);
    span=  document.createElement("span");
    span.appendChild(cellText);
   span.setAttribute("id", "createdAt");
   cell.appendChild(span);
   row.appendChild(cell);



 
   tab.appendChild(row)

 }

})
}









function deleteComment(){
  let tbody=document.getElementById('commenttable');
  while(tbody.hasChildNodes()){
    tbody.removeChild(tbody.firstChild);
  }
  let id=document.getElementById('idComment').value;



  var select = document.getElementById("idComment");
  var length = select.options.length;
  for (i = length-1; i >= 0; i--) {
    select.options[i] = null;
  }
  
  
  var select1 = document.getElementById("idCommentDelete");
  var length = select1.options.length;
  for (i = length-1; i >= 0; i--) {
    select1.options[i] = null;
  }
  
  

data={id};
 fetch('/comments', {
  method: 'DELETE',
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}).then(res => res.json())
.then(function(data) {
 console.log(data);
 let ob = Object.keys(data.comments)
 var tab=document.getElementById('commenttable');
 var row=document.createElement("tr");
 var cell =document.createElement("th");

 var sizeArt =Object.keys(data.articles).length;;

 for(var i=0;i<sizeArt;i++){ 
 var sel = document.getElementById('idArticleComment');
// create new option element
var opt = document.createElement('option');

// create text node to add to option element (opt)
opt.appendChild( document.createTextNode(data.articles[i].title) );

// set value property of opt
opt.value = data.articles[i].id; 

// add opt to end of select box (sel)
sel.appendChild(opt);

}




 for(var i=0;i<ob.length;i++){
// get reference to select element
var sel = document.getElementById('idComment');

// create new option element
var opt = document.createElement('option');

// create text node to add to option element (opt)
opt.appendChild( document.createTextNode(data.comments[i].content) );

// set value property of opt
opt.value = data.comments[i].id; 

// add opt to end of select box (sel)
sel.appendChild(opt);



// get reference to select element
 sel = document.getElementById('idCommentDelete');

// create new option element
 opt = document.createElement('option');

// create text node to add to option element (opt)
opt.appendChild( document.createTextNode(data.comments[i].content) );

// set value property of opt
opt.value = data.comments[i].id; 

// add opt to end of select box (sel)
sel.appendChild(opt);



   var row = document.createElement("tr");  
   var cell = document.createElement("th");   
   cellText=  document.createTextNode(i);
   cell.appendChild(cellText);
   cell.setAttribute("id", "comment_id");
   row.appendChild(cell);
   


   cell = document.createElement("td");
   span=  document.createElement("span");  
   cellText=  document.createTextNode(data.comments[i].content);
  span.appendChild(cellText);
   span.setAttribute("id", "content");
   cell.appendChild(span);
   row.appendChild(cell);
   
   cell = document.createElement("td");   
   cellText=  document.createTextNode(data.comments[i].ArticleId);
   span=  document.createElement("span");
   span.appendChild(cellText);
   span.setAttribute("id", "CommentArticleId");
   cell.appendChild(span);
   row.appendChild(cell);
   
   cell = document.createElement("td");   
    cellText=  document.createTextNode(data.comments[i].createdAt);
    span=  document.createElement("span");
    span.appendChild(cellText);
   span.setAttribute("id", "createdAt");
   cell.appendChild(span);
   row.appendChild(cell);



 
   tab.appendChild(row)

 }

})
}
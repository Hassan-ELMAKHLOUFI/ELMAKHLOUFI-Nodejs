
   function addUser(){

    let tbody=document.getElementById('usertable');
  while(tbody.hasChildNodes()){
    tbody.removeChild(tbody.firstChild);
  }

  let sel=document.getElementById('idUser');
while(sel.hasChildNodes()){
  sel.removeChild(sel.firstChild);
}

let seldeluser=document.getElementById('idUserDelete');
while(seldeluser.hasChildNodes()){
  seldeluser.removeChild(seldeluser.firstChild);
}


  let username= document.getElementById('newUsername').value;
  let email= document.getElementById('newEmail').value;
  let role= document.getElementById('newRole').value;
  let password= document.getElementById('newPassword').value;

data={username,email,role,password};
        fetch('/users', {
          method: 'POST',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
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
        
           var nodeComment = document.getElementById('commentsId');
           nodeComment.style.setProperty("display", "none", "important");
         }
    
         
        })
        }
function getUser(){



  document.body.style.background = "#FFFF"; 




  
  var nodes1 = document.getElementById('ArticlePage');
  nodes1.style.setProperty("display", "none", "important");



  var nodeArticle = document.getElementById('article');
  nodeArticle.style.setProperty("display", "none", "important");
  
  var nodes = document.getElementById('usersId');
  nodes.style.setProperty("display", "inline", "important");

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
    
       var nodeComment = document.getElementById('commentsId');
       nodeComment.style.setProperty("display", "none", "important");
     }

     
    })
    }


function updateUser(){
  let tbody=document.getElementById('usertable');
  while(tbody.hasChildNodes()){
    tbody.removeChild(tbody.firstChild);
  }



  let id=document.getElementById('idUser').value;;
  let username= document.getElementById('username').value;
  let email= document.getElementById('email').value;
  let role= document.getElementById('role').value;
  let password= document.getElementById('password').value;

  var select = document.getElementById("idUser");
  var length = select.options.length;
  for (i = length-1; i >= 0; i--) {
    select.options[i] = null;
  }



  var select1 = document.getElementById("idUserDelete");
  var length = select1.options.length;
  for (i = length-1; i >= 0; i--) {
    select1.options[i] = null;
  }
data={id,username,email,role,password};
 fetch('/users', {
  method: 'PUT',
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
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









function deleteUser(){
  let tbody=document.getElementById('usertable');
  while(tbody.hasChildNodes()){
    tbody.removeChild(tbody.firstChild);
  }

  let id=  document.getElementById('idUserDelete').value;;
  var select = document.getElementById("idUserDelete");
  var length = select.options.length;
  for (i = length-1; i >= 0; i--) {
    select.options[i] = null;
  }


  var select1 = document.getElementById("idUser");
  var length = select1.options.length;
  for (i = length-1; i >= 0; i--) {
    select1.options[i] = null;
  }

data={id,username,email,role,password};
 fetch('/users', {
  method: 'DELETE',
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
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
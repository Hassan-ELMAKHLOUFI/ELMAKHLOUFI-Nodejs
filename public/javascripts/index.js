
  function addUser(){

    let tbody=document.getElementById('usertable');
  while(tbody.hasChildNodes()){
    tbody.removeChild(tbody.firstChild);
  }
  let username= document.getElementById('newUsername').value;
  let email= document.getElementById('newEmail').value;
  let role= document.getElementById('newRole').value;
  let password= document.getElementById('newPassword').value;

data={username,email,role,password};
        (async () => {
      const rawResponse = await fetch('/users', {
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
            var row = document.createElement("tr");  
            var cell = document.createElement("th");   
            cellText=  document.createTextNode(i);
            cell.appendChild(cellText);
            row.appendChild(cell);
            
        
            cell = document.createElement("td");   
            cellText=  document.createTextNode(data.users[i].id);
            cell.appendChild(cellText);
            row.appendChild(cell);
        
            cell = document.createElement("td");   
            cellText=  document.createTextNode(data.users[i].username);
            cell.appendChild(cellText);
            row.appendChild(cell);
            
            cell = document.createElement("td");   
            cellText=  document.createTextNode(data.users[i].email);
            cell.appendChild(cellText);
            row.appendChild(cell);
            
            cell = document.createElement("td");   
           var h= "<a href="+"#editEmployeeModal"+" data-filiere_id="+data.users[i].id+" class="+"edit" +" data-toggle="+"modal"+"><i class="+"material-icons"+" data-toggle="+"tooltip"+" title="+"Edit"+">&#xE254;</i></a>";
            cell.innerHTML=h;
          
            row.appendChild(cell);
            tab.appendChild(row)
        
          }
        
          
        })
      })();
  }

function getUser(){

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
          var row = document.createElement("tr");  
          var cell = document.createElement("th");   
          cellText=  document.createTextNode(i);
          cell.appendChild(cellText);
          row.appendChild(cell);
          

          cell = document.createElement("td");   
          cellText=  document.createTextNode(data.users[i].id);
          cell.appendChild(cellText);
          row.appendChild(cell);

          cell = document.createElement("td");   
          cellText=  document.createTextNode(data.users[i].username);
          cell.appendChild(cellText);
          row.appendChild(cell);
          
          cell = document.createElement("td");   
          cellText=  document.createTextNode(data.users[i].email);
          cell.appendChild(cellText);
          row.appendChild(cell);
          
          cell = document.createElement("td");   
         var h= "<a href="+"#editEmployeeModal"+" data-filiere_id="+data.users[i].id+" class="+"edit" +" data-toggle="+"modal"+"><i class="+"material-icons"+" data-toggle="+"tooltip"+" title="+"Edit"+">&#xE254;</i></a>";
          cell.innerHTML=h;
        
          row.appendChild(cell);
          tab.appendChild(row)

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
    var row = document.createElement("tr");  
    var cell = document.createElement("th");   
    cellText=  document.createTextNode(i);
    cell.appendChild(cellText);
    row.appendChild(cell);
    

    cell = document.createElement("td");   
    cellText=  document.createTextNode(data.users[i].id);
    cell.appendChild(cellText);
    row.appendChild(cell);

    cell = document.createElement("td");   
    cellText=  document.createTextNode(data.users[i].username);
    cell.appendChild(cellText);
    row.appendChild(cell);
    
    cell = document.createElement("td");   
    cellText=  document.createTextNode(data.users[i].email);
    cell.appendChild(cellText);
    row.appendChild(cell);
    
    cell = document.createElement("td");   
   var h= "<a href="+"#editEmployeeModal"+" data-filiere_id="+data.users[i].id+" class="+"edit" +" data-toggle="+"modal"+"><i class="+"material-icons"+" data-toggle="+"tooltip"+" title="+"Edit"+">&#xE254;</i></a>";
    cell.innerHTML=h;
  
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
    var row = document.createElement("tr");  
    var cell = document.createElement("th");   
    cellText=  document.createTextNode(i);
    cell.appendChild(cellText);
    row.appendChild(cell);
    

    cell = document.createElement("td");   
    cellText=  document.createTextNode(data.users[i].id);
    cell.appendChild(cellText);
    row.appendChild(cell);

    cell = document.createElement("td");   
    cellText=  document.createTextNode(data.users[i].username);
    cell.appendChild(cellText);
    row.appendChild(cell);
    
    cell = document.createElement("td");   
    cellText=  document.createTextNode(data.users[i].email);
    cell.appendChild(cellText);
    row.appendChild(cell);
    
    cell = document.createElement("td");   
   var h= "<a href="+"#editEmployeeModal"+" data-filiere_id="+data.users[i].id+" class="+"edit" +" data-toggle="+"modal"+"><i class="+"material-icons"+" data-toggle="+"tooltip"+" title="+"Edit"+">&#xE254;</i></a>";
    cell.innerHTML=h;
  
    row.appendChild(cell);
    tab.appendChild(row)

  }

  
})
   
}

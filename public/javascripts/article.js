function getArticles(){
  document.body.style.background = "#E9967A";  
  
  

 var nodes = document.getElementById('usersId');
nodes.style.setProperty("display", "none", "important");

var nodes1 = document.getElementById('ArticlePage');
nodes1.style.setProperty("display", "none", "important");

var nodeArticle = document.getElementById('article');
nodeArticle.style.setProperty("display", "inline", "important");

var nodes2 = document.getElementById('auth');
nodes2.style.setProperty("display", "none", "important");

    num =0;
    let tbody=document.getElementById('articles');
    while(tbody.hasChildNodes()){
      tbody.removeChild(tbody.firstChild);
    }
    fetch('/articles', {
     method: 'GET',
     headers:{
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     
   }).then(res => res.json())
   .then(function(data) {
   console.log(data);
   let ob = Object.keys(data.articles)
   var article=document.getElementById('articles');

   for(var i=0;i<ob.length;i++){
     var div1=document.createElement("div");
         div1.classList.add('col-md-4');
         article.appendChild(div1);

     var div2=document.createElement("div");
         div2.classList.add('card');
         div2.style.width="18 rem";
         div2.style.margin="20px";
         div1.appendChild(div2); 

     var img=document.createElement("img");
     var loremImg=+ data.articles[i].id+ +200;
       img.setAttribute("src", "http://lorempixel.com/400/"+loremImg);
       img.style.height="180px";
       img.style.width="100 px !important";
       img.classList.add('card-img-top');
       div2.appendChild(img); 
   
       var div3=document.createElement("div");
         div3.classList.add('card-body');
         div2.appendChild(div3);

     var h5=document.createElement("h5");
   
     h5.classList.add('card-title');
     var text=  document.createTextNode(data.articles[i].title);
     h5.appendChild(text);
     div3.appendChild(h5); 
     
     


   var p=document.createElement("p");
   
   p.classList.add('card-text');
   text=  document.createTextNode(data.articles[i].content.substr(0,80)+".....");
   p.appendChild(text);
   div3.appendChild(p);

   var a=document.createElement("button");
   
   a.classList.add('btn');
   a.classList.add('btn-primary');
   text=  document.createTextNode("learn more");
  
   a.appendChild(text);
  
   //a.onclick = getArticleDetails(1);
   a.setAttribute('onclick','getArticleDetails('+data.articles[i].id+')');

   div3.appendChild(a);

   }
   numeArticle=data.num;
   
   })
   
   }
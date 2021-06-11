var { Article } = require('./models')
var faker = require('faker');
async function update (){
   for(var i=1;i<=121;i++){ 
   

articleData={title:faker.name.lastName(),
               content:faker.lorem.paragraph()};

    await Article.update(articleData, {
          
          where: {
               id: i
           }
       })

   }

}
update();
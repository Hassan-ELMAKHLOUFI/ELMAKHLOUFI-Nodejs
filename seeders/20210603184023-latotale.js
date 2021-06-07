'use strict';
const user = require('../repositories/users');
var faker = require('faker');

async function test(){

}
test();
module.exports = {

  up: async (queryInterface, Sequelize) => {
for (var i=0;i<20;i++){ 
      await queryInterface.bulkInsert('users', [{
       username: faker.name.lastName(),
       email :faker.internet.email(),
       role: "admin",
       password :faker.internet.password(),
       createdAt :faker.date.between('2000-01-01', '2021-01-01'),
       updatedAt: faker.date.recent()


      }], {});
    }

var Art=0;

 for (var i=1;i<21;i++){ 
      
      var us=await user.findUser(i);
      var s = us.createdAt;
      var ran =2+ Math.random()*8;
      Art+=ran;
  for(var j=0;j<ran;j++){


      await queryInterface.bulkInsert('Articles', [{
        title: faker.name.lastName(),
        content :faker.internet.email(),
        UserId: i,
       createdAt :faker.date.between(s, '2021-01-01'),
       updatedAt: faker.date.recent()


      }], {});
   
    }
}


for(var i=0;i<10;i++){
       await queryInterface.bulkInsert('tags', [{
        name: faker.name.findName().concat(faker.name.findName().concat(faker.name.findName())),
        createdAt:faker.date.recent(),
        updatedAt:faker.date.recent()
      
       }], {});
      }


 for (var i=1;i<118;i++){ 
      

      var ran =2+Math.random()*4;
  for(var j=0;j<ran;j++){

    
      await queryInterface.bulkInsert('ArticleTags', [{
       
      
       TagId: j+2,
       ArticleId: i+1,
       createdAt :faker.date.recent(),
       updatedAt: faker.date.recent()


      }], {});
   
    }
}

 for (var i=1;i<100;i++){ 
      

      var ran =Math.random()*10;
  for(var j=0;j<ran;j++){

    
      await queryInterface.bulkInsert('Comments', [{
       
       
        
       content : faker.name.findName(),
       createdAt :faker.date.recent(),
       updatedAt: faker.date.recent(),
       ArticleId: i

      }], {});
   
    }
}

    
   },
   
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }


};

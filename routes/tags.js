const express =require('express')
const router = express.Router()
//var Users = require('../repositories/users');

var { tag } = require('../models')
	


		router.get('/',async function(req, res,next){

			t = await tag.findAndCountAll({
				offset: 0,
				limit :9
			});
			res.send({tags:t.rows,num:1});
		});

		router.get('/page/:num',async function(req, res,next){
				t = await tag.findAndCountAll({
					offset: req.params.num*9,
					limit :9
				});

				
				res.send({tags:t.rows,num:req.params.num});
		});
		router.post('/',async function(req, res,next){
			console.log(req.body);
			// verification de data
		var createdTags = await tag.addTag(req.body);
		t = await comment.findAndCountAll({
			offset: 0,
			limit :10
		});
		res.send({tags:t.rows,num:1});

		});
		router.put('/',async function(req, res,next) {
			const data = {
			  name : req.body.name,

			}
		
			await tag.updateTag(req.body.id,data) 
			t = await tag.findAndCountAll({
				offset: 0,
				limit :10
			});
			res.send({tags:comm.rows,num:1});
	
		});
		router.delete('/',async function (req,res,next){
            await tag.deleteTag(req.body.id)
            t = await tag.findAndCountAll({
                offset: 0,
                limit :10
            });
            res.send({tags:t.rows,num:1});

		});
module.exports=router;
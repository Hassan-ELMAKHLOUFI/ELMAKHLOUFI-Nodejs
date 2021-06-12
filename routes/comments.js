const express =require('express')
const router = express.Router()
//var Users = require('../repositories/users');

var { comment } = require('../models')
	


		router.get('/',async function(req, res,next){

			comm = await comment.findAndCountAll({
				offset: 0,
				limit :9
			});
			res.send({comments:comm.rows,num:1});
		});

		router.get('/page/:num',async function(req, res,next){
				comm = await comment.findAndCountAll({
					offset: req.params.num*9,
					limit :9
				});

				
				res.send({comments:comm.rows,num:req.params.num});
		});
		router.post('/',async function(req, res,next){
			console.log(req.body);
			// verification de data
		var createdComment = await Users.addComment(req.body);
		comm = await comment.findAndCountAll({
			offset: 0,
			limit :10
		});
		res.send({comments:comm.rows,num:1});

		});
		router.put('/',async function(req, res,next) {
			const data = {
			  content : req.body.content,

			}
		
			await comment.updateComment(req.body.id,data) 
			comm = await User.findAndCountAll({
				offset: 0,
				limit :10
			});
			res.send({comments:comm.rows,num:1});
	
		});
		router.delete('/',async function (req,res,next){
            await comment.deleteComment(req.body.id)
            comm = await comment.findAndCountAll({
                offset: 0,
                limit :10
            });
            res.send({comments:comm.rows,num:1});

		});
module.exports=router;
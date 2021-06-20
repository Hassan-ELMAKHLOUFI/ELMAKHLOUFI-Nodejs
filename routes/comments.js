const express =require('express')
const router = express.Router()
//var Users = require('../repositories/users');

var { Comment } = require('../models');
var {Article} = require ('../models');
var Comments = require ('../repositories/comments');
const jwt = require('jsonwebtoken'); 	


		router.get('/',async function(req, res,next){

			comm = await comment.findAndCountAll({
				offset: 0,
				limit :9
			});
			res.send({comments:comm.rows,num:1});
		});

		router.get('/page/:num', verifyToken, function(req,res,next){
			
				jwt.verify(req.cookies.auth, 'secretkey',async function (err, authData) {
				
					if(err || authData.user.role!="admin") {
					  res.sendStatus(403);
					  
					} else {

				comm = await Comment.findAndCountAll({
					offset: req.params.num*9,
					limit :9
				});
				art = await Article.findAll(); 

				
				res.send({comments:comm.rows,num:req.params.num,articles:art});
			}
		});
	  });
		router.post('/',async function(req, res,next){
			console.log(req.body);
			// verification de data
		var createdComment = await Comments.addComments(req.body);
		comm = await Comment.findAndCountAll({
			offset: 0,
			limit :10
		});


		art = await Article.findAll(); 
		res.send({comments:comm.rows,num:1,articles:art});

		});
		router.put('/',async function(req, res,next) {
			const data = {
			  content : req.body.content}
		
			await Comments.updateComment(req.body.id,data) ;
			comm = await Comment.findAndCountAll({
				offset: 0,
				limit :10
			});
			art = await Article.findAll(); 
			res.send({comments:comm.rows,num:1,articles:art});
	
		});
		router.delete('/',async function (req,res,next){
            await Comments.deleteComment(req.body.id)
            comm = await Comment.findAndCountAll({
                offset: 0,
                limit :10
            });
			art = await Article.findAll(); 
			res.send({comments:comm.rows,num:1,articles:art});

		});



		function verifyToken(req, res, next) {
			// Get auth header value
			const bearerHeader = req.cookies.auth;
			// Check if bearer is undefined
			if(typeof bearerHeader !== 'undefined') {
			  // Split at the space
			  const bearer = bearerHeader.split(' ');
			  // Get token from array
			  const bearerToken = bearer[1];
			  // Set the token
			  req.token = bearerToken;
			  // Next middleware
			  next();
			} else {
			  // Forbidden
			  res.sendStatus(403);
			}
		  
		  }
module.exports=router;
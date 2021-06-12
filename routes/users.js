const express =require('express')
const router = express.Router()
var Users = require('../repositories/users');
const jwt = require('jsonwebtoken');

var { User } = require('../models')
var { Article } = require('../models')
		// router.get('/',async function(req, res,next){
		// 	user = await User.findAndCountAll({
		// 		offset: 0,
		// 		limit :7
		// 	});
		// 	res.send({users:user.rows,num:0});
		// 	//res.render('index',user);
			
		// });


		router.get('/', verifyToken, function(req, res) {  
			console.log("tte");
			jwt.verify(req.cookies.auth, 'secretkey',async function (err, authData) {
				
			  if(err || authData.user.role!="admin") {
				res.sendStatus(403);
				
			  } else {
				 
				user = await User.findAndCountAll({
				offset: 0,
				limit :10
			});
			res.send({users:user.rows,num:0});
			
			
			  }
			});
		  });







		router.get('/page/:num',async function(req, res,next){
			user = await User.findAndCountAll({
				offset: req.params.num*10,
				limit :10
			});

				var num=req.params.num
			
			res.send({users:user.rows,num:req.params.num});
			//res.render('index',user);
			
		});
		router.post('/',async function(req, res,next){
			console.log(req.body);
			// verification de data
		var createdUser = await Users.addUser(req.body);
		user = await User.findAndCountAll({
			offset: 0,
			limit :10
		});
		res.send({users:user.rows,num:1});
     	// res.render('index',user);
        

		});





		router.put('/',async function(req, res,next) {
			const datareq = req.body;
			const data = {
			  username : req.body.username,
			  email : req.body.email,
			  password : req.body.password,
			  role : req.body.role
			}
		
			await Users.updateUser(req.body.id,data) 
			user = await User.findAndCountAll({
				offset: 0,
				limit :10
			});
			res.send({users:user.rows,num:1});
		});
		router.delete('/',async function (req,res,next){
		
				await Users.deleteUser(req.body.id)
				user = await User.findAndCountAll({
					offset: 0,
					limit :10
				});
				res.send({users:user.rows,num:1});

		});



		  




		  
		  router.post('/api/login',async function(req, res){
			// Mock user

			const user = await User.findOne({ where: { username: req.body.username,password :req.body.password}});

			if(user == undefined){
				console.log ("user NOT found");
				res.sendStatus(403);
				res.json({status:403});
			}else {
				jwt.sign({user}, 'secretkey',  async function(err, token)  {
					res.cookie('auth',token);
					article = await Article.findAndCountAll({
						offset: 0,
						limit :9
					});
					res.send({articles:article.rows,num:1});
			 
				 });
			}
		
		  });
		  
		  // FORMAT OF TOKEN
		  // Authorization: Bearer <access_token>
		  
		  // Verify Token
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
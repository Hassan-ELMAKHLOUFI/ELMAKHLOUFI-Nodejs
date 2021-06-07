const express =require('express')
const router = express.Router()
var Users = require('../repositories/users');

var { User } = require('../models')
	
		router.get('/',async function(req, res,next){
			user = await User.findAndCountAll({
				offset: 0,
				limit :7
			});
			res.send({users:user.rows,num:1});
			//res.render('index',user);
			
		});

		router.get('/page/:num',async function(req, res,next){
			user = await User.findAndCountAll({
				offset: req.params.num*7,
				limit :7
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
			limit :7
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
				limit :7
			});
			res.send({users:user.rows,num:1});
		});
		router.delete('/',async function (req,res,next){
		
				await Users.deleteUser(req.body.id)
				user = await User.findAndCountAll({
					offset: 0,
					limit :7
				});
				res.send({users:user.rows,num:1});

		});
module.exports=router;
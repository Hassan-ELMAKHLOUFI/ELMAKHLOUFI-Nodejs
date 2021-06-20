const express =require('express')
const router = express.Router()
//var Users = require('../repositories/users');

var { Article } = require('../models')
var { Comment } = require('../models')	


		router.get('/',async function(req, res,next){

			article = await Article.findAndCountAll({
				offset: 0,
				limit :9
			});
			res.send({articles:article.rows,num:1});
		});

		router.get('/:id',async function(req, res,next){
			
			art= await Article.findOne({ where: { id: req.params.id } })
			comm=Comment.findAll({
				where: {
					ArticleId:req.params.id
				}
			});
			console.log(comm);
			res.send({article:art,comments:comm});
		});

		router.get('/page/:num',async function(req, res,next){
				article = await Article.findAndCountAll({
					offset: req.params.num*9,
					limit :9
				});

				
				res.send({articles:article.rows,num:req.params.num});
		});
		router.post('/',async function(req, res,next){


		});
		router.put('/',async function(req, res,next) {
	
		});
		router.delete('/',async function (req,res,next){
		

		});
module.exports=router;

var { Article } = require('../models')

// exportation
module.exports = {
	getAllArticles: function(){
		return Article.findAll();
	},
	getArticles: function(offset=0, limit=10){
		return Article.findAll({offset: offset, limit: limit});
	},

	
	getArticles: function(id){
		return Article.findOne({
			where: {
				id: id
			}
		})
	},
	
	addArticle: async function(articleDate){
		// TODO: before adding the user, check wheter an user with the same email already exists
		// if yes so refuse the request and send error message
		// otherwise add the user
		var article = await Article.create(articleDate)
		return article
	},
	updateArticle: async function(id, userData){
		return await Article.update(articleData, {
			where: {
				id: id
			}
		})
	},
	findArticle: async function(id){
		return await Article.findOne({ where: { id: id } })},
		
	deleteArticle: async function(id){
		return await Article.destroy({
			where: {
				id: id
			}
		})
	},

}
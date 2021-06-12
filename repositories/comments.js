
var { comment } = require('../models')

// exportation
module.exports = {
	getAllComments: function(){
		return tag.findAll();
	},
	getComments: function(offset=0, limit=10){
		return comment.findAll({offset: offset, limit: limit});
	},

	
	getComments: function(id){
		return comment.findOne({
			where: {
				id: id
			}
		})
	},
	
	addComments: async function(tagDate){
		// TODO: before adding the user, check wheter an user with the same email already exists
		// if yes so refuse the request and send error message
		// otherwise add the user
		var comments = await comment.create(tagDate)
		return comments
	},
	updateComment: async function(id, tagData){
		return await comment.update(commentData, {
			where: {
				id: id
			}
		})
	},
	findComment: async function(id){
		return await comment.findOne({ where: { id: id } })},
		
	deleteComment: async function(id){
		return await comment.destroy({
			where: {
				id: id
			}
		})
	},

}
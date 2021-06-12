
var { tag } = require('../models')

// exportation
module.exports = {
	getAllTags: function(){
		return tag.findAll();
	},
	getTags: function(offset=0, limit=10){
		return tag.findAll({offset: offset, limit: limit});
	},

	
	getTags: function(id){
		return tags.findOne({
			where: {
				id: id
			}
		})
	},
	
	addTag: async function(tagDate){
		// TODO: before adding the user, check wheter an user with the same email already exists
		// if yes so refuse the request and send error message
		// otherwise add the user
		var tag = await tag.create(tagDate)
		return tag
	},
	updateTag: async function(id, tagData){
		return await tag.update(tagData, {
			where: {
				id: id
			}
		})
	},
	findTag: async function(id){
		return await tag.findOne({ where: { id: id } })},
		
	deleteTag: async function(id){
		return await tag.destroy({
			where: {
				id: id
			}
		})
	},

}
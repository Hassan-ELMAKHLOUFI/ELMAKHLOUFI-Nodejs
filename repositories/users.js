
var { User } = require('../models')

// exportation
module.exports = {
	getAllUsers: function(){
		return User.findAll();
	},
	getUsers: function(offset=0, limit=10){
		return User.findAll({offset: offset, limit: limit});
	},
	getUserByRole: function(role){
		return User.findAll({
			where: {
				role: role
			}
		});
	},
	getAdmins: function(){
		return this.getUserByRole('admin')
	},
	getAuthors: function() {
		return this.getUserByRole('author')
	},
	getGuests: function(){
		return this.getUserByRole('guest')
	},
	getUser: function(id){
		return User.findOne({
			where: {
				id: id
			}
		})
	},
	getUserByEmail: function(email){
		return User.findOne({
			where: {
				email: email
			}
		});
	},
	addUser: async function(userDate){
		// TODO: before adding the user, check wheter an user with the same email already exists
		// if yes so refuse the request and send error message
		// otherwise add the user
		var user = await User.create(userDate)
		return user
	},
	updateUser: async function(id, userData){
		return await User.update(userData, {
			where: {
				id: id
			}
		})
	},
	deleteUser: async function(id){
		return await User.destroy({
			where: {
				id: id
			}
		})
	},

}
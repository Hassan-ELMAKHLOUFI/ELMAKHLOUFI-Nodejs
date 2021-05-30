var User = require('../repositories/users')
module.exports = function(router){
	router.route('/users')
		.get(async function(req, res){
			user = await User.getAllUsers();
			//res.send(user);
      res.render('index',user);
		})
		.post(async function(req, res){
			console.log(req.body);
			// verification de data
			var createdUser = await User.addUser(req.body);

			res.send('User added');

		})
}
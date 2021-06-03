var User = require('../repositories/users')

module.exports = function(router){
	router.route('/users')
		.get(async function(req, res){
			user = await User.getAllUsers();
			res.send(user);
			//res.render('index',user);
			
		})
		.post(async function(req, res){
			console.log(req.body);
			// verification de data
		var createdUser = await User.addUser(req.body);
		user = await User.getAllUsers();
		res.send(user);
     	// res.render('index',user);
        

		}).put(async function(req, res) {
			const datareq = req.body;
			const data = {
			  username : req.body.username,
			  email : req.body.email,
			  password : req.body.password,
			  role : req.body.role
			}
		
			await User.updateUser(req.body.id,data) 
			user = await User.getAllUsers();
			res.send(user);
		}).delete(async function (req,res){
		
				await User.deleteUser(req.body.id)
				user = await User.getAllUsers();
				res.send(user);

		})
}
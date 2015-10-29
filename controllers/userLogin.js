// Include our Model
var Profile = require('../models/user')
console.log(Profile)

// Create a NEW User
var createUser = function(req, res){
	// Data from a POST request lives in req.body
	console.log("this is werking!!")
	req.body.profilePic = req.body.profilePic || ''
	req.body.ratings = req.body.ratings || ''
	req.body.reviews = req.body.reviews || ''
	req.body.story = req.body.story || ''


	var newProfile = new Profile({

		username			: req.body.username,
		email				: req.body.email,
		password			: req.body.password,
		zipcode				: req.body.zipcode,
		profilePic			: req.body.profilePic,
		ratings				: req.body.ratings,
		reviews				: req.body.reviews.split(', '),
		story				: req.body.reviews.split(', '),
	})

	newProfile.save( function(err, doc){
		res.send(doc)
	})

}

var editUser = function(req, res){
	Profile.update({_id : req.params.id}, req.body, function(err){

		res.send('this works!')

	});

}

module.exports = {
	createUser : createUser,
	editUser   : editUser
	
}


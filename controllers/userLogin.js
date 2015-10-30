// Include our Model
var Profile = require('../models/user')

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
		story				: req.body.story.split(', '),
	})

	newProfile.save( function(err, doc){
		console.log(err)
		console.log(doc)
		req.login(doc, function(err){
			console.log(err)
		})
		res.send(doc)
	})

}

var updateUser = function(req, res){
	console.log('req.body', req.body);
	console.log('reqUserID', req.body._id);
	Profile.findOne({_id : req.body._id}, function(err, result){
		console.log('result', result);
		var userId = req.body._id;
		Profile.findByIdAndUpdate(userId, req.body, function(err, updatedUser){
			console.log('updatedUser working', updatedUser);
			res.send(updatedUser);

		})

	})

	}
	// Profile.findOne


// var editUser = function(req, res){
// 	Profile.update({_id : req.params.id}, req.body, function(err){

// 		res.send('this works!')

// 	});

// }

// var editUser = function(req, res){
// 	Profile.update({_id : req.params.id}, {$set: {profilePic : req.body.profilePic}}, function(err){

// 		if(err){
// 			res.send(err)
// 		}
// 		else
// 			res.send('success!')
// 	});

// }


module.exports = {
	createUser : createUser,
	updateUser : updateUser	
}


var mongoose = require('mongoose')

var userSchema = mongoose.Schema({

	username    : {type : String},
	email   	: {type : String},
	password 	: {type : String},
	zipcode    	: {type : Number},
	profilePic	: {type : String}, //is this typeless? Url? etc. 
	ratings		: {type : Array},
	reviews		: {type : [String]},
	story		: {type: [String]},

})

module.exports = mongoose.model('Profile', userSchema)


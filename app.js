// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var multer  = require('multer');
var upload = multer({ dest: './public/images/avatars/' });

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pets')

// Create Express App Object \\
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
































 
// Routes \\
var User = require('./controllers/userLogin')

app.get('/', function(req, res){
	// res.send('Hello')
  res.sendFile('/html/landingPage.html', {root : './public'})
});

// app.get('/profiles', function(req, res){
//   res.sendFile('/html/index.html', {root : './public'})
// });
// app.get('/animals', function(req, res){
//   res.sendFile('/html/index.html', {root : './public'})
// });

app.post('/api/profile', User.createUser);

app.post('/api/profile/:id', upload.single('avatar'), User.editUser);

// app.post('/profile', upload.single('avatar'), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
// })
// var upload = multer().single('avatar')

app.post('/profiles', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
    	alert("An error occured. Please re-upload your profile picture.")
      // send an error occurred when uploading
      return
    }
    // Everything went fine
  })
})

app.post('/test', upload.single('foo'), function(req, res){
  console.log(req.file)
  res.send('...')
})


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

});


var express = require('express');
var bodyParser = require('body-parser');
var multer  = require('multer');
var upload = multer({ dest: './public/images/avatars/' });

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pets')

var session = require('express-session')
var passport = require('passport');

var passportConfig = require('./config/passport'); // Load in our passport configuration that decides how passport actually runs and authenticates

var app = express();
var User = require('./controllers/userLogin')

// Session Setup
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: false
}));

app.use(passport.initialize());

// Hook in the passport session management into the middleware chain.
app.use(passport.session());

app.use(express.static(__dirname + '/public'));

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes \\
var authenticationController = require('./controllers/authentication');
// Our get request for viewing the login page
app.get('/auth/login', authenticationController.login);

// Post received from submitting the login form
app.post('/auth/login', authenticationController.processLogin);

// Post received from submitting the signup form
app.post('/auth/signup', authenticationController.processSignup);

// Any requests to log out can be handled at this url
app.get('/auth/logout', authenticationController.logout);

// This route is designed to send back the logged in user (or undefined if they are NOT logged in)
app.get('/api/me', function(req, res){
  res.send(req.user)
})

app.post('/api/profile', User.createUser);

app.post('/api/updateUser', User.updateUser);





// app.get('/homepage', );


app.get('/', passportConfig.ensureAuthenticated, function(req, res){
  res.sendFile('/html/main.html', {root : './public'})
});

//maybe this needs to be editProfile?
// app.get('/superSensitiveDataRoute') 
// Routes \\

// app.get('/', function(req, res){
// 	// res.send('Hello')
//   res.sendFile('/html/landingPage.html', {root : './public'})
// });

// app.get('/profiles', function(req, res){
//   res.sendFile('/html/index.html', {root : './public'})
// });
// app.get('/animals', function(req, res){
//   res.sendFile('/html/index.html', {root : './public'})
// });

// app.post('/api/profile/:id', upload.single('avatar'), User.editUser);

// app.post('/profile', upload.single('avatar'), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
// })
// var upload = multer().single('avatar')

// app.post('/api/profile', function (req, res) {
//   upload(req, res, function (err) {
//     if (err) {
//     	alert("An error occured. Please re-upload your profile picture.")
//       // send an error occurred when uploading
//       return
//     }
//     // Everything went fine
//   })
// })

// app.post('/test', upload.single('foo'), function(req, res){
//   console.log(req.file)
//   res.send('...')
// })

var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

});


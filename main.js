// $(document).on('ready', function() { 
// });
  		// <script src="https://use.fonticons.com/1729dfc4.js"></script>


angular.module('petApp', ['mdl']);

angular.module('petApp').factory('userGen', [function () {
	var usersList = []
	var User = function  (name,tagLine,type,foto) {
		this.name = name;
		this.tagLine = tagLine;
		this.type  = type;
		this.foto = foto;
		usersList.push(this);
	}

	new User('Rocko',"Hi! My name is Rocko! My owner made this page for me, because I'm AWESOME! Come check out my profile for yourself and see how awesome I am!",'dog','./images/dog2.jpg' )
	new User('Lily',"Hi! My name is Lily! My owner made this page for me, because I'm AWESOME! Come check out my profile for yourself and see how awesome I am!",'cat', './images/cat1.jpg')
  	new User('Fido',"Hi! My name is Fido! My owner made this page for me, because I'm AWESOME! Come check out my profile for yourself and see how awesome I am!",'dog','./images/dog3.jpg')
	new User('Sunny',"Hi! My name is Sunny! My owner made this page for me, because I'm AWESOME! Come check out my profile for yourself and see how awesome I am!",'non-furry','./images/lizard.jpg')
	new User('Leo',"Hi! My name is Sunny! My owner made this page for me, because I'm AWESOME! Come check out my profile for yourself and see how awesome I am!",'non-furry','./images/crab1.jpg')
				

	return {
		usersList: usersList

	};
}])

angular.module('petApp').controller('mainController', ['$scope','userGen', function($scope,userGen){
	$scope.hello = "hello world"
	$scope.usersList = userGen.usersList
	console.log($scope.usersList)
	console.log($scope.hello)
	// function rateMyDo ($index, rating) {
	// 	// body...
	// }
	userGen.usersList[0].rating = 5

	// userGen.usersList[0].foto = './images/dog6.jpg'





}])








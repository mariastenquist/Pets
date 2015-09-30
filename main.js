
angular.module('petApp', ['mdl']);

angular.module('petApp').factory('userGen', [function () {
	var usersList = []
	var User = function  (name,tagLine,type,foto,rating,paws) {
		this.name = name;
		this.tagLine = tagLine;
		this.type  = type;
		this.foto = foto;
		this.rating = rating;
		this.paws = this.pawRating()
		usersList.push(this);
	}

	User.prototype.pawRating = function(paws){
		var pawsArray = ["", " ", "  ", "   ", "    "];
		// console.log(pawsArray)
		// console.log(this.rating)
		pawsArray = pawsArray.filter(function(element, index){
			if(index<this.rating){
				return true
			}
		},this)
		// console.log(pawsArray)
		// return pawsArray
	}

	new User('Rocko',"Hi! My name is Rocko! My owner made this page for me, because I'm AWESOME! Come check out my profile for yourself and see how awesome I am!",'dog','./images/dog2.jpg', 5 )
	new User('Lily',"Hi! My name is Lily! My owner made this page for me, because I'm AWESOME! Come check out my profile for yourself and see how awesome I am!",'cat', './images/cat1.jpg', 4)
	new User('Scratch',"Hi! My name is Scratch! My owner made this page for me, because I'm AWESOME! Come check out my profile for yourself and see how awesome I am!",'cat', './images/cat2.jpg', 3)
  	new User('Fido',"Hi! My name is Fido! My owner made this page for me, because I'm AWESOME! Come check out my profile for yourself and see how awesome I am!",'dog','./images/dog3.jpg', 4)
  	new User('Sammie',"Hi! My name is Sammie! My owner made this page for me, because I'm AWESOME! Come check out my profile for yourself and see how awesome I am!",'dog','./images/dog4.jpg', 5)
  	new User('Waldo',"Hi! My name is Waldo! My owner made this page for me, because I'm AWESOME! Come check out my profile for yourself and see how awesome I am!",'dog','./images/dog5.jpg')
	new User('Sunny',"Hi! My name is Sunny! My owner made this page for me, because I'm AWESOME! Come check out my profile for yourself and see how awesome I am!",'non-furry','./images/lizard.jpg', 4)
	new User('Leo',"Hi! My name is Sunny! My owner made this page for me, because I'm AWESOME! Come check out my profile for yourself and see how awesome I am!",'non-furry','./images/crab1.jpg', 5)
				

	return {
		usersList: usersList

	};
}])

angular.module('petApp').controller('mainController', ['$scope','userGen', function($scope, userGen){
	// $scope.hello = "hello world"
	$scope.usersList = userGen.usersList
	console.log($scope.usersList)
	// userGen.usersList[0].rating = 5
	// userGen.usersList[0].foto = './images/dog6.jpg'


	$scope.viewProfile = function ($event){

		$scope.showLightbox = false;
		$scope.showProfile = true;
		$scope.showUserCard = false;
	}


	$scope.selectedAnimal = function($index){ // trigger lightbox
		$scope.selectedAnimalName = $scope.usersList[$index].name // set selectedAnimalName to the pet name
	// console.log($scope.usersList[$index].name)
		$scope.selectedAnimalTag = $scope.usersList[$index].tagLine
	$scope.showLightbox = !$scope.showLightbox;
	}
	$scope.toggleLightBox = function($index){ 
		$scope.showLightbox = !$scope.showLightbox;
	}

	// console.log($scope.usersList[0].name)


}])









angular.module('petApp', ['mdl']);

angular.module('petApp').factory('userGen', [function (){
	var usersList = []
	var User = function  (name,tagLine,types,foto,bio) {
		this.name = name;
		this.tagLine = tagLine;
		this.types  = types;
		this.foto = foto;
		this.bio = bio;
		usersList.push(this);
	}

	// var animalTypes = ["dog", "cat", "non-furry", "non-furry", "cat", "dog", "dog", "dog", "dog"]




	// User.prototype.pawRating = function(paws){
	// 	var pawsArray = ["", " ", "  ", "   ", "    "];
	// 	// console.log(pawsArray)
	// 	// console.log(this.rating)
	// 	pawsArray = pawsArray.filter(function(element, index){
	// 		if(index<this.rating){
	// 			return true
	// 		}
	// 	},this)
	// 	// return pawsArray
	// }

	new User('Rocko',"Hi! My name is Rocko! My owner made this page for me, because I'm AWESOME! Come check out my profile for yourself and see how awesome I am!",'dog','./images/dog2.jpg', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
  	new User('Fido',"Hi! My name is Fido! My owner made this page for me, because I'm AWESOME! Come check out my profile for yourself and see how awesome I am!",'dog','./images/dog3.jpg', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
  	new User('Sammie',"Hi! My name is Sammie! My owner made this page for me, because I'm AWESOME! Come check out my profile for yourself and see how awesome I am!",'dog','./images/dog4.jpg', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
  	new User('Waldo',"Hi! My name is Waldo! My owner made this page for me, because I'm AWESOME! Come check out my profile for yourself and see how awesome I am!",'dog','./images/dog5.jpg', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
	new User('Sunny',"Hi! My name is Sunny! My owner made this page for me, because I'm AWESOME! Come check out my profile for yourself and see how awesome I am!",'non-furry','./images/lizard.jpg', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
	new User('Leo',"Hi! My name is Leo! My owner made this page for me, because I'm AWESOME! Come check out my profile for yourself and see how awesome I am!",'non-furry','./images/crab1.jpg', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
	new User('Lily',"Hi! My name is Lily! My owner made this page for me, because I'm AWESOME! Come check out my profile for yourself and see how awesome I am!",'cat','./images/cat1.jpg', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
	new User('Scratch',"Hi! My name is Scratch! My owner made this page for me, because I'm AWESOME! Come check out my profile for yourself and see how awesome I am!",'cat','./images/cat2.jpg', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
				

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

	$scope.checkFilter = function(){
		console.log($scope.filterAnimal)
	}

	$scope.viewProfile = function ($event){

		$scope.showLightbox = false;
		$scope.showLightboxForm  = false;
		$scope.showProfile = true;
		$scope.showUserCard = false;
	}


	$scope.selectedAnimal = function($index){ // trigger lightbox
		$scope.selectedAnimalName = $scope.usersList[$index].name // set selectedAnimalName to the pet name
		$scope.selectedAnimalTag = $scope.usersList[$index].tagLine
		$scope.selectedAnimalFoto = $scope.usersList[$index].foto
		$scope.showLightbox = !$scope.showLightbox;
	}


	$scope.toggleLightBox = function($index){ 
		$scope.showLightbox = !$scope.showLightbox;
	} //this toggles the lightbox closed

	$scope.selectedAnimalForm = function($index){ 
		// $scope.selectedAnimalName = $scope.usersList[$index].name // set selectedAnimalName to the pet name
		// console.log($scope.usersList[$index].name)
		$scope.selectedAnimalText= $scope.usersList[$index].tagLine
		$scope.bio = $scope.usersList[$index].bio
		console.log($scope.usersList[$index].bio)
		console.log($scope.usersList[$index])
		// $scope.selectedAnimalFoto = $scope.usersList[$index].foto
		$scope.showLightboxForm = !$scope.showLightboxForm;
		// console.log($scope.selectedAnimalText)
	}


	$scope.toggleLightBoxForm = function($index){ //this toggles the lightbox closed
		$scope.showLightboxForm = !$scope.showLightboxForm;
	} 
	

}])








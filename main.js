
angular.module('petApp', ['mdl', 'ngAnimate']);

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


	new User('Rocko',"Hi! My name is Rocko! My owner made this page for me, because I'm AWESOME! Come check out my profile for yourself and see how awesome I am!",'dog','./images/dog2.jpg', "This Short Story The Greedy Dog is quite interesting to all the people. Enjoy reading this story. Once there lived a dog. He was very greedy. There were many times that he had to pay for his greed. Each time the dog promised himself, “I have learnt my lesson. Now I will never be greedy again.” But he soon forgot his promises and was as greedy as ever. One afternoon, the dog was terribly hungry. He decided to go look for something to eat. Just outside his house, there was a bridge. “I will go and look for food on the other side of the bridge. The food there is definitely better,” he thought to himself. He walked across the wooden bridge and started sniffing around for food. Suddenly, he spotted a bone lying at a distance. “Ah, I am in luck. This looks a delicious bone,” he said. Without wasting any time, the hungry dog picked up the bone and was just about to eat it, when he thought, “Somebody might see here with this bone and then I will have to share it with them. So, I had better go home and eat it.” Holding the bone in his mouth, he ran towards his house. While crossing the wooden bridge, the dog looked down into the river. There he saw his own reflection. The foolish dog mistook it for another dog. “There is another dog in the water with bone in its mouth,” he thought. Greedy, as he was, he thought, “How nice it would be to snatch that piece of bone as well. Then, I will have two bones.” So, the greedy dog looked at his reflection and growled. The reflection growled back, too. This made the dog angry. He looked down at his reflection and barked, “Woof! Woof!” As he opened his mouth, the bone in his mouth fell into the river. It was only when the water splashed that the greedy dog realized that what he had seen was nothing but his own reflections and not another dog. But it was too late. He had lost the piece of bone because of his greed. Now he had to go hungry.") 
	new User('Ricky',"Hi! My name is Ricky! My owner made this page for me, because I'm AWESOME! Come check out my profile for yourself and see how awesome I am!",'dog','./images/ricky.jpg', "I'm Ricky! I live in Monroe, New York. My awesome owner found me wandering around the streets of Brooklyn. I was all dirty and sad and scared. My awesome owner Michael is the bestest person in the world and he saved me! Unfortunately, Michael isn't here right now, he's taking a vacation in Boulder, Colorado and is coding awesome projects. I am excited for him to come home and visit me in about 5 weeks time!! Everybody in New York says Woof Woof and best of luck with the coding Michael!")

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

angular.module('petApp').controller('mainController', ['$scope','userGen','$timeout', function($scope, userGen, $timeout){
	// $scope.hello = "hello world"
	$scope.usersList = userGen.usersList
	console.log($scope.usersList)
	// userGen.usersList[0].rating = 5
	// userGen.usersList[0].foto = './images/dog6.jpg'

	// $timeout(function(){}

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
		// // console.log($scope.usersList[$index].name)
		// $scope.selectedAnimalText= $scope.usersList[$index].tagLine
		$scope.names = $scope.usersList[$index].name
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

	$scope.showintroLandingPage = function($index){
		$scope.showIntro = true;
	}

	$scope.toggleintroLandingPage = function(){
		$scope.showIntro = false;
	}
		$scope.showIntro = true;
}])








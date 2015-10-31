angular.module('petApp', []);

// angular.module('petApp')
// 	.controller('mainController', ['$scope', function($scope){
// 		$scope.temp = "this werks!"


// 	}])

angular.module('petApp')
	.controller('mainController', ['$scope', '$http', function($scope, $http){
		$scope.user = {};
		// console.log('hello')
		// 
		$scope.editUser = function(){

			$http.get('/api/me')
				.then(function(returnData){
					console.log(returnData)
					$scope.user = returnData.data
				})


			console.log('this', this)
			$http.post('/api/updateUser/', this.user)
			.success(function(){
				window.location.href="/";
			})
		}




	}])

	.controller('loginController', ['$scope', '$http', function($scope, $http){
		$scope.temp = "this is working?"

		console.log("testing, testing")

		// $http.get('/api/profile')
		// 	.then(function(returnData){
		// 		console.log("how bout now?")
			// $scope.users = returnData.data
			// }, function(err){
			// 	console.log(err)
			// })

		$scope.createUser = function(){
			$http.post('/api/profile', $scope.newProfile)
				.then(function(returnData){
					console.log(returnData)
					if (returnData.data.username){
						window.location.href='/'
					}
				})
		}
	}])
	// .controller('editController', ['$scope', '$http', function($scope, $http){
	// 	$scope.user = {};
	// 	// console.log('hello')
	// 	// 
	// 	$scope.editUser = function(){
	// 		console.log('this', this)
	// 		$http.post('/api/updateUser/', this.user)
	// 		.success(function(){
	// 			window.location.href="/";
	// 		})
	// 	}

	// 		$http.get('/api/me')
	// 			.then(function(returnData){
	// 				console.log(returnData)
	// 				$scope.user = returnData.data
	// 			})


		// $scope.user = function(){
		
		// }
		// $scope.user()

		// $scope.grabUser = function(){
		// 	var username = "nameofProfile"
		// 	$http.get('/api/me/' + username)
		// 		.then(function(returnData){
		// 			$scope.user = returnData.data
		// 		})
		// }

	// }])
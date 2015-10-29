angular.module('petApp', ['mdl']);

// angular.module('petApp')
// 	.controller('mainController', ['$scope', function($scope){
// 		$scope.temp = "this werks!"
// 	}])

angular.module('petApp')
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
					console.log("does this create new profile?")
				})
		}

		// $scope.grabUsername = function(){
		// 	var username = "nameofProfile"
		// 	$http.get('/api/profile/' + username)
		// 		.then(function(returnData){
		// 			$scope.user = returnData.data
		// 		})
		// }

	}])
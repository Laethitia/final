//Hello There friend, I need your help. Please write out the functionallity to get, write, update, and delete data. 
//I know some of the routes have been written out. 
//Deleting and Updating should be by ID and after, I should be showing the get page. mainCtrl should also be empty. 
//To give you a hint, you have to make HTTP calls and I believe Angular has a module for that...I don't remember. 
//Please do not adjust the names of the controllers and the angular module. 


angular.module("examApp.controllers", [])
    .controller("mainCtrl", function($scope){})

    .controller("getCtrl", function($scope, $http){
    	$http({
    		method :  'GET',
    		url : 'localhost:8080/api/data'
    	}).then(function successCallBack(res){
    			$scope.post= res.data;
    		}), function errorCallback(err){
    			console.log(err)
    			}
    })

    .controller("postCtrl", function($scope,$http){
    	$scope.toCreateAPost= function(){
	    	$http({
	    		method :  'POST',
	    		url : '/api/post',
	    		headers: {
	    			'Content-Type': 'application/json'
	    		}
		    }).then(function successCallBack(res){
		    			$scope.type= "C'est bon";
		    			console.log("C'est bon");
		    	}), function errorCallback(res){
		    		console.log("C'est pas bon");
		    		}
    	}
    })

    .controller("updateCtrl", function($http, $scope, $location){
    	var idLoc= $location.search().idLoc;

    	$scope.deletePost=function(){
    		$http({
				    method: 'DELETE',
				    url: '/api/delete/:id',
				    data: {
				       	postId: idLoc,
				    },
				    headers: {
				        'Content-Type': 'application/json'
				    }
			}).then(function successCallBack(res) {
	    			console.log("C'est bon");
				}), function errorCallback(rej) {
	    			console.log(rej.data);
					};
    	}	

    	$scope.updatePost=function(){
    		$http({
				    method: 'PUT',
				    url: '/api/update/:id',
				    $scope.toCreateAPost,
				    data: {
				       	updateId: idLoc,
				    },
				    headers: {
				        'Content-Type': 'application/json'
				    }
			}).then(function successCallBack(res) {
	    			console.log("C'est bon");
				}), function errorCallback(rej) {
	    			console.log(rej.data);
					};
    	}	

    })
	angular.module('agendaApp').service('RegisterService',['$http', function($http){
	return{
		  addNewContact : function(data,sucessCallback, errorCallback){
	        $http({
	        	method: 'POST',
	        	url:''+'/register' ,
	        	data: angular.toJson(data),
	        	headers:{
	        		'Content-Type':'application/json'
	        	}       	
		        })
	        .then(function(response){
	             sucessCallback();
	             console.log('Sucess');
	        },  function(response){
	        	errorCallback();
	        	console.log('Error');
	        });
	        }
		  };
		}]);

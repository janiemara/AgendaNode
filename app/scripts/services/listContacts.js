	angular.module('agendaApp').service('ListContactsService',['$http', function($http){
        var listAll = [];

		return{
			listContacts : function(sucessCallback, errorCallback){
				$http({
					method: 'GET',
					url:'http://www.mocky.io/v2/590fc477100000ae1c8be931'        	
				})
				.then(function(response){
					listAll = response.data[0];
					sucessCallback(response);
					console.log('Sucess');
				},  function(response){
					errorCallback(response);
					console.log('Error');
				});
			}
		};

	}]);

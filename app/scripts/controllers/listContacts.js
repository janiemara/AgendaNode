'use strict';

/**
 * @ngdoc function
 * @name agendaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the agendaApp
 */
angular.module('agendaApp')
  .controller('ListContactsController', ['ListContactsService','$scope','$rootScope',function (ListContactsService, $scope, $rootScope) {
    $rootScope.listData = [];

    $scope.listContacts = function(){
      ListContactsService.listContacts(function(response){
           $rootScope.listData = response.data;
      }, function(response){
        $scope.result = 'Error!!!';
      });
    };

    $scope.listContacts();

    $scope.listItems = function() {
      $http.get('http://www.mocky.io/v2/590fc477100000ae1c8be931').success(function(product) {
          console.log('aki '+product);
      }).error(function(data) {
          toastr.error("Fail on adding product.");
      });

      $scope.listItems();
  };

  }]);

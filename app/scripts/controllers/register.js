'use strict';

/**
 * @ngdoc function
 * @name agendaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the agendaApp
 */
angular.module('agendaApp')
  .controller('RegisterController', ['ListContactsService','$scope', '$rootScope',function (ListContactsService,$scope,$rootScope) {

    $scope.addContact = function(novocontato) {
      console.log('alki '+novocontato);
      var newContact = {nome : $scope.novocontato.nome,
                        sobrenome : $scope.novocontato.sobrenome,
                        telefone : $scope.novocontato.telefone,
                        apelido : $scope.novocontato.apelido,
                        datacadastro : $scope.novocontato.datacadastro};
      ListContactsService.addNewContact(newContact);
    };
  }]);

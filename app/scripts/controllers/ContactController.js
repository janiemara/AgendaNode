'use strict';

/**
 * @ngdoc function
 * @name agendaApp.controller:ListContactsController
 * @description
 * # ContactController
 * Controller of the agendaApp
 */
angular.module('agendaApp')
        .controller('ListContactsController', ['ListContactsService', '$scope', '$rootScope', function (ListContactsService, $scope, $rootScope) {

                if (!$rootScope.listData) {
                    $rootScope.listData = [];
                    $rootScope.loadJson = false;
                }

                $scope.exist = false;

                $scope.getListJson = function () {
                    ListContactsService.listContacts(function (response) {
                        $rootScope.listData = response.data;
                        $rootScope.loadJson = true;
                        
                    }, function (response) {
                        $scope.result = 'Error!!!';
                    });
                };

                if (!$rootScope.loadJson) {
                    $scope.getListJson();
                }

                $scope.getListContacts = function () {
                    return $rootScope.listData;
                };

                $scope.validNameExist = function(nameContact){
                    for (var i = 0; i < $rootScope.listData.length; i++) {
                            if ($rootScope.listData[i]['nome'] == nameContact) {
                                $scope.exist = true;
                            }
                        }

                        return $scope.exist;
                };

                $scope.addContact = function () {
                    
                    if ($scope.form.$valid) {

                        if ($scope.validNameExist($scope.addNewContact.nome)) {
                            window.alert('Contact already exists!');
                        }
                        else {
                            $rootScope.listData.push($scope.addNewContact);
                            window.alert('Contact added successfully!');
                            window.location.href = '#/';
                        }
                    }
                    else {
                        window.alert('Please, inform the data ');
                    }
                };

                $scope.getContact = function (contact) {
                    $rootScope.editContact = $rootScope.listData[$rootScope.listData.indexOf(contact)];

                };

                $scope.deleteContact = function (contact) {
                    $rootScope.listData.splice($rootScope.listData.indexOf(contact), 1);
                };

                $scope.updateContact = function (editContact, index) {
                    $rootScope.listData[index] = editContact;

                    window.alert('Contact update successfully!');
                    window.location.href = '#/';

                };

            }]);

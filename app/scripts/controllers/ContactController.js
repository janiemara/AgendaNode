'use strict';

/**
 * @ngdoc function
 * @name agendaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the agendaApp
 */
angular.module('agendaApp')
        .controller('ListContactsController', ['ListContactsService', '$scope', '$rootScope', function (ListContactsService, $scope, $rootScope) {

                if (!$rootScope.listData) {
                    console.log('List Data');
                    $rootScope.listData = [];
                    $rootScope.loadJson = false;
                }

                $rootScope.contact = {};
                $scope.getListJson = function () {
                    ListContactsService.listContacts(function (response) {
                        $rootScope.listData = response.data;
                        $rootScope.loadJson = true;
                        console.log('getListJson');

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

                $scope.addContact = function () {
                    
                    console.log('addContact '+$rootScope.listData);
                    if ($scope.form.$valid) {

                        for (var i = 0; i < $rootScope.listData.length; i++) {
                            if ($rootScope.listData[i]['nome'] == $scope.addContact.nome) {
                                $scope.exist = true;
                            }
                        }

                        if ($scope.exist) {
                            window.alert('Contact already exists!');
                        }
                        else {
                            $rootScope.listData.push($scope.addContact);
                            window.alert('Contact added successfully!');
                            window.location.href = '#/';
                        }
                    }
                    else {
                        window.alert('Please, inform the data ');
                    }
                };

                $scope.getContact = function (index) {
                    $rootScope.index = index;
                    $rootScope.newContact = $rootScope.listData[index];

                };

                $scope.deleteContact = function (index) {
                    console.log(index); 
                    $rootScope.listData.splice(index, 1);
                    console.log($rootScope.listData);
                };

                $scope.updateContact = function (newContact, index) {
                    $rootScope.listData[index] = newContact;

                    window.alert('Contact update successfully!');
                    window.location.href = '#/';

                };

            }]);

'use strict';

/**
 * @ngdoc function
 * @name agendaApp.service:ListContactsService
 * @description
 * # ContactService
 * Service of the agendaApp
 */

angular.module('agendaApp').service('ListContactsService', ['$http', function ($http) {

        return{
            listContacts: function (sucessCallback, errorCallback) {
                $http({
                    method: 'GET',
                    url: 'http://www.mocky.io/v2/5910670f110000d70a5919df'
                })
                        .then(function (response) {
                            sucessCallback(response);
                            console.log('Sucess');
                        }, function (response) {
                            errorCallback(response);
                            console.log('Error');
                        });
            }
        };

    }]);

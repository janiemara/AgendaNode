'use strict';

/**
 * @ngdoc overview
 * @name agendaApp
 * @description
 * # agendaApp
 *
 * Main module of the application.
 */
angular
  .module('agendaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'ListContactsController',
        controllerAs: 'main'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'ListContactsController',
        controllerAs: 'register'
      })
      .when('/edit', {
        templateUrl: 'views/edit.html',
        controller: 'ListContactsController',
        controllerAs: 'edit'
      })
      .when('/visualize', {
        templateUrl: 'views/visualize.html',
        controller: 'ListContactsController',
        controllerAs: 'visualize'
      })
      .when('/documentation', {
        templateUrl: 'views/documentation.html',
        controller: 'ListContactsController',
        controllerAs: 'documentation'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

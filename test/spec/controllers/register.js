'use strict';

describe('Controller: RegisterController', function () {

  // load the controller's module
  beforeEach(module('agendaApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('RegisterController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutCtrl.awesomeThings.length).toBe(3);
  });*/

  it('should add item to list', function () {
    scope.addContact();
    expect(scope.contactsList.length).toBe(4);
  });

});

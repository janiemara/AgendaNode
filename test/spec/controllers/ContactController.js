'use strict';

describe('Controller: ListContactsController', function () {

  // load the controller's module
  beforeEach(module('agendaApp'));

  var AboutCtrl,
    scope,
    rootScope,
    Contacts;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('ListContactsController', {
      $scope: scope,
      $rootScope : rootScope
      // place here mocked dependencies
    });
  }));

 Contacts = {nome:'Liz',sobrenome:'Martins',telefone:'992060258',apelido:'Liz',datacadastro:'08/05/2017'};
  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutCtrl.awesomeThings.length).toBe(3);
  });*/

  it('should add item to list', function () {

    scope.form.addContact.nome.$setViewValue('Liz');
    scope.form.sobrenome.$setViewValue('Martins');
    scope.form.telefone.$setViewValue('992060258');
    scope.form.apelido.$setViewValue('Lizinha');
    scope.form.datacadastro.$setViewValue('05/05/2017');
    scope.$digest();
    scope.addContact();
    expect(rootScope.listData.length).toBe(1);
  });

});

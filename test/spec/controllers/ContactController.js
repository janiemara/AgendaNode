'use strict';

describe('Controller: ListContactsController', function () {

  // load the controller's module
  beforeEach(module('agendaApp'));

  var AboutCtrl,
    scope,
    rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,$templateCache,$compile) {
    scope     = $rootScope.$new();
    rootScope = $rootScope;
    AboutCtrl = $controller('ListContactsController', {
      $scope: scope,
      $rootScope : rootScope
      // place here mocked dependencies
    });
    
    rootScope.listData.push({nome:'Liz',sobrenome:'Martins',telefone:'992060258',apelido:'Liz',datacadastro:'08/05/2017'});
    rootScope.listData.push({nome:'Janielle',sobrenome:'Martins',telefone:'992060258',apelido:'Janie',datacadastro:'08/05/2017'});

  }));


  it('should validate name already exists in list - true', function(){
     
     expect(scope.validNameExist('Liz')).toBe(true);
  });

  it('should validate name already exists in list - false', function(){
    
     expect(scope.validNameExist('Fatima')).toBe(false);
  });

  it('should remove item to list', function(){
     scope.deleteContact(0);

     expect(rootScope.listData.length).toBe(1);
  });

  it('should update item to list', function(){
     scope.updateContact({nome:'Fernanda Liz',sobrenome:'Martins',telefone:'992060258',apelido:'Liz',datacadastro:'08/05/2017'},0);

     expect(rootScope.listData[0]).toEqual({nome:'Fernanda Liz',sobrenome:'Martins',telefone:'992060258',apelido:'Liz',datacadastro:'08/05/2017'});
  });

});

'use strict';

describe('Controller: RabbitHoleCtrl', function() {
  // load the controller's module
  beforeEach(module('coding4kicksApp'));

  var RabbitHoleCtrl,
    scope;

  beforeEach(inject(function($httpBackend) {
    $httpBackend.whenGET('data/machineIntel.json').respond({});
    $httpBackend.whenGET('data/softDev.json').respond({});
    $httpBackend.whenGET('data/entremanureship.json').respond({});
    $httpBackend.whenGET('data/frontEnd.json').respond({});
    $httpBackend.whenGET('data/backEnd.json').respond({});
  }));

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    RabbitHoleCtrl = $controller('RabbitHoleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});

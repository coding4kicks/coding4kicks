'use strict';

describe('Controller: DisqusCtrl', function () {

  // load the controller's module
  beforeEach(module('coding4kicksApp'));

  var DisqusCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DisqusCtrl = $controller('DisqusCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

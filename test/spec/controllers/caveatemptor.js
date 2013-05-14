'use strict';

describe('Controller: CaveatemptorCtrl', function() {

  // load the controller's module
  beforeEach(module('coding4kicksApp'));

  var CaveatemptorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    CaveatemptorCtrl = $controller('CaveatemptorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

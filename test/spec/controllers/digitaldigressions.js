'use strict';

describe('Controller: DigitaldigressionsCtrl', function() {

  // load the controller's module
  beforeEach(module('coding4kicksApp'));

  var DigitaldigressionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    DigitaldigressionsCtrl = $controller('DigitaldigressionsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

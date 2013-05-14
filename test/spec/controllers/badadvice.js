'use strict';

describe('Controller: BadadviceCtrl', function() {

  // load the controller's module
  beforeEach(module('coding4kicksApp'));

  var BadadviceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    BadadviceCtrl = $controller('BadadviceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

'use strict';

coding4kicksApp.controller('RabbitHoleCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];

  // Set appropriate rabbithole type based upon url parameter
  // If no match redirect to 404
  switch($routeParams.rabbitHoleId){
    case "machine-intel":
      $scope.holeType = "machineIntel";
      break;
    case "soft-dev":
      $scope.holeType = "softDev";
      break;
    case "entremanureship":
      $scope.holeType = "entremanureship";
      break;
    case "front-end":
      $scope.holeType = "frontEnd";
      break;
    case "back-end":
      $scope.holeType = "backEnd";
      break;
    default:
      $scope.holeType = "machineIntel";
  };


  // Show/Hide detail functions
  $scope.toggleWonder = function(land) {
    land.show = !land.show;
  };
  $scope.toggleWorld = function(world) {
    world.show = !world.show;
  };

  // Different rabbitholes
  $scope.holeTypes = ['machineIntel', 'softDev', 'entremanureship', 'frontEnd', 'backEnd'] 

  // Data Structure for rabbithole information
  $scope.rabbitHoles = {};

  // Fetch data for each rabbithole
  // TODO: move to service so fetch after main page load
  for (var i=0; i < $scope.holeTypes.length; i++) {
    var file = "data/" + $scope.holeTypes[i] + ".json";
    $http.get(file)
      .then(function(results){
        // Extract rabbithole type from url
        var holeType = results.config.url.split('/')[1].split('.')[0];
        $scope.rabbitHoles[holeType] = results.data; 
      });
  };

}]);

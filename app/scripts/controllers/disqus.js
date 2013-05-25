'use strict';

angular.module('coding4kicksApp')
  .controller('DisqusCtrl', function ($scope, $location, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  // Pulled from Angular Docs
  function loadDisqus(wonderland, title) {

    // http://docs.disqus.com/help/2/
    window.disqus_shortname = 'coding4kicks';
    window.disqus_identifier = wonderland + '_' + title;
    window.disqus_url = 'http://www.coding4kicks.com' + '/' + wonderland + '/' + title;

    if ($location.host() == 'localhost') {
      window.disqus_developer = 1;
    }

    // http://docs.disqus.com/developers/universal/
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = 'http://coding4kicks.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] ||
        document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();

    angular.element(document.getElementById('disqus_thread')).html('');
  }

  loadDisqus($routeParams.wonderland, $routeParams.title);
});

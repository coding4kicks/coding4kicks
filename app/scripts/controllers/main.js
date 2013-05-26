'use strict';

coding4kicksApp.controller('MainCtrl', ['$scope', '$window', function($scope, $window) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];

  // Src is for pictures, Img is for words
  $scope.caveatEmptorSrc = 'images/index/caveat-emptor.jpg';
  $scope.caveatEmptorImg = 'images/index/please-buy.png';

  $scope.machineIntelSrc = 'images/index/machine-intel.png';
  $scope.machineIntelImg = 'images/index/machine-words.png';

  $scope.softDevSrc = 'images/index/soft-dev.png';
  $scope.softDevImg = 'images/index/soft-words.png';

  $scope.manureShipSrc = 'images/index/entremanureship.png';
  $scope.manureShipImg = 'images/index/manure-words.png';

  $scope.frontEndSrc = 'images/index/front-end.png';
  $scope.frontEndImg = 'images/index/front-words.png';

  $scope.backEndSrc = 'images/index/back-end.png';
  $scope.backEndImg = 'images/index/back-words.png';

  $scope.badAdviceSrc = 'images/index/bad-advice.png';
  $scope.badAdviceImg = 'images/index/bad-words.png';

  $scope.whoAmISrc = 'images/index/whoami.png';

  $scope.iDigressSrc = 'images/index/i-digress.png';

  var url = '';
  $scope.randomSong = function() {

    url = songList[Math.floor(Math.random()*songList.length)];
    $window.open(url,'_blank');
  };

  var songList = ['http://www.listenonrepeat.com/watch/?v=JrrtC_g13r0', // Wiz 
                  'http://www.listenonrepeat.com/watch/?v=gT2MRFniEs0&list=AL94UKMTqg-9CsKjApTRGmupkJipCDOSnD', // 68
                  'http://www.listenonrepeat.com/watch/?v=mTzEp4CeWT8', // Coconut Records - West Coast
                  'http://www.listenonrepeat.com/watch/?v=4XJxFAoiWSY', // Primitive Radio Gods - Phone Booth
                  'http://www.listenonrepeat.com/watch/?v=KuVAeTHqijk', // Wiz
                  'http://www.listenonrepeat.com/watch/?v=rWZr2F0qohA', // Captitol Cities - Safe and Sound
                  'http://www.listenonrepeat.com/watch/?v=B9dSYgd5Elk', // MGMT - Time to Pretend 
                  'http://www.listenonrepeat.com/watch/?v=eimgRedLkkU', // Empire of the Sun
                  'http://www.listenonrepeat.com/watch/?v=snzuGFAvNyU&noredirect=1', // Jack Back
                  'http://www.listenonrepeat.com/watch/?v=ABzh6hTYpb8', // Foster
                  'http://www.listenonrepeat.com/watch/?v=Ek0SgwWmF9w', // Muse
                  'http://www.listenonrepeat.com/watch/?v=bIEOZCcaXzE', // MGMT - Kids
                  'http://www.listenonrepeat.com/watch/?v=FljNILAozts', // Alkaline - Mercy Me
                  'http://www.listenonrepeat.com/watch/?v=0Jlk_EAufHY', // Say Hi to Your Mom - Brains vs Tractorbeam
                  'http://www.listenonrepeat.com/watch/?v=8RZqPq1-1Tw', // Mowgli's - SF 
                  'http://www.listenonrepeat.com/watch/?v=MmZexg8sxyk', // MGMT - Electric Feel
                  'http://www.listenonrepeat.com/watch/?v=Wa5B22KAkEk', // Wiz
                  'http://www.listenonrepeat.com/watch/?v=LD_XAEw_npg', // Tribal
                  'http://www.listenonrepeat.com/watch/?v=xrPjip1R5lo', // Cudi
                  'http://www.listenonrepeat.com/watch/?v=w-Xz8aLuD7Y', // Uniting
                  'http://www.listenonrepeat.com/watch/?v=dGghkjpNCQ8', // Calvin
                  'http://www.listenonrepeat.com/watch/?v=IJtHdkyo0hc', // Ghetto
                  'http://www.listenonrepeat.com/watch/?v=qRPpLGxGNZY', // Cudi
                  'http://www.listenonrepeat.com/watch/?v=mEpfyBOdKxU', // Goyte
                  'http://www.listenonrepeat.com/watch/?v=WRmBChQjZPs', // Matisyahu
                  'http://www.listenonrepeat.com/watch/?v=7xzU9Qqdqww', // Cudi
                  'http://www.listenonrepeat.com/watch/?v=0rpKl976dQk', // Alkaline
                  'http://www.listenonrepeat.com/watch/?v=L_fCqg92qks', // Call On Me
                  'http://www.listenonrepeat.com/watch/?v=WbcPpIq-0dk', // Scheme
                  'http://www.listenonrepeat.com/watch/?v=zvCBSSwgtg4', // Lumineers
                  'http://www.listenonrepeat.com/watch/?v=6blhdYBswfY', // Matisyahu
                  'http://www.listenonrepeat.com/watch/?v=ub36ffWAqgQ', // Phoenix
                  'http://www.listenonrepeat.com/watch/?v=53bOAGMifNo', // Ships
                  'http://www.listenonrepeat.com/watch/?v=jZhQOvvV45w', // One Rebublic - Good life
                  'http://www.listenonrepeat.com/watch/?v=MOOs-MqDOI0', // Sundown
                  'http://www.listenonrepeat.com/watch/?v=qQkBeOisNM0', // Fun - Some Nights
                  'http://www.listenonrepeat.com/watch/?v=0_prJ22rXRs&list=AL94UKMTqg-9CsKjApTRGmupkJipCDOSnD', // DCO
                  'http://www.youtube.com/watch?v=qau8Wiv7Aas' // Dos Gringos
                  ];
}]);

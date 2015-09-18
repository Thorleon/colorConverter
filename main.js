var colorApp = angular.module('colorApp', []);

colorApp.controller('colorCtrl',  ['$scope', function($scope){

  $scope.show = false;

  function getColor(color){
    $scope.outputColor = color;

    if (color.charAt(0)=="#") {
      $scope.show = true;
    }
    else $scope.show = false;

      $scope.R = hexToR(color);
      $scope.G = hexToG(color);
      $scope.B = hexToB(color);

      function hexToR(h) {
        return parseInt((cutHex(h)).substring(0, 2), 16)
      }

      function hexToG(h) {
        return parseInt((cutHex(h)).substring(2, 4), 16)
      }

      function hexToB(h) {
        return parseInt((cutHex(h)).substring(4, 6), 16)
      }

      function cutHex(h) {
        return (h.charAt(0) == "#") ? h.substring(1, 7) : h
      }
    }


  $scope.getColor = getColor;
}]);
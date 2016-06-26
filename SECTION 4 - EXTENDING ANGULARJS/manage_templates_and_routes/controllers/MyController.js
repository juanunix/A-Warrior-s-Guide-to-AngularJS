myRoutingApp.controller('MyController', function($scope,  $routeParams){
    
    $scope.message = 'This is a var stored in MyController';

    $scope.color =  $routeParams.color;
})
var app = angular.module('app');
app.controller('dashboardCtrl', function ($scope, $localStorage) {
    $scope.localStorage = $localStorage.datosE;

    
});
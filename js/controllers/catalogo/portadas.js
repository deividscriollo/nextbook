var app = angular.module('app');

app.controller('Portadas-Ctrl', function($mdDialog, $scope, servicioscatalogo, servicios, $timeout, $localStorage, $location, colorboxService, annotoriousService) {
    $scope.sizeimg=[300,300];

    $scope.fileChanged = function(event) {
        $scope.file = event.target.files[0];
    };
	
});
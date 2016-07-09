var app = angular.module('app');
app.controller('radioadminCtrl', function ($scope, $localStorage) {
	console.log('test');
});

app.controller('newCtrl', function ($scope, $localStorage) {
	$scope.ejemplo = 'hola mundo';
});

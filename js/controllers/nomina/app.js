var app = angular.module('app');
app.controller('nominageneralCtrl', function ($scope, $routeSegment, $mdDialog, $location, servicios) {
	$scope.menu = 	[
					    {
					      link : '/My-space',
					      title: 'Inicio',
					      icon: 'dashboard'
					    },
					    {
					      link : '/My-space',
					      title: 'Nomina',
					      icon: 'donut_small'
					    },
					    {
					      link : '/My-space',
					      title: 'Departamentos',
					      icon: 'dns'
					    },
					    {
					      link : '/My-space',
					      title: 'Cargos',
					      icon: 'extension'
					    }
					];
});
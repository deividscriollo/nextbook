var app = angular.module('app');

app.controller('inventariogeneralCtrl', function ($scope, $routeSegment, $mdDialog, $location, servicios) {
	$scope.menu = 	[
					    {
					      link : '#/My-space/Inventario',
					      title: 'Inicio',
					      icon: 'dashboard'
					    },
					    {
					      link : '#/My-space/Inventario/Grupo',
					      title: 'Grupos',
					      icon: 'donut_small'
					    },
					    {
					      link : '#/My-space/Inventario/Modo_Adquisicion',
					      title: 'Modo Adquisición',
					      icon: 'dns'
					    },
					    {
					      link : '#/My-space/Inventario/Estado',
					      title: 'Estado',
					      icon: 'extension'
					    }
					];
	$scope.menu2 = 	[
					    {
					      link : '#/My-space/Inventario/Ubicacion',
					      title: 'Ubicación',
					      icon: 'extension'
					    },
					    {
					      link : '#/My-space/Inventario/Motivos_Baja',
					      title: 'Motivos Baja',
					      icon: 'extension'
					    },
					    {
					      link : '#/My-space/Inventario/Articulo',
					      title: 'Maestro Articulo',
					      icon: 'extension'
					    },
					    {
					      link : '#/My-space/Inventario/Nomina_Pagos',
					      title: 'Baja',
					      icon: 'extension'
					    }
					];
});
var app = angular.module('app');

app.controller('nominageneralCtrl', function ($scope, $routeSegment, $mdDialog, $location, servicios) {

	$scope.sidenav = 	{
							menu1: [
							    {
							      link : '/My-space/NominaAdmin',
							      title: 'Inicio',
							      icon: 'dashboard'
							    },
							    {
							      link : '/My-space/NominaAdmin/Nomina',
							      title: 'Nomina',
							      icon: 'assessment'
							    },
							    {
							      link : '/My-space/NominaAdmin/Bancos',
							      title: 'Bancos',
							      icon: 'account_balance'
							    },
							    {
							      link : '/My-space/NominaAdmin/Nomina_Pagos',
							      title: 'Generar Rol de Pagos',
							      icon: 'chrome_reader_mode'
							    },
							    {
							      link : '/My-space/NominaAdmin/Listado_Roles',
							      title: 'Listar Rol de Pagos',
							      icon: 'list'
							    }
							],
							menu2: [
							    {
							      link : '/My-space/NominaAdmin/Departamentos',
							      title: 'Departamentos',
							      icon: 'dns'
							    },
							    {
							      link : '/My-space/NominaAdmin/Cargos',
							      title: 'Cargos',
							      icon: 'nfc'
							    },
							    {
							      link : '/My-space/NominaAdmin/Empleados',
							      title: 'Empleados',
							      icon: 'supervisor_account'
							    }
							]
						};



	$scope.menu = 	[
					    {
					      link : '#/My-space/NominaAdmin',
					      title: 'Inicio',
					      icon: 'dashboard'
					    },
					    {
					      link : '#/My-space/NominaAdmin/Nomina',
					      title: 'Nomina',
					      icon: 'donut_small'
					    },
					    {
					      link : '#/My-space/NominaAdmin/Departamentos',
					      title: 'Departamentos',
					      icon: 'dns'
					    },
					    {
					      link : '/My-space/NominaAdmin/Cargos',
					      title: 'Cargos',
					      icon: 'extension'
					    }
					];
	$scope.menu2 = 	[
					    {
					      link : '#/My-space/NominaAdmin/Bancos',
					      title: 'Bancos',
					      icon: 'extension'
					    },
					    {
					      link : '#/My-space/NominaAdmin/Empleados',
					      title: 'Empleados',
					      icon: 'extension'
					    },
					    {
					      link : '/My-space/NominaAdmin/Listado_Empleado',
					      title: 'Lista Empleados',
					      icon: 'extension'
					    },
					    {
					      link : '#/My-space/NominaAdmin/Nomina_Pagos',
					      title: 'Generar Rol de Pagos',
					      icon: 'extension'
					    }
					];
	$scope.menu3 = 	[
					    {
					      link : '#/My-space/NominaAdmin/Listado_Roles',
					      title: 'Listar Rol de Pagos',
					      icon: 'extension'
					    }
					];
});
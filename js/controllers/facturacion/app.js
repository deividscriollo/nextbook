var app = angular.module('app');

app.controller('facturaciongeneralCtrl', function ($scope, $routeSegment, $mdDialog, $location, servicios) {
	
	// $scope.sidenav = 	{
	// 						menu1: [
	// 						    {
	// 						      link : '/My-space/Facturacion',
	// 						      title: 'Inicio',
	// 						      icon: 'dashboard'
	// 						    },
	// 						    {
	// 						      link : '/My-space/Facturacion/Parametros',
	// 						      title: 'Parametros',
	// 						      icon: 'assessment'
	// 						    },
	// 						    {
	// 						      link : '/My-space/Inventario/Modo_Adquisicion',
	// 						      title: 'Modo Adquisición',
	// 						      icon: 'dns'
	// 						    },
	// 						    {
	// 						      link : '/My-space/Inventario/Estado',
	// 						      title: 'Estado',
	// 						      icon: 'extension'
	// 						    }
	// 						],
	// 						menu2: [
	// 						    {
	// 						      link : '/My-space/Inventario/Ubicacion',
	// 						      title: 'Ubicación',
	// 						      icon: 'extension'
	// 						    },
	// 						    {
	// 						      link : '/My-space/Inventario/Motivos_Baja',
	// 						      title: 'Motivos Baja',
	// 						      icon: 'extension'
	// 						    },
	// 						    {
	// 						      link : '/My-space/Inventario/Articulo',
	// 						      title: 'Maestro Articulo',
	// 						      icon: 'extension'
	// 						    },
	// 						    {
	// 						      link : '/My-space/Inventario/Nomina_Pagos',
	// 						      title: 'Baja',
	// 						      icon: 'extension'
	// 						    }
	// 						]
	// 					};

	$scope.menu = 	[
					    {
					      link : '#/My-space/Facturacion',
					      title: 'Inicio',
					      icon: 'dashboard'
					    },
					    {
					      link : '#/My-space/Facturacion/Parametros',
					      title: 'Parametros',
					      icon: 'donut_small'
					    },
					    {
					      link : '#/My-space/Facturacion/Categorias',
					      title: 'Categorias',
					      icon: 'dns'
					    },
					    {
					      link : '#/My-space/Facturacion/Clientes',
					      title: 'Clientes',
					      icon: 'extension'
					    }
					];
					
	$scope.menu2 = 	[
					    {
					      link : '#/My-space/Facturacion/Productos',
					      title: 'Productos',
					      icon: 'extension'
					    },
					    {
					      link : '#/My-space/Facturacion/Proformas',
					      title: 'Proformas',
					      icon: 'extension'
					    },
					    {
					      link : '#/My-space/Facturacion/FacturaVenta',
					      title: 'Factura Compra',
					      icon: 'extension'
					    },
					    {
					      link : '#/My-space/Facturacion/DevolucionCompra',
					      title: 'Devolucion Compra',
					      icon: 'extension'
					    }
					];

	$scope.menu3 = 	[
					    {
					      link : '#/My-space/Facturacion/FacturaVenta',
					      title: 'Factura Venta',
					      icon: 'extension'
					    },
					    {
					      link : '#/My-space/Facturacion/Proformas',
					      title: 'Proformas',
					      icon: 'extension'
					    },
					    {
					      link : '#/My-space/Facturacion/FacturaVenta',
					      title: 'Factura Compra',
					      icon: 'extension'
					    },
					    {
					      link : '#/My-space/Facturacion/DevolucionCompra',
					      title: 'Devolucion Compra',
					      icon: 'extension'
					    }
					];
});
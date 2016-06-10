var app = angular.module('app').controller('seleccionar-empresa', function ($scope) {
	console.log('test');



	$scope.products = 	[
						  {
						    "sucursal": "KFC",
						    "codigo": "002",
						    "direccion": "PICHINCHA / QUITO / AV. MARISCAL SUCRE S/N Y EDMUNDO CARVAJAL",
						    "estado": "Abierto"
						  },
						  {
						    "sucursal": "KFC",
						    "codigo": "003",
						    "direccion": "PICHINCHA / QUITO / AV. MARISCAL SUCRE S/N Y EDMUNDO CARVAJAL",
						    "estado": "Abierto"
						  },
						  {
						    "sucursal": "KFC",
						    "codigo": "004",
						    "direccion": "PICHINCHA / QUITO / AV. REPUBLICA DEL SALVADOR N36-231 Y AV. NACIONES UNIDAS",
						    "estado": "Abierto"
						  },
						  {
						    "sucursal": "KFC",
						    "codigo": "005",
						    "direccion": "PICHINCHA / QUITO / AV. MALDONADO S/N",
						    "estado": "Abierto"
						  },
						  {
						    "sucursal": "KFC",
						    "codigo": "006",
						    "direccion": "PICHINCHA / QUITO / AV. AMAZONAS N36-156 Y NACIONES UNIDAS",
						    "estado": "Cerrado"
						  }
						];
});
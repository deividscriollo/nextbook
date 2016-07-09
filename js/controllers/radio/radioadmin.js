var app = angular.module('app');
app.controller('radioadminCtrl', function ($scope, $localStorage) {
	console.log('tesasdft');
});

app.controller('newCtrl', function ($scope, $localStorage) {
	$scope.appslist = 	[
							{
								title:'Empresa',
								descripcion:'descripcion'
							},
        					{
        						title:'Clientes',
        						descripcion:'descripcion'
        					},
        					{
        						title:'Programas',
        						descripcion:'descripcion'
        					},
        					{
        						title:'Vendedores',
        						descripcion:'descripcion'
        					},
        					{
        						title:'Fichas de Ingreso',
        						descripcion:'descripcion'
        					},
        					{
        						title:'Ficha Invitados',
        						descripcion:'descripcion'
        					},
        					{
        						title:'Ficha Programas',
        						descripcion:'descripcion'
        					},
        					{
        						title:'Contrato Selectivo',
        						descripcion:'descripcion'
        					},
        					{
        						title:'Contrato Rotativo',
        						descripcion:'descripcion'
        					},
        					{
        						title:'Facturacion',
        						descripcion:'descripcion'
        					},
        					{
        						title:'Rol de Pagos',
        						descripcion:'descripcion'
        					},
        					{
        						title:'Privilegios',
        						descripcion:'descripcion'
        					},

						];
});

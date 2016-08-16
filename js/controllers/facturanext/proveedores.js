var app = angular.module('app');

app.controller('proveedoresCtrl', function($mdDialog, $scope, serviciosfacturanext, servicios, $timeout, $localStorage) {
	$scope.guardar_proveedor = function(){
	  	serviciosfacturanext.add_proveedor().save($scope.data).$promise.then(function(data) {
	     	if(data.respuesta == true) {
		        $mdDialog.show(
		            $mdDialog.alert()
		            .parent(angular.element(document.querySelector('#dialogContainer')))
		            .clickOutsideToClose(true)
		            .title('NextBook')
		            .textContent('Registro Agregado Correctamente')
		            .ariaLabel('Registro Agregado Correctamente')
		            .ok('Ok!')
		            .openFrom('#left')
		        );
	      	}
	  	});
	}
});
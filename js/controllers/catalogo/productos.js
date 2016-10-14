var app = angular.module('app');

app.controller('Catalogo-Ctrl', function($mdDialog, $scope, servicioscatalogo, servicios, $timeout, $localStorage) {
	$scope.guardar_productos = function(){

	  	servicioscatalogo.add_productos().save($scope.data).$promise.then(function(data) {
	  		
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
	      	} else {
	      		if(data.respuesta == false) {
		      		$mdDialog.show(
			            $mdDialog.alert()
			            .parent(angular.element(document.querySelector('#dialogContainer')))
			            .clickOutsideToClose(true)
			            .title('NextBook')
			            .textContent('Clave de Acceso no Válida ')
			            .ariaLabel('Clave de Acceso no Válida')
			            .ok('Ok!')
			            .openFrom('#left')
			        );
			    }
	      	}
	  	});
	}
});
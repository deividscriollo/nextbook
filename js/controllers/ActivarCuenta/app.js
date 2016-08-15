var app = angular.module('app');
app.controller('activarcuentaCtrl', function ($routeSegment, servicios, $mdDialog, $location) {
	servicios.activar_cuenta().enviar($routeSegment.$routeParams).$promise.then(function(data){
		// console.log(data.respuesta);
		if (data.respuesta) {
			$mdDialog.show(
		      $mdDialog.alert()
		        .clickOutsideToClose(true)
		        .title('En Hora Buena')
		        .textContent('Su cuenta a sido activada satisfactoriamente')
		        .ok('Entendido')
		    ).then(function(result) {
		      	$location.path('#/Home')
		    });
		}else{
			$mdDialog.show(
		      $mdDialog.alert()
		        .clickOutsideToClose(true)
		        .title('Info')
		        .textContent('Esta cuenta ya se encuentra activada')
		        .ok('Entendido')
		    ).then(function(result) {
		      	$location.path('#/Home')
		    });
		}
	});
	
});
var app = angular.module('app');

app.controller('cambio-password', function ($scope, servicios, $location, $localStorage) {
	$scope.cambiar_datos = function() {

	    servicios.set_propietario().enviar($scope.data).$promise.then(function(data) {
			servicios.get_propietario().get().$promise.then(function(data) {
                $localStorage.datosPersona = data.datosP;
            });

	        if (data.respuesta) {
	        	$location.path('/SeleccionarSucursal');
	        }
	    });
	}


});
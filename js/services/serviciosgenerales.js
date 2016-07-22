var app=angular.module('app');
	app.service('serviciosgenerales', function($localStorage) {
		this.letra_cadena_mayuscula = function(cadena) {
			var cadena = cadena.toLowerCase();
			return cadena.charAt(0).toUpperCase() + cadena.slice(1);
		};
	});
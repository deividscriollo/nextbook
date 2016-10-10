var app = angular.module('app');

app.controller('Catalogo-Inicio-Ctrl', function($mdDialog, $scope, serviciosfacturanext, servicios, $timeout, $localStorage) {

	console.log('test');


	$('#magazine').turn({
							display: 'double',
							acceleration: true,
							gradients: !$.isTouch,
							elevation:50,
							when: {
								turned: function(e, page) {
									/*console.log('Current view: ', $(this).turn('view'));*/
								}
							}
						});
	
	$scope.atras = function() {
		$('#magazine').turn('previous');
	}

	$scope.siguiente = function() {
		$('#magazine').turn('next');
	}
});
var app = angular.module('app');

app.controller('Catalogo-Inicio-Ctrl', function($mdDialog, $scope, serviciosfacturanext, servicios, $timeout, $localStorage) {
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
});
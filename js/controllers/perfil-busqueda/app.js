var app = angular.module('app');
app.controller('perfil-busqueda-Ctrl', function($scope, $routeSegment, $routeParams, Perfil) {
	console.log('test perfil busqueda', $routeParams);
	

	Perfil.info_perfil_busqueda().get({ruc:$routeParams.id}).$promise.then(function(data){
		$scope.data = data.respuesta;
		console.log(data.respuesta);
	});
	// console.log('test');
	// selectedItemChange
});
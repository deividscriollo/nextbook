var app=angular.module('app');

app.controller('cambio-password', function ($scope, servicios,$location) {

$scope.cambiar_datos=function() {
  // console.log($scope.data);
    servicios.set_propietario().enviar($scope.data).$promise.then(function(data){
        console.log(data.respuesta);
        if (data.respuesta) {
        $location.path('/SeleccionarSucursal');
        }
    });
}

}

);
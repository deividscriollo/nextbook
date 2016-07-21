var app = angular.module('app');
app.controller('cliente', function ($scope, $localStorage, servicios) {
    // guardar clientes
    $scope.guardar_cliente = function() {
      servicios.add_cliente().save($scope.data).$promise.then(function(data) {
        if(data.respuesta == true) {
          alert('cliente guardado correctamente');        
          document.getElementById("clienteForm").reset();
        }
      });       
    }
    // fin

    // comparar clientes consulta service web
    $scope.comparar_cliente = function() {
      servicios.repeat_cliente().repeat($scope.data).$promise.then(function(data) {
        if(data.respuesta == true) {
          $scope.data.ruc_empresa = '';
          alert('repetido');
        } else {
          if (data.respuesta.datosEmpresa.valid == 'false' ) {
                  $scope.data.ruc_empresa = '';
                  alert('ruc incorrecto');
          } else {
              $scope.data.nombre_comercial = data.respuesta.datosEmpresa.nombre_comercial;
              $scope.data.actividad_economica = data.respuesta.datosEmpresa.actividad_economica;
              $scope.data.razon_social = data.respuesta.datosEmpresa.razon_social;
              $scope.data.representante_legal = data.respuesta.establecimientos.adicional.representante_legal;
              $scope.data.cedula_representante = data.respuesta.establecimientos.adicional.cedula;            
          } 
        }
      })
    }
});


var app = angular.module('app');
app.controller('clientes', function ($scope, $localStorage, servicios, $mdDialog) {

  $scope.status = '';

  // guardar clientes
  $scope.guardar_cliente = function() {
    servicios.add_cliente().save($scope.data).$promise.then(function(data) {
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
        $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#dialogContainer')))
            .clickOutsideToClose(true)
            .title('NextBook')
            .textContent('Error... Ruc Empresa Repetido')
            .ariaLabel('Error... Ruc Empresa Repetido')
            .ok('Ok!')
            .openFrom('#left')
        ); 
      } else {
        if (data.respuesta.datosEmpresa.valid == 'false' ) {
                $scope.data.ruc_empresa = '';
                $mdDialog.show(
                  $mdDialog.alert()
                  .parent(angular.element(document.querySelector('#dialogContainer')))
                  .clickOutsideToClose(true)
                  .title('NextBook')
                  .textContent('Error... Ruc Empresa Invalido')
                  .ariaLabel('Error... Ruc Empresa Invalido')
                  .ok('Ok!')
                  .openFrom('#left')
               );
                // alert('ruc incorrecto');
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


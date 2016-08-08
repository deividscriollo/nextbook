var app = angular.module('app');
app.controller('empleados', function ($scope, $localStorage, serviciosnomina, servicios, $mdDialog) {
  $scope.data = {
    cb1: true
  };

  $scope.status = '';

  // guardar empleados
  $scope.guardar_empleado = function() {
    serviciosnomina.add_empleado().save($scope.data).$promise.then(function(data) {
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
      }
    });       
  }
  // fin

  // comparar empleados consulta service web
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


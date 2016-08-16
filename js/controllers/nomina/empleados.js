var app = angular.module('app');
app.controller('empleados', function ($scope, $localStorage, serviciosnomina, servicios, $mdDialog, $location) {
  $scope.data = {};

  // codigo personal
  serviciosnomina.codigo_personal().get().$promise.then(function(data) {
    $scope.data.codigo_personal = data.codigo; 
  });
  // fin

  // combo nomina
  serviciosnomina.cmbnomina().get().$promise.then(function(data) {
    $scope.nominas = data.respuesta; 
  });
  // fin

  // combo nomina
  serviciosnomina.cmbdepartamento().get().$promise.then(function(data) {
    $scope.departamentos = data.respuesta; 
  });
  // fin

  // combo nomina
  serviciosnomina.cmbcargo().get().$promise.then(function(data) {
    $scope.cargos = data.respuesta; 
  });
  // fin

  // comparar empleados consulta service web
  $scope.comparar_empleado = function() {
    serviciosnomina.repeat_empleado().repeat($scope.data).$promise.then(function(data) {

      if(data.respuesta == true) {
        $scope.data.cedula_identificacion = '';
        $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#dialogContainer')))
            .clickOutsideToClose(true)
            .title('NextBook')
            .textContent('Error... Empleado ya Registrado')
            .ariaLabel('Error... Empleado ya Registrado')
            .ok('Ok!')
            .openFrom('#left')
        ); 
      } else {
        if (data.respuesta.valid == 'false' ) {
              $scope.data.cedula_identificacion = '';
              $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#dialogContainer')))
                .clickOutsideToClose(true)
                .title('NextBook')
                .textContent('Error... Cédula Invalida')
                .ariaLabel('Error... Cédula Invalida')
                .ok('Ok!')
                .openFrom('#left')
             );
        } else {
            $scope.data.nombres_completos = data.respuesta.nombres_apellidos;
            $scope.data.provincia = data.respuesta.provincia;
            $scope.data.parroquia = data.respuesta.parroquia;
            $scope.data.canton = data.respuesta.canton;          
        } 
      }
    })
  }

  $scope.cargar_imagen = function(data) {
    console.log(data);

  }
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
        $location.url("/My-space/NominaAdmin/Empleados");
      }
    });       
  }
  // fin
});


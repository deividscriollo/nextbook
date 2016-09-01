var app = angular.module('app');
app.controller('articuloCtrl', function ($scope, $localStorage, serviciosinventario, servicios, $mdDialog, $location) {
  $scope.data = {};

  $scope.query = {
    filter: '',
    num_registros: 5,
    pagina_actual:1,
    limit: '50',
    page_num: 1
  };

  // codigo personal
  serviciosinventario.codigo_articulo().get().$promise.then(function(data) {
    $scope.data.codigo = data.codigo; 
  });
  // fin

  // combo grupos
  serviciosinventario.get_grupos().get($scope.query).$promise.then(function(data) {
    $scope.grupos = data.respuesta.data; 
  });
  // fin

  // combo estado
  serviciosinventario.get_estado().get($scope.query).$promise.then(function(data) {
    $scope.estados = data.respuesta.data; 
  });
  // fin

  // combo nomina
  serviciosinventario.get_adquisicion().get($scope.query).$promise.then(function(data) {
    $scope.modo_adquisicions = data.respuesta.data; 
  });
  // fin

  // comparar empleados consulta service web
  $scope.comparar_empleado = function() {
    serviciosinventario.repeat_empleado().repeat($scope.data).$promise.then(function(data) {

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
    // console.log(data);

  }
  // guardar empleados
  $scope.guardar_articulo = function() {
    serviciosinventario.add_articulo().save($scope.data).$promise.then(function(data) {
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


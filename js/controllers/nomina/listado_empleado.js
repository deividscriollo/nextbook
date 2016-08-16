var app = angular.module('app');
app.factory("MyService", function() {
  return {
    datos: {}
  };
});

app.controller('listado_empleadoCtrl', function ($mdDialog, $scope, serviciosnomina, servicios, $timeout, $localStorage, $location, MyService) {   
    $scope.selected = [];

    $scope.iditem =  function (data) {
      serviciosnomina.get_empleados_modificar_id().send({id_empleado:data.id}).$promise.then(function(data) {
        MyService.datos = data;
        $location.url("/My-space/NominaAdmin/Modificar_Empleado");
     }); 
    }
  
    $scope.filter = {
      options: {
        debounce: 500
      }
    };

    $scope.query = {
      filter: '',
      num_registros: 5,
      pagina_actual:1,
      limit: '5',
      page_num: 1
    };
    
    $scope.getDesserts = function () {
      $scope.promise = serviciosnomina.get_empleados_modificar().get($scope.query, success).$promise;
    };

    function success(desserts) {
      $scope.desserts = desserts.respuesta;
      console.log('test');
    }
    
    $scope.removeFilter = function () {
      $scope.filter.show = false;
      $scope.query.filter = '';
      
      if($scope.filter.form.$dirty) {
        $scope.filter.form.$setPristine();
      }
    };

    $scope.$watch('query.filter', function (newValue, oldValue) {
      if(!oldValue) {
        bookmark = $scope.query.page_num;
      }
      
      if(newValue !== oldValue) {
        $scope.query.page_num = 1;
      }
      
      if(!newValue) {
        $scope.query.page_num = bookmark;
      }    
      $scope.getDesserts();
    });

    $scope.loadStuff = function () {
      $scope.promise = $timeout(function () {
        $scope.getDesserts;
      }, 2000);
    };
});





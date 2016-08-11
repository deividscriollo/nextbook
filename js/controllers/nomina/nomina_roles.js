var app = angular.module('app');
app.factory("MyService", function() {
  return {
    datos: {}
  };
});

app.controller('nomina_rolCtrl', function ($mdDialog, $scope, serviciosnomina, servicios, $timeout, $localStorage, $location, MyService) {
  $scope.data = {};
  $scope.data.nombres_completos = MyService.datos.name;

  console.log(MyService.datos.name);
   
  $scope.addititem = function (event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'searchItemEmpleado',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      templateUrl: 'view/dashboardempresa/nomina/buscar_empleado.html',
    }).then($scope.getDesserts);
  };

  $scope.data = {
      horas: "0",
      dias_laborados: "0",
      dias_no_laborados: "0",
      extras: "0",
      sueldo_mes: "0.000",
      horas_extras: "0.000",
      comisiones: "0.000",
      decimo_tercero: "0.000",
      decimo_cuarto: "0.000",
      total_ingresos: "0.000",
      aporte_iess: "0.000",
      quirografarios: "0.000",
      anticipos: "0.000",
      atrasos: "0.000",
      permisos: "0.000",
      faltas: "0.000",
      multas: "0.000",
      total_descuentos: "0.000",
      neto_pagar: "0.000"
    };

  // codigo personal
  serviciosnomina.codigo_rol().get().$promise.then(function(data) {
      $scope.data.codigo_rol = data.codigo; 
  });
  // fin

  // guardar rol pagos
  $scope.guardar_rol = function() {
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
});


  app.controller('searchItemEmpleado', function ($mdDialog, $scope, $location, serviciosnomina, servicios, $timeout, $localStorage, MyService) {
    // combo nomina
    serviciosnomina.cmbnomina().get().$promise.then(function(data) {
        $scope.nominas = data.respuesta; 
    });
    // fin 
    $scope.selected = [];
    this.cancel = $mdDialog.cancel

    $scope.update = function (id) {
      console.log(id);

    }

    $scope.iditem =  function (data) {
      serviciosnomina.get_datos_empleados().send({id_empleado:data.id}).$promise.then(function(data) {
        MyService.datos.name = data.respuesta.id;
        // console.log(data.respuesta.id);
        $location.url("/My-space/NominaAdmin/Rol_Pagos");
        // $location.path('/My-space/NominaAdmin');
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
    
    function success(desserts) {
      $scope.desserts = desserts.respuesta;
    }

    $scope.getDesserts = function () {
      $scope.promise = serviciosnomina.get_empleados().get($scope.query, success).$promise;
    };
    
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






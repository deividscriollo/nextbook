var app = angular.module('app');

app.controller('listaProveedoresCtrl', function($mdDialog, $scope, serviciosfacturanext, servicios, $timeout, $localStorage) {

  $scope.addititem = function (event) {

    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'addItemProveedor',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      templateUrl: 'view/dashboardempresa/facturanext/crear_proveedor.html',
    }).then($scope.getDesserts);
  };

  var bookmark;
  
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
    console.log(desserts);
  }
  
  $scope.getDesserts = function () {
    $scope.promise = serviciosfacturanext.get_proveedores().get($scope.query, success).$promise;
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

app.controller('addItemProveedor', function ($mdDialog, $scope, serviciosfacturanext, servicios, $timeout, $localStorage) {
  
  this.cancel = $mdDialog.cancel;
  $scope.comparar_proveedor = function() {
    serviciosfacturanext.repeat_proveedor().repeat($scope.data).$promise.then(function(data) {
      console.log(data);

      if(data.respuesta == false) {
        $scope.data.ruc = '';
        $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#dialogContainer')))
            .clickOutsideToClose(true)
            .title('NextBook')
            .textContent('Error... Empresa ya Registrada')
            .ariaLabel('Error... Empresa ya Registrada')
            .ok('Ok!')
            .openFrom('#left')
        ); 
      } else {
        if (data.respuesta.valid == 'false' ) {
              $scope.data.ruc = '';
              $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#dialogContainer')))
                .clickOutsideToClose(true)
                .title('NextBook')
                .textContent('Error... Ruc Invalido')
                .ariaLabel('Error... Ruc Invalido')
                .ok('Ok!')
                .openFrom('#left')
             );
        } else {
            $scope.data.razon_social = data.respuesta.razon_social;
            $scope.data.nombre_comercial = data.respuesta.nombre_comercial;
            $scope.data.actividad_economica = data.respuesta.actividad_economica;        
        } 
      }
    })
  }

  $scope.guardar_proveedor = function(){
    serviciosfacturanext.add_proveedor().save($scope.data).$promise.then(function(data) {
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
});
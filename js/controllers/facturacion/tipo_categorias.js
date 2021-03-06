var app = angular.module('app');

app.controller('editItemTipoCategorias', function () { });

app.controller('deleteItemTipoCategorias', function () { });

app.controller('Tipo_categorias-Ctrl', function($mdDialog, $scope, serviciosfacturacion, servicios, $timeout, $localStorage, $location) {
    
  var bookmark;
  $scope.selected = [];
  
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
    // console.log(desserts);
  }
  
  $scope.addititem = function (event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'addItemTipoCategorias',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      templateUrl: 'view/dashboardempresa/Facturacion/modales/crear_tipo_categorias.html',
    }).then($scope.getDesserts);
  };

  $scope.eddititem = function (dessert, event) {

    $mdDialog.show({
      clickOutsideToClose: true,     
      locals: {items: dessert},
      controller: function editItemTipoCategorias($mdDialog, $scope, serviciosfacturacion, servicios, $timeout, $localStorage, items) {

        $scope.data = {
          id: items.id,
          nombre: items.nombre,
          descripcion: items.descripcion   
        };

        this.cancel = $mdDialog.cancel 
        $scope.modificar_tipo_categorias = function($event) {
          serviciosfacturacion.edit_tipo_categorias().edit($scope.data).$promise.then(function(data) {
            if(data.respuesta == true) {
                $mdDialog.show(
                  $mdDialog.alert()
                  .parent(angular.element(document.querySelector('#dialogContainer')))
                  .clickOutsideToClose(true)
                  .title('NextBook')
                  .textContent('Registro Modificado Correctamente')
                  .ariaLabel('Registro Modificado Correctamente')
                  .ok('Ok!')
                  .openFrom('#left')
                );
            }
          }); 
        }
      },
      templateUrl: 'view/dashboardempresa/Facturacion/modales/modificar_tipo_categorias.html', 
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
    }).then($scope.getDesserts);
  };
  
  $scope.deleteitem = function (dessert, event) {
    $mdDialog.show({
      clickOutsideToClose: true,     
      locals: {items: dessert},
      controller: function deleteItemTipoCategorias($mdDialog, $scope, serviciosinventario, servicios, $timeout, $localStorage, items) {

      $scope.data = {}; 
      $scope.data.id = items.id;
      
      this.cancel = $mdDialog.cancel;
      $scope.eliminar_nomina = function() {
        servicios.login_radio().set($scope.data).$promise.then(function(data) {

          if(data.respuesta == true) {
              serviciosinventario.delete_nomina().delete($scope.data).$promise.then(function(data) {
                if(data.respuesta == true) {
                    $mdDialog.show(
                      $mdDialog.alert()
                      .parent(angular.element(document.querySelector('#dialogContainer')))
                      .clickOutsideToClose(true)
                      .title('NextBook')
                      .textContent('Registro Eliminado Correctamente')
                      .ariaLabel('Registro Eliminado Correctamente')
                      .ok('Ok!')
                      .openFrom('#left')
                   );
                }
            });
          } else {
            $mdDialog.show(
              $mdDialog.alert()
              .parent(angular.element(document.querySelector('#dialogContainer')))
              .clickOutsideToClose(true)
              .title('NextBook')
              .textContent('Contraseña Erronea')
              .ariaLabel('Contraseña Erronea')
              .ok('Ok!')
              .openFrom('#left')
            ); 
          }
        }); 
      } 
      },
      templateUrl: 'view/dashboardempresa/Facturacion/modales/eliminar_tipo_categorias.html', 
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
    }).then($scope.getDesserts);
  };
  
  $scope.getDesserts = function () {
    $scope.promise = serviciosfacturacion.get_tipo_categorias().get($scope.query, success).$promise;
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

app.controller('addItemTipoCategorias', function ($mdDialog, $scope, serviciosfacturacion, servicios, $timeout, $localStorage) { 
  this.cancel = $mdDialog.cancel;
  
  $scope.guardar_tipo_categorias = function() {
    console.log($scope.data);
    serviciosfacturacion.add_tipo_categorias().save($scope.data).$promise.then(function(data) {
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


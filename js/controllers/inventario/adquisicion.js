var app = angular.module('app');

app.controller('editItemAdquisicion', function () {});
app.controller('deleteAdquisicion', function () {});

app.controller('adquisicionCtrl', function ($mdDialog, $scope, serviciosinventario, servicios, $timeout, $localStorage) {

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
  }
  
  $scope.addititem = function (event) {

    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'addItemAdquisicion',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      templateUrl: 'view/dashboardempresa/inventario/modales/crear_adquisicion.html',
    }).then($scope.getDesserts);
  };

  $scope.eddititem = function (dessert, event) {

    $mdDialog.show({
      clickOutsideToClose: true,     
      locals: {items: dessert},
      controller: function editItemAdquisicion($mdDialog, $scope, serviciosinventario, servicios, $timeout, $localStorage, items) {

        $scope.data = {
          id: items.id,
          codigo: items.codigo,
          periodicidad: items.periodicidad,
          descripcion: items.descripcion,
          registro_patronal: items.registro_patronal,
          dias: parseInt(items.dias),
          horas_laborar: parseInt(items.horas_laborar),
          fecha_inicio: new Date(items.fecha_inicio)      
        };

        this.cancel = $mdDialog.cancel;
        $scope.modificar_nomina = function($event) {
          serviciosinventario.edit_nomina().edit($scope.data).$promise.then(function(data) {
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
      templateUrl: 'view/dashboardempresa/inventario/modales/modificar_grupo.html', 
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
    }).then($scope.getDesserts);
  };
  
  $scope.deleteitem = function (dessert, event) {
    $mdDialog.show({
      clickOutsideToClose: true,     
      locals: {items: dessert},
      controller: function deleteAdquisicion($mdDialog, $scope, serviciosinventario, servicios, $timeout, $localStorage, items) {

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
      templateUrl: 'view/dashboardempresa/inventario/modales/eliminar_grupo.html', 
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
    }).then($scope.getDesserts);
  };
  
  $scope.getDesserts = function () {
    $scope.promise = serviciosinventario.get_adquisicion().get($scope.query, success).$promise;
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

app.controller('addItemAdquisicion', function ($mdDialog, $scope, serviciosinventario, servicios, $timeout, $localStorage) {
  // codigo grupo
  serviciosinventario.codigo_adquisicion().get().$promise.then(function(data) {
    $scope.data = {
      codigo: data.codigo,
    }
  });
  // fin
  
  this.cancel = $mdDialog.cancel;
  $scope.guardar_adquisicion = function() {
    serviciosinventario.add_adquisicion().save($scope.data).$promise.then(function(data) {
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



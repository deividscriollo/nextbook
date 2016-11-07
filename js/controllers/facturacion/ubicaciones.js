var app = angular.module('app');

app.controller('Ubicaciones-Ctrl', function($mdDialog, $scope, serviciosfacturacion, servicios, $timeout, $localStorage, $location) {
    
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
      controller: 'addItemBancos',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      templateUrl: 'view/dashboardempresa/nomina/crear_banco.html',
    }).then($scope.getDesserts);
  };

  $scope.eddititem = function (data, event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'editItemBancos',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      templateUrl: 'view/dashboardempresa/nomina/modificar_nomina.html',
      locals: {items: data},
    }).then($scope.getDesserts);
  };
  
  $scope.deleteitem = function (data) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'deleteItemBancos',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      locals: {desserts: $scope.selected},
      templateUrl: 'view/dashboardempresa/nomina/eliminar_nomina.html',
      locals: {
        items: data
      }
    }).then($scope.getDesserts);
  };
  
  $scope.getDesserts = function () {
    // $scope.promise = serviciosfacturacion.get_bancos().get($scope.query, success).$promise;
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

app.controller('addItemBancos', function ($mdDialog, $scope, serviciosfacturacion, servicios, $timeout, $localStorage) { 
  this.cancel = $mdDialog.cancel;
  
  // $scope.guardar_banco = function() {
  //   serviciosfacturacion.add_banco().save($scope.data).$promise.then(function(data) {
  //     if(data.respuesta == true) {
  //         $mdDialog.show(
  //           $mdDialog.alert()
  //           .parent(angular.element(document.querySelector('#dialogContainer')))
  //           .clickOutsideToClose(true)
  //           .title('NextBook')
  //           .textContent('Registro Agregado Correctamente')
  //           .ariaLabel('Registro Agregado Correctamente')
  //           .ok('Ok!')
  //           .openFrom('#left')
  //        );
  //     }
  //   }); 
  // }  
});

app.controller('editItemBancos', function ($mdDialog, $scope, serviciosfacturacion, servicios, $timeout, $localStorage, items) {
  // $scope.data = {
  //   id: items.id,
  //   periodicidad: items.periodicidad,
  //   descripcion: items.descripcion,
  //   registro_patronal: items.registro_patronal,
  //   dias: items.dias,
  //   horas_laborar: items.horas_laborar,
  //   fecha_inicio: new Date(items.fecha_inicio)      
  // }; 
  
  // this.cancel = $mdDialog.cancel 
  // $scope.modificar_nomina = function($event) {
  //   serviciosnomina.edit_nomina().edit($scope.data).$promise.then(function(data) {
  //     if(data.respuesta == true) {
  //         $mdDialog.show(
  //           $mdDialog.alert()
  //           .parent(angular.element(document.querySelector('#dialogContainer')))
  //           .clickOutsideToClose(true)
  //           .title('NextBook')
  //           .textContent('Registro Modificado Correctamente')
  //           .ariaLabel('Registro Modificado Correctamente')
  //           .ok('Ok!')
  //           .openFrom('#left')
  //        );
  //     }
  //   }); 
  // }
});

app.controller('deleteItemBancos', function ($mdDialog, $scope, serviciosfacturacion, servicios, $timeout, $localStorage, items) { 
  // $scope.data = {}; 
  // $scope.data.id = items.id;
  
  // this.cancel = $mdDialog.cancel;
  // $scope.eliminar_nomina = function() {
  //   serviciosnomina.delete_nomina().delete($scope.data).$promise.then(function(data) {
  //     if(data.respuesta == true) {
  //         $mdDialog.show(
  //           $mdDialog.alert()
  //           .parent(angular.element(document.querySelector('#dialogContainer')))
  //           .clickOutsideToClose(true)
  //           .title('NextBook')
  //           .textContent('Registro Eliminado Correctamente')
  //           .ariaLabel('Registro Eliminado Correctamente')
  //           .ok('Ok!')
  //           .openFrom('#left')
  //        );
  //     }
  //   }); 
  // } 
	
});
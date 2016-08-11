var app = angular.module('app');
app.controller('departamentosCtrl', function ($mdDialog, $scope, serviciosnomina, servicios, $timeout, $localStorage) {

  var bookmark;
  $scope.status = '';
  
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
      controller: 'addItemDepartamento',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      templateUrl: 'view/dashboardempresa/nomina/crear_departamento.html',
    }).then($scope.getDesserts);
  };

  $scope.eddititem = function (data, event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'editItemDepartamento',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      templateUrl: 'view/dashboardempresa/nomina/modificar_departamento.html',
      locals: {
        items: data
      }
    }).then($scope.getDesserts);
  };
  
  $scope.deleteitem = function (data) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'deleteItemDepartamento',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      locals: {desserts: $scope.selected},
      templateUrl: 'view/dashboardempresa/nomina/eliminar_departamento.html',
      locals: {
        items: data
      }
    }).then($scope.getDesserts);
  };
  
  $scope.getDesserts = function () {
    $scope.promise = serviciosnomina.get_departamentos().get($scope.query, success).$promise;
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

    }, 2000);
  };
});

app.controller('addItemDepartamento', function ($mdDialog, $scope, serviciosnomina, servicios, $timeout, $localStorage) {
  // codigo departamentos
  serviciosnomina.codigo_departamento().get().$promise.then(function(data) {
    $scope.data = {
      codigo: data.codigo 
    }
  });
  // fin
 
  this.cancel = $mdDialog.cancel
  // $scope.guardar_departamento = function() {
  //   serviciosnomina.add_departamento().save($scope.data).$promise.then(function(data) {
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

app.controller('editItemDepartamento', function ($mdDialog, $scope, serviciosnomina, servicios, $timeout, $localStorage, items) {
  // $scope.data = {}; 

  // $scope.data.id = items.id;
  // $scope.data.codigo = items.codigo;
  // $scope.data.descripcion = items.descripcion;
  
  // this.cancel = $mdDialog.cancel 
  // $scope.modificar_departamento = function($event) {
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
  //         );
  //     }
  //   }); 
  // }
});

app.controller('deleteItemDepartamento', function ($mdDialog, $scope, serviciosnomina, servicios, $timeout, $localStorage, items) { 
  // $scope.data = {}; 
  // $scope.data.id = items.id;
  
  // this.cancel = $mdDialog.cancel;
  // $scope.eliminar_departamento = function() {
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

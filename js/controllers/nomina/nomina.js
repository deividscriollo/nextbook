var app = angular.module('app');
app.controller('nominaCtrl', function ($mdDialog, $scope, serviciosnomina, servicios, $timeout, $localStorage) {
  
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
      controller: 'addItemNomina',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      templateUrl: 'view/dashboardempresa/nomina/crear_nomina.html',
    }).then($scope.getDesserts);
  };

  $scope.eddititem = function (data, event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'editItemNomina',
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
      controller: 'deleteItemNomina',
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
    $scope.promise = serviciosnomina.get_nominas().get($scope.query, success).$promise;
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

app.controller('addItemNomina', function ($mdDialog, $scope, serviciosnomina, servicios, $timeout, $localStorage) {
  $scope.data = {}; 
  $scope.data.sucursal_nombre = $localStorage.sucursal.sucursal; 
  
  this.cancel = $mdDialog.cancel
  $scope.guardar_nomina = function() {
    serviciosnomina.add_nomina().save($scope.data).$promise.then(function(data) {
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

app.controller('editItemNomina', function ($mdDialog, $scope, serviciosnomina, servicios, $timeout, $localStorage, items) {
  $scope.data = {}; 

  $scope.data.id = items.id;
  $scope.data.periodicidad = items.periodicidad;
  $scope.data.descripcion = items.descripcion;
  $scope.data.registro_patronal = items.registro_patronal;
  $scope.data.dias = items.dias;
  if ($localStorage.sucursal.sucursal == "") {
      $scope.data.sucursal_nombre = "Principal";
  } else {
      $scope.data.sucursal_nombre = $localStorage.sucursal.sucursal;
  }

  $scope.data.fecha_inicio = new Date(items.fecha_inicio);
  
  this.cancel = $mdDialog.cancel 
  $scope.modificar_nomina = function($event) {
    serviciosnomina.edit_nomina().edit($scope.data).$promise.then(function(data) {
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
});

app.controller('deleteItemNomina', function ($mdDialog, $scope, serviciosnomina, servicios, $timeout, $localStorage, items) { 
  $scope.data = {}; 
  $scope.data.id = items.id;
  
  this.cancel = $mdDialog.cancel;
  $scope.eliminar_nomina = function() {
    serviciosnomina.delete_nomina().delete($scope.data).$promise.then(function(data) {
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
  } 
});

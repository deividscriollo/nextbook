var app = angular.module('app');
app.controller('nominaCtrl', function ($mdDialog, $nutrition, $scope, servicios, $timeout, $mdEditDialog, $q, $localStorage) {

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
      controller: 'addItemController',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      templateUrl: 'view/dashboardempresa/nomina/crear_nomina.html',
      clickOutsideToClose:true,
    }).then($scope.getDesserts);
  };

  $scope.eddititem = function (event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'addItemController',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      templateUrl: 'view/dashboardempresa/nomina/crear_nomina.html',
      clickOutsideToClose:true,
    }).then($scope.getDesserts);
  };
  
  $scope.deleteitem = function (event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'deleteController',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      locals: {desserts: $scope.selected},
      // templateUrl: 'view/tabladata/delete.html',
      templateUrl: 'view/dashboardempresa/nomina/eliminar_nomina.html',
    }).then($scope.getDesserts);
    console.log({desserts: $scope.selected});
  };
  
  $scope.getDesserts = function () {
    $scope.promise = $nutrition.get($scope.query, success).$promise;
  };
  
  $scope.removeFilter = function () {
    $scope.filter.show = false;
    $scope.query.filter = '';
    
    if($scope.filter.form.$dirty) {
      $scope.filter.form.$setPristine();
    }
  };
  'use strict';
  
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
    // order: 'nameToLower',
    page_num: 1
  };
  
  function success(desserts) {
    $scope.desserts = desserts.respuesta;
    console.log(desserts.respuesta);
  }
  
  
  $scope.getDesserts = function () {
    $scope.promise = $nutrition.get($scope.query, success).$promise;
  };
  
  $scope.removeFilter = function () {
    $scope.filter.show = false;
    $scope.query.filter = '';
    
    if($scope.filter.form.$dirty) {
      $scope.filter.form.$setPristine();
    }
  };

  $scope.loadStuff = function () {
    $scope.promise = $timeout(function () {

    }, 2000);
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
});

app.controller('deleteController', function ($authorize, desserts, $mdDialog, $nutrition, $scope, $q, servicios) {
  'use strict';
  
  this.cancel = $mdDialog.cancel;
  
  // function deleteDessert(dessert, index) {
  //   var deferred = $nutrition.desserts.remove({id: dessert._id});
    
  //   deferred.$promise.then(function () {
  //     desserts.splice(index, 1);
  //   });
    
  //   return deferred.$promise;
  // }
  
  // function onComplete() {
  //   $mdDialog.hide();
  // }
  
  // function error() {
  //   $scope.error = 'Invalid secret.';
  // }
  
  // function success() {
  //   $q.all(desserts.forEach(deleteDessert)).then(onComplete);
  // }
  
  // this.authorizeUser = function () {
  //   $authorize.get({secret: $scope.authorize.secret}, success, error);
  // };
});

app.controller('addItemController', function ($mdDialog, $scope, $localStorage, servicios, $timeout, $localStorage) {
  this.cancel = $mdDialog.cancel 
  
  $scope.guardar_nomina = function() {
    servicios.add_nomina().save($scope.data).$promise.then(function(data) {
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

  $scope.modificar_nomina = function() {
    servicios.edit_nomina().edit($scope.data).$promise.then(function(data) {
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

app.factory('$authorize', ['$resource', function ($resource) {
  'use strict';
  return $resource('https://infinite-earth-4803.herokuapp.com/authorize/:secret');
}]);

app.factory('$nutrition', function ($resource, $localStorage, servicios) {
  'use strict';
  var url_server = servicios.server().appnext();
  return $resource(url_server+'public/getNomina', {}
    ,{
      get: {
          method: 'GET', isArray: false, // responseType:'arraybuffer', 
          params: {
              token: $localStorage.token,
              codigo: $localStorage.sucursal.codigo
          }
      }
  });
});

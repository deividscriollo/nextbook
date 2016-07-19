var app = angular.module('app');
app.controller('radioadminCtrl', function($scope) {
    $scope.appslist =       [
                                {
                                        title:'Empresa',
                                        descripcion:'descripcion',
                                },
                                {
                                        title:'Clientes',
                                        descripcion:'descripcion'
                                },
                                {
                                        title:'Programas',
                                        descripcion:'descripcion'
                                },
                                {
                                        title:'Vendedores',
                                        descripcion:'descripcion'
                                },
                                {
                                        title:'Fichas de Ingreso',
                                        descripcion:'descripcion'
                                },
                                {
                                        title:'Ficha Invitados',
                                        descripcion:'descripcion'
                                },
                                {
                                        title:'Ficha Programas',
                                        descripcion:'descripcion'
                                },
                                {
                                        title:'Contrato Selectivo',
                                        descripcion:'descripcion'
                                },
                                {
                                        title:'Contrato Rotativo',
                                        descripcion:'descripcion'
                                },
                                {
                                        title:'Facturacion',
                                        descripcion:'descripcion'
                                },
                                {
                                        title:'Rol de Pagos',
                                        descripcion:'descripcion'
                                },
                                {
                                        title:'Privilegios',
                                        descripcion:'descripcion'
                                },
            ];            

});

app.controller('cliente', function ($scope, $localStorage, servicios) {
        // guardar clientes
        $scope.guardar_cliente = function() {
                servicios.add_cliente().save($scope.data).$promise.then(function(data) {
                        if(data.respuesta == true) {
                                alert('cliente guardado correctamente');        
                                document.getElementById("clienteForm").reset();
                        }
                });       
        }
        // fin

        // comparar clientes
        $scope.comparar_cliente = function() {
                servicios.repeat_cliente().repeat($scope.data).$promise.then(function(data) {
                        if(data.respuesta == true) {
                                $scope.data.ruc_empresa = '';
                                alert('repetido');
                        } else {
                                if (data.respuesta.datosEmpresa.valid == 'false' ) {
                                        $scope.data.ruc_empresa = '';
                                        alert('ruc incorrecto');
                                } else {
                                    $scope.data.nombre_comercial = data.respuesta.datosEmpresa.nombre_comercial;
                                    $scope.data.actividad_economica = data.respuesta.datosEmpresa.actividad_economica;
                                    $scope.data.razon_social = data.respuesta.datosEmpresa.razon_social;
                                    $scope.data.representante_legal = data.respuesta.establecimientos.adicional.representante_legal;
                                    $scope.data.cedula_representante = data.respuesta.establecimientos.adicional.cedula;            
                                } 
                        }
                })
        }
        // fin
});

app.controller('nomina', function ($mdDialog, $nutrition, $scope,servicios) {
  // 'use strict';
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
  }
  
  $scope.eddititem = function (event) {
    console.log(event);
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'addItemController',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      templateUrl: 'view/tabladata/add-item-dialog.html',
    }).then($scope.getDesserts);
  };
  
  $scope.delete = function (event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'deleteController',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      locals: { desserts: $scope.selected },
      templateUrl: 'view/tabladata/delete.html',
    }).then($scope.getDesserts);
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
  }
  
  $scope.eddititem = function (event) {
    console.log(event);
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'addItemController',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      templateUrl: 'view/tabladata/add-item-dialog.html',
    }).then($scope.getDesserts);
  };
  
  $scope.delete = function (event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'deleteController',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      locals: { desserts: $scope.selected },
      templateUrl: 'view/tabladata/delete.html',
    }).then($scope.getDesserts);
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

app.controller('deleteController', ['$authorize', 'desserts', '$mdDialog', '$nutrition', '$scope', '$q', function ($authorize, desserts, $mdDialog, $nutrition, $scope, $q) {
  'use strict';
  
  this.cancel = $mdDialog.cancel;
  
  function deleteDessert(dessert, index) {
    var deferred = $nutrition.desserts.remove({id: dessert._id});
    
    deferred.$promise.then(function () {
      desserts.splice(index, 1);
    });
    
    return deferred.$promise;
  }
  
  function onComplete() {
    $mdDialog.hide();
  }
  
  function error() {
    $scope.error = 'Invalid secret.';
  }
  
  function success() {
    $q.all(desserts.forEach(deleteDessert)).then(onComplete);
  }
  
  this.authorizeUser = function () {
    $authorize.get({secret: $scope.authorize.secret}, success, error);
  };
}]);

app.controller('addItemController', ['$mdDialog', '$nutrition', '$scope', function ($mdDialog, $nutrition, $scope) {
  'use strict';

  this.cancel = $mdDialog.cancel;
  
  function success(dessert) {
    $mdDialog.hide(dessert);
  }
  
  this.addItem = function () {
    $scope.item.form.$setSubmitted();
    
    if($scope.item.form.$valid) {
      $nutrition.desserts.save({dessert: $scope.dessert}, success);
    }
  };
}]);

app.factory('$authorize', ['$resource', function ($resource) {
  'use strict';
  return $resource('https://infinite-earth-4803.herokuapp.com/authorize/:secret');
}]);

app.factory('$nutrition', function ($resource, $localStorage) {
  'use strict';
  return $resource('http://192.168.100.17/appnext/public/getNomina', {}
    ,{
        get: {
            method: 'GET', isArray: false, // responseType:'arraybuffer', 
            params: {
                token: $localStorage.token
            }
        }
    });
});

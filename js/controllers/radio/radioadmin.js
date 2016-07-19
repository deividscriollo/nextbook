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

angular.module('app').controller('nomina', ['$http', '$mdEditDialog', '$q', '$timeout', '$scope', function ($http, $mdEditDialog, $q, $timeout, $scope) {
  'use strict';

  $scope.options = {
    rowSelection: true,
    multiSelect: true,
    autoSelect: true,
    decapitate: false,
    largeEditDialog: false,
    boundaryLinks: false,
    limitSelect: true,
    pageSelect: true
  };

  $scope.selected = [];
  $scope.limitOptions = [5, 10, 15, {
    label: 'All',
    value: function () {
      return $scope.desserts ? $scope.desserts.count : 0;
    }
  }];

  $scope.query = {
    order: 'name',
    limit: 5,
    page: 1
  };

  // for testing ngRepeat
  $scope.columns = [{
    name: 'Dessert',
    orderBy: 'name',
    unit: '100g serving'
  }, {
    descendFirst: true,
    name: 'Type',
    orderBy: 'type'
  }, {
    name: 'Calories',
    numeric: true,
    orderBy: 'calories.value'
  }, {
    name: 'Fat',
    numeric: true,
    orderBy: 'fat.value',
    unit: 'g'
  }, /* {
    name: 'Carbs',
    numeric: true,
    orderBy: 'carbs.value',
    unit: 'g'
  }, */ {
    name: 'Protein',
    numeric: true,
    orderBy: 'protein.value',
    trim: true,
    unit: 'g'
  }, /* {
    name: 'Sodium',
    numeric: true,
    orderBy: 'sodium.value',
    unit: 'mg'
  }, {
    name: 'Calcium',
    numeric: true,
    orderBy: 'calcium.value',
    unit: '%'
  }, */ {
    name: 'Iron',
    numeric: true,
    orderBy: 'iron.value',
    unit: '%'
  }, {
    name: 'Comments',
    orderBy: 'comment'
  }];

  $http.get('desserts.json').then(function (desserts) {
    $scope.desserts = desserts.data;

    // $scope.selected.push($scope.desserts.data[1]);

    // $scope.selected.push({
    //   name: 'Ice cream sandwich',
    //   type: 'Ice cream',
    //   calories: { value: 237.0 },
    //   fat: { value: 9.0 },
    //   carbs: { value: 37.0 },
    //   protein: { value: 4.3 },
    //   sodium: { value: 129.0 },
    //   calcium: { value: 8.0 },
    //   iron: { value: 1.0 }
    // });

    // $scope.selected.push({
    //   name: 'Eclair',
    //   type: 'Pastry',
    //   calories: { value:  262.0 },
    //   fat: { value: 16.0 },
    //   carbs: { value: 24.0 },
    //   protein: { value:  6.0 },
    //   sodium: { value: 337.0 },
    //   calcium: { value:  6.0 },
    //   iron: { value: 7.0 }
    // });

    // $scope.promise = $timeout(function () {
    //   $scope.desserts = desserts.data;
    // }, 1000);
  });

  $scope.editComment = function (event, dessert) {
    event.stopPropagation();

    var dialog = {
      // messages: {
      //   test: 'I don\'t like tests!'
      // },
      modelValue: dessert.comment,
      placeholder: 'Add a comment',
      save: function (input) {
        dessert.comment = input.$modelValue;
      },
      targetEvent: event,
      title: 'Add a comment',
      validators: {
        'md-maxlength': 30
      }
    };

    var promise = $scope.options.largeEditDialog ? $mdEditDialog.large(dialog) : $mdEditDialog.small(dialog);

    promise.then(function (ctrl) {
      var input = ctrl.getInput();

      input.$viewChangeListeners.push(function () {
        input.$setValidity('test', input.$modelValue !== 'test');
      });
    });
  };

  $scope.toggleLimitOptions = function () {
    $scope.limitOptions = $scope.limitOptions ? undefined : [5, 10, 15];
  };

  $scope.getTypes = function () {
    return ['Candy', 'Ice cream', 'Other', 'Pastry'];
  };

  $scope.onPaginate = function(page, limit) {
    console.log('Scope Page: ' + $scope.query.page + ' Scope Limit: ' + $scope.query.limit);
    console.log('Page: ' + page + ' Limit: ' + limit);

    $scope.promise = $timeout(function () {

    }, 2000);
  };

  $scope.deselect = function (item) {
    console.log(item.name, 'was deselected');
  };

  $scope.log = function (item) {
    console.log(item.name, 'was selected');
  };

  $scope.loadStuff = function () {
    $scope.promise = $timeout(function () {

    }, 2000);
  };

  $scope.onReorder = function(order) {

    console.log('Scope Order: ' + $scope.query.order);
    console.log('Order: ' + order);

    $scope.promise = $timeout(function () {

    }, 2000);
  };

}]);


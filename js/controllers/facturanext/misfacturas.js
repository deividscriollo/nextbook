var app = angular.module('app');

app.controller('misfacturasCtrl', function($mdDialog, $scope, serviciosfacturanext, servicios, $timeout, $localStorage) {

  $scope.data = {
    fecha_inicio: new Date(),
    fecha_fin: new Date() 
  }

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
    page_num: 1,
    fecha_inicio:'',
    fecha_fin:'',
    ordenarPor:''
  };
  
  $scope.filtrarititem=function(){
    $scope.query.fecha_inicio=$scope.data.fecha_inicio;
    $scope.query.fecha_fin=$scope.data.fecha_fin;
    $scope.query.ordenarPor=$scope.data.agrupar;
    $scope.getDesserts();
  }
  
   $scope.pdfititem=function(item){
    $scope.promise = serviciosfacturanext.gen_pdf().generar({iddocumento:item.id_factura}).$promise;
  }
  
  function success(desserts) {
    $scope.desserts = desserts.respuesta;
  }
  
  $scope.getDesserts = function () {
    $scope.promise = serviciosfacturanext.get_facturas().get($scope.query, success).$promise;
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
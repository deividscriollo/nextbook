var app = angular.module('app');

app.controller('FacturaVenta-Ctrl', function($mdDialog, $scope, servicioscatalogo, servicios, $timeout, $localStorage, $location, serviciosfacturacion) {
    	
	// combo tipo consumos
  	serviciosfacturacion.cmbtipoconsumo().get().$promise.then(function(data) {
    	$scope.tipo_consumos = data.respuesta; 
  	});
  	// fin

  	// combo tipo documentos
  	serviciosfacturacion.cmbtipodocumento().get().$promise.then(function(data) {
    	$scope.tipo_documentos = data.respuesta; 
  	});
  // fin

  	$scope.data = {
	    fecha_emision: new Date(),
	    feha_creacion: new Date() 
	}
   
    serviciosfacturacion.search_ruc().set().$promise.then(function(data) {
        $scope.items = data.respuesta;
    });

    this.cargar = function(data) {
        $scope.data.razon_social = data.razon_social;
        $scope.data.id_proveedor = data.id;
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
	    page_num: 1
	};
	  
	function success(desserts) {
	    $scope.desserts = desserts.respuesta;
	}
	  
	$scope.getDesserts = function () {
	    $scope.promise = serviciosfacturacion.get_proveedores().get($scope.query, success).$promise;
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
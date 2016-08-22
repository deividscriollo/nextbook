var app = angular.module('app');

app.controller('factutasFiCtrl', function($mdDialog, $scope, serviciosfacturanext, servicios, $timeout, $localStorage) {

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
	    // $scope.promise = serviciosnomina.get_nominas().get($scope.query, success).$promise;
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
var app = angular.module('app');

app.controller('factutasFiCtrl', function($mdDialog, $scope, serviciosfacturanext, servicios, $timeout, $localStorage) {

	var self = this;

	self.states        = loadAll();
    self.selectedItem  = null;
    self.searchText    = null;
    self.querySearch   = querySearch;

    function querySearch (query) {
      var results = query ? self.states.filter( createFilterFor(query) ) : self.states;
      var deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    }

    function loadAll() {
      var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

      return allStates.split(/, +/g).map( function (state) {
        return {
          value: state.toLowerCase(),
          display: state
        };
      });
    }

    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };
    }

	$scope.data = {
	    fecha_emision: new Date(),
	    feha_creacion: new Date() 
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
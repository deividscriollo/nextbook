var app = angular.module('app');
app.controller('dashboardCtrl', function($scope, $localStorage, servicios, $mdDialog, $mdMedia) {
    $scope.localStorage = $localStorage.datosE;

    if ($localStorage.sucursal.categoria == null) {
        // servicios.showModal('modal_select_sucursal_categoria.html', {
        //     states: ''
        // }, 'select_categoria_sucursal');
        
	    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
		    $mdDialog.show({
		      // controller: DialogController,
		      templateUrl: 'view/modales/modal_select_sucursal_categoria.html',
		      parent: angular.element(document.body),
		      // targetEvent: ev,
		      clickOutsideToClose:true,
		      fullscreen: useFullScreen
		    });
    }
});
// modal update dashboardCtrl

app.controller('update-informacion-Ctrl', function($scope, servicios, $mdDialog, $mdMedia, $timeout, $q, $log) {
 	console.log('test');
 	// servicios.set_categoria_sucursal().set( {
  //       codigo: $localStorage.sucursal.codigo, categoria: $scope.categoria
  //   }
    

    var self = this;

    self.simulateQuery = false;
    self.isDisabled    = false;

    // list of `state` value/display objects
    self.states        = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.states.filter( createFilterFor(query) ) : self.states,
          deferred;
      if (self.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
    }

    function searchTextChange(text) {
      $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
      $log.info('Item changed to ' + JSON.stringify(item));
    }

    /**
     * Build `states` list of key/value pairs
     */
    

    function loadAll() {
    	var x ='sad';
    	servicios.get_categorias_sucursal().get().$promise.then(function(data){
	    	x = data.categorias;
	    });
	    console.log(x);
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

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };

    }
});

app.controller('iniCtrl', function($scope, $localStorage) {
    // inicio 1

});

app.controller('dashboarinicioCtrl', function($scope, $localStorage) {
    // inicio 1
    $scope.localStorage = $localStorage.datosE;
});

// app.controller('quienes_somosCtrl', function($scope, $mdDialog, $http, $timeout) {

// });

app.controller('quienes_somosCtrl', function($mdDialog, $scope) {});
// app.controller('quienes_somosCtrl', function ($mdDialog, $nutrition, $scope) {
//   // 'use strict';

//   var bookmark;

//   $scope.selected = [];

//   $scope.filter = {
//     options: {
//       debounce: 500
//     }
//   };

//   $scope.query = {
//     filter: '',
//     num_registros: 5,
//     pagina_actual:1,
//     limit: '5',
//     // order: 'nameToLower',
//     page_num: 1
//   };

//   function success(desserts) {
//     $scope.desserts = desserts.respuesta;
//   }

//   $scope.eddititem = function (event) {
//     console.log(event);
//     $mdDialog.show({
//       clickOutsideToClose: true,
//       controller: 'addItemController',
//       controllerAs: 'ctrl',
//       focusOnOpen: false,
//       targetEvent: event,
//       templateUrl: 'view/tabladata/add-item-dialog.html',
//     }).then($scope.getDesserts);
//   };

//   $scope.delete = function (event) {
//     $mdDialog.show({
//       clickOutsideToClose: true,
//       controller: 'deleteController',
//       controllerAs: 'ctrl',
//       focusOnOpen: false,
//       targetEvent: event,
//       locals: { desserts: $scope.selected },
//       templateUrl: 'view/tabladata/delete.html',
//     }).then($scope.getDesserts);
//   };

//   $scope.getDesserts = function () {
//     $scope.promise = $nutrition.get($scope.query, success).$promise;
//   };

//   $scope.removeFilter = function () {
//     $scope.filter.show = false;
//     $scope.query.filter = '';

//     if($scope.filter.form.$dirty) {
//       $scope.filter.form.$setPristine();
//     }
//   };

//   $scope.$watch('query.filter', function (newValue, oldValue) {
//     if(!oldValue) {
//       bookmark = $scope.query.page_num;
//     }

//     if(newValue !== oldValue) {
//       $scope.query.page_num = 1;
//     }

//     if(!newValue) {
//       $scope.query.page_num = bookmark;
//     }    
//     $scope.getDesserts();
//   });
// });

// app.controller('deleteController', ['$authorize', 'desserts', '$mdDialog', '$nutrition', '$scope', '$q', function ($authorize, desserts, $mdDialog, $nutrition, $scope, $q) {
//   'use strict';

//   this.cancel = $mdDialog.cancel;

//   function deleteDessert(dessert, index) {
//     var deferred = $nutrition.desserts.remove({id: dessert._id});

//     deferred.$promise.then(function () {
//       desserts.splice(index, 1);
//     });

//     return deferred.$promise;
//   }

//   function onComplete() {
//     $mdDialog.hide();
//   }

//   function error() {
//     $scope.error = 'Invalid secret.';
//   }

//   function success() {
//     $q.all(desserts.forEach(deleteDessert)).then(onComplete);
//   }

//   this.authorizeUser = function () {
//     $authorize.get({secret: $scope.authorize.secret}, success, error);
//   };
// }]);

// app.controller('addItemController', ['$mdDialog', '$nutrition', '$scope', function ($mdDialog, $nutrition, $scope) {
//   'use strict';

//   this.cancel = $mdDialog.cancel;

//   function success(dessert) {
//     $mdDialog.hide(dessert);
//   }

//   this.addItem = function () {
//     $scope.item.form.$setSubmitted();

//     if($scope.item.form.$valid) {
//       $nutrition.desserts.save({dessert: $scope.dessert}, success);
//     }
//   };
// }]);

// app.factory('$authorize', ['$resource', function ($resource) {
//   'use strict';
//   return $resource('https://infinite-earth-4803.herokuapp.com/authorize/:secret');
// }]);

// app.factory('$nutrition', ['$resource', function ($resource) {
//   'use strict';
//   return $resource('http://192.168.100.17/appnext/public/getNomina', {}
//     ,{
//         get: {
//             method: 'GET', isArray: false, // responseType:'arraybuffer', 
//             params: {
//                 token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cLzE5Mi4xNjguMTAwLjE3XC9hcHBuZXh0XC9wdWJsaWNcL2xvZ2luIiwiaWF0IjoxNDY4ODYwNjMwLCJleHAiOjE0Njg4ODk0MzAsIm5iZiI6MTQ2ODg2MDYzMCwianRpIjoiZmZmZTU0YjgwOWE2ZmI3YTJlNTg3YTVhOTEzNDM5OTcifQ.MWZlLZdfn-abKuD7QjRyBnm8Fk9fEQ2cbSsobBc_D0Y'
//             }
//         }
//     });
// }]);
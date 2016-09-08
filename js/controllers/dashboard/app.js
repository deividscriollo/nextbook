var app = angular.module('app');

app.controller('dashboardCtrl', function ($mdDialog, $scope, $localStorage, servicios, $location, $mdSidenav, $timeout) {
    $scope.localStorage = $localStorage.datosE;

    console.log('test');

    if ($localStorage.sucursal.categoria == null || $localStorage.sucursal.categoria == '') {
    	$mdDialog.show({
    		clickOutsideToClose: true,
		    controller: 'modal_select_sucursal_categoriactrl',
		    controllerAs: 'ctrl',
		    focusOnOpen: false,
		    templateUrl: 'view/modales/modal_select_sucursal_categoria.html',
	    })
    }

    $scope.toggleSidenav = function(menuId) {
	    $mdSidenav(menuId).toggle();
	};

	$scope.menu = 	[
					    {
					      link : '/My-space/NominaAdmin',
					      title: 'Nomina General',
					      icon: 'dashboard'
					    },
					    {
					      link : '/My-space/Facturanext',
					      title: 'Facturanext',
					      icon: 'donut_small'
					    },
					    {
					      link : '/My-space/Inventario',
					      title: 'Inventario',
					      icon: 'widgets'
					    }
					];

	$scope.tabs =	[
						{icon:'home',title:'Inicio',link:'/My-space/Inicio'},
						{icon:'assignment',title:'Servicios',link:'/My-space/Apss'},
						{icon:'note_add',title:'Apps, Colección',link:''},
						{icon:'location_on',title:'Localizacion',link:''},
						{icon:'history',title:'Otras Empresas',link:''}
					];

		

    // $scope.tabs_chat = [
    //               {icon:'home',title:'Chat',link:'/My-space/Chat'},
    //               {icon:'assignment',title:'Nuevas Facturas',link:'/My-space/Facturanext/NuevasFacturas'},
    //             ];

	$scope.navigateTo = function(valor) {
		$location.path(valor);
	};

	$scope.tabnavigation = function(valor){
		$location.path(valor);
	}
});

app.controller('modal_select_sucursal_categoriactrl', function ($mdDialog, $scope, $localStorage, servicios, $location, $mdSidenav, $timeout) {
	$scope.data = {
		actividad_economica: $localStorage.datosE.actividad_economica
	};

	servicios.get_categorias_sucursal().get().$promise.then(function(data) {
        $scope.states = data.categorias;
    });

	this.cancel = $mdDialog.cancel;
	$scope.set_categoria = function() {
        servicios.set_categoria_sucursal().set($scope.data_cat).$promise.then(function(data) {
        	if(data.respuesta == true) {
        		$localStorage.sucursal.categoria = $scope.data_cat.categoria;
		        $mdDialog.show(
		            $mdDialog.alert()
		            .parent(angular.element(document.querySelector('#dialogContainer')))
		            .clickOutsideToClose(true)
		            .title('NextBook')
		            .textContent('Información Agregada Correctamente')
		            .ariaLabel('Información Agregada Correctamente')
		            .ok('Ok!')
		        );
		    }
        });
    }
});


app.controller('dashboarinicioCtrl', function($scope, $localStorage) {
    $scope.localStorage = $localStorage.datosE;
});


// app.controller('quienes_somosCtrl', function($scope, $mdDialog, $http, $timeout) {
	
// });

app.controller('quienes_somosCtrl', function ($mdDialog, $scope) {
});
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
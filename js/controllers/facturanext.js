var app = angular.module('app');
app.controller('facturanextCtrl', function($scope, servicios) {

});


app.controller('misfacturasCtrl', function($scope, servicios, facturanextservice, $http, $q,ModalService) {
	var t = $('#example').DataTable();
	facturanextservice.get().$promise.then(function(data) {
		for (var i = 0; i < data.misfacturas.length; i++) {
	  	  	t.row.add( [
	            // data.misfacturas[i].id_factura,
	            data.misfacturas[i].num_factura,
	            data.misfacturas[i].Ruc_prov,
	            data.misfacturas[i].ambiente = 2 ? "PRODUCCION" : "DESAROLLO",
	            data.misfacturas[i].fecha_emision,
	            data.misfacturas[i].nombre_comercial,
	            data.misfacturas[i].tipo_doc,
	            data.misfacturas[i].total,
	            '<a href="#/My-space/Facturanext/MisFacturas" onclick="angular.element(this).scope().show_Download_modal('+"'"+data.misfacturas[i].id_factura+"'"+')"><span class="icon text-green icon-lg">file_download</span></a>\
	            <a href="#/My-space/Facturanext/MisFacturas" onclick="angular.element(this).scope().show_Share_modal('+"'"+data.misfacturas[i].id_factura+"'"+')"><span class="icon text-green icon-lg">insert_link</span></a>\
	            <a href="#/My-space/Facturanext/MisFacturas" onclick="angular.element(this).scope().show_preview_modal('+"'"+data.misfacturas[i].id_factura+"'"+')"><span class="icon text-green icon-lg">visibility</span></a>'
        	] ).draw( false );
	  	}
	});

	$scope.show_Download_modal=function(data){
		servicios.showModal('modal_download.html',{source:data},'download');
	}
	$scope.show_Share_modal=function(data){
		servicios.showModal('modal_share.html',{source:data},'share');
	}
	$scope.show_preview_modal=function(data){
		servicios.showModal('modal_preview.html',{source:data},'preview');
	}
// $scope.show_Download_modal();

});
app.controller('FacturaCtrl', function($scope, servicios, facturanextservice) {

 // var vm = this;
 //    vm.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
 //        var defer = $q.defer();
 //        $http.get('data.json').then(function(result) {
 //            defer.resolve(result.data);
 //        });
 //        return defer.promise;
 //    }).withPaginationType('full_numbers');

 //    vm.dtColumns = [
 //        DTColumnBuilder.newColumn('id').withTitle('ID'),
 //        DTColumnBuilder.newColumn('firstName').withTitle('First name'),
 //        DTColumnBuilder.newColumn('lastName').withTitle('Last name').notVisible()
 //    ];

 // 	facturanextservice.misfacturas().salir()
 //                // then() called when son gets back
 //                .the(function(data) {
 //                	console.log(data);
 //                    // // promise fulfilled
 //                    // if (data.forecast==='good') {
 //                    //     prepareFishingTrip();
 //                    // } else {
 //                    //     prepareSundayRoastDinner();
 //                    // }
 //                }, function(error) {
 //                    // promise rejected, could log the error with: console.log('error', error);
 //                    // prepareSundayRoastDinner();
 //                    console.log(error);
 //                });


 //    // is the same as
	// var promise = facturanextservice.misfacturas().salir();

	// promise.then(
	//   function(payload) {
	//     console.log('test');
	//   });

});

app.controller('facturasrechasadas', function($mdDialog, $nutrition, $scope, servicios, $timeout, $mdEditDialog, $q) {

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
      templateUrl: 'view/tabladata/add-item-dialog.html',
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
      templateUrl: 'view/tabladata/add-item-dialog.html',
      clickOutsideToClose:true,
    })
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
  
  // $scope.delete = function (event) {
  //   $mdDialog.show({
  //     clickOutsideToClose: true,
  //     controller: 'deleteController',
  //     controllerAs: 'ctrl',
  //     focusOnOpen: false,
  //     targetEvent: event,
  //     locals: { desserts: $scope.selected },
  //     templateUrl: 'view/tabladata/delete.html',
  //   }).then($scope.getDesserts);
  // };
  
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

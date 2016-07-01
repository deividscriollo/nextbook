app.controller('facturanextCtrl', function($scope, servicios) {

});


app.controller('misfacturasCtrl', function($scope, servicios, facturanextservice, DTOptionsBuilder, DTColumnBuilder, $http, $q,ModalService) {

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
	            <a href="#/My-space/Facturanext/MisFacturas" ><span class="icon text-green icon-lg">insert_link</span></a>\
	            <a href="#/My-space/Facturanext/MisFacturas"><span class="icon text-green icon-lg">visibility</span></a>'
        	] ).draw( false );
	  	}
	});

	$scope.show_Download_modal=function(data){
		servicios.showModal('modal_download.html',{source:data},'download');
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
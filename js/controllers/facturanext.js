app.controller('facturanextCtrl', function($scope, servicios) {
	
});

app.controller('misfacturasCtrl', function($scope, servicios, facturanextservice, DTOptionsBuilder, DTColumnBuilder, $http, $q) {

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
	            "<button>Configuracion</button>"
        	] ).draw( false );
	  	}
	});

	$scope.btn_upload_file=function(){
		console.log('test btn-cargar archivo');
	}


	 $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
        return {abbrev: state};
      });

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
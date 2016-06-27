app.controller('facturanextCtrl', function($scope, servicios) {
	
});

app.controller('misfacturasCtrl', function($scope, servicios, facturanextservice) {
	facturanextservice.get().$promise.then(function(data) {
		console.log('test');
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
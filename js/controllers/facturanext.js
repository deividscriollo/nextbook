var app=angular.module('app').controller('FacturaCtrl', function ($scope,Facturas) {
    console.log('SMS from Factura Next');
$scope.readFacturas=function(){
    Facturas.get().$promise.then(function(data){
                console.log(data);
                    }, function(err){
                      console.log(err);
                        });
}

}

);
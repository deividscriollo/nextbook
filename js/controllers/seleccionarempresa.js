var app=angular.module('app').controller('seleccionar-empresa', function ($scope, Sucursaless, $location, $localStorage,Facturas) {
    Facturas.get();

    $scope.products=[];
    Sucursaless.get().$promise.then(function(data) {
        if (data.sucursales.length==1) {
            $scope.products.push( {
                "sucursal": data.sucursales[0].nombre_sucursal, "codigo": data.sucursales[0].codigo, "direccion": data.sucursales[0].direccion, "estado": data.sucursales[0].estado,"categoria": data.sucursales[0].categoria
            }
            );
            $localStorage.sucursal=$scope.products[0];
            $location.path('/My-space/Inicio');
        }
        else {
            for (var i=0; i < data.sucursales.length;i++) {
                $scope.products.push( {
                    "sucursal": data.sucursales[i].nombre_sucursal, "codigo": data.sucursales[i].codigo, "direccion": data.sucursales[i].direccion, "estado": data.sucursales[i].estado,"categoria": data.sucursales[i].categoria
                });
            }
        }
    }
    , function(err) {
        console.log(err);
    });
    $scope.SetSucursal=function($index) {
        $localStorage.sucursal=$scope.products[$index];
        $location.path('/My-space/Inicio');
    }
}

);
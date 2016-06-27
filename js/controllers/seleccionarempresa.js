var app=angular.module('app').controller('seleccionar-empresa', function ($scope, Sucursaless, $location, $localStorage,Facturas) {
    Facturas.get();

    $scope.products=[];
    Sucursaless.get().$promise.then(function(data) {
        if (data.sucursales.length==1) {
            $scope.products.push( {
                "sucursal": data.sucursales[0].nombre_sucursal, "codigo": data.sucursales[0].codigo, "direccion": data.sucursales[0].direccion, "estado": data.sucursales[0].estado,
            }
            );
            $localStorage.sucursal=$scope.products[0];
            $location.path('/My-space/Inicio');
        }
        else {
            for (var i=0; i < data.sucursales.length;i++) {
                $scope.products.push( {
                    "sucursal": data.sucursales[i].nombre_sucursal, "codigo": data.sucursales[i].codigo, "direccion": data.sucursales[i].direccion, "estado": data.sucursales[i].estado,
                }
                );
            }
        }
    }
    , function(err) {
        console.log(err);
    }
    );
    $scope.SetSucursal=function($index) {
        $localStorage.sucursal=$scope.products[$index];
    }
    // $scope.products = 	[
    // 					  {
    // 					    "sucursal": "KFC",
    // 					    "codigo": "002",
    // 					    "direccion": "PICHINCHA / QUITO / AV. MARISCAL SUCRE S/N Y EDMUNDO CARVAJAL",
    // 					    "estado": "Abierto"
    // 					  },
    // 					  {
    // 					    "sucursal": "KFC",
    // 					    "codigo": "003",
    // 					    "direccion": "PICHINCHA / QUITO / AV. MARISCAL SUCRE S/N Y EDMUNDO CARVAJAL",
    // 					    "estado": "Abierto"
    // 					  },
    // 					  {
    // 					    "sucursal": "KFC",
    // 					    "codigo": "004",
    // 					    "direccion": "PICHINCHA / QUITO / AV. REPUBLICA DEL SALVADOR N36-231 Y AV. NACIONES UNIDAS",
    // 					    "estado": "Abierto"
    // 					  },
    // 					  {
    // 					    "sucursal": "KFC",
    // 					    "codigo": "005",
    // 					    "direccion": "PICHINCHA / QUITO / AV. MALDONADO S/N",
    // 					    "estado": "Abierto"
    // 					  },
    // 					  {
    // 					    "sucursal": "KFC",
    // 					    "codigo": "006",
    // 					    "direccion": "PICHINCHA / QUITO / AV. AMAZONAS N36-156 Y NACIONES UNIDAS",
    // 					    "estado": "Cerrado"
    // 					  }
    // 					];
}

);
var app = angular.module('app');

app.service('serviciosfacturanext', function($resource, $localStorage, $location, ModalService, $http, servicios) {

	// ------------------------------------------------ Proveedor ------------------------------
	this.add_proveedor = function() {
        return $resource(servicios.server().appnext()+'public/addProveedor', {}
        , {
            save: {
                method: 'POST', isArray: false, 
                params: {
                    token: $localStorage.token, 
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };
    //--------------------------------------------------Fin-------------------------------------

    // ------------------------------------------------ Facturas Electronicas ------------------------------
    this.addFacElectronicas = function() {
        return $resource(servicios.server().appnext()+'public/uploadFactura', {}
        , {
            save: {
                method: 'POST', isArray: false, 
                params: {
                    token: $localStorage.token, 
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

    //--------------------------------------------------Fin-------------------------------------
});

var app = angular.module('app');

app.service('serviciosfacturacion', function($resource, $localStorage, $location, ModalService, $http, servicios) {

	// ------------------------------------------------ Proveedor -----------------------------
    this.search_ruc = function() {
        return $resource(servicios.server().appnext()+'public/getBuscarProveedor', {}
        , {
            set: {
                method: 'GET', isArray: false, 
                params: {
                    token: $localStorage.token
                }
            }
        });
    };

    this.get_proveedores = function() {
        return $resource(servicios.server().appnext()+'public/getProveedores', {}
        , {
            get: {
                method: 'GET', isArray: false, 
                params: {
                    token: $localStorage.token,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };
    //--------------------------------------------------Fin-------------------------------------

    this.cmbtipoconsumo = function() {
        return $resource(servicios.server().appnext()+'public/getGastos', {}
        , {
            get: {
                method: 'GET', isArray: false,
                params: {
                    token: $localStorage.token,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

    this.cmbtipodocumento = function() {
        return $resource(servicios.server().appnext()+'public/getTipoDocumentos', {}
        , {
            get: {
                method: 'GET', isArray: false,
                params: {
                    token: $localStorage.token,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };
});

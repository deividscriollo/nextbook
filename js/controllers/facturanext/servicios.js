var app = angular.module('app');

app.service('serviciosfacturanext', function($resource, $localStorage, $location, ModalService, $http, servicios) {

	// ------------------------------------------------ Proveedor -----------------------------
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

    // ------------------------------------------------ Facturas Electronicas ------------------
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

    this.get_facturas = function() {
        return $resource(servicios.server().appnext()+'public/getFacturas', {}
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

    //--------------------------------------------------Fin----------------------------------

    // ------------------------------------------------ Proveedores -------------------------
    this.repeat_proveedor = function() {
        return $resource(servicios.server().appnext()+'public/getProveedorbyRuc', {}
        ,{
            repeat: {
                method: 'GET', isArray: false,
                params: {
                    token: $localStorage.token,
                    sucursal: $localStorage.sucursal.codigo
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
    //--------------------------------------------------Fin-----------------------------------

    this.gen_pdf = function() {
        return $resource(servicios.server().appnext()+'public/pdf', {}
        , {
            generar: {
                method: 'GET', isArray: false, 
                params: {
                    token: $localStorage.token
                }
            }
        });
    };

    this.gen_xml = function() {
        return $resource(servicios.server().appnext()+'public/xml', {}
        , {
            generar: {
                method: 'GET', isArray: false, 
                params: {
                    token: $localStorage.token
                }
            }
        });
    };
});
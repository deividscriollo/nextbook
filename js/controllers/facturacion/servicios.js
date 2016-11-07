var app = angular.module('app');

app.service('serviciosfacturacion', function($resource, $localStorage, $location, ModalService, $http, servicios) {
    // ------------------------------------------------ tipo categorias ------------------------------
    this.add_tipo_categorias = function() {
        return $resource(servicios.server().appnext2()+'public/Add_Tipo_Categoria', {}
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

    this.edit_tipo_categorias = function() {
        return $resource(servicios.server().appnext()+'public/updateNomina', {}
        , {
            edit: {
                method: 'POST', isArray: false, 
                params: {
                    token: $localStorage.token, 
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

    this.delete_tipo_categorias = function() {
        return $resource(servicios.server().appnext()+'public/deleteNomina', {}
        , {
            delete: {
                method: 'POST', isArray: false, 
                params: {
                    token: $localStorage.token,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

    this.get_tipo_categorias = function() {
        return $resource(servicios.server().appnext()+'public/getNomina', {}
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
    // --------------------------------------- Fin ------------------------------------------------



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

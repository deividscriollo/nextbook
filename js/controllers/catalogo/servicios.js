var app = angular.module('app');

app.service('servicioscatalogo', function($resource, $localStorage, $location, ModalService, $http, servicios) {

	// guardar imagenes
    this.add_productos = function() {
        return $resource(servicios.server().appnext()+'public/addProducto', {}
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


    // ------------------------------------------------ Cargar Imagenes -----------------------------
	this.cargar_portada = function() {
        return $resource(servicios.server().appnext()+'public/getPortada', {}
        , {
            cargar: {
                method: 'GET', isArray: false, 
                params: {
                    token: $localStorage.token, 
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

// ------------------------------------------------ Cargar Imagenes -----------------------------
    this.get_last_code_prod = function() {
        return $resource(servicios.server().appnext()+'public/getLastCodeProd', {}
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

var app = angular.module('app');

app.service('servicioscatalogo', function($resource, $localStorage, $location, ModalService, $http, servicios) {

	// ------------------------------------------------ Proveedor -----------------------------
	this.cargar_portada = function() {
        return $resource(servicios.server().appnext()+'public/addPortada', {}
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


});
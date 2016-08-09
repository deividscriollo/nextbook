var app = angular.module('app');
app.service('serviciosradio', function($resource, $localStorage, $location, ModalService, $http, servicios) {

	// ------------------------------------------------ Clientes ---------------------------
    this.add_cliente=function() {
        return $resource(servicios.server().mod_radio()+'public/addCliente', {}
        ,{
            save: {
                method: 'POST', isArray: false,
                params: {
                    token: $localStorage.token
                }
            }
        });
    };
    
    this.repeat_cliente=function() {
        return $resource(servicios.server().mod_radio()+'public/buscarCliente', {}
        , {
            repeat: {
                method: 'GET', isArray: false,
                params: {
                    token: $localStorage.token
                }
            }
        });
    };
    // ------------------------------------------ Fin ---------------------------------------

});
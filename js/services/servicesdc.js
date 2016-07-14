var app=angular.module('app');
app.service('registros', function($resource, $localStorage, $location, ModalService, $http, servicios) {
	this.virificar_registro_existente = function() {
        var url_server=servicios.server().appnext();
	    return $resource(url_server+"public/buscarUsernext/:id", {}
        ,{
            query: {
                method: 'GET', isArray: false
            }
        });
    };
});
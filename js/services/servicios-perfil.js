// url service general server
var app=angular.module('app');
    app.service('Perfil', function($resource, $localStorage, $location, ModalService, $http) {
        this.LogoutE=function() {
            this.limpiarstorage();
            return $resource(this.server().appnext()+'public/logoutE', {}, {
                salir: {
                    method: 'POST', isArray: false, params: {
                        token: $localStorage.token
                    }
            }
        });
    };
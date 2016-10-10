// url service general server
var app=angular.module('app');
    app.service('Perfil', function($resource, $localStorage, $location, ModalService, $http, servicios) {
        this.LogoutE=function() {
            servicios.limpiarstorage();
            return $resource(servicios.server().appnext()+'public/logoutE', {}, {
                salir: {
                    method: 'POST', isArray: false, params: {
                        token: $localStorage.token
                    }
            }
            });
        }

        this.info_perfil_busqueda=function() {
            return $resource(servicios.server().appnext()+'public/getPerfilEmpresas', {}, {
                get: {
                    method: 'GET', isArray: false, 
                    params: {
                        token: $localStorage.token
                    }
                }
            });
        };
        this.nombre_= function() {
            return 'dc';
        }
            
    });
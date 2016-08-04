var app = angular.module('app');
app.service('serviciosnomina', function($resource, $localStorage, $location, ModalService, $http, servicios) {

    // ------------------------------------------------ Nómina ------------------------------
    this.add_nomina = function() {
        return $resource(servicios.server().mod_radio()+'public/addNomina', {}
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

    this.edit_nomina = function() {
        return $resource(servicios.server().mod_radio()+'public/updateNomina', {}
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

    this.delete_nomina = function() {
        return $resource(servicios.server().mod_radio()+'public/deleteNomina', {}
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

    this.get_nomina = function() {
        return $resource(servicios.server().mod_radio()+'public/getNomina', {}
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

    // ------------------------------------------------ Departamento ------------------------------
    this.add_departamento = function() {
        return $resource(servicios.server().mod_radio()+'public/addDepartamento', {}
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

    this.edit_departamento = function() {
        return $resource(servicios.server().mod_radio()+'public/updateDepartamento', {}
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

    this.delete_departamento = function() {
        return $resource(servicios.server().mod_radio()+'public/deleteDepartamento', {}
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

    this.get_departamentos = function() {
        return $resource(servicios.server().mod_radio()+'public/getDepartamentos', {}
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
    //----------------------- fin -----------------------------
});
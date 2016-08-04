var app = angular.module('app');
app.service('serviciosnomina', function($resource, $localStorage, $location, ModalService, $http, servicios) {

    // ------------------------------------------------ Nómina ------------------------------
    this.add_nomina=function() {
        return $resource(this.server().appnext()+'public/addNomina', {}
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

    this.edit_nomina=function() {
        return $resource(this.server().appnext()+'public/updateNomina', {}
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

    this.delete_nomina=function() {
        return $resource(this.server().appnext()+'public/deleteNomina', {}
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

    this.get_nomina=function() {
        return $resource(this.server().appnext()+'public/getNomina', {}
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
    this.add_departamento=function() {
        return $resource(this.server().appnext()+'public/addDepartamento', {}
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

    this.edit_departamento=function() {
        return $resource(this.server().appnext()+'public/updateDepartamento', {}
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

    this.delete_departamento=function() {
        return $resource(this.server().appnext()+'public/deleteDepartamento', {}
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

    this.get_departamentos=function() {
        return $resource(this.server().appnext()+'public/getDepartamentos', {}
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
var app = angular.module('app');
app.service('serviciosnomina', function($resource, $localStorage, $location, ModalService, $http, servicios) {

    // ------------------------------------------------ Nómina ------------------------------
    this.add_nomina = function() {
        return $resource(servicios.server().mod_radio()+'public/addNomina', {}
        , {
            save: {
                method: 'POST', isArray: false, 
                params: {
                    token: $localStorage.tokenradio, 
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
                    token: $localStorage.tokenradio, 
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
                    token: $localStorage.tokenradio,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

    this.get_nominas = function() {
        return $resource(servicios.server().mod_radio()+'public/getNomina', {}
        , {
            get: {
                method: 'GET', isArray: false, 
                params: {
                    token: $localStorage.tokenradio,
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
                    token: $localStorage.tokenradio,
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
                    token: $localStorage.tokenradio,
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
                    token: $localStorage.tokenradio,
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
                    token: $localStorage.tokenradio,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };
    //----------------------- fin -----------------------------

    // ------------------------------------------------ Cargo ------------------------------
    this.add_cargo = function() {
        return $resource(servicios.server().mod_radio()+'public/addCargo', {}
        , {
            save: {
                method: 'POST', isArray: false, 
                params: {
                    token: $localStorage.tokenradio,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

    this.edit_cargo = function() {
        return $resource(servicios.server().mod_radio()+'public/updateCargo', {}
        , {
            edit: {
                method: 'POST', isArray: false,
                params: {
                    token: $localStorage.tokenradio,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

    this.delete_cargo = function() {
        return $resource(servicios.server().mod_radio()+'public/deleteCargo', {}
        , {
            delete: {
                method: 'POST', isArray: false,  
                params: {
                    token: $localStorage.tokenradio,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

    this.get_cargos = function() {
        return $resource(servicios.server().mod_radio()+'public/getCargos', {}
        , {
            get: {
                method: 'GET', isArray: false, 
                params: {
                    token: $localStorage.tokenradio,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };
    //----------------------- fin -----------------------------

    // ------------------------------------------------ Empleado ------------------------------
    this.add_empleado = function() {
        return $resource(servicios.server().mod_radio()+'public/addEmpleado', {}
        , {
            save: {
                method: 'POST', isArray: false, 
                params: {
                    token: $localStorage.tokenradio,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

    this.cmbnomina = function() {
        return $resource(servicios.server().mod_radio()+'public/cmbNomina', {}
        , {
            get: {
                method: 'GET', isArray: false,
                params: {
                    token: $localStorage.tokenradio,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

    this.cmbdepartamento = function() {
        return $resource(servicios.server().mod_radio()+'public/cmbDepartamentos', {}
        ,{
            get: {
                method: 'GET', isArray: false,
                params: {
                    token: $localStorage.tokenradio,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

    this.cmbcargo = function() {
        return $resource(servicios.server().mod_radio()+'public/cmbCargos', {}
        ,{
            get: {
                method: 'GET', isArray: false,
                params: {
                    token: $localStorage.tokenradio,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

    this.codigo_personal = function() {
        return $resource(servicios.server().mod_radio()+'public/getCodpersonal', {}
        ,{
            get: {
                method: 'GET', isArray: false,
                params: {
                    token: $localStorage.tokenradio,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

    this.repeat_empleado = function() {
        return $resource(servicios.server().mod_radio()+'public/buscarEmpleado', {}
        ,{
            repeat: {
                method: 'GET', isArray: false,
                params: {
                    token: $localStorage.tokenradio,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };
    //----------------------- fin -----------------------------

    // ------------------------------------------------ Rol Pagos ------------------------------
    this.codigo_rol = function() {
        return $resource(servicios.server().mod_radio()+'public/getCodrol', {}
        ,{
            get: {
                method: 'GET', isArray: false,
                params: {
                    token: $localStorage.tokenradio,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

    // ------------------------------------------------ Cargo ------------------------------
    this.change_nomina = function() {
        return $resource(servicios.server().mod_radio()+'public/getEmpleadosByNomina', {}
        , {
            send: {
                method: 'POST', isArray: false, 
                params: {
                    token: $localStorage.tokenradio,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

    this.get_empleados = function() {
        return $resource(servicios.server().mod_radio()+'public/getEmpleados', {}
        , {
            get: {
                method: 'GET', isArray: false, 
                params: {
                    token: $localStorage.tokenradio,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

    this.get_datos_empleados = function() {
        return $resource(servicios.server().mod_radio()+'public/getEmpleadosById', {}
        , {
            send: {
                method: 'GET', isArray: false, 
                params: {
                    token: $localStorage.tokenradio,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

    //----------------------- fin -----------------------------
});
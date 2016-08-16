var app = angular.module('app');
app.service('serviciosnomina', function($resource, $localStorage, $location, ModalService, $http, servicios) {

    // ------------------------------------------------ Nómina ------------------------------
    this.codigo_nomina = function() {
        return $resource(servicios.server().mod_radio()+'public/getCodnomina', {}
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
    this.codigo_departamento = function() {
        return $resource(servicios.server().mod_radio()+'public/getCoddepartamento', {}
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
    this.codigo_cargos = function() {
        return $resource(servicios.server().mod_radio()+'public/getCodcargo', {}
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

    // ------------------------------------------------ Bancos ------------------------------
    this.add_banco = function() {
        return $resource(servicios.server().mod_radio()+'public/addBanco', {}
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

    // this.edit_cargo = function() {
    //     return $resource(servicios.server().mod_radio()+'public/updateCargo', {}
    //     , {
    //         edit: {
    //             method: 'POST', isArray: false,
    //             params: {
    //                 token: $localStorage.tokenradio,
    //                 sucursal: $localStorage.sucursal.codigo
    //             }
    //         }
    //     });
    // };

    // this.delete_cargo = function() {
    //     return $resource(servicios.server().mod_radio()+'public/deleteCargo', {}
    //     , {
    //         delete: {
    //             method: 'POST', isArray: false,  
    //             params: {
    //                 token: $localStorage.tokenradio,
    //                 sucursal: $localStorage.sucursal.codigo
    //             }
    //         }
    //     });
    // };

    this.get_bancos = function() {
        return $resource(servicios.server().mod_radio()+'public/getBancos', {}
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

    this.edit_empleado = function() {
        return $resource(servicios.server().mod_radio()+'public/updateEmpleado', {}
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
    this.add_rol_pagos = function() {
        return $resource(servicios.server().mod_radio()+'public/addRol', {}
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

    // llamar datos roles
    this.get_roles = function() {
        return $resource(servicios.server().mod_radio()+'public/getRoles', {}
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

    // llamar datos empleados
    this.get_empleados_modificar = function() {
        return $resource(servicios.server().mod_radio()+'public/getAllEmpleados', {}
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

    // llamar datos empleados id
    this.get_empleados_modificar_id = function() {
        return $resource(servicios.server().mod_radio()+'public/getDatosEmpleado', {}
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

    this.get_datos_roles = function() {
        return $resource(servicios.server().mod_radio()+'public/getDatosRolByID', {}
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

    this.edit_rol = function() {
        return $resource(servicios.server().mod_radio()+'public/updateRol', {}
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

    //----------------------- fin -----------------------------
});

var app = angular.module('app');
app.service('serviciosfacturacion', function($resource, $localStorage, $location, ModalService, $http, servicios) {

    // ------------------------------------------------ Tipo Categorias ------------------------------
    this.add_tipo_categorias = function() {
        return $resource(servicios.server().appnext2()+'public/Add_Tipo_Categoria', {}
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

    this.edit_tipo_categorias = function() {
        return $resource(servicios.server().appnext2()+'public/Update_Tipo_Categorias', {}
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

    this.delete_tipo_categorias = function() {
        return $resource(servicios.server().appnext2()+'public/deleteNomina', {}
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

    this.get_tipo_categorias = function() {
        return $resource(servicios.server().appnext2()+'public/Get_Tipo_Categorias', {}
        , {
            get: {
                method: 'POST', isArray: false, 
                params: {
                    token: $localStorage.token,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };
    // --------------------------------------- Fin ------------------------------------------------

    // ------------------------------------------------ Categorias ------------------------------
    this.add_categorias = function() {
        return $resource(servicios.server().appnext2()+'public/Add_Categoria', {}
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

    this.edit_categorias = function() {
        return $resource(servicios.server().appnext2()+'public/Update_Categoria', {}
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

    this.delete_categorias = function() {
        return $resource(servicios.server().appnext2()+'public/Delete_Categoria', {}
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

    this.get_categorias = function() {
        return $resource(servicios.server().appnext2()+'public/Get_Categorias', {}
        , {
            get: {
                method: 'POST', isArray: false, 
                params: {
                    token: $localStorage.token,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };
    // --------------------------------------- Fin ------------------------------------------------

    // ------------------------------------------------ Adquisicion ------------------------------
    this.codigo_adquisicion = function() {
        return $resource(servicios.server().appnext()+'public/ultimoCodemodo_adquisicion', {}
        ,{
            get: {
                method: 'GET', isArray: false,
                params: {
                    token: $localStorage.token,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

    this.add_adquisicion = function() {
        return $resource(servicios.server().appnext()+'public/addmodo_adquisicion', {}
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

    this.edit_adquisicion = function() {
        return $resource(servicios.server().appnext()+'public/updateNomina', {}
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

    this.delete_adquisicion = function() {
        return $resource(servicios.server().appnext()+'public/deleteNomina', {}
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

    this.get_adquisicion = function() {
        return $resource(servicios.server().appnext()+'public/getmodo_adquisiciones', {}
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

    // ------------------------------------------------ Estado ------------------------------
    this.codigo_estado = function() {
        return $resource(servicios.server().appnext()+'public/ultimoCodeestadobn', {}
        ,{
            get: {
                method: 'GET', isArray: false,
                params: {
                    token: $localStorage.token,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

    this.add_estado = function() {
        return $resource(servicios.server().appnext()+'public/addestadobn', {}
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

    this.edit_estado = function() {
        return $resource(servicios.server().appnext()+'public/updateNomina', {}
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

    this.delete_estado = function() {
        return $resource(servicios.server().appnext()+'public/deleteNomina', {}
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

    this.get_estado = function() {
        return $resource(servicios.server().appnext()+'public/getestadobnes', {}
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

    // ------------------------------------------------ Ubicación ------------------------------
    this.codigo_ubicacion = function() {
        return $resource(servicios.server().appnext()+'public/ultimoCodeUbicacion', {}
        ,{
            get: {
                method: 'GET', isArray: false,
                params: {
                    token: $localStorage.token,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

    this.add_ubicacion = function() {
        return $resource(servicios.server().appnext()+'public/addUbicacion', {}
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

    this.edit_ubicacion = function() {
        return $resource(servicios.server().appnext()+'public/updateNomina', {}
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

    this.delete_ubicacion = function() {
        return $resource(servicios.server().appnext()+'public/deleteNomina', {}
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

    this.get_ubicacion = function() {
        return $resource(servicios.server().appnext()+'public/getUbicaciones', {}
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

    // ------------------------------------------------ Motivos ------------------------------
    this.codigo_motivos = function() {
        return $resource(servicios.server().appnext()+'public/ultimoCodeMotivosBajas', {}
        ,{
            get: {
                method: 'GET', isArray: false,
                params: {
                    token: $localStorage.token,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

    this.add_motivos = function() {
        return $resource(servicios.server().appnext()+'public/addMotivosBajas', {}
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

    this.edit_motivos = function() {
        return $resource(servicios.server().appnext()+'public/updateNomina', {}
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

    this.delete_motivos = function() {
        return $resource(servicios.server().appnext()+'public/deleteNomina', {}
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

    this.get_motivos = function() {
        return $resource(servicios.server().appnext()+'public/getMotivosBajas', {}
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

    // ------------------------------------------------ Articulo ------------------------------
    this.codigo_articulo = function() {
        return $resource(servicios.server().appnext()+'public/ultimoCodeMaestroArticulo', {}
        ,{
            get: {
                method: 'GET', isArray: false,
                params: {
                    token: $localStorage.token,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

    this.add_articulo = function() {
        return $resource(servicios.server().appnext()+'public/addMaestroArticulo', {}
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

    this.edit_articulo = function() {
        return $resource(servicios.server().appnext()+'public/updateNomina', {}
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

    this.delete_articulo = function() {
        return $resource(servicios.server().appnext()+'public/deleteNomina', {}
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

    this.get_articulo = function() {
        return $resource(servicios.server().appnext()+'public/getMaestroArticulo', {}
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

  
});

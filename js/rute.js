var app = angular.module('app');
app.config(function($routeSegmentProvider, $routeProvider) {
        
        $routeSegmentProvider.options.autoLoadTemplates = true;
      
        $routeSegmentProvider
            .when('/salir/:id',          'salir')
            .when('/',          'sbuscar')
            .when('/Home',          's1')

            .when('/activarcuenta/:cuenta&:code&:correo',          'activarcuenta')
            // respuesta mensajeria
            .when('/Mensaje',    'mensaje')
            // procesos inicial
            .when('/Home/Inicio',    's1.inicio')
            .when('/Home/ParaTi',      's1.Parati')
            .when('/Home/ParaEmpresas',    's1.ParaEmpresas')
            .when('/Home/QuienesSomos',          's1.quienessomos')
            
            // segmentacion seleccion sucursal
            .when('/SeleccionarSucursal',      'selec-sucursal')
            .when('/CambioPass',      'cambio-pass-registro-persona')
            .when('/FacturaNext',      'factura-next')

            // dashboard general
            .when('/My-space',      'dashboard')
            .when('/My-space/Perfil-inicio',      'dashboard.perfil.inicio')
            .when('/My-space/Usuario',      'dashboard.perfil.apps')
            .when('/My-space/Mapasa',      'dashboard.perfil.maps')
            .when('/My-space/Biografia',      'dashboard.perfil.Historial')

            // Catalogo
            .when('/My-space/Catalogo',      'dashboard.catalogo')
            .when('/My-space/Productos',      'dashboard.productos')
            .when('/My-space/Detalles',      'dashboard.detalles')
            .when('/My-space/Portadas',      'dashboard.portadas')
            .when('/My-space/Perfil-busqueda/:id',      'dashboard.perfil-busqueda')

            .when('/My-space/Inicio',      'dashboard.ini.inicio')
            .when('/My-space/Apss',      'dashboard.ini.apps')
            .when('/My-space/Maps',      'dashboard.ini.maps')
            .when('/My-space/Historial',      'dashboard.ini.record')
            
            .when('/My-space/Facturanext',      'dashboard.facturanext.inicio')
            .when('/My-space/Facturanext/MisFacturas',      'dashboard.facturanext.misfacturas')
            .when('/My-space/Facturanext/BuscarFacturas',      'dashboard.facturanext.buscarfacturas')
            .when('/My-space/Facturanext/SubirFacturas',      'dashboard.facturanext.subirfactura')
            .when('/My-space/Facturanext/FacurasRechazadas',      'dashboard.facturanext.facturasrechasadas')
            .when('/My-space/Facturanext/FacturasFisicas',      'dashboard.facturanext.facturasfisicas')
            .when('/My-space/Facturanext/Listado_Proveedores',      'dashboard.facturanext.listado_proveedores')

            .when('/My-space/RadioAdmin',      'dashboard.radio.inicio')
            .when('/My-space/RadioAdmin/Clientes',      'dashboard.radio.clientes')

            .when('/My-space/Inventario',      'dashboard.inventario.inicio')
            .when('/My-space/Inventario/Grupo',      'dashboard.inventario.grupo')
            .when('/My-space/Inventario/Modo_Adquisicion',      'dashboard.inventario.adquisicion')
            .when('/My-space/Inventario/Estado',      'dashboard.inventario.estado')
            .when('/My-space/Inventario/Ubicacion',      'dashboard.inventario.ubicacion')
            .when('/My-space/Inventario/Motivos_Baja',      'dashboard.inventario.motivos_baja')
            .when('/My-space/Inventario/Articulo',      'dashboard.inventario.articulo')

            .when('/My-space/Facturacion',      'dashboard.facturacion.inicio')
            .when('/My-space/Facturacion/Parametros',      'dashboard.facturacion.parametros')
            .when('/My-space/Facturacion/Clientes',      'dashboard.facturacion.clientes')
            .when('/My-space/Facturacion/Marcas',      'dashboard.facturacion.marcas')
            .when('/My-space/Facturacion/Categorias',      'dashboard.facturacion.categorias')
            .when('/My-space/Facturacion/Garantias',      'dashboard.facturacion.garantias')
            .when('/My-space/Facturacion/Modelos',      'dashboard.facturacion.modelos')
            .when('/My-space/Facturacion/Tipo_Consumos',      'dashboard.facturacion.tipo_consumos')
            .when('/My-space/Facturacion/Tipo_Categorias',      'dashboard.facturacion.tipo_categorias')
            .when('/My-space/Facturacion/Tipo_Garantias',      'dashboard.facturacion.tipo_garantias')
            .when('/My-space/Facturacion/Tipo_Productos',      'dashboard.facturacion.tipo_productos')
            .when('/My-space/Facturacion/Ubicaciones',      'dashboard.facturacion.ubicaciones')
            .when('/My-space/Facturacion/Catalogos',      'dashboard.facturacion.catalogos')
            .when('/My-space/Facturacion/Tipo_Catalogos',      'dashboard.facturacion.tipo_catalogos')
            .when('/My-space/Facturacion/Productos',      'dashboard.facturacion.productos')
            .when('/My-space/Facturacion/FacturaVenta',      'dashboard.facturacion.factura_venta')

            // direccionar nomina
            .when('/My-space/NominaAdmin',      'dashboard.nomina.inicio')
            .when('/My-space/NominaAdmin/Nomina',      'dashboard.nomina.nomina')
            .when('/My-space/NominaAdmin/Departamentos',      'dashboard.nomina.departamentos')
            .when('/My-space/NominaAdmin/Cargos',      'dashboard.nomina.cargos')
            .when('/My-space/NominaAdmin/Bancos',      'dashboard.nomina.bancos')
            .when('/My-space/NominaAdmin/Empleados',      'dashboard.nomina.empleados')
            .when('/My-space/NominaAdmin/Listado_Empleado',      'dashboard.nomina.listado_empleado')
            .when('/My-space/NominaAdmin/Modificar_Empleado',      'dashboard.nomina.modificar_empleado')
            .when('/My-space/NominaAdmin/Nomina_Pagos',      'dashboard.nomina.personal_roles')
            .when('/My-space/NominaAdmin/Rol_Pagos',      'dashboard.nomina.rol_pagos')
            .when('/My-space/NominaAdmin/Listado_Roles',      'dashboard.nomina.listado_roles')
            .when('/My-space/NominaAdmin/Modificar_Rol',      'dashboard.nomina.modificar_rol')

            .segment('salir', {
                // templateUrl: 'view/home.html',
                controller: 'salirCtrl',
                dependencies: ['id']
            })
            .segment('activarcuenta', {
                // templateUrl: 'view/home.html',
                controller: 'activarcuentaCtrl',
                dependencies: ['cuenta','code', 'correo']
            })
            
            .segment('mensaje', {
                templateUrl: 'view/mensajes.html',
                // controller: 'mensajeCtrl',
            })
            // perfil general
            .segment('sbuscar', {
                templateUrl: 'view/buscar/index.html',
                controller: 'buscarCtrl'
            })
            .segment('s1', {
                templateUrl: 'view/home.html',
                controller: 'homeCtrl'
            })                
            .within()
                .segment('inicio', {
                    templateUrl: 'view/empresas.html'
                })
                .segment('ParaEmpresas', {
                    'default': true,
                    templateUrl: 'view/empresas.html',
                    controller: 'EmpresasCtrl'
                }) 
                .segment('Parati', {
                    templateUrl: 'view/parati.html',
                    controller: 'PersonasCtrl'
                })                    
                .segment('quienessomos', {
                    controller: 'quienes_somosCtrl',
                    templateUrl: 'view/quienessomos.html'})                    
            .up()
            .segment('selec-sucursal', {
                templateUrl: 'view/data/seleccionarempresa/index.html',
                controller: 'seleccionar-empresa'
            })
            .segment('cambio-pass-registro-persona', {
                templateUrl: 'view/data/cambiopass_registropersonaE/index.html',
                controller: 'cambio-password'
            })
            .segment('dashboard', {
                templateUrl: 'view/dashboardempresa/index.html',
                controller: 'dashboardCtrl'
            })
            .within()
                // inicio --------------------------------- esquema perfil busqueda------------------------------------//
                .segment('perfil-busqueda', {
                    templateUrl: 'view/dashboardempresa/perfil-busqueda/index.html',
                    controller: 'perfil-busqueda-Ctrl',
                    dependencies: ['id']
                })  
                .within()
                    .segment('inicio', {
                        templateUrl: 'view/empresas.html'
                    })
                    .segment('ParaEmpresas', {
                        'default': true,
                        templateUrl: 'view/empresas.html',
                        controller: 'EmpresasCtrl'
                    }) 
                    .segment('Parati', {
                        templateUrl: 'view/parati.html',
                        controller: 'PersonasCtrl'
                    })                    
                    .segment('quienessomos', {
                        controller: 'quienes_somosCtrl',
                        templateUrl: 'view/quienessomos.html'})                    
                .up()
                // Fin ----------------------------------- esquema perfil busqueda------------------------------------//
                // inicio --------------------------------- esquema ofertas------------------------------------//
                .segment('catalogo', {
                    templateUrl: 'view/dashboardempresa/catalogo/index.html',
                    // controller: 'Catalogo-Inicio-Ctrl'
                })
                .segment('productos', {
                    templateUrl: 'view/dashboardempresa/catalogo/catalogo.html',
                    // controller: 'Catalogo-Inicio-Ctrl'
                })
                .segment('detalles', {
                    templateUrl: 'view/dashboardempresa/catalogo/detalle.html',
                    // controller: 'Catalogo-Inicio-Ctrl'
                })
                .segment('portadas', {
                    templateUrl: 'view/dashboardempresa/catalogo/portada.html',
                    // controller: 'Catalogo-Inicio-Ctrl'
                })    
                .within()
                    .segment('inicio', {
                        templateUrl: 'view/empresas.html'
                    })
                    .segment('ParaEmpresas', {
                        'default': true,
                        templateUrl: 'view/empresas.html',
                        controller: 'EmpresasCtrl'
                    }) 
                    .segment('Parati', {
                        templateUrl: 'view/parati.html',
                        controller: 'PersonasCtrl'
                    })                    
                    .segment('quienessomos', {
                        controller: 'quienes_somosCtrl',
                        templateUrl: 'view/quienessomos.html'})                    
                .up()
                // Fin ----------------------------------- esquema ofertas------------------------------------//
                .segment('perfil', {
                    templateUrl: 'view/dashboardempresa/perfil.html',
                    controller: 'perfilCtrl'
                    // controller: 'perfilCtrl'
                })
                .within()
                    .segment('inicio', {
                        'default': true,
                        templateUrl: 'view/dashboardempresa/perfil/inicio1.html',
                        // controller: 'perfil-inicio-Ctrl'
                    })
                    .segment('apps', {
                        templateUrl: 'view/dashboardempresa/perfil/apps.html',
                        // controller: 'appsCtrl'
                    })
                    .segment('maps', {
                        templateUrl: 'view/dashboardempresa/perfil/maps.html',
                        controller: 'maps-inicio-Ctrl'
                    })
                    .segment('Historial', {
                        templateUrl: 'view/dashboardempresa/perfil/Historial.html',
                        // controller: 'recordCtrl'
                    })
                .up()
                .segment('ini', {
                    templateUrl: 'view/dashboardempresa/inicio.html',
                    controller: 'inicioCtrl'
                })
                .within()
                    .segment('inicio', {
                        'default': true,
                        templateUrl: 'view/dashboardempresa/inicio2.html',
                        // controller: 'appsCtrl'
                    })
                    .segment('apps', {
                        templateUrl: 'view/dashboardempresa/apps.html',
                        controller: 'appsCtrl'
                    })
                    .segment('maps', {
                        templateUrl: 'view/dashboardempresa/maps.html',
                        // controller: 'appsCtrl'
                    })
                    .segment('record', {
                        templateUrl: 'view/dashboardempresa/record.html',
                        // controller: 'recordCtrl'
                    })
                .up()
                .segment('facturanext', {
                    templateUrl: 'view/dashboardempresa/facturanext/index.html',
                    controller: 'facturanextCtrl',
                    'default': true
                })
                .within()
                    .segment('inicio', {
                        // 'default': true,
                        templateUrl: 'view/dashboardempresa/facturanext/inicio.html',
                        // controller: 'appsCtrl'
                    })
                    .segment('misfacturas', {
                        // 'default': true,
                        templateUrl: 'view/dashboardempresa/facturanext/misfacturas.html',
                        // controller: 'misfacturasCtrl'
                    })
                    .segment('buscarfacturas', {
                        // 'default': true,
                        templateUrl: 'view/dashboardempresa/facturanext/buscarfacturas.html',
                        // controller: 'misfacturasCtrl'
                    })
                    .segment('subirfactura', {
                        // 'default': true,
                        templateUrl: 'view/dashboardempresa/facturanext/subirfactura.html',
                        // controller: 'SubirFacCtrl'
                    })
                    .segment('facturasrechasadas', {
                        // 'default': true,
                        templateUrl: 'view/dashboardempresa/facturanext/facturasrechasadas.html',
                        // controller: 'appsCtrl'
                    })
                    .segment('facturasfisicas', {
                        // 'default': true,
                        templateUrl: 'view/dashboardempresa/facturanext/facturasfisicas.html',
                        // controller: 'appsCtrl'
                    })
                    .segment('listado_proveedores', {
                        // 'default': true,
                        templateUrl: 'view/dashboardempresa/facturanext/listado_proveedores.html',
                        // controller: 'proveedoresCtrl'
                    })
                .up()
                .segment('inventario', {                 
                    templateUrl: 'view/dashboardempresa/inventario/index.html',
                    controller:'inventariogeneralCtrl',
                    'default': true,
                })                   
                .within()                
                    .segment('inicio', {
                        templateUrl: 'view/dashboardempresa/inventario/inicio.html',
                    })  
                    .segment('grupo', {
                        templateUrl: 'view/dashboardempresa/inventario/grupo.html'
                    })
                    .segment('adquisicion', {
                        templateUrl: 'view/dashboardempresa/inventario/adquisicion.html'
                    })
                    .segment('estado', {
                        templateUrl: 'view/dashboardempresa/inventario/estado.html'
                    })
                    .segment('ubicacion', {
                        templateUrl: 'view/dashboardempresa/inventario/ubicacion.html'
                    })
                    .segment('motivos_baja', {
                        templateUrl: 'view/dashboardempresa/inventario/motivos_baja.html'
                    })
                    .segment('articulo', {
                        templateUrl: 'view/dashboardempresa/inventario/articulo.html'
                    })
                .up()

                .segment('facturacion', {                 
                    templateUrl: 'view/dashboardempresa/facturacion/index.html',
                    controller:'facturaciongeneralCtrl',
                    'default': true,
                })                   
                .within()                
                    .segment('inicio', {
                        templateUrl: 'view/dashboardempresa/facturacion/inicio.html',
                    })  
                    .segment('parametros', {
                        templateUrl: 'view/dashboardempresa/facturacion/parametros.html'
                    })
                    .segment('clientes', {
                        templateUrl: 'view/dashboardempresa/facturacion/clientes.html'
                    })
                    .segment('categorias', {
                        templateUrl: 'view/dashboardempresa/facturacion/categorias.html'
                    })
                    .segment('marcas', {
                        templateUrl: 'view/dashboardempresa/facturacion/marcas.html'
                    })
                    .segment('garantias', {
                        templateUrl: 'view/dashboardempresa/facturacion/garantias.html'
                    })
                    .segment('modelos', {
                        templateUrl: 'view/dashboardempresa/facturacion/modelos.html'
                    })
                    .segment('tipo_consumos', {
                        templateUrl: 'view/dashboardempresa/facturacion/tipo_consumos.html'
                    })
                    .segment('tipo_categorias', {
                        templateUrl: 'view/dashboardempresa/facturacion/tipo_categorias.html'
                    })
                    .segment('tipo_garantias', {
                        templateUrl: 'view/dashboardempresa/facturacion/tipo_garantias.html'
                    })
                    .segment('tipo_productos', {
                        templateUrl: 'view/dashboardempresa/facturacion/tipo_productos.html'
                    })
                    .segment('ubicaciones', {
                        templateUrl: 'view/dashboardempresa/facturacion/ubicaciones.html'
                    })
                    .segment('catalogos', {
                        templateUrl: 'view/dashboardempresa/facturacion/catalogos.html'
                    })
                    .segment('tipo_catalogos', {
                        templateUrl: 'view/dashboardempresa/facturacion/tipo_catalogos.html'
                    })
                    .segment('productos', {
                        templateUrl: 'view/dashboardempresa/facturacion/productos.html'
                    })
                    .segment('factura_venta', {
                        templateUrl: 'view/dashboardempresa/facturacion/factura_venta.html'
                    })
                    // .segment('articulo', {
                    //     templateUrl: 'view/dashboardempresa/facturacion/articulo.html'
                    // })
                .up()

                // .segment('radio', {                 
                //     templateUrl: 'view/dashboardempresa/radio/index.html',
                //     'default': true,
                // })                   
                // .within()                
                //     .segment('inicio', {
                //         templateUrl: 'view/dashboardempresa/radio/inicio.html',
                //     })  
                //     .segment('clientes', {
                //         templateUrl: 'view/dashboardempresa/radio/clientes.html'
                //     })                    
                // .up()
                .segment('nomina', {                 
                    templateUrl: 'view/dashboardempresa/nomina/index.html',
                    controller:'nominageneralCtrl',
                    'default': true
                })
                .within()
                    .segment('inicio', {
                        templateUrl: 'view/dashboardempresa/nomina/inicio.html',
                    })  
                    .segment('nomina', {
                        templateUrl: 'view/dashboardempresa/nomina/nomina.html',
                    })
                    .segment('departamentos', {
                        templateUrl: 'view/dashboardempresa/nomina/departamentos.html',
                    })
                    .segment('cargos', {
                        templateUrl: 'view/dashboardempresa/nomina/cargos.html',
                    })
                    .segment('bancos', {
                        templateUrl: 'view/dashboardempresa/nomina/bancos.html',
                    })
                    .segment('empleados', {
                        templateUrl: 'view/dashboardempresa/nomina/empleados.html',
                    })
                    .segment('listado_empleado', {
                        templateUrl: 'view/dashboardempresa/nomina/listado_empleado.html',
                    })
                    .segment('modificar_empleado', {
                        templateUrl: 'view/dashboardempresa/nomina/modificar_empleado.html',
                    })
                    .segment('personal_roles', {
                        templateUrl: 'view/dashboardempresa/nomina/personal_roles.html',
                    })
                    .segment('rol_pagos', {
                        templateUrl: 'view/dashboardempresa/nomina/rol_pagos.html',
                    })
                    .segment('listado_roles', {
                        templateUrl: 'view/dashboardempresa/nomina/listado_roles.html',
                    })
                    .segment('modificar_rol', {
                        templateUrl: 'view/dashboardempresa/nomina/modificar_rol.html',
                    })
                .up()   
            .up()
        // $routeProvider.otherwise({redirectTo: '/'}); 
    });

    app.value('loader', {show: false});

    app.controller('Section1Ctrl', function($scope, $routeSegment) {
        
        $scope.$routeSegment = $routeSegment;
        $scope.test = { btnClicked: false };
        $scope.items = [ 1,2,3,4,5 ];
    });

    app.controller('Section1ItemCtrl', function($scope, $routeSegment) {

        $scope.$routeSegment = $routeSegment;
        $scope.item = { id: $routeSegment.$routeParams.id };
        $scope.test = { textValue: '' };
    });

    app.controller('Section2Ctrl', function($scope, $routeSegment) {

        $scope.$routeSegment = $routeSegment;
        $scope.test = { textValue: '' };
        $scope.items = [ 1,2,3,4,5,6,7,8,9 ];
    });

    app.controller('ErrorCtrl', function($scope, error) {
        $scope.error = error;
    });

    app.controller('SlowDataCtrl', function($scope, data, loader) {
        loader.show = false;
        $scope.data = data;
    });
    app.controller('salirCtrl', function($scope, servicios, $localStorage) {
        console.log('test');
            servicios.LogoutE();    
    });
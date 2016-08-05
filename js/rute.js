app.config(function($routeSegmentProvider, $routeProvider) {
        
        // Configuring provider options
        
        $routeSegmentProvider.options.autoLoadTemplates = true;
      
        $routeSegmentProvider
            .when('/salir/:id',          'salir')
            .when('/',          'sbuscar')
            .when('/Home',          's1')
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
                .when('/My-space/Inicio',      'dashboard.ini.inicio')
                    .when('/My-space/Apss',      'dashboard.ini.apps')
                    .when('/My-space/Maps',      'dashboard.ini.maps')
                    .when('/My-space/Historial',      'dashboard.ini.record')

                .when('/My-space/Facturanext',      'dashboard.facturanext.inicio')
                    .when('/My-space/Facturanext/MisFacturas',      'dashboard.facturanext.misfacturas')
                    .when('/My-space/Facturanext/SubirFacturas',      'dashboard.facturanext.subirfactura')
                    .when('/My-space/Facturanext/FacurasRechazadas',      'dashboard.facturanext.facturasrechasadas')
                    .when('/My-space/Facturanext/FacturasFisicas',      'dashboard.facturanext.facturasfisicas')
                    .when('/My-space/Facturanext/Proveedores',      'dashboard.facturanext.proveedores')

                .when('/My-space/RadioAdmin',      'dashboard.radio.inicio')
                .when('/My-space/RadioAdmin/Clientes',      'dashboard.radio.clientes')

                // direccionar nomina
                .when('/My-space/NominaAdmin',      'dashboard.nomina.inicio')
                .when('/My-space/NominaAdmin/Nomina',      'dashboard.nomina.nomina')
                .when('/My-space/NominaAdmin/Departamentos',      'dashboard.nomina.departamentos')
                .when('/My-space/NominaAdmin/Cargos',      'dashboard.nomina.cargos')

            .segment('salir', {
                // templateUrl: 'view/home.html',
                controller: 'salirCtrl',
                dependencies: ['id']
            })
            .segment('mensaje', {
                templateUrl: 'view/mensajes.html',
                controller: 'mensajeCtrl',
            })
            // perfil general            
            .segment('sbuscar', {
                templateUrl: 'view/buscar.html',
                controller: 'MainCtrl'})
            .segment('s1', {
                templateUrl: 'view/home.html',
                controller: 'MainCtrl'})
                
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
                .segment('perfil', {
                    templateUrl: 'view/dashboardempresa/perfil.html',
                    controller: 'perfilCtrl'
                    // controller: 'perfilCtrl'
                })
                .within()
                    .segment('inicio', {
                        'default': true,
                        templateUrl: 'view/dashboardempresa/perfil/inicio1.html',
                        controller: 'perfil-inicio-Ctrl'
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
                    // controller: 'inicioCtrl'
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
                    controller: 'facturanextCtrl'
                })
                .within()
                    .segment('inicio', {
                        'default': true,
                        templateUrl: 'view/dashboardempresa/facturanext/inicio.html',
                        // controller: 'appsCtrl'
                    })
                    .segment('misfacturas', {
                        'default': true,
                        templateUrl: 'view/dashboardempresa/facturanext/misfacturas.html',
                        controller: 'misfacturasCtrl'
                    })
                    .segment('subirfactura', {
                        'default': true,
                        templateUrl: 'view/dashboardempresa/facturanext/subirfactura.html',
                        controller: 'SubirFacCtrl'
                    })
                    .segment('facturasrechasadas', {
                        'default': true,
                        templateUrl: 'view/dashboardempresa/facturanext/facturasrechasadas.html',
                        // controller: 'appsCtrl'
                    })
                    .segment('facturasfisicas', {
                        'default': true,
                        templateUrl: 'view/dashboardempresa/facturanext/facturasfisicas.html',
                        // controller: 'appsCtrl'
                    })
                    .segment('proveedores', {
                        'default': true,
                        templateUrl: 'view/dashboardempresa/facturanext/proveedores.html',
                        controller: 'proveedoresCtrl'
                    })
                .up()
                .segment('radio', {                 
                    templateUrl: 'view/dashboardempresa/radio/index.html',
                    'default': true,
                })                   
                .within()                
                    .segment('inicio', {
                        templateUrl: 'view/dashboardempresa/radio/inicio.html',
                    })  
                    .segment('clientes', {
                        templateUrl: 'view/dashboardempresa/radio/clientes.html'
                    })                    
                .up()
                .segment('nomina', {                 
                    templateUrl: 'view/dashboardempresa/nomina/index.html',
                    'default': true,
                })
                .within()
                    .segment('inicio', {
                        templateUrl: 'view/dashboardempresa/nomina/inicio.html',
                    })  
                    .segment('nomina', {
                        templateUrl: 'view/dashboardempresa/nomina/nomina.html',
                        // controller:'nominaCtrl'
                    })
                    .segment('departamentos', {
                        templateUrl: 'view/dashboardempresa/nomina/departamentos.html'
                    })
                    .segment('cargos', {
                        templateUrl: 'view/dashboardempresa/nomina/cargos.html'
                    })
                .up()   
            .up()
        $routeProvider.otherwise({redirectTo: '/'}); 
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
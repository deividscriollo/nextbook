// url service general server
var app=angular.module('app');
app.service('servicios', function($resource, $localStorage, $location, ModalService, $http) {
    this.LogoutE=function() {
        // limpiar registros
        this.limpiarstorage();
        return $resource(this.server().appnext()+'public/logoutE', {}
        , {
            salir: {
                method: 'POST', isArray: false, params: {
                    token: $localStorage.token
                }
            }
        }
        );
    }
    ;
    this.server=function() {
        return {
            appserviosnext: function() {
                return "http://apiservicios.nextbook.ec/";
            }
            , appnext: function() {
                return "http://192.168.100.5/appnext/";
            }
        }
    }
    ;
    this.limpiarstorage=function() {
        $location.path('/');
        return $localStorage.$reset();
    }
    ;
    this.UploadFac=function() {
        return $resource(this.server().appnext()+'public/uploadFactura', {}
        , {
            subir: {
                method: 'POST', isArray: false, params: {
                    token: $localStorage.token
                }
            }
        }
        );
    }
    ;
    this.Download_link=function() {
        // return $http.get(this.server().appnext()+'public/Downloadfac', {}, {responseType:'arraybuffer'})
        return $resource(this.server().appnext()+'public/Downloadlink', {}
        , {
            generar: {
                method: 'POST', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }
        }
        );
    }
    ;
    // ----------------------------------------- set get imagen perfil ----------------------------
    this.set_img_perfil=function() {
        // return $http.get(this.server().appnext()+'public/Downloadfac', {}, {responseType:'arraybuffer'})
        return $resource(this.server().appnext()+'public/setImgPerfil', {}
        , {
            enviar: {
                method: 'POST', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }
        }
        );
    }
    ;
    this.get_img_perfil=function() {
        // return $http.get(this.server().appnext()+'public/Downloadfac', {}, {responseType:'arraybuffer'})
        return $resource(this.server().appnext()+'public/getImgPerfil', {}
        , {
            get: {
                method: 'GET', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }
        }
        );
    }
    ;
    this.mis_imgs_perfil=function() {
        // return $http.get(this.server().appnext()+'public/Downloadfac', {}, {responseType:'arraybuffer'})
        return $resource(this.server().appnext()+'public/loadImgsPerfil', {}
        , {
            get: {
                method: 'GET', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }
        }
        );
    }
    ;
    ////////////////////////////////////////////////////////////////////////
    this.gastos=function() {
        return [ {
            tipo: 'ALIMENTACIÓN'
        }
        , {
            tipo: 'SALUD'
        }
        , {
            tipo: 'VESTIMENTA'
        }
        , {
            tipo: 'VIVIENDA'
        }
        , {
            tipo: 'EDUCACIÓN'
        }
        ];
    }
    ;
    // --------------------------------------------- abrir modal -----------------------------
    this.showModal=function(file, data, idmodal) {
        ModalService.showModal( {
            templateUrl: 'view/modales/'+file, controller: "ModalController", inputs: {
                data: data, tipomodal: idmodal
            }
        }
        ).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                // console.log("You said " + result);
            }
            );
        }
        );
    }
    ;
    // ------------------------------------------------ verificar Password ----------------------------
    this.verificar_pass=function() {
        // return $http.get(this.server().appnext()+'public/Downloadfac', {}, {responseType:'arraybuffer'})
        return $resource(this.server().appnext()+'public/VerficarPass', {}
        , {
            get: {
                method: 'GET', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }
        }
        );
    }
    ;
    // ------------------------------------------------ Cambiar Password ----------------------------
    this.change_pass=function() {
        // return $http.get(this.server().appnext()+'public/Downloadfac', {}, {responseType:'arraybuffer'})
        return $resource(this.server().appnext()+'public/changePass', {}
        , {
            set: {
                method: 'POST', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }
        }
        );
    }
    ;
}

);
app.service('localizacion', function() {
    this.provincia=function() {
        return [ {
            "id": "20150326115500551439e48586a", "nombre": "Azuay", "codtelefonico": '072'
        }
        , {
            "id": "20150326115500551439e48dac4", "nombre": "Bolivar", "codtelefonico": '032'
        }
        , {
            "id": "20150326115500551439e48dd2d", "nombre": "Cañar", "codtelefonico": '072'
        }
        , {
            "id": "20150326115500551439e48df24", "nombre": "Carchi", "codtelefonico": '062'
        }
        , {
            "id": "20150326115500551439e48e114", "nombre": "Chimborazo", "codtelefonico": '032'
        }
        , {
            "id": "20150326115500551439e48e30a", "nombre": "Cotopaxi", "codtelefonico": '032'
        }
        , {
            "id": "20150326115500551439e48e503", "nombre": "El Oro", "codtelefonico": '072'
        }
        , {
            "id": "20150326115500551439e48e716", "nombre": "Esmeraldas", "codtelefonico": '062'
        }
        , {
            "id": "20150326115500551439e48e8dd", "nombre": "Galápagos", "codtelefonico": '052'
        }
        , {
            "id": "20150326115500551439e48eaa8", "nombre": "Guayas", "codtelefonico": '042'
        }
        , {
            "id": "20150326115500551439e48ec62", "nombre": "Imbabura", "codtelefonico": '062'
        }
        , {
            "id": "20150326115500551439e48ee16", "nombre": "Loja", "codtelefonico": '0'
        }
        , {
            "id": "20150326115500551439e48ef9b", "nombre": "Los Rios", "codtelefonico": '052'
        }
        , {
            "id": "20150326115500551439e48f0fa", "nombre": "Manabí", "codtelefonico": '052'
        }
        , {
            "id": "20150326115500551439e48f290", "nombre": "Morona Santiago", "codtelefonico": '072'
        }
        , {
            "id": "20150326115500551439e48f43d", "nombre": "Napo", "codtelefonico": '062'
        }
        , {
            "id": "20150326115500551439e48f5b8", "nombre": "Orellana", "codtelefonico": '062'
        }
        , {
            "id": "20150326115500551439e48f72a", "nombre": "Pastaza", "codtelefonico": '032'
        }
        , {
            "id": "20150326115500551439e48f899", "nombre": "Pichincha", "codtelefonico": '022'
        }
        , {
            "id": "20150326115500551439e48fa09", "nombre": "Santa Elena", "codtelefonico": '042'
        }
        , {
            "id": "20150326115500551439e48fb5f", "nombre": "Santo Domingo de los Tsáchilas", "codtelefonico": '022'
        }
        , {
            "id": "20150326115500551439e48fcc6", "nombre": "Sucumbíos", "codtelefonico": '062'
        }
        , {
            "id": "20150326115500551439e48fe2f", "nombre": "Tungurahua", "codtelefonico": '032'
        }
        , {
            "id": "20150326115500551439e48ff9d", "nombre": "Zamora Chinchipe", "codtelefonico": '072'
        }
        ];
    }
}

);
app.controller('ModalController', function($scope, $rootScope, data, tipomodal, servicios, $window, $localStorage) {
    switch(tipomodal) {
        // ------------------------------------------------- MENSAJE-------------------------
        case 'mensaje': switch(data.error) {
            case '4': $scope.mensaje="Documento no existe en el SRI";
            break;
            case '5': $scope.mensaje="la Factura ya existe";
            break;
            case '0': $scope.mensaje="Documento vacío";
            break;
        }
        angular.element("input[type='file']").val(null);
        break;
        // ------------------------------------------------- DECARGA-------------------------
        case 'download': $scope.source=data.source;
        servicios.Download_link().generar( {
            id: $scope.source
        }
        ).$promise.then(function(data) {
            $scope.fileUrl=data.link;
        }
        );
        break;
        // ------------------------------------------------- COMPARTIR-------------------------
        case 'share': $scope.fileUrl=data.source;
        break;
        // ------------------------------------------------- VISTA PREVIA-------------------------
        case 'preview': // console.log(servicios.server().appnext()+"public/facturas/"+$localStorage.datosE.id_empresa+"/"+data.source+".pdf");
        $scope.pdfURL=servicios.server().appnext()+"public/facturas/"+$localStorage.datosE.id_empresa+"/"+data.source+".pdf";
        break;
        // ------------------------------------LISTA DE IMAGENES DE PERFIL ---------------------
        case 'imgperfil': $scope.misimagenes=data.source;
        $scope.show_select_img=function(data) {
            $scope.imgURL=data;
            servicios.set_img_perfil().enviar( {
                img: $scope.imgURL
            }
            ).$promise.then(function(data) {
                $localStorage.imgPerfil=data.img;
                $rootScope.imgPerfil=data.img;
                $('#modal_lista_img').modal('hide');
                $('#modal_lista_img').remove();
                $('.modal-backdrop').remove();
            }
            );
        }
        break;
        case 'selectimg': console.log(data.source);
        $scope.myImage=data.source;
        $scope.myCroppedImage='';
        $scope.cambiar_img=function() {
            var imgData=btoa($scope.myCroppedImage);
            servicios.set_img_perfil().enviar( {
                img: imgData
            }
            ).$promise.then(function(data) {
                $localStorage.imgPerfil=servicios.server().appnext()+"public/perfiles/"+$localStorage.datosE.id_empresa+"/"+data.img;
                $rootScope.imgPerfil=servicios.server().appnext()+"public/perfiles/"+$localStorage.datosE.id_empresa+"/"+data.img;
            }
            );
            // console.log(imgData);
        }
        break;
    }
}

);
app.factory('facturanextservice', function($resource, $localStorage, servicios) {
    // console.log(servicios);
    return $resource('http://192.168.100.5/appnext/public/getFacturas', {}
    , {
        get: {
            method: 'GET', isArray: false, params: {
                token: $localStorage.token
            }
        }
    }
    );
}

);
app.factory('UploadFac', function($resource, $localStorage) {
    return $resource('http://192.168.100.5/appnext/public/uploadFactura', {}
    , {
        subir: {
            method: 'POST', isArray: false, params: {
                token: $localStorage.token
            }
        }
    }
    );
}

);
///------------------------ Leer XML----------------------------
app.directive('onReadFile', function ($parse) {
    return {
        restrict: 'A', scope: false, link: function(scope, element, attrs) {
            var fn=$parse(attrs.onReadFile);
            element.on('change', function(onChangeEvent) {
                var reader=new FileReader();
                reader.onload=function(onLoadEvent) {
                    scope.$apply(function() {
                        fn(scope, {
                            $fileContent: onLoadEvent.target.result
                        }
                        );
                    }
                    );
                }
                ;
                reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
            }
            );
        }
    }
}

);
app.factory('loaddatosSRI', function($resource) {
    return $resource("http://apiservicios.nextbook.ec/public/getDatos/:id", {
        id: "@id"
    }
    );
}

);
app.factory('Empresa', function($resource, servicios) {
    var url_server=servicios.server().appnext();
    return $resource(url_server+"public/registroEmpresas/:id", {
        id: "@id"
    }
    );
}

);
app.factory('Persona', function($resource, servicios) {
    var url_server=servicios.server().appnext();
    return $resource(url_server+"public/registroPersonas/:id", {
        id: "@id"
    }
    );
}

);
app.factory('LoginE', function($resource, $localStorage, servicios) {
    var url_server=servicios.server().appnext();
    return $resource(url_server+'public/login', {}
    , {
        ingresar: {
            method: 'POST', isArray: false, // params: {token: $localStorage.token}
        }
    }
    );
}

);
app.factory('LogoutE', function($resource, $localStorage, servicios) {
    var url_server=servicios.server().appnext();
    return $resource(url_server+'appnext/public/logoutE', {}
    , {
        salir: {
            method: 'POST', isArray: false, params: {
                token: $localStorage.token
            }
        }
    }
    );
}

);
app.factory('Sucursaless', function($resource, $localStorage, servicios) {
    var url_server=servicios.server().appnext();
    return $resource(url_server+'public/getsucursales', {}
    , {
        get: {
            method: 'GET', isArray: false, params: {
                token: $localStorage.token
            }
        }
    }
    );
}

);
app.factory('Facturas', function($resource, $localStorage) {
    return $resource('http://192.168.100.5/appnext/public/readFacturas', {}
    , {
        get: {
            method: 'GET', isArray: false, params: {
                token: $localStorage.token
            }
        }
    }
    );
}

);
app.factory('FacturasLista', function($resource, $localStorage) {
    return $resource('http://192.168.100.5/appnext/public/getFacturas', {}
    , {
        get: {
            method: 'GET', isArray: false, params: {
                token: $localStorage.token
            }
        }
    }
    );
}

);
app.factory('consultarMovil', function($resource, $localStorage) {
    return $resource('http://192.168.100.5/appserviciosnext/public/cosultarMovil', {}
    , {
        validar: {
            method: 'POST', isArray: false, // params: {token: $localStorage.token}
        }
    }
    );
}

);
// url service general server
var app=angular.module('app');
app.service('servicios', function($resource, $localStorage, $location, ModalService) {
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
                return "http://localhost/appnext/";
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
    this.Download_fac=function() {
        return $resource(this.server().appnext()+'public/Downloadfac', {}
        , {
            download: {
                method: 'GET', isArray: false, params: {
                    token: $localStorage.token
                }
            }
        }
        );
    }
    ;
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
});
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
});
app.controller('ModalController', function($scope, data, tipomodal, servicios, $window) {
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
        servicios.Download_fac().download( {
            id: $scope.source
        }
        ).$promise.then(function(data) {
            var data=JSON.stringify(data).replace(",", ""), blob=new Blob([data], {
                type: 'text/plain'
            }
            ), url=$window.URL || $window.webkitURL;
            $scope.fileUrl=url.createObjectURL(blob);
        }
        );
        $scope.descargar=function() {
            // alert($scope.source);
        }
        break;
        // ------------------------------------------------- COMPARTIR-------------------------
        case 'share': break;
    }
});
app.factory('facturanextservice', function($resource, $localStorage) {
    return $resource('http://localhost/appnext/public/getFacturas', {}
    , {
        get: {
            method: 'GET', isArray: false, params: {
                token: $localStorage.token
            }
        }
    }
    );
});
app.factory('UploadFac', function($resource, $localStorage) {
    return $resource('http://localhost/appnext/public/uploadFactura', {}
    , {
        subir: {
            method: 'POST', isArray: false, params: {
                token: $localStorage.token
            }
        }
    }
    );
});
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
    ;
});
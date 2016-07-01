// url service general server

var app = angular.module('app');
app.service('servicios', function($resource,$localStorage, $location){
    this.LogoutE = function(){
    	// limpiar registros
		this.limpiarstorage();
        return $resource(this.server().appnext()+'public/logoutE', {}, {
		    salir: {
		        method: 'POST',
		        isArray: false,
		       params: {token: $localStorage.token}
		    }
		});
    };
    this.server = function(){
    	return {
	        appserviosnext: function(){
	            return "http://apiservicios.nextbook.ec/";
	        },
	        appnext: function(){
	            return "http://172.30.1.11/appnext/";
	        }  
	    }   
    };
    this.limpiarstorage = function(){
    	$location.path('/');
    	return $localStorage.$reset();
    };

    this.UploadFac = function(){
        return $resource(this.server().appnext()+'public/uploadFactura', {}, {
            subir: {
                method: 'POST',
                isArray: false,
               params: {token: $localStorage.token}
            }
        });
    };

});

app.service('localizacion',function(){
    this.provincia = function(){
        return  [
                    {
                        "id": "20150326115500551439e48586a",
                        "nombre": "Azuay",
                        "codtelefonico":'072'
                    }, {
                        "id": "20150326115500551439e48dac4",
                        "nombre": "Bolivar",
                        "codtelefonico":'032'
                    }, {
                        "id": "20150326115500551439e48dd2d",
                        "nombre": "Cañar",
                        "codtelefonico":'072'
                    }, {
                        "id": "20150326115500551439e48df24",
                        "nombre": "Carchi",
                        "codtelefonico":'062'
                    }, {
                        "id": "20150326115500551439e48e114",
                        "nombre": "Chimborazo",
                        "codtelefonico":'032'
                    }, {
                        "id": "20150326115500551439e48e30a",
                        "nombre": "Cotopaxi",
                        "codtelefonico":'032'
                    }, {
                        "id": "20150326115500551439e48e503",
                        "nombre": "El Oro",
                        "codtelefonico":'072'
                    }, {
                        "id": "20150326115500551439e48e716",
                        "nombre": "Esmeraldas",
                        "codtelefonico":'062'
                    }, {
                        "id": "20150326115500551439e48e8dd",
                        "nombre": "Galápagos",
                        "codtelefonico":'052'
                    }, {
                        "id": "20150326115500551439e48eaa8",
                        "nombre": "Guayas",
                        "codtelefonico":'042'
                    }, {
                        "id": "20150326115500551439e48ec62",
                        "nombre": "Imbabura",
                        "codtelefonico":'062'
                    }, {
                        "id": "20150326115500551439e48ee16",
                        "nombre": "Loja",
                        "codtelefonico":'0'
                    }, {
                        "id": "20150326115500551439e48ef9b",
                        "nombre": "Los Rios",
                        "codtelefonico":'052'
                    }, {
                        "id": "20150326115500551439e48f0fa",
                        "nombre": "Manabí",
                        "codtelefonico":'052'
                    }, {
                        "id": "20150326115500551439e48f290",
                        "nombre": "Morona Santiago",
                        "codtelefonico":'072'
                    }, {
                        "id": "20150326115500551439e48f43d",
                        "nombre": "Napo",
                        "codtelefonico":'062'
                    }, {
                        "id": "20150326115500551439e48f5b8",
                        "nombre": "Orellana",
                        "codtelefonico":'062'
                    }, {
                        "id": "20150326115500551439e48f72a",
                        "nombre": "Pastaza",
                        "codtelefonico":'032'
                    }, {
                        "id": "20150326115500551439e48f899",
                        "nombre": "Pichincha",
                        "codtelefonico":'022'
                    }, {
                        "id": "20150326115500551439e48fa09",
                        "nombre": "Santa Elena",
                        "codtelefonico":'042'
                    }, {
                        "id": "20150326115500551439e48fb5f",
                        "nombre": "Santo Domingo de los Tsáchilas",
                        "codtelefonico":'022'
                    }, {
                        "id": "20150326115500551439e48fcc6",
                        "nombre": "Sucumbíos",
                        "codtelefonico":'062'
                    }, {
                        "id": "20150326115500551439e48fe2f",
                        "nombre": "Tungurahua",
                        "codtelefonico":'032'
                    }, {
                        "id": "20150326115500551439e48ff9d",
                        "nombre": "Zamora Chinchipe",
                        "codtelefonico":'072'
                    }
                ];
    }
});

app.factory('facturanextservice', function($resource,$localStorage) {

return $resource('http://172.30.1.11/appnext/public/getFacturas', {}, {
    get: {
        method: 'GET',
        isArray: false,
       params: {token: $localStorage.token}
    }
    });

    });

app.factory('UploadFac', function($resource,$localStorage) {

return $resource('http://172.30.1.11/appnext/public/uploadFactura', {}, {
    subir: {
        method: 'POST',
        isArray: false,
       params: {token: $localStorage.token}
    }
    });

    });

///------------------------ Leer XML----------------------------
app.directive('onReadFile', function ($parse) {
    return {
        restrict: 'A',
        scope: false,
        link: function(scope, element, attrs) {
            var fn = $parse(attrs.onReadFile);
            
            element.on('change', function(onChangeEvent) {
                var reader = new FileReader();
                
                reader.onload = function(onLoadEvent) {
                    scope.$apply(function() {
                        fn(scope, {$fileContent:onLoadEvent.target.result});
                    });
                };

                reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
            });
        }
    };
});
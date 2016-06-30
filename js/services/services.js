// angular.module('app').factory('server', function(){
//     return {
//         appserviosnext: function(){
//             return "http://apiservicios.nextbook.ec/";
//         },
//         appnext: function(){
//             return "http://172.30.1.11/appnext/";
//         }  
//     }               
// });






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
	            return "http://172.30.1.14/appnext/";
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

    this.gastos = function(){
        return [{tipo:'ALIMENTACIÓN'},{tipo:'SALUD'},{tipo:'VESTIMENTA'},{tipo:'VIVIENDA'},{tipo:'EDUCACIÓN'}];
    };

});

// app.factory('facturanextservice', function($resource,$localStorage, servicios){
// 	// return{
// 		// misfacturas: function(){    	
// 	        return $resource(servicios.server().appnext()+'public/getFacturas', {}, {
// 			    get: {
// 			        method: 'GET',
// 			        isArray: false,
// 			       params: {token: $localStorage.token}
// 			    }
// 			});
// 	    // }
// 	// };
// });

app.factory('facturanextservice', function($resource,$localStorage) {

return $resource('http://172.30.1.14/appnext/public/getFacturas', {}, {
    get: {
        method: 'GET',
        isArray: false,
       params: {token: $localStorage.token}
    }
    });

    });

app.factory('UploadFac', function($resource,$localStorage) {

return $resource('http://172.30.1.14/appnext/public/uploadFactura', {}, {
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
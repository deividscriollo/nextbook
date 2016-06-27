// angular.module('app').factory('server', function(){
//     return {
//         appserviosnext: function(){
//             return "http://apiservicios.nextbook.ec/";
//         },
//         appnext: function(){
//             return "http://192.168.0.3/appnext/";
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
	            return "http://192.168.0.3/appnext/";
	        }  
	    }   
    };
    this.limpiarstorage = function(){
    	$location.path('/');
    	return $localStorage.$reset();
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

return $resource('http://192.168.0.3/appnext/public/getFacturas', {}, {
    get: {
        method: 'GET',
        isArray: false,
       params: {token: $localStorage.token}
    }
    });

    });
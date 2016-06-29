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

return $resource('http://172.30.1.11/appnext/public/getFacturas', {}, {
    get: {
        method: 'GET',
        isArray: false,
       params: {token: $localStorage.token}
    }
    });

    });

app.factory('UploadResource', function ($resource) {
return $resource(
'http://172.30.1.11/appnext/public/uploadFactura',
{ id: "@Id" },
{
"save": {
method: 'POST',
transformRequest: formDataObject,
headers: { 'Content-Type': undefined, enctype: 'multipart/form-data' }
}
}
);
 
function formDataObject(data) {
var fd = new FormData();
fd.append('File', data.file);
 
fd.append('DocumentType', data.documentType)
// Use JSON.stringify to format an array
fd.append('DocumentName', JSON.stringify(data.documentName));
fd.append('DocumentDesc', data.documentDesc)
return fd;
}
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
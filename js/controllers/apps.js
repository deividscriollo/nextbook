app.controller('inicioCtrl', function($scope, $routeSegment) {
        
    $scope.$routeSegment = $routeSegment;
});
app.controller('appsCtrl', function($scope, $routeSegment, $window,$localStorage,servicios) {        
    $scope.$routeSegment = $routeSegment;

});
app.controller('mapsCtrl', function($scope, $routeSegment) {
        
    $scope.$routeSegment = $routeSegment;
});
app.controller('recordCtrl', function($scope, $routeSegment) {
        
    $scope.$routeSegment = $routeSegment;
});


app.controller('MainCtrl', function($scope, $routeSegment, $localStorage,servicios, $location, loader, LoginE) {
    $scope.data = '';
    $scope.$routeSegment = $routeSegment;
    $scope.loader = loader;

    $scope.$on('routeSegmentChange', function() {
        loader.show = false;
    })
    $scope.ingresar = function() {
        $scope.data['tipo'] = "E";
        var obj = {'email':$scope.email+'001@facturanext.com', 'password':$scope.password, 'tipo':'E' };
        LoginE.ingresar(obj).$promise.then(function(data) {
            // console.log(data[0]);
            $localStorage.token = data[0].token;
            $localStorage.datosE = data.datosE;
            $localStorage.datosPersona = data.datosPersona;
            //--------------------cargr imagen perfil-----------

            servicios.get_img_perfil().get().$promise.then(function(data) {
                        $localStorage.imgPerfil=data.img;
            
            }, function(err) {
               
            });
             //--------------------cargar imagen Portada-----------

            servicios.get_img_portada().get().$promise.then(function(data) {
                        $localStorage.imgPortada=data.img;
            }, function(err) {
               
            });
            // ---------- fin
            //---------------------- verificar si existe datos de persona-----------

            servicios.get_propietario().get().$promise.then(function(data) {
                if (data.respuesta) {
                    $location.path('/SeleccionarSucursal');
                }
                else{
                    $location.path('/CambioPass');
                }
            
            }, function(err) {
               
            });

            // $location.path('/SeleccionarSucursal');
        }, function(err) {
            if (err.status == 404) {
                alert('Usario/Contraseña incorrectos');
            }
        });
    }
    $scope.mdm = function($event){
        
        var correo = $scope.email;
        var res = correo.replace("@facturanext.com", "");
        
        $scope.email = res;

    }
});
app.controller('appsCtrl', function($scope, $routeSegment, $localStorage,servicios, $location, loader, LoginE) {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {

                mysrclat = position.coords.latitude; 
                mysrclong = position.coords.longitude;
                console.log(mysrclat);
                console.log(mysrclong);
                angular.extend($scope, {
                    center: {
                        lat: mysrclat,
                        lng: mysrclong,
                        zoom: 15
                    }
                });
        });
        
    }

    
});
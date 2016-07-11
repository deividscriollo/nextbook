app.controller('inicioCtrl', function($scope, $routeSegment) {
        
    $scope.$routeSegment = $routeSegment;
});
app.controller('appsCtrl', function($scope, $routeSegment,$localStorage) {        
    $scope.$routeSegment = $routeSegment;

$scope.show=false;
        if ($localStorage.datosE.pass_estado==0) {
            $scope.show=true;
        }
        $scope.cambiar_pass=function(){
            console.log($scope.data);
        }

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
        var obj = {'email':$scope.email, 'password':$scope.password, 'tipo':'E' };
        LoginE.ingresar(obj).$promise.then(function(data) {
            // console.log(data[0]);
            $localStorage.token = data[0].token;
            $localStorage.datosE = data.datosE;
            $localStorage.datosPersona = data.datosPersona;

            servicios.get_img_perfil().get().$promise.then(function(data) {
            $localStorage.imgPerfil=data.img;
            
            }, function(err) {
               
            });

            $location.path('/SeleccionarSucursal');
        }, function(err) {
            if (err.status == 404) {
                alert('Usario/Contraseña incorrectos');
            }
        });
    }
});

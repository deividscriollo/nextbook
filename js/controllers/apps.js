var app = angular.module('app');
app.controller('inicioCtrl', function($scope, $routeSegment) {
    $scope.$routeSegment = $routeSegment;
    // console.log('test');
});

app.controller('appsCtrl', function ($mdDialog, $scope, servicios, $timeout, $localStorage, $routeSegment, $window) {     
    $scope.$routeSegment = $routeSegment;

    $scope.modal_nomina = function (event) {
        $mdDialog.show({
          clickOutsideToClose: true,
          controller: 'AccesoNomina',
          controllerAs: 'ctrl',
          focusOnOpen: false,
          targetEvent: event,
          locals: {desserts: $scope.selected},
          templateUrl: 'view/dashboardempresa/login_nomina.html',
        }).then($scope.getDesserts);
      };
});

app.controller('AccesoNomina', function ($mdDialog, $scope, servicios, $timeout, $localStorage, $location) { 
    $scope.data = {}; 
    $scope.data.email = $localStorage.datosPersona.correo; 
    this.cancel = $mdDialog.cancel;

    $scope.confirmar_pass = function() {
        servicios.login_radio().set($scope.data).$promise.then(function(data) {
          if(data.respuesta == true) {
            $localStorage.tokenradio = data.token.token;
              $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#dialogContainer')))
                .clickOutsideToClose(true)
                .title('NextBook')
                .textContent('Servicio Nómina')
                .ariaLabel('Servicio Nómina')
                .ok('Ok!')
                .openFrom('#left')
            );
            $location.path('/My-space/NominaAdmin');
          }
        }); 
      } 
});

app.controller('mapsCtrl', function($scope, $routeSegment) {
        
    $scope.$routeSegment = $routeSegment;
});
app.controller('recordCtrl', function($scope, $routeSegment) {
        
    $scope.$routeSegment = $routeSegment;
});

app.controller('MainCtrl', function($scope, $routeSegment, $localStorage,servicios, $location, loader, LoginE,Reddit) {
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

    $scope.reddit = new Reddit();

});

// Reddit constructor function to encapsulate HTTP and pagination logic
app.factory('Reddit', function(servicios) {
  var Reddit = function() {
    this.items = [];
    this.busy = false;
    this.after = '';
    this.page =1;
  };
  Reddit.prototype.nextPage = function() {
    if (this.busy) return;
    this.busy = true;
    servicios.buscar_empresas().get({page:this.page}).$promise.then(function(data) {
      var items = data.respuesta;
      for (var i = 0; i < items.length; i++) {
        this.items.push(items[i]);
      }
      this.page = this.page+1;
      this.after="t3_" + this.items[this.items.length - 1].Ruc;
      if (items.length==0) {
        this.busy = true;
      }else this.busy = false;
    }.bind(this));
  };

  return Reddit;
});

// app.controller('appsCtrl', function($scope, $routeSegment, $localStorage,servicios, $location, loader, LoginE) {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function (position) {
//             mysrclat = position.coords.latitude; 
//             mysrclong = position.coords.longitude;
//             console.log(mysrclat);
//             console.log(mysrclong);
//             angular.extend($scope, {
//                 center: {
//                     lat: mysrclat,
//                     lng: mysrclong,
//                     zoom: 15
//                 }
//             });
//         });   
//     }    
// });
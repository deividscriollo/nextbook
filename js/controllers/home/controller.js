var app=angular.module('app')
	app.controller('homeCtrl', function($scope, $routeSegment, loader, $localStorage, servicios, $location, loader, LoginE, Reddit, $mdDialog) {
	    $scope.$routeSegment = $routeSegment;
	    $scope.loader = loader;
	    $scope.$on('routeSegmentChange', function() {
	        loader.show = false;
	    });

	    $scope.tabs = 	[	
	    					{icon : 'dns', title : 'Para Empresa', url:'/Home/ParaEmpresas'},
	    					{icon : 'account_box', title : 'Para Ti', url:'/Home/ParaTi'},
	    					{icon : 'assignment_ind', title : 'Quienes Somos', url:'/Home/QuienesSomos'},
	    				];

	   	$scope.tabnavigation = function(url){
	   		$location.path(url);
	   	}

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
	                $mdDialog.show(
			            $mdDialog.alert()
			            .parent(angular.element(document.querySelector('#dialogContainer')))
			            .clickOutsideToClose(true)
			            .title('Lo sentimos :(')
			            .textContent('Usuario o password incorrecto, vuelva a intentar')
			            .ok('Entendido')
			            .openFrom('#left')
			        );
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
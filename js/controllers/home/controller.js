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

	   	$scope.tabnavigation = function(url) {
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
	            if (data.respuesta == false) {
	            	$mdDialog.show(
			            $mdDialog.alert()
			            .parent(angular.element(document.querySelector('#dialogContainer')))
			            .clickOutsideToClose(true)
			            .title('Lo sentimos :(')
			            .textContent('Usuario o password incorrecto, vuelva a intentar')
			            .ok('Entendido')
			            .openFrom('#left')
			        );	
	            } else {
		            $localStorage.token = data[0].token;
		            $localStorage.datosE = data.datosE;
		            $localStorage.datosPersona = data.datosPersona;

		            //--------------------cargar imagen perfil-----------
		            servicios.get_img_perfil().get().$promise.then(function(data) {
		            	if (data.existe) {
		            		$localStorage.imgPerfil = servicios.server().appnext()+data.img;
		            	}else{
		            		$localStorage.imgPerfil="images/users/avatar-001.jpg";
		            	}
		                
		            },function(error){
		            	$localStorage.imgPerfil="images/users/avatar-001.jpg";
		            });

		             //--------------------cargar imagen Portada-----------

		            servicios.get_img_portada().get().$promise.then(function(data) {
		            	if (data.existe) {
		            		$localStorage.imgPortada = servicios.server().appnext()+data.img;
		            	}else{
		            		$localStorage.imgPortada="images/samples/w1.jpg";
		            	}

		            },function(error){
		            	$localStorage.imgPortada="images/samples/w1.jpg";
		            });
		            // ---------- fin

		             //--------------------cargar imagen Logo-----------

		            servicios.get_img_logo().get().$promise.then(function(data) {
		            	if (data.existe) {
		            		$localStorage.imgLogo = servicios.server().appnext()+data.img;
		            	}else{
		            		$localStorage.imgLogo="images/samples/x2.jpg";
		            	}

		            },function(error){
		            	$localStorage.imgPortada="images/samples/x2.jpg";
		            });
		            // ---------- fin

		            //---------------------- verificar si existe datos de persona-----------
		            servicios.get_propietario().get().$promise.then(function(data) {
		                if (data.respuesta) {
		                    $location.path('/SeleccionarSucursal');
		                } else {
		                    $location.path('/CambioPass');
		                }
		            });
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
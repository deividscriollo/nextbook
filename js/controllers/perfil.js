app.controller('perfilCtrl', function($scope, $rootScope, servicios, $localStorage) {
    
    $scope.datosPersona = $localStorage.datosPersona;

    if ($localStorage.imgPerfil != null) {
        $rootScope.imgPerfil = $localStorage.imgPerfil;
    } else {
        $rootScope.imgPerfil = "images/users/avatar-001.jpg"
    }

    if ($localStorage.imgPortada != null) {
        $rootScope.imgPortada = $localStorage.imgPortada;
    } else {
        $rootScope.imgPortada = "images/samples/w1.jpg"
    }

    $scope.show_listaimg_modal = function(tipolista) {

        switch(tipolista) {
            case 'perfil':
            servicios.mis_imgs_perfil().get().$promise.then(function(data) {
            // $scope.misimagenes=data.imgs;
            servicios.showModal('modal_select_img.html', {
                source: data.imgs,
                tipo:'perfil'
            }, 'imgperfil');
            });
            break;
            case 'portada':
             servicios.mis_imgs_portadas().get().$promise.then(function(data) {
            // $scope.misimagenes=data.imgs;
            servicios.showModal('modal_select_img.html', {
                source: data.imgs,
                tipo:'portada'
            }, 'imgperfil');
            });
            break;

        }
        // $scope.misimagenes="";
    }

    $scope.show_upload_img_modal = function(tipo) {
        servicios.showModal('modal_upload_img_perfil.html', {
            source: tipo
        }, 'uploadimg');
    }
    $scope.currentNavItem = 'page1';
});

app.controller('perfil-inicio-Ctrl', function($scope, serviciosgenerales, $localStorage) {
	$scope.localStorage = $localStorage.datosE;
	$scope.sucursal = $localStorage.sucursal;
	$scope.activitidad = serviciosgenerales.letra_cadena_mayuscula($scope.localStorage.actividad_economica);
	// console.log($localStorage);

});
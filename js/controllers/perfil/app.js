app.controller('perfilCtrl', function($scope, $mdDialog,$rootScope, servicios, $localStorage) {
    $scope.datosPersona = $localStorage.datosPersona;

    $scope.datos2 = $localStorage.datosE;


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
                $mdDialog.show({
                  clickOutsideToClose: true,
                  controller: 'imagenesCtrl',
                  controllerAs: 'ctrl',
                  focusOnOpen: false,
                  targetEvent: event,
                  locals: {imgs: data.imgs,tipoimg: tipolista},
                  templateUrl: 'view/dashboardempresa/perfil/modales/mis_imagenes_perfil.html',
                  clickOutsideToClose:true,
                })
            });

            break;
            case 'portada':
            servicios.mis_imgs_portadas().get().$promise.then(function(data) {
                $mdDialog.show({
                  clickOutsideToClose: true,
                  controller: 'imagenesCtrl',
                  controllerAs: 'ctrl',
                  focusOnOpen: false,
                  targetEvent: event,
                  locals: {imgs: data.imgs,tipoimg: tipolista},
                  templateUrl: 'view/dashboardempresa/perfil/modales/mis_imagenes_perfil.html',
                  clickOutsideToClose:true,
                })
            });
            break;
        }
    }

    $scope.show_upload_img_modal = function(tipo) {
        $mdDialog.show({
          clickOutsideToClose: true,
          controller: 'imagenesCtrl',
          controllerAs: 'ctrl',
          focusOnOpen: false,
          targetEvent: event,
          locals: {imgs: [],tipoimg: tipo},
          templateUrl: 'view/dashboardempresa/perfil/modales/upload_img_perfil.html',
          clickOutsideToClose:true,
        })
    }

    $scope.currentNavItem = 'page1';
});

app.controller('perfil-inicio-Ctrl', function($scope, serviciosgenerales, $localStorage) {
	$scope.localStorage = $localStorage.datosE;
	$scope.sucursal = $localStorage.sucursal;
	$scope.activitidad = serviciosgenerales.letra_cadena_mayuscula($scope.localStorage.actividad_economica);
    $scope.telefonos=$localStorage.datosE.extras;
    $scope.email=$localStorage.datosE.Ruc+'@facturanext.com';

});

app.controller('imagenesCtrl', function($scope,$mdDialog, servicios,$localStorage,imgs,tipoimg,$rootScope) {
     this.cancel = $mdDialog.cancel;
     if (imgs.length == 0) {
        $scope.mensaje = "No se han encontrado imagenes :(";
     } else {
        $scope.misimagenes=imgs;

        var partition = function (input, size) {
            var newArr = [];
            for (var i = 0; i < input.length; i += size) {
                newArr.push(input.slice(i, i + size));
            }
            return newArr;
        }

        // $scope.misimagenes = {
        //     img: partition(imgs, imgs.length / 2)
        // };
    }
    $scope.mini=false;
        $scope.myImage = '';
        $scope.myCroppedImage = '';
switch(tipoimg) {
        case 'perfil':
            $scope.sizeimg=[300,300];
            break;
        case 'portada':
            $scope.sizeimg=[550,400];
            break;
    }

$scope.fileChanged = function(event) {
    $scope.file = event.target.files[0];
  };

$scope.Updateimg = function(idimg) {
    switch(tipoimg) {
        case 'perfil':
        servicios.set_img_perfil().enviar({
                    img: idimg
                }).$promise.then(function(data) {
                    $localStorage.imgPerfil = data.img;
                    $rootScope.imgPerfil = data.img;
                    
                    $mdDialog.show(
                        $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#dialogContainer')))
                        .clickOutsideToClose(true)
                        .title('NextBook')
                        .textContent('Imágen de perfil actualizada correctamente')
                        .ariaLabel('Imágen de perfil actualizada correctamente')
                        .ok('Ok!')
                    );
                });
            break;
        case 'portada':
                servicios.set_img_portada().enviar({
                    img: idimg
                }).$promise.then(function(data) {
                    $localStorage.imgPortada = data.img;
                    $rootScope.imgPortada = data.img;
                    
                    $mdDialog.show(
                        $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#dialogContainer')))
                        .clickOutsideToClose(true)
                        .title('NextBook')
                        .textContent('Imágen de portada actualizada correctamente')
                        .ariaLabel('Imágen de portada actualizada correctamente')
                        .ok('Ok!')
                    );
                });
            break;
    }
}

$scope.Uploadimgs = function(cropper){
    switch(tipoimg) {
        case 'perfil':
                var imgData=btoa($scope.myCroppedImage);
                    servicios.add_img_perfil().enviar({
                    img: imgData
                }).$promise.then(function(data) {
                    $localStorage.imgPerfil=servicios.server().appnext()+servicios.dir_img().perfil()+$localStorage.datosE.id_empresa+"/"+data.img;
                    $rootScope.imgPerfil=servicios.server().appnext()+servicios.dir_img().perfil()+$localStorage.datosE.id_empresa+"/"+data.img;
                    
                    $mdDialog.show(
                        $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#dialogContainer')))
                        .clickOutsideToClose(true)
                        .title('NextBook')
                        .textContent('Se ha actualizado correctamente')
                        .ariaLabel('Se ha actualizado correctamente')
                        .ok('Ok!')
                    );
                });        
            break;
        case 'portada':
        $scope.myCroppedImage=cropper;
                var imgData = btoa($scope.myCroppedImage);
                        servicios.add_img_portada().enviar({
                        img: imgData
                    }).$promise.then(function(data) {
                        $localStorage.imgPortada=servicios.server().appnext()+servicios.dir_img().portada()+$localStorage.datosE.id_empresa+"/"+data.img;
                        $rootScope.imgPortada=servicios.server().appnext()+servicios.dir_img().portada()+$localStorage.datosE.id_empresa+"/"+data.img;
                      
                        $mdDialog.show(
                            $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#dialogContainer')))
                            .clickOutsideToClose(true)
                            .title('NextBook')
                            .textContent('Se ha actualizado correctamente')
                            .ariaLabel('Se ha actualizado correctamente')
                            .ok('Ok!')
                        );
                    });
            break;
        }
    }
});

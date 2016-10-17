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

    if ($localStorage.imgLogo != null) {
        $rootScope.imgLogo = $localStorage.imgLogo;
    } else {
        $rootScope.imgLogo = "images/samples/x2.jpg"
    }

    $scope.show_listaimg_modal = function(tipolista) {
        switch(tipolista) {
            case 'perfil':
            servicios.mis_imgs_perfil().get().$promise.then(function(data) {
                $mdDialog.show({
                  clickOutsideToClose: true,
                  controller: 'imagenesCtrl',
                  controllerAs: 'ctrl',
                  parent: angular.element(document.body),
                  targetEvent: event,
                  locals: {imgs: data.imgs,tipoimg: tipolista},
                  templateUrl: 'view/dashboardempresa/perfil/modales/mis_imagenes_perfil.html'
    
                })
            });

            break;
            case 'portada':
            servicios.mis_imgs_portadas().get().$promise.then(function(data) {
                $mdDialog.show({
                  clickOutsideToClose: true,
                  controller: 'imagenesCtrl',
                  controllerAs: 'ctrl',
                  targetEvent: event,
                  locals: {imgs: data.imgs,tipoimg: tipolista},
                  templateUrl: 'view/dashboardempresa/perfil/modales/mis_imagenes_perfil.html'
    
                })
            });
            break;

            case 'logo':
            servicios.mis_imgs_logo().get().$promise.then(function(data) {
                $mdDialog.show({
                  clickOutsideToClose: true,
                  controller: 'imagenesCtrl',
                  controllerAs: 'ctrl',
                  targetEvent: event,
                  locals: {imgs: data.imgs,tipoimg: tipolista},
                  templateUrl: 'view/dashboardempresa/perfil/modales/mis_imagenes_perfil.html'
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
          targetEvent: event,
          locals: {imgs: [],tipoimg: tipo},
          templateUrl: 'view/dashboardempresa/perfil/modales/upload_img_perfil.html'
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
     $scope.cancel =function(){
        $mdDialog.hide();
     };
     $scope.del_img=[];

     if (imgs.length == 0) {
        $scope.mensaje = "No se han encontrado imagenes :(";
     } else {
        for (var i = 0; i < imgs.length; i++) {
            imgs[i]['img']=servicios.server().appnext()+imgs[i]['img'];
        }
        $scope.misimagenes=imgs;
    }
    $scope.mini=false;
        $scope.myImage = '';
        $scope.myCroppedImage = '';
switch(tipoimg) {
        case 'perfil':
            $scope.sizeimg=[300,300];
            break;
        case 'portada':
            $scope.sizeimg=[550,350];
            break;
        case 'logo':
            $scope.sizeimg=[500,214];
            break;
    }

$scope.fileChanged = function(event) {
    $scope.file = event.target.files[0];
  };

  $scope.add_del_img=function(obj){
    var index=$scope.del_img.indexOf(obj);
    if (index===-1) {
        $scope.del_img.push(obj);
    }else{
        $scope.del_img.splice(index,1);
    }
    console.log($scope.del_img);
  }

  $scope.delete_img=function(){
      switch(tipoimg) {
        case 'perfil':
        servicios.del_img_perfil().delete({
                    imgs: $scope.del_img
                }).$promise.then(function(data) {
                    if (data.respuesta) {
                        $mdDialog.hide();
                    }
                });
            break;
        case 'portada':
            servicios.del_img_portada().delete({
                    imgs: $scope.del_img
                }).$promise.then(function(data) {
                    if (data.respuesta) {
                        $mdDialog.hide();
                    }
                });
            break;
        case 'logo':
            servicios.del_img_logo().delete({
                    imgs: $scope.del_img
                }).$promise.then(function(data) {
                    if (data.respuesta) {
                        $mdDialog.hide();
                    }
                });
            break;
    }
  
  }

$scope.Updateimg = function(idimg) {
    switch(tipoimg) {
        case 'perfil':
        servicios.set_img_perfil().enviar({
                    img: idimg
                }).$promise.then(function(data) {
                    $localStorage.imgPerfil = servicios.server().appnext()+data.img;
                    $rootScope.imgPerfil = servicios.server().appnext()+data.img;
                    
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
                    $localStorage.imgPortada = servicios.server().appnext()+data.img;
                    $rootScope.imgPortada = servicios.server().appnext()+data.img;
                    
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
            case 'logo':
                servicios.set_img_logo().enviar({
                    img: idimg
                }).$promise.then(function(data) {
                    $localStorage.imgLogo = servicios.server().appnext()+data.img;
                    $rootScope.imgLogo = servicios.server().appnext()+data.img;
                    $mdDialog.show(
                        $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#dialogContainer')))
                        .clickOutsideToClose(true)
                        .title('NextBook')
                        .textContent('Logo actualizado correctamente')
                        .ariaLabel('Logo actualizado correctamente')
                        .ok('Ok!')
                    );
                });
            break;
    }
}

$scope.Uploadimgs = function(cropper){
    switch(tipoimg) {
        case 'perfil':
                $scope.myCroppedImage=cropper;
                var imgData=btoa($scope.myCroppedImage);
                    servicios.add_img_perfil().enviar({
                    img: imgData
                }).$promise.then(function(data) {
                    $localStorage.imgPerfil=servicios.server().appnext()+servicios.dir_img().perfil()+"/"+data.img;
                    $rootScope.imgPerfil=servicios.server().appnext()+servicios.dir_img().perfil()+"/"+data.img;
                    
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
                        $localStorage.imgPortada=servicios.server().appnext()+servicios.dir_img().portada()+"/"+data.img;
                        $rootScope.imgPortada=servicios.server().appnext()+servicios.dir_img().portada()+"/"+data.img;
                      
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
            case 'logo':
                $scope.myCroppedImage=cropper;
                var imgData = btoa($scope.myCroppedImage);
                        servicios.add_img_logo().enviar({
                        img: imgData
                    }).$promise.then(function(data) {
                        $localStorage.imgLogo=servicios.server().appnext()+servicios.dir_img().logo()+"/"+data.img;
                        $rootScope.imgLogo=servicios.server().appnext()+servicios.dir_img().logo()+"/"+data.img;
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

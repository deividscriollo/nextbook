app.controller('perfilCtrl', function($scope,$rootScope,servicios,$localStorage) {
$rootScope.imgPerfil=$localStorage.imgPerfil;

$scope.show_listaimg_modal=function(){
	// $scope.misimagenes="";
	servicios.mis_imgs_perfil().get().$promise.then(function(data) {
                // $scope.misimagenes=data.imgs;
                servicios.showModal('modal_select_img.html',{source:data.imgs},'imgperfil');
                // console.log(data.imgs);
            });

	}
});

app.controller('perfilCtrl', function($scope,$rootScope,servicios,$localStorage) {
	if ($localStorage.imgPerfil!=null) {
$rootScope.imgPerfil=$localStorage.imgPerfil;
}else{
	$rootScope.imgPerfil="images/users/avatar-001.jpg"
}
$scope.show_listaimg_modal=function(){
	// $scope.misimagenes="";
	servicios.mis_imgs_perfil().get().$promise.then(function(data) {
                // $scope.misimagenes=data.imgs;
                servicios.showModal('modal_select_img.html',{source:data.imgs},'imgperfil');
      
            });

	}
});

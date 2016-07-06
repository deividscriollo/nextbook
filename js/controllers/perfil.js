app.controller('perfilCtrl', function($scope,$rootScope,servicios,$localStorage) {
$rootScope.imgPerfil=$localStorage.imgPerfil;

$scope.show_listaimg_modal=function(){
		servicios.showModal('modal_select_img.html',{source:''},'imgperfil');
	}
});

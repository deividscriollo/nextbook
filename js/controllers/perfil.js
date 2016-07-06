app.controller('perfilCtrl', function($scope, servicios) {

$scope.show_listaimg_modal=function(){
		servicios.showModal('modal_select_img.html',{source:''},'imgperfil');
	}
});

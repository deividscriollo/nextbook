app.controller('perfilCtrl', function($scope, servicios) {

$scope.show_listaimg_modal=function(){
		servicios.showModal('modal_select_img.html',{source:''},'imgperfil');
	}

	$scope.show_select_img=function(data){
		alert(data);
		// servicios.showModal('modal_img_perfil.html',{source:data},'imgperfil');
	}
});

var app = angular.module('app');

app.controller('Catalogo-Ctrl', function($mdDialog, $scope, servicioscatalogo, servicios, $timeout, $localStorage, FileUploader) {

    servicioscatalogo.get_last_code_prod().get().$promise.then(function(data){
        $scope.data.codigo=data.respuesta;
    });

	var uploader = $scope.uploader = new FileUploader({
        // url: servicios.server().appnext()+'public/addProducto',
        headers: {
        Authorization: 'Bearer ' + $localStorage.token,
        },
        removeAfterUpload:true
    });
    // FILTERS

    uploader.filters.push({
        name: 'customFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            return this.queue.length < 10;
        }
    });

    //  // CALLBACKS

    // uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
    //     console.info('onWhenAddingFileFailed', item, filter, options);
    // };
    // uploader.onAfterAddingFile = function(fileItem) {
    //     console.info('onAfterAddingFile', fileItem);
    // };
    // uploader.onAfterAddingAll = function(addedFileItems) {
    //     console.log(addedFileItems);
    // };
    uploader.onBeforeUploadItem = function(item) {
        item.formData=[{
        codigo:$scope.data.codigo,
        descripcion:$scope.data.descripcion,
        nombre:$scope.data.nombre,
        stock:$scope.data.stock,
        precio_unitario:$scope.data.precio_unitario,
        precio_oferta:$scope.data.precio_oferta,
        stock:$scope.data.stock,
        sucursal: $localStorage.sucursal.codigo,
        principal: 0
    }];
    console.log($scope.data.selected);
    };

    $scope.selec_principal=function(item){
        $scope.index=$scope.uploader.queue.indexOf(item);
        // console.log($scope.index);
    }
    // uploader.onProgressItem = function(fileItem, progress) {
    //     console.info('onProgressItem', fileItem, progress);
    // };
    // uploader.onProgressAll = function(progress) {
    //     console.info('onProgressAll', progress);
    // };
    // uploader.onSuccessItem = function(fileItem, response, status, headers) {
    //     console.info('onSuccessItem', fileItem, response, status, headers);
    // };
    // uploader.onErrorItem = function(fileItem, response, status, headers) {
    //     console.info('onErrorItem', fileItem, response, status, headers);
    // };
    // uploader.onCancelItem = function(fileItem, response, status, headers) {
    //     console.info('onCancelItem', fileItem, response, status, headers);
    // };
    // uploader.onCompleteItem = function(fileItem, response, status, headers) {
    //     console.info('onCompleteItem', fileItem, response, status, headers);
    // };
    // uploader.onCompleteAll = function() {
    //     console.info('onCompleteAll');
    // };

    $scope.save_prod = function () {
        console.log($scope.uploader.queue);
    // $scope.uploader.uploadAll();
    };

    // -------------------------------

    var controller = $scope.controller = {
        isImage: function(item) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    };
	
 //    $scope.sizeimg = [200, 200];

 //    $scope.fileChanged = function(event) {
	//     $scope.file = event.target.files[0];
	// };

	$scope.guardar_productos = function(cropper) {
		console.log(cropper);
	  	servicioscatalogo.add_productos().save($scope.data).$promise.then(function(data) {
	  		
	     	if(data.respuesta == true) {
		        $mdDialog.show(
		            $mdDialog.alert()
		            .parent(angular.element(document.querySelector('#dialogContainer')))
		            .clickOutsideToClose(true)
		            .title('NextBook')
		            .textContent('Registro Agregado Correctamente')
		            .ariaLabel('Registro Agregado Correctamente')
		            .ok('Ok!')
		            .openFrom('#left')
		        );
	      	} else {
	      		if(data.respuesta == false) {
		      		$mdDialog.show(
			            $mdDialog.alert()
			            .parent(angular.element(document.querySelector('#dialogContainer')))
			            .clickOutsideToClose(true)
			            .title('NextBook')
			            .textContent('Clave de Acceso no Válida ')
			            .ariaLabel('Clave de Acceso no Válida')
			            .ok('Ok!')
			            .openFrom('#left')
			        );
			    }
	      	}
	  	});
	}
});
var app = angular.module('app');

app.controller('subir_FacturasCtrl', function($mdDialog, $scope, serviciosfacturanext, servicios, $timeout, $localStorage) {

	$scope.gastos = servicios.gastos();

	$scope.addititem = function (event) {
	    $mdDialog.show({
	      clickOutsideToClose: true,
	      controller: 'addItemXml',
	      controllerAs: 'ctrl',
	      focusOnOpen: false,
	      targetEvent: event,
	      templateUrl: 'view/dashboardempresa/facturanext/cargarxml.html',
	    })
	};

	// $scope.guardar_proveedor = function(){
	//   	serviciosfacturanext.add_proveedor().save($scope.data).$promise.then(function(data) {
	//      	if(data.respuesta == true) {
	// 	        $mdDialog.show(
	// 	            $mdDialog.alert()
	// 	            .parent(angular.element(document.querySelector('#dialogContainer')))
	// 	            .clickOutsideToClose(true)
	// 	            .title('NextBook')
	// 	            .textContent('Registro Agregado Correctamente')
	// 	            .ariaLabel('Registro Agregado Correctamente')
	// 	            .ok('Ok!')
	// 	            .openFrom('#left')
	// 	        );
	//       	}
	//   	});
	// }
});

app.controller('addItemXml', function ($mdDialog, $scope, serviciosfacturanext, servicios, $timeout, $localStorage) {
  
  	this.cancel = $mdDialog.cancel
  	$scope.files = "";

  	// $("#xml_file").change(function(e){
   //  	$scope.files = this.files;
  	// });

  	$scope.get_claveAcceso = function(xml) {
		if (xml.length != 0) {
			var x2js = new X2JS();
		 	var xmltotal = x2js.xml_str2json(xml);
		 	var llave = '';
		 	for (var key in xmltotal) {
		  		llave = key;
			}

			var limite = xmltotal[key].comprobante.length;
			var xmlcomprobante = xmltotal[key].comprobante.substring(47, limite-3);;
			var comprobantejson = x2js.xml_str2json(xmlcomprobante);
			$claveAcceso = comprobantejson.factura.infoTributaria.claveAcceso;
		} else {
		  	// servicios.showModal('modal_mensaje.html',{error:'0'},'mensaje');
		}
	}

   $scope.showContent = function($fileContent) {
       // console.log($fileContent);
		$scope.get_claveAcceso($fileContent);
    };

    $scope.set_clave = function() {
      // $("#input_clave").val($claveAcceso);
      // $("#label_clave").addClass('md-input-has-value md-input-focused');
    }

    $scope.upload_xml = function() {
    	// servicios.UploadFac().subir({"clave":$claveAcceso,"tipo":$scope.tipo}).$promise.then(function(data) {
     //    	servicios.showModal('modal_mensaje.html',{error:data.error},'mensaje');
     //    });
    }

  // $scope.guardar_nomina = function() {
  //   serviciosnomina.add_nomina().save($scope.data).$promise.then(function(data) {
  //     if(data.respuesta == true) {
  //         $mdDialog.show(
  //           $mdDialog.alert()
  //           .parent(angular.element(document.querySelector('#dialogContainer')))
  //           .clickOutsideToClose(true)
  //           .title('NextBook')
  //           .textContent('Registro Agregado Correctamente')
  //           .ariaLabel('Registro Agregado Correctamente')
  //           .ok('Ok!')
  //           .openFrom('#left')
  //         );
  //       }
  //   }); 
  // }  
});
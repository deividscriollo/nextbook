var app = angular.module('app');

app.controller('SubirFacCtrl', function($mdDialog, $scope, serviciosfacturanext, servicios, $timeout, $localStorage) {
	$scope.gastos = servicios.gastos();

	$scope.get_claveAcceso = function(xml) {
		if (xml.length != 0) {
			var x2js = new X2JS();
		 	var xmltotal = x2js.xml_str2json(xml);
		 	var llave = '';
		 	for (var key in xmltotal) {
		  		llave = key;
			};

			var limite = xmltotal[key].comprobante.length;
			var com = xmltotal[key].comprobante.substring(limite-3);

			if(com == ']]>') {
				var xmlcomprobante=xmltotal[key].comprobante.substring(47, limite-3);	
			} else {
				var xmlcomprobante = xmltotal[key].comprobante;	
			}

			var comprobantejson = x2js.xml_str2json(xmlcomprobante);
			var claveAcceso = comprobantejson.factura.infoTributaria.claveAcceso;

			$scope.data = {
				clave: claveAcceso	
			};
		}
	};

	$scope.showContent = function($fileContent) {
		$scope.get_claveAcceso($fileContent);
    };

	$scope.guardar_factura_electronica = function(){
	  	serviciosfacturanext.addFacElectronicas().save($scope.data).$promise.then(function(data) {
	  		
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

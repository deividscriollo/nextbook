var app=angular.module('app');
app.controller('SubirFacCtrl', function ($scope,servicios,ModalService) {
   // console.log(UploadFac.subir());
   $scope.gastos=servicios.gastos();
   $scope.files="";
$("#xml_file").change(function(e){
    $scope.files=this.files;
  });

$scope.get_claveAcceso=function(xml){
 
if (xml.length!=0) {
  var xmlDoc = $.parseXML(xml);
  $xml = $(xmlDoc);
  $aux = $xml.find("claveAcceso").text();
  if ($aux=="") {
    $comprobante = $xml.find("comprobante").text();
    xmlDoc = $.parseXML($comprobante);
    $xml = $(xmlDoc);
    $claveAcceso = $xml.find("claveAcceso").text();
  }else{
    $claveAcceso = $aux;
  }
}else{
  $scope.showModal('0');
}


}

$scope.showModal = function(mensaje) {
        ModalService.showModal({
            templateUrl: 'view/modal.html',
            controller: "ModalController",
            inputs: {
            mensaje: mensaje
                    }
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                $scope.message = "You said " + result;
            });
        });
    };

 $scope.showContent = function($fileContent){
       // console.log($fileContent);
$scope.get_claveAcceso($fileContent);
    };

    $scope.set_clave=function(){
      $("#input_clave").val($claveAcceso);
      $("#label_clave").addClass('md-input-has-value md-input-focused');
    }

    $scope.upload_xml=function(){

      // console.log();
      servicios.UploadFac().subir({"clave":$claveAcceso,"tipo":$scope.tipo}).$promise.then(function(data) {
           $scope.showModal(data.methods);
        });

    }
});

app.controller('ModalController', function($scope,mensaje) {
    
  switch(mensaje) {
    case '4':
     $scope.mensaje="Documento no existe en el SRI";
      break;
    case '5':
     $scope.mensaje="la Factura ya existe";
      break;
      case '0':
     $scope.mensaje="Documento vacío";
      break;

  }

});
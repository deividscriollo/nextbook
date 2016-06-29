var app=angular.module('app').controller('SubirFacCtrl', function ($scope,servicios) {
   // console.log(UploadFac.subir());
   $scope.files="";
$("#xml_file").change(function(e){
    $scope.files=this.files;
  });

$scope.get_claveAcceso=function(xml){
 
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
  console.log($claveAcceso);
}

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
      servicios.UploadFac().subir({"clave":$claveAcceso}).$promise.then(function(data) {
    console.log(data);
        });
    }




}

);
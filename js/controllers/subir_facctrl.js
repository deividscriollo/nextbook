var app=angular.module('app').controller('SubirFacCtrl', function ($scope,UploadFac) {
   // console.log(UploadFac.subir());
   $scope.files="";
$("#xml_file").change(function(e){
    $scope.files=this.files;
  });

$scope.get_claveAcceso=function(xml){
 
  var xmlDoc = $.parseXML(xml);
  $xml = $(xmlDoc);
  $aux = $xml.find("claveAcceso").text();
  if ($claveAcceso!="") {
    $comprobante = $xml.find("comprobante").text();
    var xmlDoc = $.parseXML(comprobante);
    $xml = $(xmlDoc);
    $claveAcceso = $xml.find("claveAcceso").text();
  }else{
    $claveAcceso = $xml.find("claveAcceso").text();
  }

  console.log($claveAcceso);

}

 $scope.showContent = function($fileContent){
       // console.log($fileContent);
$scope.get_claveAcceso($fileContent);
    };




}

);
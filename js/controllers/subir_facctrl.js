var app=angular.module('app');
app.controller('SubirFacCtrl', function ($scope,servicios) {
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
  servicios.showModal('modal_mensaje.html',{error:'0'},'mensaje');
}

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
      servicios.UploadFac().subir({"clave":$claveAcceso,"tipo":$scope.tipo}).$promise.then(function(data) {
           servicios.showModal('modal_mensaje.html',{error:data.error},'mensaje');
        });

    }
});
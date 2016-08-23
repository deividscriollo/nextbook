app.controller('PersonasCtrl', function ($scope,loaddatosSRI, servicios, SweetAlert) {

    $scope.cargadatos = function(estado) {
        if (estado) {
            loaddatosSRI.get({
                nrodocumento: $("#cedula").val(),
                tipodocumento: "CEDULA"
            }).$promise.then(function(data) {
                $scope.data.nombres_apellidos = data.nombres_apellidos;
                $scope.data.provincia = data.provincia;
                $scope.data.canton = data.canton;
                $scope.data.parroquia = data.parroquia;
                $scope.data.zona = data.zona;
            }, function(err) {
                console.log(err.data.error);
            });
        } 
    }

    $scope.registrar = function() {
        servicios.registrarPersona().save($scope.data).$promise.then(function(result) {

        if (result.respuesta == true) {
                SweetAlert.swal("Registro Correcto", "En hora buena registro correcto revise su correo para activar su cuenta.", "success");
                $scope.elemennotview=true;
                $scope.elementview=false;                
                $scope.ruc = null;
            } else {
                SweetAlert.swal("Lo sentimos!", "Intente mas Tarde.", "error");      
            }  
        });
    }
});
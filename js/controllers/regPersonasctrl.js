app.controller('PersonasCtrl', function ($scope,loaddatosSRI, Persona) {
 	 // console.log('Personas');

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
                console.log(data);
            }, function(err) {
                console.log(err.data.error);
            });
        } 
    }
    $scope.registrar = function() {
        Persona.save($scope.data);
        console.log($scope.data);
    }

    });
 
 app.controller('EmpresasCtrl', function ($scope,loaddatosSRI, Empresa) {
 	// console.log('Message from EmpresasCtrl');
 $scope.nombres_apellidos = "";
    $scope.cedula = "";
    $scope.sucursales=[];
    $scope.cargadatos = function(estado) {
        if (estado) {
            loaddatosSRI.get({
                nrodocumento: $("#ruc").val(),
                tipodocumento: "RUC"
            }).$promise.then(function(data) {
                $scope.data.razon_social = data.datosEmpresa.razon_social;
                $scope.data.nombre_comercial = data.datosEmpresa.nombre_comercial;
                $scope.data.estado_contribuyente = data.datosEmpresa.estado_contribuyente;
                $scope.data.clase_contribuyente = data.datosEmpresa.clase_contribuyente;
                $scope.data.tipo_contribuyente = data.datosEmpresa.tipo_contribuyente;
                $scope.data.obligado_llevar_contabilidad = data.datosEmpresa.obligado_llevar_contabilidad;
                $scope.data.actividad_principal = data.datosEmpresa.actividad_economica;
                $scope.nombres_apellidos=data.establecimientos.adicional.representante_legal;
                $scope.sucursales=data.establecimientos;
                // console.log(data.establecimientos.adicional.cedula);
            }, function(err) {
                console.log(err.data.error);
            });
        } 
        // else {
        //     $scope.data.razon_social = "";
        //     $scope.data.nombre_comercial = "";
        //     $scope.data.estado_contribuyente = "";
        //     $scope.data.clase_contribuyente = "";
        //     $scope.data.tipo_contribuyente = "";
        //     $scope.data.obligado_contabilidad = "";
        //     $scope.data.actividad_principal = "";
        // }
    }
    $scope.registrar = function() {
        $scope.data['nombres_apellidos']=$scope.nombres_apellidos;
        $scope.data['sucursales']=$scope.sucursales;
        Empresa.save($scope.data);
        console.log($scope.data);
    }

    });
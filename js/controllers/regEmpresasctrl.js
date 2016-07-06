 
 app.controller('EmpresasCtrl', function ($scope,loaddatosSRI, Empresa, localizacion) {
        

    // input items generate
    $scope.inputitems=[
        {name:'Razon Social', type:'ng-model="data."'},
        {name:'Nombre Comercial', type:'ng-model="data."'},
        {name:'Estado del Contribuyente en el RUC', type:'ng-model="data."'},
        {name:'Clase de contribuyente', type:'ng-model="data."'},
        {name:'Tipo de contribuyente', type:'ng-model="data."'},
        {name:'Obligado a llevar Contabilidad', type:'ng-model="data."'},
        {name:'Obligado a llevar Contabilidad', type:'ng-model="data.l"'}
    ];

    $scope.elementview=false;
    $scope.elemennotview=true;
    // asignacion de valores
    $scope.states = localizacion.provincia();

    // method generate
    $scope.update = function(){
        var itemselect = $scope.myOption;
        for (k = 0; k < $scope.states.length; ++k) {
            var item = $scope.states[k];
            if (item['id']==itemselect) {
                $scope.lastName = '( '+item['codtelefonico']+' ) - ';
            }
        }

    }
    $scope.searchruc = function() {    
        if ($scope.ruc) {
            console.log('test');
            loaddatosSRI.get({
                nrodocumento: $scope.ruc,
                tipodocumento: "RUC"
            }).$promise.then(function(data) {
                var data = data.datosEmpresa;
                $scope.razon_social = data.razon_social;
                $scope.nombre_comercial = data.nombre_comercial;
                $scope.estado_contribuyente = data.estado_contribuyente;
                $scope.clase_contribuyente = data.clase_contribuyente;
                $scope.tipo_contribuyente = data.tipo_contribuyente;
                $scope.obligado_llevar_contabilidad = data.obligado_llevar_contabilidad;
                $scope.actividad_principal=data.actividad_economica;
                $scope.rucdata = data;
                $scope.elementview=true;
                $scope.elemennotview=false;
                
            });
        }else{
            console.log('no hay algo');
        }
    };

    

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
    }

}).config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
  });
 
 app.controller('EmpresasCtrl', function ($scope,loaddatosSRI, Empresa, servicios, registros, SweetAlert) {
    // input items generate
  
    // sweetAlert("Oops...", "Something went wrong!", "error");

    $scope.permite = function (elEvento) {
        var permitidos = 'num';
      // Variables que definen los caracteres permitidos
      var numeros = "0123456789";
      var caracteres = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
      var numeros_caracteres = numeros + caracteres;
      var teclas_especiales = [8, 37, 39, 46];
      // 8 = BackSpace, 46 = Supr, 37 = flecha izquierda, 39 = flecha derecha
     
     
      // Seleccionar los caracteres a partir del parámetro de la función
      switch(permitidos) {
        case 'num':
          permitidos = numeros;
          break;
        case 'car':
          permitidos = caracteres;
          break;
        case 'num_car':
          permitidos = numeros_caracteres;
          break;
      }
     
      // Obtener la tecla pulsada 
      var evento = elEvento || window.event;
      var codigoCaracter = evento.charCode || evento.keyCode;
      var caracter = String.fromCharCode(codigoCaracter);
     
      // Comprobar si la tecla pulsada es alguna de las teclas especiales
      // (teclas de borrado y flechas horizontales)
      var tecla_especial = false;
      for(var i in teclas_especiales) {
        if(codigoCaracter == teclas_especiales[i]) {
          tecla_especial = true;
          break;
        }
      }
     
      // Comprobar si la tecla pulsada se encuentra en los caracteres permitidos
      // o si es una tecla especial
      return permitidos.indexOf(caracter) != -1 || tecla_especial;
    }
    

    $scope.elementview=false;
    $scope.elemennotview=true;
    // asignacion de valores
    servicios.get_provincias().get().$promise.then(function(data){
        $scope.states=data.provincias;
});
    // $scope.states = localizacion.provincia();
    $scope.nombres_apellidos = "";
    $scope.cedula = "";
    $scope.sucursales=[];



    // method generate
    $scope.update = function(){
        var itemselect = $scope.myOption;
        for (k = 0; k < $scope.states.length; ++k) {
            var item = $scope.states[k];
            if (item['id']==itemselect) {
                $scope.lastName = '( '+item['codtelefonico']+' ) - ';
                $scope.lastName2 = '( '+item['codtelefonico']+' ) - ';
            }
        }
    }
    $scope.verificar=function(){
        var itemselect = $scope.myOption;
        if (!itemselect) {
            angular.element('#myselect').triggerHandler('click');
        }
    }
    $scope.searchruc = function() {

        registros.virificar_registro_existente().query({ruc: $scope.ruc}).$promise.then(function(data){
            var x = data.respuesta;
            if (x == true) {
                SweetAlert.swal("Ya Existe!", "Este numero de RUC ya se encuentra registrado.", "warning");
            }else{
                var data = data.respuesta;
                $scope.sucursales=data.establecimientos;
                var data = data.datosEmpresa;
                $scope.razon_social = data.razon_social;
                $scope.nombre_comercial = data.nombre_comercial;
                $scope.estado_contribuyente = data.estado_contribuyente;
                $scope.clase_contribuyente = data.clase_contribuyente;
                $scope.tipo_contribuyente = data.tipo_contribuyente;
                $scope.obligado_llevar_contabilidad = data.obligado_llevar_contabilidad;
                $scope.actividad_principal=data.actividad_economica;
                data['sucursales']=$scope.sucursales;
                $scope.rucdata = data;
                $scope.elementview=true;
                $scope.elemennotview=false;  
            }
        });
    };

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
            }, function(err) {
                // console.log(err.data.error);
                console.log('proble-conecction');
            });
        } 
    }
    $scope.registrar = function() {
        $scope.rucdata['telefonos']=[$scope.lastName,$scope.lastName2];
        $scope.rucdata['privincia']=$scope.myOption;
        $scope.rucdata['celular']=$scope.fono;
        $scope.rucdata['correo']=$scope.correo;
        Empresa.save($scope.rucdata).$promise.then(function(result){
            if (result.respuesta==true) {
                SweetAlert.swal("Registro Correcto", "En hora buena registro correcto revise su correo para activar su cuenta.", "success");
                $scope.elemennotview=true;
                $scope.elementview=false;                
                $scope.ruc = null;
                reset();
            }else{
                SweetAlert.swal("Lo sentimos!", "Intente mas Tarde.", "error");      
            }   
        });
    }
    
    var reset = function(){
        var vm = this;
        vm.formsearchruc.$setPristine();
        vm.formsearchruc.$setUntouched();
        vm.formsearchruc = '';
    }
});
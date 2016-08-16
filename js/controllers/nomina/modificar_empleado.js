var app = angular.module('app');

app.controller('modificar_empleados', function ($mdDialog, $scope, serviciosnomina, servicios, $timeout, $localStorage, MyService, $location) {

  $scope.data = {
    id: MyService.datos.respuesta.id,
    codigo_personal: MyService.datos.respuesta.codigo_personal,
    fecha_aplicacion: MyService.datos.respuesta.fecha_aplicacion,
    cedula_identificacion: MyService.datos.respuesta.cedula_identificacion,
    nombres_completos: MyService.datos.respuesta.nombres_completos,
    fecha_nacimiento: MyService.datos.respuesta.fecha_nacimiento,
    edad: MyService.datos.respuesta.edad,
    telf_fijo: MyService.datos.respuesta.telf_fijo,
    telf_celular: MyService.datos.respuesta.telf_celular,
    estado_civil: MyService.datos.respuesta.estado_civil,
    cargas_familiares: MyService.datos.respuesta.cargas_familiares,
    email: MyService.datos.respuesta.email,
    especialidad: MyService.datos.respuesta.especialidad,
    provincia: MyService.datos.respuesta.provincia,
    canton: MyService.datos.respuesta.canton,
    parroquia: MyService.datos.respuesta.parroquia,
    sector: MyService.datos.respuesta.sector,
    direccion: MyService.datos.respuesta.direccion,
    tipo_sangre: MyService.datos.respuesta.tipo_sangre,
    alergia_antibio: MyService.datos.respuesta.alergia_antibio,
    enfermedad: MyService.datos.respuesta.enfermedad,
    id_nomina: MyService.datos.respuesta.id_nomina,
    id_departamento: MyService.datos.respuesta.id_departamento,
    id_cargo: MyService.datos.respuesta.id_cargo,
    tipo_contrato: MyService.datos.respuesta.tipo_contrato,
    jornada: MyService.datos.respuesta.jornada,
    fecha_ing_trab: MyService.datos.respuesta.fecha_ing_trab,
  };

  if(MyService.datos.respuesta.relacion_dependencia == "1") {
    $scope.data.relacion_dependencia= true;
  }

  if(MyService.datos.respuesta.instruccion == "Primaria") {
    $scope.data.instruccion = "Primaria";
  }

  if(MyService.datos.respuesta.instruccion == "Ciclo Básico") {
    $scope.data.instruccion = "Ciclo Básico";
  }

  if(MyService.datos.respuesta.instruccion == "Bachiller") {
    $scope.data.instruccion = "Bachiller";
  }

  if(MyService.datos.respuesta.instruccion == "Universitario") {
    $scope.data.instruccion = "Universitario";
  }

  if(MyService.datos.respuesta.tipo_vivienda == "Vivienda Propia") {
    $scope.data.tipo_vivienda = "Vivienda Propia";
  }

  if(MyService.datos.respuesta.tipo_vivienda == "Vivienda en Arriendo") {
    $scope.data.tipo_vivienda = "Vivienda en Arriendo";
  }

  if(MyService.datos.respuesta.tipo_vivienda == "Vivienda familiar") {
    $scope.data.tipo_vivienda = "Vivienda familiar";
  }

  if(MyService.datos.respuesta.tipo_vivienda == "Otra") {
    $scope.data.tipo_vivienda = "Otra";
  }

  // combo nomina
  serviciosnomina.cmbnomina().get().$promise.then(function(data) {
    $scope.nominas = data.respuesta; 
  });
  // fin

  // combo nomina
  serviciosnomina.cmbdepartamento().get().$promise.then(function(data) {
    $scope.departamentos = data.respuesta; 
  });
  // fin

  // combo nomina
  serviciosnomina.cmbcargo().get().$promise.then(function(data) {
    $scope.cargos = data.respuesta; 
  });
  // fin

  // guardar empleados
  $scope.modificar_empleado = function() {
    serviciosnomina.edit_empleado().edit($scope.data).$promise.then(function(data) {
      if(data.respuesta == true) {
          $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#dialogContainer')))
            .clickOutsideToClose(true)
            .title('NextBook')
            .textContent('Registro Modificado Correctamente')
            .ariaLabel('Registro Modificado Correctamente')
            .ok('Ok!')
            .openFrom('#left')
         );
        $location.url("/My-space/NominaAdmin/Listado_Empleado"); 
      }
    });       
  }
  // fin
});


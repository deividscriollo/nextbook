var app = angular.module('app');

app.controller('rol_pagosCtrl', function ($mdDialog, $scope, serviciosnomina, servicios, $timeout, $localStorage, MyService, $location) {

  $scope.data = {
    id_empleado: MyService.datos.respuesta.id,
    cedula_identificacion: MyService.datos.respuesta.cedula_identificacion,
    nombres_completos: MyService.datos.respuesta.nombres_completos,
    direccion: MyService.datos.respuesta.direccion,
    departamento: MyService.datos.respuesta.departamento,
    cargo: MyService.datos.respuesta.cargo,
    sueldo: MyService.datos.respuesta.sueldo,
    horas: MyService.datos.respuesta.horas_laborar,
    dias_laborados: MyService.datos.respuesta.dias,  
    dias_no_laborados: "0",
    extras: "0",
    sueldo_mes: "0.000",
    horas_extras: "0.000",
    comisiones: "0.000",
    decimo_tercero: "0.000",
    decimo_cuarto: "0.000",
    total_ingresos: "0.000",
    aporte_iess: "0.000",
    quirografarios: "0.000",
    anticipos: "0.000",
    atrasos: "0.000",
    permisos: "0.000",
    faltas: "0.000",
    multas: "0.000",
    total_descuentos: "0.000",
    neto_pagar: "0.000"
  };

  $scope.data.relacion_dependencia = true;

  // codigo personal
  serviciosnomina.codigo_rol().get().$promise.then(function(data) {
    $scope.data.codigo_rol = data.codigo; 
  });

  // calcular rol
  $scope.calcular_rol = function() {
    $scope.data.sueldo_mes = ((($scope.data.sueldo / 30 ) / 8) * 30 * $scope.data.horas).toFixed(3);
    $scope.data.horas_extras = ((($scope.data.sueldo / 15) / 8) * $scope.data.extras).toFixed(3);
    $scope.data.decimo_tercero = ((($scope.data.sueldo / 365) / 8) * $scope.data.dias_laborados * $scope.data.horas).toFixed(3);
    $scope.data.decimo_cuarto = ((($scope.data.sueldo / 365) / 8) * $scope.data.dias_laborados * $scope.data.horas).toFixed(3);
    $scope.data.total_ingresos = parseFloat($scope.data.sueldo_mes) + parseFloat($scope.data.horas_extras) + parseFloat($scope.data.comisiones) + parseFloat($scope.data.decimo_tercero) + parseFloat($scope.data.decimo_cuarto);

    if($scope.data.horas >= 8) {
        $scope.data.aporte_iess = (($scope.data.sueldo * 9.45) / 100).toFixed(3); 
    } else {
        $scope.data.aporte_iess = ((($scope.data.sueldo * 9.45) / 100) / 2).toFixed(3);
    }

    $scope.data.faltas = ((($scope.data.sueldo / 30) / 8 ) * $scope.data.horas * $scope.data.dias_no_laborados).toFixed(3);
    $scope.data.total_descuentos = parseFloat($scope.data.aporte_iess) + parseFloat($scope.data.quirografarios) + parseFloat($scope.data.anticipos) + parseFloat($scope.data.atrasos) + parseFloat($scope.data.permisos) + parseFloat($scope.data.faltas) + parseFloat($scope.data.multas);

    $scope.data.neto_pagar = ($scope.data.total_ingresos - $scope.data.total_descuentos).toFixed(3);
  }

  // guardar rol pagos
  $scope.guardar_rol = function() {
    serviciosnomina.add_rol_pagos().save($scope.data).$promise.then(function(data) {
      if(data.respuesta == true) {
          $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#dialogContainer')))
            .clickOutsideToClose(true)
            .title('NextBook')
            .textContent('Registro Agregado Correctamente')
            .ariaLabel('Registro Agregado Correctamente')
            .ok('Ok!')
            .openFrom('#left')
         );
        $location.url("/My-space/NominaAdmin/Nomina_Pagos");  
      }
    });       
  }
  // fin
});






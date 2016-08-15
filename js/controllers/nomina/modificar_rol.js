var app = angular.module('app');
app.controller('modificar_rol', function ($mdDialog, $scope, serviciosnomina, servicios, $timeout, $localStorage, MyService, $location) {

  // cargar datos rol
  $scope.data = {
    id: MyService.datos.respuesta.rol.id,
    codigo_rol: MyService.datos.respuesta.rol.codigo_rol,
    fecha_rol: MyService.datos.respuesta.rol.fecha_rol,
    neto_pagar: MyService.datos.respuesta.rol.neto_pagar,
    id_empleado: MyService.datos.respuesta.rol.id_empleado,

    cedula_identificacion: MyService.datos.respuesta.datos_empleado.cedula_identificacion,
    departamento: MyService.datos.respuesta.datos_empleado.departamento,
    nombres_completos: MyService.datos.respuesta.datos_empleado.nombres_completos,
    direccion: MyService.datos.respuesta.datos_empleado.direccion,
    cargo: MyService.datos.respuesta.datos_empleado.cargo,
    sueldo: MyService.datos.respuesta.datos_empleado.sueldo,

    horas: MyService.datos.respuesta.detalle_rol.horas,
    dias_laborados: MyService.datos.respuesta.detalle_rol.dias_laborados,
    dias_no_laborados: MyService.datos.respuesta.detalle_rol.dias_no_laborados,
    extras: MyService.datos.respuesta.detalle_rol.extras,
    sueldo_mes: MyService.datos.respuesta.detalle_rol.sueldo_mes,
    horas_extras: MyService.datos.respuesta.detalle_rol.horas_extras,
    comisiones: MyService.datos.respuesta.detalle_rol.comisiones,
    decimo_tercero: MyService.datos.respuesta.detalle_rol.decimo_tercero,
    decimo_cuarto: MyService.datos.respuesta.detalle_rol.decimo_cuarto,
    total_ingresos: MyService.datos.respuesta.detalle_rol.total_ingresos,
    aporte_iess: MyService.datos.respuesta.detalle_rol.aporte_iess,
    quirografarios: MyService.datos.respuesta.detalle_rol.quirografarios,
    anticipos: MyService.datos.respuesta.detalle_rol.anticipos,
    atrasos: MyService.datos.respuesta.detalle_rol.atrasos,
    permisos: MyService.datos.respuesta.detalle_rol.permisos,
    faltas: MyService.datos.respuesta.detalle_rol.faltas,
    multas: MyService.datos.respuesta.detalle_rol.multas,
    total_descuentos: MyService.datos.respuesta.detalle_rol.total_descuentos
  };

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

  // modificar rol
  $scope.modificar_rol = function() {
    serviciosnomina.edit_rol().edit($scope.data).$promise.then(function(data) {
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
        $location.url("/My-space/NominaAdmin/Listado_Roles"); 
      }
    });       
  }

});


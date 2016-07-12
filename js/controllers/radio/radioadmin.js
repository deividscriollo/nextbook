var app = angular.module('app');
app.controller('radioadminCtrl', function ($scope, $localStorage) {
        $scope.appslist =       [
                                                {
                                                        title:'Empresa',
                                                        descripcion:'descripcion',
                                                },
                                                {
                                                        title:'Clientes',
                                                        descripcion:'descripcion'
                                                },
                                                {
                                                        title:'Programas',
                                                        descripcion:'descripcion'
                                                },
                                                {
                                                        title:'Vendedores',
                                                        descripcion:'descripcion'
                                                },
                                                {
                                                        title:'Fichas de Ingreso',
                                                        descripcion:'descripcion'
                                                },
                                                {
                                                        title:'Ficha Invitados',
                                                        descripcion:'descripcion'
                                                },
                                                {
                                                        title:'Ficha Programas',
                                                        descripcion:'descripcion'
                                                },
                                                {
                                                        title:'Contrato Selectivo',
                                                        descripcion:'descripcion'
                                                },
                                                {
                                                        title:'Contrato Rotativo',
                                                        descripcion:'descripcion'
                                                },
                                                {
                                                        title:'Facturacion',
                                                        descripcion:'descripcion'
                                                },
                                                {
                                                        title:'Rol de Pagos',
                                                        descripcion:'descripcion'
                                                },
                                                {
                                                        title:'Privilegios',
                                                        descripcion:'descripcion'
                                                },

                        ];            

});




app.controller('cliente', function ($scope, $localStorage,servicios,loaddatosSRI, $routeSegment) {
        // guardar clientes
        $scope.guardar_cliente = function() {
                servicios.add_cliente().save($scope.data).$promise.then(function(data) {
                        if(data.respuesta == true) {
                                alert('cliente guardado correctamente');        
                                document.getElementById("clienteForm").reset();
                        }
                });       
        }
        // fin

        // comparar clientes
        $scope.comparar_cliente = function() {
                servicios.repeat_cliente().repeat($scope.data).$promise.then(function(data) {
                        console.log(data.respuesta);
                        if(data.respuesta) {
                                $scope.data.ruc_empresa = '';
                                alert('repetido');
                        } else {
                                if (data.respuesta.datosEmpresa.valid == '' ) {
                                        $scope.data.ruc_empresa = '';
                                        alert('ruc incorrecto');
                                } else {
                                    $scope.data.nombre_comercial = data.respuesta.datosEmpresa.nombre_comercial;
                                    $scope.data.actividad_economica = data.respuesta.datosEmpresa.actividad_economica;
                                    $scope.data.razon_social = data.respuesta.datosEmpresa.razon_social;
                                    $scope.data.representante_legal = data.respuesta.establecimientos.adicional.representante_legal;
                                    $scope.data.cedula_representante = data.respuesta.establecimientos.adicional.cedula;            
                                } 
                        }
                             
                })
        }
        // fin

        // verificar ruc
        $scope.cargadatos = function(estado) {
                if($('#ruc_empresa').val() == '') {
                        $.gritter.add({
                                title: 'Ingrese Ruc Empresa',
                                class_name: 'gritter-error gritter-center',
                                time: 1000,
                        });
                        $('#ruc_empresa').focus();
                } else {
                         if (estado) {
                                $.blockUI({ css: { 
                            border: 'none', 
                            padding: '15px', 
                            backgroundColor: '#000', 
                            '-webkit-border-radius': '10px', 
                            '-moz-border-radius': '10px', 
                            opacity: .5, 
                            color: '#fff' 
                                },
                            message: '<h3>Consultando, Por favor espere un momento    ' + '<i class="fa fa-spinner fa-spin"></i>' + '</h3>'
                        }); 
                    loaddatosSRI.get({
                        nrodocumento: $("#ruc_empresa").val(),
                        tipodocumento: "RUC"
                    }).$promise.then(function(data) {
                        $.unblockUI();
                        if(data.datosEmpresa.valid == 'false') {
                                $.gritter.add({
                                                        title: 'Error.... Ruc Erroneo',
                                                        class_name: 'gritter-error gritter-center',
                                                        time: 1000,
                                                });
                                                $('#ruc_empresa').focus();
                                                $('#form_clientes').each(function(){
                                                  this.reset();
                                                });
                        } else {
                                $('#nombre_comercial').val(data.datosEmpresa.nombre_comercial);
                                $('#actividad_economica').val(data.datosEmpresa.actividad_economica);
                                $('#razon_social').val(data.datosEmpresa.razon_social);
                                $('#representante_legal').val(data.establecimientos.adicional.representante_legal);
                                $('#cedula').val(data.establecimientos.adicional.cedula);
                        }
                    }, function(err) {
                        console.log(err.data.error);
                    });
                }
        } 
    }
    // fin


});

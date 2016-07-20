var app = angular.module('app');
app.directive('confirm', ['$window', function($window) {
    return {
        restrict: 'A',
        priority: 100,
        link: function(scope, element, attr) {
            element.bind('click', function(e) {
                var msg = attr.confirm;

                if (!$window.confirm(msg)) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                }
            });
        }
    };
}]);

app.directive('rucValidation', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function myValidation(value) {
                if (value.length == 13) {
                    var isvalid = false;
                    var digitoverificador = 0;
                    var coeficientes = [];
                    var total = 0;
                    var modulo = 0;
                    var valorpos = 0;
                    var digitoverificadorsum = 0;
                    var digitoverificadorsum = 0;
                    //************************************** Sociedades Publica Privada
                    if (value.charAt(2) == 6 || value.charAt(2) == 9) {
                        if (value.charAt(2) == 9) {
                            digitoverificador = value.charAt(9);
                            coeficientes = [4, 3, 2, 7, 6, 5, 4, 3, 2];
                        }
                        if (value.charAt(3) == 6) {
                            digitoverificador = value.charAt(8);
                            coeficientes = [3, 2, 7, 6, 5, 4, 3, 2];
                        }
                        modulo = 11;

                        for (var i = 0; i < coeficientes.length; i++) {
                            valorpos = value.charAt(i) * coeficientes[i];
                            total = total + valorpos;
                        }
                        var residuo = total % modulo;

                        if (residuo == 0) {
                            digitoverificador = 0;
                        } else {
                            digitoverificadorsum = modulo - residuo;
                        }
                        if (digitoverificador == digitoverificadorsum) {
                            isvalid = true;
                            mCtrl.$setValidity('charE', true);
                        }
                    };

                    //************************************** Personas naturales
                    if ((value.charAt(2) >= 0 && value.charAt(2) <= 5) && (value.substring(0, 2) >= 1 && value.substring(0, 2) <= 24)) {
                        // console.log('persona natural ------------------');

                        coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];
                        digitoverificador = value.charAt(9);
                        modulo = 10;

                        for (var i = 0; i < coeficientes.length; i++) {
                            valorpos = value.charAt(i) * coeficientes[i];
                            if (valorpos >= 10) {
                                valorpos = parseInt(valorpos.toString().charAt(0)) + parseInt(valorpos.toString().charAt(1));
                            }
                            total = total + valorpos;
                        }
                        residuo = total % modulo;

                        if (residuo == 0) {
                            digitoverificador = 0;
                        } else {
                            digitoverificadorsum = modulo - residuo;
                        };
                        // console.log(digitoverificadorsum);
                        if (digitoverificador == digitoverificadorsum) {
                            isvalid = true;
                            mCtrl.$setValidity('charE', true);
                        }

                    }
                } else {
                    //imprimimos en consola si la value tiene mas o menos de 13 digitos
                    mCtrl.$setValidity('charE', false);
                }
                return value;
            }
            mCtrl.$parsers.push(myValidation);
        }
    };
});

app.directive('pwCheck', [function() {
    return {
        require: 'ngModel',
        link: function(scope, elem, attrs, ctrl) {
            var firstPassword = '#' + attrs.pwCheck;
            elem.add(firstPassword).on('keyup', function() {
                scope.$apply(function() {
                    var v = elem.val() === $(firstPassword).val();
                    ctrl.$setValidity('pwmatch', v);
                });
            });
        }
    }
}]);

app.directive('onlyNum', function() {
    return function(scope, element, attrs) {
        var keyCode = [8, 9, 37, 39, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 110, 13, 86];
        element.bind("keydown", function(event) {
            // console.log($.inArray(event.which,keyCode));
            if ($.inArray(event.which, keyCode) == -1) {
                scope.$apply(function() {
                    scope.$eval(attrs.onlyNum);
                    event.preventDefault();
                });
                event.preventDefault();
            }
        });
    };
});

app.directive('pwActualCheck', function(servicios) {
    return {
        require: 'ngModel',
        link: function(scope, elem, attrs, ctrl) {
            elem.on('blur', function(value) {
                scope.$apply(function() {
                    servicios.verificar_pass().get({
                        "pass": elem.val()
                    }).$promise.then(function(data) {
                        // console.log(data.respuesta);
                        if (data.respuesta) {
                            ctrl.$setValidity('pwactualmatch', true);
                        } else ctrl.$setValidity('pwactualmatch', false);
                    });
                });
            });
        }
    }
});


app.directive('onReadFile', function ($parse) {
    return {
        restrict: 'A',
        scope: {
            fromDirectiveFn: '=method'
        },
        link: function(scope, element, attrs) {
            var fn = $parse(attrs.onReadFile);
            
            element.on('change', function(onChangeEvent) {
                var reader = new FileReader();
                
                reader.onloadend = function(onLoadEvent) {
                    scope.hello = onLoadEvent.target.result;
                    scope.fromDirectiveFn(scope.hello);
                    // scope.$apply(function() {
                    //     fn(scope, {$fileContent:onLoadEvent.target.result});
                    // });
                };

                reader.readAsDataURL((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
            });

        }
    };
});

app.directive('operadoraValidation', function(consultarMovil) {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function myValidation(value) {
                if (value.length == 10) {
                    consultarMovil.validar(value).$promise.then(function(data) {
                        if (data.status == 200) {
                            mCtrl.$setValidity('charE', true);
                        } else {
                            mCtrl.$setValidity('charE', false);
                        }
                    });
                } else {
                    mCtrl.$setValidity('charE', false);
                }
                return value;
            }
            mCtrl.$parsers.push(myValidation);
        }
    }
});

app.directive('cedulaValidation', function(loaddatosSRI) {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function myValidation(cedula) {
                if (cedula.length == 10) {

                    //Obtenemos el digito de la region que sonlos dos primeros digitos
                    var digito_region = cedula.substring(0, 2);

                    //Pregunto si la region existe ecuador se divide en 24 regiones
                    if (digito_region >= 1 && digito_region <= 24) {

                        // Extraigo el ultimo digito
                        var ultimo_digito = cedula.substring(9, 10);

                        //Agrupo todos los pares y los sumo
                        var pares = parseInt(cedula.substring(1, 2)) + parseInt(cedula.substring(3, 4)) + parseInt(cedula.substring(5, 6)) + parseInt(cedula.substring(7, 8));

                        //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
                        var numero1 = cedula.substring(0, 1);
                        var numero1 = (numero1 * 2);
                        if (numero1 > 9) {
                            var numero1 = (numero1 - 9);
                        }

                        var numero3 = cedula.substring(2, 3);
                        var numero3 = (numero3 * 2);
                        if (numero3 > 9) {
                            var numero3 = (numero3 - 9);
                        }

                        var numero5 = cedula.substring(4, 5);
                        var numero5 = (numero5 * 2);
                        if (numero5 > 9) {
                            var numero5 = (numero5 - 9);
                        }

                        var numero7 = cedula.substring(6, 7);
                        var numero7 = (numero7 * 2);
                        if (numero7 > 9) {
                            var numero7 = (numero7 - 9);
                        }

                        var numero9 = cedula.substring(8, 9);
                        var numero9 = (numero9 * 2);
                        if (numero9 > 9) {
                            var numero9 = (numero9 - 9);
                        }

                        var impares = numero1 + numero3 + numero5 + numero7 + numero9;

                        //Suma total
                        var suma_total = (pares + impares);

                        //extraemos el primero digito
                        var primer_digito_suma = String(suma_total).substring(0, 1);

                        //Obtenemos la decena inmediata
                        var decena = (parseInt(primer_digito_suma) + 1) * 10;

                        //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
                        var digito_validador = decena - suma_total;

                        //Si el digito validador es = a 10 toma el valor de 0
                        if (digito_validador == 10)
                            var digito_validador = 0;

                        //Validamos que el digito validador sea igual al de la cedula
                        if (digito_validador == ultimo_digito) {
                            console.log('la cedula:' + cedula + ' es correcta');
                            mCtrl.$setValidity('charE', true);

                        } else {
                            console.log('la cedula:' + cedula + ' es incorrecta');
                            mCtrl.$setValidity('charE', false);
                        }

                    } else {
                        // imprimimos en consola si la region no pertenece
                        console.log('Esta cedula no pertenece a ninguna region');
                    }
                } else {
                    //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
                    mCtrl.$setValidity('charE', false);
                }
                return cedula;
            }
            mCtrl.$parsers.push(myValidation);
        }
    };
});
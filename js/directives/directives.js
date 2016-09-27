var app = angular.module('app');

app.directive('simpleChange', function simpleChangeDirective() {
  return {
    restrict: 'A',
    link: function(scope, el, attrs) {
      if (!attrs.simpleChange) {
        return;
      }
      
      el.on('change', function(e) {
        scope.$apply(function() {
          scope.$eval(attrs.simpleChange, {
            $event: e
          });
        });
      });
    }
  };
});

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

app.directive('userAvatar', function() {
  return {
    replace: true,
    template: '<svg class="user-avatar" viewBox="0 0 128 128" height="64" width="64" pointer-events="none" display="block" > <path fill="#FF8A80" d="M0 0h128v128H0z"/> <path fill="#FFE0B2" d="M36.3 94.8c6.4 7.3 16.2 12.1 27.3 12.4 10.7-.3 20.3-4.7 26.7-11.6l.2.1c-17-13.3-12.9-23.4-8.5-28.6 1.3-1.2 2.8-2.5 4.4-3.9l13.1-11c1.5-1.2 2.6-3 2.9-5.1.6-4.4-2.5-8.4-6.9-9.1-1.5-.2-3 0-4.3.6-.3-1.3-.4-2.7-1.6-3.5-1.4-.9-2.8-1.7-4.2-2.5-7.1-3.9-14.9-6.6-23-7.9-5.4-.9-11-1.2-16.1.7-3.3 1.2-6.1 3.2-8.7 5.6-1.3 1.2-2.5 2.4-3.7 3.7l-1.8 1.9c-.3.3-.5.6-.8.8-.1.1-.2 0-.4.2.1.2.1.5.1.6-1-.3-2.1-.4-3.2-.2-4.4.6-7.5 4.7-6.9 9.1.3 2.1 1.3 3.8 2.8 5.1l11 9.3c1.8 1.5 3.3 3.8 4.6 5.7 1.5 2.3 2.8 4.9 3.5 7.6 1.7 6.8-.8 13.4-5.4 18.4-.5.6-1.1 1-1.4 1.7-.2.6-.4 1.3-.6 2-.4 1.5-.5 3.1-.3 4.6.4 3.1 1.8 6.1 4.1 8.2 3.3 3 8 4 12.4 4.5 5.2.6 10.5.7 15.7.2 4.5-.4 9.1-1.2 13-3.4 5.6-3.1 9.6-8.9 10.5-15.2M76.4 46c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6zm-25.7 0c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6z"/> <path fill="#E0F7FA" d="M105.3 106.1c-.9-1.3-1.3-1.9-1.3-1.9l-.2-.3c-.6-.9-1.2-1.7-1.9-2.4-3.2-3.5-7.3-5.4-11.4-5.7 0 0 .1 0 .1.1l-.2-.1c-6.4 6.9-16 11.3-26.7 11.6-11.2-.3-21.1-5.1-27.5-12.6-.1.2-.2.4-.2.5-3.1.9-6 2.7-8.4 5.4l-.2.2s-.5.6-1.5 1.7c-.9 1.1-2.2 2.6-3.7 4.5-3.1 3.9-7.2 9.5-11.7 16.6-.9 1.4-1.7 2.8-2.6 4.3h109.6c-3.4-7.1-6.5-12.8-8.9-16.9-1.5-2.2-2.6-3.8-3.3-5z"/> <circle fill="#444" cx="76.3" cy="47.5" r="2"/> <circle fill="#444" cx="50.7" cy="47.6" r="2"/> <path fill="#444" d="M48.1 27.4c4.5 5.9 15.5 12.1 42.4 8.4-2.2-6.9-6.8-12.6-12.6-16.4C95.1 20.9 92 10 92 10c-1.4 5.5-11.1 4.4-11.1 4.4H62.1c-1.7-.1-3.4 0-5.2.3-12.8 1.8-22.6 11.1-25.7 22.9 10.6-1.9 15.3-7.6 16.9-10.2z"/> </svg>'
  };
});

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
            angular.forEach(keyCode, function (a) {
                if (keyCode.indexOf(event.which) == -1) {
                    scope.$apply(function() {
                    scope.$eval(attrs.onlyNum);
                    event.preventDefault();
                });
                event.preventDefault();
                }
            });
        });
    };
});

app.directive('pwActualCheck', function(servicios) {
    return {
        require: 'ngModel',
        link: function(scope, elem, attrs, ctrl) {
            elem.on('blur', function(value) {
                scope.$apply(function() {
                    servicios.verificar_pass().post({
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


app.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
}]);

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
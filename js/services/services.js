// url service general server
var app=angular.module('app');
app.service('servicios', function($resource, $localStorage, $location, ModalService, $http) {
    this.LogoutE=function() {
        this.limpiarstorage();
        return $resource(this.server().appnext()+'public/logoutE', {}
        , {
            salir: {
                method: 'POST', isArray: false, params: {
                    token: $localStorage.token
                }
            }
        }
        );
    };

    this.server=function() {
        return {
            appserviosnext: function() {
                return "http://186.33.168.251/appserviosnext/";
            }
            ,appnext: function() {
                // return "http://186.33.168.251/appnext/";
                return "http://192.168.0.110/appnext/";

            }
            ,appnext2: function() {
                // return "http://186.33.168.251/appnext/";
                return "http://192.168.0.110/appnext1.1/";
            },appnextPersonas: function() {
                // return "http://186.33.168.251/appnextP/";
                return "http://192.168.0.110/appnextP/";
            },mod_radio: function() {
                // return "http://186.33.168.251/mod_radio/";
                return "http://192.168.0.110/mod_radio/";

            }
        }
    };

    this.dir_img=function() {
        return {
            perfil: function() {
                return "storage/app/"+$localStorage.datosE.id_empresa+"/perfiles/";
            }
            , portada: function() {
                return "storage/app/"+$localStorage.datosE.id_empresa+"/portadas/";
            }, 
            logo: function() {
                return "storage/app/"+$localStorage.datosE.id_empresa+"/logos/";
            }
        }
    };

    this.limpiarstorage=function() {
        $location.path('/');
        return $localStorage.$reset();
    };

    // this.UploadFac=function() {
    //     return $resource(this.server().appnext()+'public/uploadFactura', {}
    //     , {
    //         subir: {
    //             method: 'POST', isArray: false, params: {
    //                 token: $localStorage.token
    //             }
    //         }
    //     });
    // };

    this.Download_link=function() {
        return $resource(this.server().appnext()+'public/Downloadlink', {}
        , {
            generar: {
                method: 'POST', isArray: false, 
                params: {
                    token: $localStorage.token
                }
            }
        });
    };

    this.activar_cuenta=function(parametros) {
        return $resource(this.server().appnext()+'public/activar_cuenta', {}
        , {
            enviar: {
                method: 'GET', isArray: false
            }
        });
    };
    // ----------------------------------------- set imagen Logo ----------------------------
    this.set_img_logo=function() {
        return $resource(this.server().appnext()+'public/setImgLogo', {}
        , {
            enviar: {
                method: 'POST', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }
        });
    };

    // ----------------------------------------- Add imagen de LOGO ----------------------------
    this.get_img_logo=function() {
        return $resource(this.server().appnext()+'public/getImgLogo', {}
        , {
            get: {
                method: 'GET', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }
        });
    };
    // ----------------------------------------- set get imagen perfil ----------------------------
    this.set_img_perfil=function() {
        return $resource(this.server().appnext()+'public/setImgPerfil', {}
        , {
            enviar: {
                method: 'POST', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }
        });
    };

    // ----------------------------------------- set imagen portada ----------------------------
    this.set_img_portada=function() {
        return $resource(this.server().appnext()+'public/setImgPortada', {}
        , {
            enviar: {
                method: 'POST', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }
        });
    };

    // ----------------------------------------- Add imagen perfil ----------------------------
    this.add_img_perfil=function() {
        return $resource(this.server().appnext()+'public/addImgPerfil', {}
        , {
            enviar: {
                method: 'POST', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }
        });
    };

    // ----------------------------------------- Add imagen Logo ----------------------------
    this.add_img_logo=function() {
        return $resource(this.server().appnext()+'public/addImgLogo', {}
        , {
            enviar: {
                method: 'POST', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }
        });
    };

    // ----------------------------------------- Add imagen de POrtada ----------------------------
    this.add_img_portada=function() {
        return $resource(this.server().appnext()+'public/addImgPortada', {}
        , {
            enviar: {
                method: 'POST', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }
        });
    };

    // ----------------------------------------- Add imagen de POrtada ----------------------------
    this.get_img_portada=function() {
        return $resource(this.server().appnext()+'public/getImgPortada', {}
        , {
            get: {
                method: 'GET', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }
        });
    };


    // ----------------------------------------- Verificar contraseña ----------------------------
    this.verificar_pass=function() {
        return $resource(this.server().appnext()+'public/VerficarPass', {}
        , {
            get: {
                method: 'GET', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }
        });
    };
    // fin

    this.get_img_perfil=function() {
        return $resource(this.server().appnext()+'public/getImgPerfil', {}
        , {
            get: {
                method: 'GET', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }
        });
    };

    this.mis_imgs_perfil=function() {
        return $resource(this.server().appnext()+'public/loadImgsPerfil', {}
        , {
            get: {
                method: 'GET', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }
        });
    };

    this.mis_imgs_portadas=function() {
        return $resource(this.server().appnext()+'public/loadImgsPortada', {}
        , {
            get: {
                method: 'GET', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }
        });
    };

      this.mis_imgs_logo=function() {
        return $resource(this.server().appnext()+'public/loadImgsLogo', {}
        , {
            get: {
                method: 'GET', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }
        });
    };

    // Fin creacion servicios clientes
    //////////////////////////////////////////////// GASTOS ////////////////////////
    this.gastos=function() {
        return $resource(this.server().appnext()+'public/getGastos', {}
        , {
            get: {
                method: 'GET', isArray: false,
                params: {
                    token: $localStorage.token
                }
            }
        });
    };
    this.showModal=function(file, data, idmodal) {
        ModalService.showModal( {
            templateUrl: 'view/modales/'+file, controller: "ModalController", inputs: {
                data: data, tipomodal: idmodal
            }
        }
        ).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                // console.log("You said " + result);
            }
            );
        });
    };
    // -------------------------------------------------- Datos de persona que registra ---------------------------------------------
    // ----------------------------------------- Si existen datos ----------------------------
    this.get_propietario=function() {
        return $resource(this.server().appnext()+'public/getDatosPropietario', {}
        , {
            get: {
                method: 'GET', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }
        });
    };
    // ------------------- fin
    // ----------------------------------------- guardar datos de persona que registra ----------------------------
    this.set_propietario=function() {
        return $resource(this.server().appnext()+'public/setDatosPropietario', {}
        , {
            enviar: {
                method: 'POST', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }
        });
    };
    // ------------------- fin
    // ------------------------------------------------ 
    // ----------------------------------------- SET CATEGORIA SUCURSAL ----------------------------
    this.set_categoria_sucursal=function() {
        return $resource(this.server().appnext()+'public/setCategoriaSucursal', {}
        , {
            set: {
                method: 'POST', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token,
                    sucursal: $localStorage.sucursal.codigo
                }
            }
        });
    };

    this.get_categorias_sucursal=function() {
        return $resource(this.server().appnext()+'public/getCategorias', {}
        , {
            get: {
                method: 'GET', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }

        }
        );
    }
    ;

    // ------------------- fin
    // ------------------------------------------------
    this.get_provincias=function() {
        return $resource(this.server().appnext()+'public/getProvincias', {}
        , {
            get: {
                method: 'GET', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }

        }
        );
    }
    ;
    // ------------------------------------------------------------------- PROVEEDORES
    // ------------------------------------------------ get proveedores
    this.get_proveedores=function() {
        return $resource(this.server().appnext()+'public/getProveedores', {}
        , {
            get: {
                method: 'GET', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token,
                    codigo: $localStorage.sucursal.codigo
                }
            }
        });
    };
    //----------------------- fin
    // ------------------------------------------------ add proveedores
    // this.add_proveedor=function() {
    //     return $resource(this.server().appnext()+'public/addProveedor', {}
    //     , {
    //         set: {
    //             method: 'POST', isArray: false, // responseType:'arraybuffer', 
    //             params: {
    //                 token: $localStorage.token
    //             }
    //         }
    //     });

    // };

    //----------------------- fin
    // ------------------------------------------------ update proveedores
    this.update_proveedor=function() {
        return $resource(this.server().appnext()+'public/updateProveedor', {}
        , {
            set: {
                method: 'POST', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token
                }
            }
        }
        );
    }
    ;
    //----------------------- fin
    // ------------------------------------------------ delete proveedores
    this.delete_proveedor=function() {
        return $resource(this.server().appnext()+'public/deleteProveedor', {}
        , {
            delete: {
                method: 'POST', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token,
                    codigo: $localStorage.sucursal.codigo
                }
            }
        }
        );
    }  ;
    //----------------------- fin ----
    //--------------------------------------------------- FIN PROVEEDORES 
    //----------------------------------------------------- ACTUALIZAR INFORMACION ----------------

    // ------------------------------------------------ update ------------------------------
    this.update_info=function() {
        return $resource(this.server().appnext()+'public/updateInfo', {}
        , {
            set: {
                method: 'POST', isArray: false, // responseType:'arraybuffer', 
                params: {
                    token: $localStorage.token,
                    codigo: $localStorage.sucursal.codigo
                }
            }
        }
        );
    }  ;
    //----------------------- fin ----

    //----------------------------------------------------- REGISTRO PERSONAS ----------------
    // ------------------------------------------------ update ------------------------------
    this.registrarPersona=function() {
        return $resource(this.server().appnextPersonas()+'public/registroPersonas', {}
        , {
            save: {
                method: 'POST', isArray: false
            }
        }
        );
    }  ;
    //----------------------- fin ----

        //----------------------------------------------------- LOGIN MOD RADIO----------------
    this.login_radio=function() {
        return $resource(this.server().mod_radio()+'public/login', {}
        , {
            set: {
                method: 'POST', isArray: false
            }
        }
        );
    }  ;
    //----------------------- fin ----

        //----------------------------------------------------- BUSQUEDA DE EMPRESAS----------------
    this.buscar_empresas=function() {
        return $resource(this.server().appnext()+'public/buscarEmpresas', {}
        , {
            get: {
                method: 'GET', isArray: false,
                params:{
                    token: $localStorage.token
                }
            }
        });
    };
    //----------------------- fin ----

    //----------------------------------------------------- Enviar Mensaje Modal----------------
    this.mensaje=function() {
        return $resource(this.server().appnext()+'public/sendMensaje', {}
        , {
            send: {
                method: 'POST', isArray: false,
                params:{
                    token: $localStorage.token
                }
            }
            
        }
        );
    }  ;
    //----------------------- fin ----

     //----------------------------------------------------- Enviar Mensaje Chat box----------------
    this.mensaje_chatbox=function() {
        return $resource(this.server().appnext()+'public/sendMensajeFromChat', {}
        , {
            send: {
                method: 'POST', isArray: false,
                params:{
                token: $localStorage.token
            }
            }
            
        }
        );
    }  ;
    //----------------------- fin ----

    //----------------------------------------------------- Get lista de Chats----------------
    this.get_chats=function() {
        return $resource(this.server().appnext()+'public/getChats', {}
        , {
            get: {
                method: 'GET', isArray: false,
                params:{
                token: $localStorage.token
            }
            }
            
        }
        );
    }  ;
    //----------------------- fin ----

     //----------------------------------------------------- Get Mensajes de chat----------------
    this.get_mensajes=function() {
        return $resource(this.server().appnext()+'public/getMensajes', {}
        , {
            get: {
                method: 'GET', isArray: false,
                params:{
                token: $localStorage.token
            }
            }
            
        }
        );
    }  ;
    //----------------------- fin ----

    //----------------------------------------------------- Eliminar Conversacion----------------
    this.eliminar_conversacion=function() {
        return $resource(this.server().appnext()+'public/deleteChat', {}
        , {
            delete: {
                method: 'POST', isArray: false,
                params:{
                token: $localStorage.token
            }
            }
            
        }
        );
    }  ;
    //----------------------- fin ----

    //----------------------------------------------------- Eliminar Conversacion----------------
    this.eliminar_mensajes=function() {
        return $resource(this.server().appnext()+'public/deleteMensajes', {}
        , {
            delete: {
                method: 'POST', isArray: false,
                params:{
                token: $localStorage.token
            }
            }
            
        }
        );
    };
    //----------------------- fin ----
    //----------------------------------------------------- ELIMINAR IMAGNES----------------
    // IMG PORTADA
    this.del_img_portada=function() {
        return $resource(this.server().appnext()+'public/deleteImgPortada', {}
        , {
            delete: {
                method: 'POST', isArray: false,
                params:{
                token: $localStorage.token
            }
            }
            
        }
        );
    };
    //----------------------- fin ----
    // IMG PERFIL
    this.del_img_perfil=function() {
        return $resource(this.server().appnext()+'public/deleteImgPerfil', {}
        , {
            delete: {
                method: 'POST', isArray: false,
                params:{
                token: $localStorage.token
            }
            }
            
        }
        );
    };
    //----------------------- fin ----
    // IMG LOGO
    this.del_img_logo=function() {
        return $resource(this.server().appnext()+'public/deleteImgLogo', {}
        , {
            delete: {
                method: 'POST', isArray: false,
                params:{
                token: $localStorage.token
            }
            }
        }
        );
    };
    //----------------------- fin ----

});


// app.controller('ModalController', function($scope, $rootScope, data, tipomodal, servicios, $window, $localStorage) {
//     switch(tipomodal) {
//         // ------------------------------------------------- MENSAJE-------------------------
//         case 'mensaje': console.log(data.error);
//         switch(data.error) {
//             case '4': $scope.mensaje="Documento no existe en el SRI";
//             break;
//             case '5': $scope.mensaje="la Factura ya existe";
//             break;
//             case '0': $scope.mensaje="Documento vacío";
//             break;
//             case undefined: $scope.mensaje="Documento guardado correctamente";
//             break;
//         }
//         angular.element("input[type='file']").val(null);
//         break;
//         // ------------------------------------------------- DECARGA-------------------------
//         case 'download': $scope.source=data.source;
//         servicios.Download_link().generar( {
//             id: $scope.source
//         }
//         ).$promise.then(function(data) {
//             $scope.fileUrl=data.link;
//         }
//         );
//         break;
//         // ------------------------------------------------- COMPARTIR-------------------------
//         case 'share': $scope.fileUrl=data.source;
//         break;
//         // ------------------------------------------------- VISTA PREVIA-------------------------
//         case 'preview': $scope.pdfURL=servicios.server().appnext()+"public/facturas/"+$localStorage.datosE.id_empresa+"/"+data.source+".pdf";
//         console.log($scope.pdfURL);
//         break;
//         // ------------------------------------IMAGEN DE PERFIL ---------------------
//         case 'imgperfil': $scope.misimagenes=data.source;
//         $scope.tipo=data.tipo;
//         console.log($scope.tipo);
//         $scope.show_select_img=function(data) {
//             $scope.imgURL=data;
//             switch ($scope.tipo) {
//                 case 'perfil': 
//                 servicios.set_img_perfil().enviar( {
//                     img: $scope.imgURL
//                 }
//                 ).$promise.then(function(data) {
//                     $localStorage.imgPerfil=data.img;
//                     $rootScope.imgPerfil=data.img;
//                     $('#modal_lista_img').modal('hide');
//                     $('#modal_lista_img').remove();
//                     $('.modal-backdrop').remove();
//                 });
//                 break;
//                 case 'portada': 

//                 servicios.set_img_portada().enviar( {
//                     img: $scope.imgURL
//                 }
//                 ).$promise.then(function(data) {
//                     $localStorage.imgPortada=data.img;
//                     $rootScope.imgPortada=data.img;
//                     $('#modal_lista_img').modal('hide');
//                     $('#modal_lista_img').remove();
//                     $('.modal-backdrop').remove();
//                 }
//                 );
//                 break;
//             }

//         }
//         break;

//         /////////////////////////////////////////////////////////////////// SUBIR IMAGEN PORTADA Y PERFIL /////////////////////////////
//         case 'uploadimg': 
//         switch (data.source) {
//             case 'perfil': 
// $scope.estilo= {
//                 'width': '144%', 'height': '50%'
//             }
//             $scope.myImage='';
//             $scope.myCroppedImage='';
//             $scope.ctrlFn=function(arg) {
//                 $scope.myImage=arg;
//             }
//             $scope.upload_img=function() {
//                 var imgData=btoa($scope.myCroppedImage);
//                 servicios.add_img_perfil().enviar( {
//                     img: imgData
//                 }
//                 ).$promise.then(function(data) {
//                     $localStorage.imgPerfil=servicios.server().appnext()+servicios.dir_img().perfil()+$localStorage.datosE.id_empresa+"/"+data.img;
//                     $rootScope.imgPerfil=servicios.server().appnext()+servicios.dir_img().perfil()+$localStorage.datosE.id_empresa+"/"+data.img;
//                     $('#modal_upload_img').modal('hide');
//                     $('#modal_upload_img').remove();
//                     $('.modal-backdrop').remove();
//                 }
//                 );
//                 // console.log(imgData);
//             }
//             break;
//             //////////////////////////////////////////////////////////// PORTADA //////////////////////////////////////////////

//             case 'portada': $scope.estilo= {
//                 'width': '710px', 'height': '267px'
//             }
//             ;
//             $scope.myImage='';

//             case 'portada': $scope.myImage='';

//             $scope.myCroppedImage='';
//             $scope.ctrlFn=function(arg) {
//                 $scope.myImage=arg;
//             }
//             $scope.upload_img=function() {
//                 var imgData=btoa($scope.myImage);
//                 servicios.add_img_portada().enviar( {
//                     img: imgData
//                 }
//                 ).$promise.then(function(data) {
//                     $localStorage.imgPortada=servicios.server().appnext()+servicios.dir_img().portada()+$localStorage.datosE.id_empresa+"/"+data.img;
//                     $rootScope.imgPortada=servicios.server().appnext()+servicios.dir_img().portada()+$localStorage.datosE.id_empresa+"/"+data.img;
//                     $('#modal_upload_img').modal('hide');
//                     $('#modal_upload_img').remove();
//                     $('.modal-backdrop').remove();
//                 }
//                 );
//                 // console.log(imgData);
//             }
//             break;
//         }
//         break;
//         // ------------------------------------SELECCIONAR CATEGORIA DE SUCURSAL ---------------------
//         case 'select_categoria_sucursal': servicios.get_categorias_sucursal().get().$promise.then(function(data) {
//             $scope.states=data.categorias;
//         }
//         );
//         $scope.set_categoria=function() {
//             servicios.set_categoria_sucursal().set( {
//                 codigo: $localStorage.sucursal.codigo, categoria: $scope.categoria, descripcion: $scope.descripcion
//             }
//             ).$promise.then(function(data) {
//                 $localStorage.sucursal.categoria=$scope.categoria;
//                 $('#modal_select_categoria').modal('hide');
//                 $('#modal_select_categoria').remove();
//                 $('.modal-backdrop').remove();
//             }
//             );
//         }
//         break;
//     }
// });

// app.factory('facturanextservice', function($resource, $localStorage, servicios) {
//     var url_server=servicios.server().appnext();
//     return $resource(url_server+'public/getFacturas', {}
//     , {
//         get: {
//             method: 'GET', isArray: false, params: {
//                 token: $localStorage.token
//             }
//         }
//     }
//     );
// });

// app.factory('UploadFac', function($resource, $localStorage) {
//     var url_server=servicios.server().appnext();
//     return $resource(url_server+'public/uploadFactura', {}
//     , {
//         subir: {
//             method: 'POST', isArray: false, params: {
//                 token: $localStorage.token
//             }
//         }
//     }
//     );
// });

///------------------------ Leer XML----------------------------
app.directive('onReadFile', function ($parse) {
    return {
        restrict: 'A', scope: false, link: function(scope, element, attrs) {
            var fn=$parse(attrs.onReadFile);
            element.on('change', function(onChangeEvent) {
                var reader=new FileReader();
                reader.onload=function(onLoadEvent) {
                    scope.$apply(function() {
                        fn(scope, {
                            $fileContent: onLoadEvent.target.result
                        }
                        );
                    }
                    );
                }
                ;
                reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
            }
            );
        }
    }
});

app.factory('loaddatosSRI', function($resource,servicios) {
    var url_server=servicios.server().appserviosnext();
    return $resource(url_server+"/public/getDatos/:id", {
        id: "@id"
    }
    );
});

app.factory('Empresa', function($resource, servicios) {
    var url_server=servicios.server().appnext();
    return $resource(url_server+"public/registroEmpresas/:id", {
        id: "@id"
    }
    );
});

app.factory('Persona', function($resource, servicios) {
    var url_server=servicios.server().appnext();
    return $resource(url_server+"public/registroPersonas/:id", {
        id: "@id"
    }
    );
});

app.factory('LoginE', function($resource, $localStorage, servicios) {
    var url_server=servicios.server().appnext();
    return $resource(url_server+'public/login', {}
    , {
        ingresar: {
            method: 'POST', isArray: false, // params: {token: $localStorage.token}
        }
    }
    );
});

app.factory('LogoutE', function($resource, $localStorage, servicios) {
    var url_server=servicios.server().appnext();
    return $resource(url_server+'appnext/public/logoutE', {}
    , {
        salir: {
            method: 'POST', isArray: false, params: {
                token: $localStorage.token
            }
        }
    }
    );
});

app.factory('Sucursaless', function($resource, $localStorage, servicios) {
    var url_server=servicios.server().appnext();
    return $resource(url_server+'public/getsucursales', {}
    , {
        get: {
            method: 'GET', isArray: false, params: {
                token: $localStorage.token
            }
        }
    }
    );
});

app.factory('Facturas', function($resource, $localStorage, servicios) {
    var url_server=servicios.server().appnext();
    return $resource(url_server+'public/readFacturas', {}
    , {
        get: {
            method: 'GET', isArray: false, 
            params: {
                token: $localStorage.token,
                 sucursal: $localStorage.sucursal.codigo
            }
        }
    }
    );
});

app.factory('FacturasLista', function($resource, $localStorage, servicios) {
    var url_server=servicios.server().appnext();
    return $resource(url_server+'public/getFacturas', {}
    , {
        get: {
            method: 'GET', isArray: false, params: {
                token: $localStorage.token
            }
        }
    }
    );
});

app.factory('consultarMovil', function($resource, $localStorage, servicios) {
    var url_server=servicios.server().appserviosnext();
    return $resource(url_server+'public/cosultarMovil', {}
    , {
        validar: {
            method: 'POST', isArray: false, // params: {token: $localStorage.token}
        }
    }
    );
});
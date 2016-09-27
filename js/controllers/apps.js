var app = angular.module('app');
app.controller('inicioCtrl', function($scope, $routeSegment) {
    $scope.$routeSegment = $routeSegment;
});

app.controller('appsCtrl', function ($anchorScroll,$socket,$mdDialog, $scope, servicios, $timeout, $localStorage, $routeSegment, $window, $location,Facturas,$interval,serviciosfacturanext) {

$scope.id_user=$localStorage.datosE.id_empresa;
$scope.mensajes_chat=[];
$scope.chats=[];

  $scope.$routeSegment = $routeSegment;
  $scope.menucard = [
                      {id:'1',titulo:'Facturanext', descripcion:'Repositorio de facturas', evento:'facturanext'},
                      {id:'1',titulo:'Nomina General', descripcion:'Administración de nomina', evento:'nomina'},
                      {id:'1',titulo:'Inventario', descripcion:'Inventario Empresa', evento:'inventario'}
                      // {id:'1',titulo:'Radio', descripcion:'Administración Radio', evento:'clientes'}
                    ];

  var estadoread = false;
  $scope.nrfacturas = 0;
   // $scope.facturas=[];

  serviciosfacturanext.get_new_facturas().get().$promise.then(function(data){
    $scope.facturas = data.respuesta;
    // $scope.facturas.push(data.respuesta.data);
    $scope.nrfacturas = data.sin_leer;
  });

    $interval(callAtInterval, 3000);

  function callAtInterval() {
    if ($localStorage.token) {
        if (estadoread == false) {
            estadoread = true;
            Facturas.get().$promise.then(function(data) {
            if (data.respuesta == true) {
              estadoread = false;

            serviciosfacturanext.get_new_facturas().get().$promise.then(function(data){
            $scope.facturas=data.respuesta;
            // $scope.facturas.push(data.respuesta.data);
            $scope.nrfacturas=data.sin_leer;
          });
        }
      });
      }
    }
  }

//---------------------------- funciones socket --------------------------
  $socket.on('chat:update', function (data) {
    console.log($scope.chats);
    if (data.iser_id!=$scope.id_user) {
      data.tipo_mensaje="RECEIVED"
    }
    $scope.mensajes_chat.push(data);
    var lastmsg=$scope.mensajes_chat.length-1;
      $anchorScroll('msg'+lastmsg);
      // console.log($scope.chats);
  });

  //---------------------------------- Fin ------------------------------

  //--------------------------------------------------- CHAT ----------------
  $scope.sendMensajeChat=function(event) {

     if (event.keyCode === 13) {
        $scope.data={
        chat_id:$localStorage.chat_id,
        user_id:$scope.id_user,
        tipo_mensaje:'SEND',
        mensaje:$scope.mensaje
      }
      $scope.mensajes_chat.push($scope.data);

      $socket.emit('chat:sendMensaje', $scope.data);
      $scope.mensaje = '';
      var lastmsg=$scope.mensajes_chat.length-1;
      $anchorScroll('msg'+lastmsg);
      // $location.hash('msg'+lastmsg);
      $anchorScroll();
      $scope.save_msg($scope.data);
    }
  }

  $scope.save_msg=function(data){
       servicios.mensaje_chatbox().send(data).$promise.then(function(data){
        if (data.respuesta==true) {
          console.log('mensaje guardado');
        }
      });
  }

   

  function update_chat(data){
    $scope.mensajes_chat=data.mensajes;
  }

  var estadoreadchat = false;
  $interval(get_chats, 3000);
  function get_chats() {
    if ($localStorage.token) {
        if (estadoreadchat == false) {
            estadoreadchat = true;
            servicios.get_chats().get().$promise.then(function(data){
            $scope.chats = data.datos;
            if (data.respuesta == true) {
              estadoreadchat = false;
            }
           },function(error) {
           estadoreadchat=false;
        });
      }
    }
  }

  $scope.sendMensaje = function(objeto) {

   $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'sendMensajeCtrl',
      controllerAs: 'ctrlMensaje',
      focusOnOpen: false,
      // targetEvent: event,
      locals: {datos: objeto},
      templateUrl: 'view/modales/sendMensaje.html',
      clickOutsideToClose:true,
    });
  }
    
  $scope.getMensajes = function (chat_obj,estadsocket) {
    if (estadsocket) {
        $scope.datos_sala={
        chat_id:chat_obj.chat_id,
        user_id:$scope.id_user
      }
      $socket.emit('chat:join', $scope.datos_sala);
    }
    $localStorage.chat_id=chat_obj.chat_id;
   servicios.get_mensajes().get({chat_id:chat_obj.chat_id}).$promise.then(function(data){
        $scope.mensajes_chat=data.mensajes;
        var lastmsg=$scope.mensajes_chat.length-1;
        $anchorScroll('msg'+lastmsg);
   },function(error){
    $scope.getMensajes(chat_obj,false);
   });
  };

  $scope.chat_boxs = [];
  this.selectedTab = 0;
  $scope.nombre_chat = "";
  this.open_chat = function(chat_obj) {
    $scope.nombre_chat = chat_obj.para;
    $scope.img_chat = chat_obj.img;
    $scope.img_session = $localStorage.imgPerfil;
    $scope.getMensajes(chat_obj,true);
    this.selectedTab = (this.selectedTab + 1) % 3;
  }

  this.back_chat=function(chat_obj) {
    this.selectedTab = (this.selectedTab - 1) % 3;
    // $socket.emit('chat:salir', $localStorage.chat_id);
  }

  $scope.searchTextChange = function(text){
    return servicios.buscar_empresas().get().$promise.then(function(data){
      return $scope.items = data.respuesta;
    });
  }

  $scope.generar_pdf = function(item) {
    serviciosfacturanext.update_estado_view_fac().set({id_factura:item.id_factura}); 
    serviciosfacturanext.get_new_facturas().get().$promise.then(function(data) {
        $scope.facturas = data.respuesta;
        $scope.nrfacturas = data.sin_leer;
    });
    $scope.promise = serviciosfacturanext.gen_pdf().generar({iddocumento:item.id_factura}).$promise.then(function(data) {
    var url = data.url;
    window.open(url, '_blank', "directories=no, location=no, menubar=no, scrollbars=yes, statusbar=no, tittlebar=no, width=900, height=800");
    }); 
  }

  $scope.modal = function(tipo, event) {
    if (tipo == 'nomina') {
      $scope.modal_nomina(event);
    }

    if (tipo == 'facturanext') {
      $location.path('/My-space/Facturanext');
    }

    if (tipo == 'inventario') {
      $location.path('/My-space/Inventario');
    }
  }

  $scope.modal_nomina = function (event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'AccesoNomina',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      locals: {desserts: $scope.selected},
      templateUrl: 'view/dashboardempresa/login_nomina.html',
    })
  };

  this.tiles = buildGridModel({
    icon : "avatar:svg-",
    title: "Svg-",
    background: ""
  });

  function buildGridModel(tileTmpl) {
    var it, results = [ ];
    for (var j=0; j<11; j++) {
      it = angular.extend({},tileTmpl);
      it.icon  = it.icon + (j+1);
      it.title = it.title + (j+1);
      it.span  = { row : 1, col : 1 };
      switch(j+1) {
        case 1:
          it.background = "red";
          it.span.row = it.span.col = 2;
          break;
        case 2: it.background = "green";         break;
        case 3: it.background = "darkBlue";      break;
        case 4:
          it.background = "blue";
          it.span.col = 2;
          break;
        case 5:
          it.background = "yellow";
          it.span.row = it.span.col = 2;
          break;
        case 6: it.background = "pink";          break;
        case 7: it.background = "darkBlue";      break;
        case 8: it.background = "purple";        break;
        case 9: it.background = "deepBlue";      break;
        case 10: it.background = "lightPurple";  break;
        case 11: it.background = "yellow";       break;
      }
      results.push(it);
    }
    return results;
  }
});

app.controller('AccesoNomina', function ($mdDialog, $scope, servicios, $timeout, $localStorage, $location) { 
    $scope.data = {}; 
    $scope.data.email = $localStorage.datosE.correo; 
    this.cancel = $mdDialog.cancel;

    $scope.confirmar_pass = function() {
      servicios.login_radio().set($scope.data).$promise.then(function(data) {
        if(data.respuesta == true) {
          $localStorage.tokenradio = data.token.token;
            $mdDialog.show(
              $mdDialog.alert()
              .parent(angular.element(document.querySelector('#dialogContainer')))
              .clickOutsideToClose(true)
              .title('NextBook')
              .textContent('Servicio Nómina')
              .ariaLabel('Servicio Nómina')
              .ok('Ok!')
              .openFrom('#left')
            );
          $location.path('/My-space/NominaAdmin');
        } else {
            if(data.respuesta == false) {
              $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#dialogContainer')))
                .clickOutsideToClose(true)
                .title('NextBook')
                .textContent('Contraseña Erronea')
                .ariaLabel('Contraseña Erronea')
                .ok('Ok!')
                .openFrom('#left')
              );  
            }
        }
      }); 
    } 
});

app.controller('mapsCtrl', function($scope, $routeSegment) {  
  $scope.$routeSegment = $routeSegment;
});

app.controller('recordCtrl', function($scope, $routeSegment) {       
  $scope.$routeSegment = $routeSegment;
});

app.controller('sendMensajeCtrl', function($scope,$mdDialog,datos,servicios) {       
    this.cancel = $mdDialog.cancel;
    $scope.enviar=function(){
      $scope.data={
        id_empresa:datos.id_empresa,
        mensaje:$scope.mensaje
      }
      servicios.mensaje().send($scope.data).$promise.then(function(data){
        if (data.respuesta==true) {
           $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#dialogContainer')))
                .clickOutsideToClose(true)
                .title('NextBook')
                .textContent('Mensaje Enviado Correctamente')
                .ariaLabel('Mensaje Enviado Correctamente')
                .ok('Ok!')
                .openFrom('#left')
            );
        }
      });
    }
});

// app.controller('MainCtrl', function($scope, $routeSegment, $localStorage,servicios, $location, loader, LoginE,Reddit) {
//     $scope.data = '';
//     $scope.$routeSegment = $routeSegment;
//     $scope.loader = loader;

//     $scope.$on('routeSegmentChange', function() {
//         loader.show = false;
//     })
//     $scope.ingresar = function() {
//         $scope.data['tipo'] = "E";
//         var obj = {'email':$scope.email+'001@facturanext.com', 'password':$scope.password, 'tipo':'E' };
//         LoginE.ingresar(obj).$promise.then(function(data) {
//             // console.log(data[0]);
//             $localStorage.token = data[0].token;
//             $localStorage.datosE = data.datosE;
//             $localStorage.datosPersona = data.datosPersona;
//             //--------------------cargr imagen perfil-----------
//             servicios.get_img_perfil().get().$promise.then(function(data) {
//                         $localStorage.imgPerfil=data.img;
            
//             }, function(err) {
               
//             });
//              //--------------------cargar imagen Portada-----------

//             servicios.get_img_portada().get().$promise.then(function(data) {
//                         $localStorage.imgPortada=data.img;
//             }, function(err) {
               
//             });
//             // ---------- fin
//             //---------------------- verificar si existe datos de persona-----------

//             servicios.get_propietario().get().$promise.then(function(data) {
//                 if (data.respuesta) {
//                     $location.path('/SeleccionarSucursal');
//                 }
//                 else{
//                     $location.path('/CambioPass');
//                 }
            
//             }, function(err) {
               
//             });

//         }, function(err) {
//             if (err.status == 404) {
//                 alert('Usario/Contraseña incorrectos');
//             }
//         });
//     }
//     $scope.mdm = function($event){
//         var correo = $scope.email;
//         var res = correo.replace("@facturanext.com", "");
//         $scope.email = res;
//     }

//     $scope.reddit = new Reddit();

// });

// Reddit constructor function to encapsulate HTTP and pagination logic
app.factory('Reddit', function(servicios) {
  var Reddit = function() {
    this.items = [];
    this.busy = false;
    this.after = '';
    this.page =1;
  };
  Reddit.prototype.nextPage = function() {
    if (this.busy) return;
    this.busy = true;
    servicios.buscar_empresas().get({page:this.page}).$promise.then(function(data) {
      var items = data.respuesta;
      for (var i = 0; i < items.length; i++) {
        this.items.push(items[i]);
      }
      this.page = this.page+1;
      this.after="t3_" + this.items[this.items.length - 1].Ruc;
      if (items.length==0) {
        this.busy = true;
      }else this.busy = false;
    }.bind(this));
  };

  return Reddit;
});

// app.controller('appsCtrl', function($scope, $routeSegment, $localStorage,servicios, $location, loader, LoginE) {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function (position) {
//             mysrclat = position.coords.latitude; 
//             mysrclong = position.coords.longitude;
//             console.log(mysrclat);
//             console.log(mysrclong);
//             angular.extend($scope, {
//                 center: {
//                     lat: mysrclat,
//                     lng: mysrclong,
//                     zoom: 15
//                 }
//             });
//         });   
//     }    
// });
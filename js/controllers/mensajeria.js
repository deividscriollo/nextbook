var app = angular.module('app').controller('mensajesCtrl', function (ngAudio,$rootScope,$timeout,$localStorage,$interval,servicios,$scope,$socket,$anchorScroll,Facturas,serviciosfacturanext) {

$scope.id_user=$localStorage.datosE.id_empresa;
$scope.mensajes_chat=[];
$rootScope.chats=[];
$scope.load_chats=true;
$scope.load_mensajes=false;
$rootScope.countnewmsj=0;
$scope.check_mensajes=false;
$scope.btn_cancelar=false;
$scope.opciones_chat=[{'nombre':"Eliminar conversación",'icono':"delete"}];
$scope.opciones_mensajes=[{'nombre':"Eliminar Mensajes",'icono':"delete"}];
 $scope.del_array_msj=[];
if ($localStorage.newmsj==undefined) {
  $localStorage.newmsj=0;
}else{
  $rootScope.countnewmsj=$localStorage.newmsj;
}

var estadoread = false;
  $scope.nrfacturas = 0;
   // $scope.facturas=[];

  serviciosfacturanext.get_new_facturas().get().$promise.then(function(data){
    $scope.facturas = data.respuesta;
    // $scope.facturas.push(data.respuesta.data);
    $scope.nrfacturas = data.sin_leer;
  });

    // $interval(callAtInterval, 3000);

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

$scope.limpiarmsj=function(){
  $rootScope.countnewmsj=0;
  $localStorage.newmsj=0;
}
//---------------------------- funciones socket --------------------------
  $socket.on('chat:update', function (data) {
    if (data.iser_id!=$scope.id_user) {
      data.tipo_mensaje="RECEIVED";
      $rootScope.countnewmsj++;
      $localStorage.newmsj=$rootScope.countnewmsj;
      $scope.audio=ngAudio.load("sound/msj.mp3");
        $scope.audio.play();
    }
    $scope.mensajes_chat.push(data);
    $scope.scroll_buttom_chat();
  });

  $socket.on('chat:updatelista', function (data) {
  	for (var i = 0; i < $rootScope.chats.length; i++) {
  		if ($rootScope.chats[i]['chat_id']==data.chat_id) {
  			$rootScope.chats[i]['mensaje']=data.mensaje;
  		}
  	}
  });

  $socket.on('chat:updateRooms', function (data) {
  	 servicios.get_chats().get().$promise.then(function(data){
            $rootScope.chats = data.datos;
            $socket.emit('chat:join', $rootScope.chats);
           },function(error) {
        });
  });

  //---------------------------------- Fin ------------------------------

  //--------------------------------------------------- CHAT ----------------
  $scope.eliminar_chat=function(obj){
    var id=obj.id;
    servicios.eliminar_conversacion().delete({chat_id:obj.chat_id}).$promise.then(function(data){
      console.log(data.respuesta);
    });

  for(var i = 0; i < $rootScope.chats.length; i++) {
    if($rootScope.chats[i].id == id) {
        $rootScope.chats.splice(i, 1);
        break;
        }
    }
  }
   $scope.select_mensajes=function(){
    $scope.check_mensajes=true;
    $scope.btn_cancelar=true;
    $scope.scroll_buttom_chat();
   }

   $scope.cancel_select_mensajes=function(){
    $scope.check_mensajes=false;
    $scope.btn_cancelar=false;
    angular.forEach($scope.mensajes_chat, function(mensaje_id) {              
        mensaje_id.selected = false;
    });
    $scope.del_array_msj=[];  
   }

   $scope.add_mensajes_list=function(id){
      if ($scope.del_array_msj.indexOf(id) === -1) {
        $scope.del_array_msj.push(id);
    }   
    else {
      var index =$scope.del_array_msj.indexOf(id);
      $scope.del_array_msj.splice(index,1);
    }
    console.log($scope.del_array_msj);
   }

   $scope.eliminar_mensajes=function(obj){
    var id_mensaje=obj.id_mensaje;
    var index=$scope.mensajes_chat.indexOf(obj);
    $scope.mensajes_chat.splice(index,1);
    servicios.eliminar_mensajes().delete({id_mensaje:id_mensaje}).$promise.then(function(data){
      if (data.respuesta) {
        $scope.del_array_msj=[];
      }
    },function(error){
      $scope.eliminar_mensajes({mensajes_list:$scope.del_array_msj});
    });
   }

  $scope.sendMensajeChat=function(event) {

     if (event.keyCode === 13) {
      $scope.mensaje=$scope.data.txtmsg;
        $scope.datamsg={
        chat_id:$localStorage.chat_id,
        user_id:$scope.id_user,
        tipo_mensaje:'SEND',
        mensaje:$scope.mensaje
      }
      $scope.mensajes_chat.push($scope.datamsg);
      $socket.emit('chat:sendMensaje', $scope.datamsg);
      $socket.emit('chat:updatelista', $scope.datamsg);
      $scope.data.txtmsg = '';
      $scope.scroll_buttom_chat();
      $scope.save_msg($scope.datamsg);
    }
  }

 $scope.scroll_buttom_chat=function(){
	$timeout(function() {
      var scroller = document.getElementById("chat-container");
      scroller.scrollTop = scroller.scrollHeight;
    }, 0, false);
 }

  $scope.save_msg=function(data){
       servicios.mensaje_chatbox().send(data).$promise.then(function(data){
        if (data.respuesta==true) {
          console.log('mensaje guardado');
        }
      },function(error){
        $scope.save_msg(data);
      });
  }

  function update_chat(data){
    $scope.mensajes_chat=data.mensajes;
  }

  var estadoreadchat = false;
  // $interval(get_chats, 3000);
  get_chats();
  function get_chats() {
    if ($localStorage.token) {
        if (estadoreadchat == false) {
            estadoreadchat = true;
            servicios.get_chats().get().$promise.then(function(data){
            $rootScope.chats = data.datos;
            $socket.emit('chat:join', $rootScope.chats);
            $scope.load_chats=false;
            if (data.respuesta == true) {
              estadoreadchat = false;
            }
           },function(error) {
           estadoreadchat=false;
        });
      }
    }
  }
    
  $scope.getMensajes = function (chat_obj,estadsocket) {
    $scope.load_mensajes=true;
    $scope.mensajes_chat=[];
    if (estadsocket) {
        $scope.datos_sala={
        chat_id:chat_obj.chat_id,
        user_id:$scope.id_user
      }
      // $socket.emit('chat:join', $scope.datos_sala);
    }
    $localStorage.chat_id=chat_obj.chat_id;
   servicios.get_mensajes().get({chat_id:chat_obj.chat_id}).$promise.then(function(data){
        $scope.mensajes_chat=data.mensajes;
        if (data.respuesta) {
          $scope.load_mensajes=false;
			$scope.scroll_buttom_chat();
        }
   },function(error){
    $scope.getMensajes(chat_obj,false);
   });
  };

  $scope.chat_boxs = [];
  this.selectedTab = 0;
  $scope.nombre_chat = "";
  this.open_chat = function(chat_obj) {
    $scope.limpiarmsj();
    $scope.nombre_chat = chat_obj.para;
    $scope.img_chat = chat_obj.img;
    $scope.img_session = $localStorage.imgPerfil;
    $socket.emit('chat:jointo', {chat_id:chat_obj.chat_id,para:chat_obj.para});
    $scope.getMensajes(chat_obj,true);
    this.selectedTab = (this.selectedTab + 1) % 3;
  }

  this.back_chat=function(chat_obj) {
    this.selectedTab = (this.selectedTab - 1) % 3;
    // $socket.emit('chat:salir', $localStorage.chat_id);
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

});
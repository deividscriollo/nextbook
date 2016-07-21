var app = angular.module('app');
app.controller('radioCtrl', function($scope) {
  this.tiles = buildGridModel({
            icon : "avatar:svg-",
            title: "Svg-",
            background: ""
          });
    function buildGridModel(tileTmpl){
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
  })
  // .config( function( $mdIconProvider ) {
  //   $mdIconProvider.iconSet("avatar", 'icons/avatar-icons.svg', 128);
  // });
  // $scope.appslist =     [
  //                         {
  //                                 title:'Empresa',
  //                                 descripcion:'descripcion',
  //                         },
  //                         {
  //                                 title:'Clientes',
  //                                 descripcion:'descripcion'
  //                         },
  //                         {
  //                                 title:'Programas',
  //                                 descripcion:'descripcion'
  //                         },
  //                         {
  //                                 title:'Vendedores',
  //                                 descripcion:'descripcion'
  //                         },
  //                         {
  //                                 title:'Fichas de Ingreso',
  //                                 descripcion:'descripcion'
  //                         },
  //                         {
  //                                 title:'Ficha Invitados',
  //                                 descripcion:'descripcion'
  //                         },
  //                         {
  //                                 title:'Ficha Programas',
  //                                 descripcion:'descripcion'
  //                         },
  //                         {
  //                                 title:'Contrato Selectivo',
  //                                 descripcion:'descripcion'
  //                         },
  //                         {
  //                                 title:'Contrato Rotativo',
  //                                 descripcion:'descripcion'
  //                         },
  //                         {
  //                                 title:'Facturacion',
  //                                 descripcion:'descripcion'
  //                         },
  //                         {
  //                                 title:'Rol de Pagos',
  //                                 descripcion:'descripcion'
  //                         },
  //                         {
  //                                 title:'Privilegios',
  //                                 descripcion:'descripcion'
  //                         },
  //     ];            

// });
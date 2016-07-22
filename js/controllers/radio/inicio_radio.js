var app = angular.module('app');
app.controller('radioCtrl', function($scope) {
    var icons = ['account_box', 'account_circle'];

    var colors = ['lightgreen', 'pink', 'wheat', '#cc99ff', '#abcdef'];
    $scope.cnt = Math.floor(Math.random() * icons.length);
    $scope.icon = icons[$scope.cnt];
    $scope.fill = colors[0];
    $scope.size = 48;

    // $scope.clickIcon = 'thumb_up';
    // $scope.clickIconMorph = function() {
    //     if ($scope.clickIcon === 'thumb_up') {
    //         $scope.clickIcon = 'thumb_down';
    //     }
    //     else {
    //         $scope.clickIcon = 'thumb_up';
    //     }
    // };
    console.log(icons.length);

    setInterval(function() {
        var random = Math.random();
        if (random < 0.2) {
            $scope.size = 28 + 4 * Math.floor(Math.random() * 9);
        } else {
            $scope.cnt++;
            if ($scope.cnt >= icons.length) {
                $scope.cnt = 0;
            }
            $scope.icon = icons[$scope.cnt];
            $scope.fill = colors[Math.floor(Math.random() * colors.length)];
        }
        $scope.$apply();
    }, 1700);  


  

  // this.tiles = buildGridModel({
  //           icon : "avatar:svg-",
  //           title: "Svg-",
  //           background: ""
  //         });
  //   function buildGridModel(tileTmpl){
  //     var it, results = [ ];
  //     for (var j=0; j<11; j++) {
  //       it = angular.extend({},tileTmpl);
  //       it.icon  = it.icon + (j+1);
  //       it.title = it.title + (j+1);
  //       it.span  = { row : 1, col : 1 };
  //       switch(j+1) {
  //         case 1:
  //           it.background = "red";
  //           it.span.row = it.span.col = 2;
  //           break;
  //         case 2: it.background = "green";         break;
  //         case 3: it.background = "darkBlue";      break;
  //         case 4:
  //           it.background = "blue";
  //           it.span.col = 2;
  //           break;
  //         case 5:
  //           it.background = "yellow";
  //           it.span.row = it.span.col = 2;
  //           break;
  //         case 6: it.background = "pink";          break;
  //         case 7: it.background = "darkBlue";      break;
  //         case 8: it.background = "purple";        break;
  //         case 9: it.background = "deepBlue";      break;
  //         case 10: it.background = "lightPurple";  break;
  //         case 11: it.background = "yellow";       break;
  //       }
  //       results.push(it);
  //     }
  //     return results;
  //   }
  // })
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

});
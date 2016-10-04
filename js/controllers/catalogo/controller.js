var app = angular.module('app');

app.controller('Catalogo-Inicio-Ctrl', function($mdDialog, $scope, serviciosfacturanext, servicios, $timeout, $localStorage) {
    $scope.imagePath = 'img/images/chompa.jpg';

    // $('#magazine').turn({gradients: true, acceleration: true});
    // $('#magazine').turn({
    //                         display: 'double',
    //                         acceleration: true,
    //                         gradients: !$.isTouch,
    //                         elevation:50,
    //                         when: {
    //                             turned: function(e, page) {
    //                                 /*console.log('Current view: ', $(this).turn('view'));*/
    //                             }
    //                         }
    //                     });

    // $scope.book.turn({
    //     acceleration : false,
    //             display: 'double',
    //             acceleration: true,
    //             disable: false    
    // })

    // $('#book').turn({
    //                         display: 'double',
    //                         acceleration: false,
    //                         gradients: !$.isTouch,
    //                         // elevation:50,
    //                         when: {
    //                             turned: function(e, page) {
    //                                 /*console.log('Current view: ', $(this).turn('view'));*/
    //                             }
    //                         }
    //                     });




    // $('#book').turn({});
    
    // $('#book').turn({
    //             // acceleration : false,
    //             // display: 'double',
    //             // acceleration: true,
    //             // disable: false
                
    //         });



});
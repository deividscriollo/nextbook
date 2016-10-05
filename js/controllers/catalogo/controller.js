var app = angular.module('app');

app.controller('Catalogo-Inicio-Ctrl', function($mdDialog, $scope, serviciosfacturanext, servicios, $timeout, $localStorage) {

	$('#magazine').turn({
							display: 'double',
							acceleration: true,
							gradients: !$.isTouch,
							elevation:50,
							when: {
								turned: function(e, page) {
									/*console.log('Current view: ', $(this).turn('view'));*/
								}
							}
						});
	
	$scope.atras = function() {
		$('#magazine').turn('previous');
	}

	$scope.siguiente = function() {
		$('#magazine').turn('next');
	}
   //  return {
	  //   restrict: 'E',
	  //   link: function(scope, element, attrs) {
	  //     $('#book').turn({
	  //       width: '300px',
	  //       height: '300px',
	  //       pages: 8
	  //     });
	     
	      
	  //     $('#book').turn('peel', 'br');
	  //   },
	  //   controller: function($scope) {
	  //     $scope.show_page = function(page) {
	  //       console.log("page", page)
	  //       $('#flipbook').turn('page', page);
	  //     }
	  //   },
	  // }

});
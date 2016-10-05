var app = angular.module('app');

app.controller('Catalogo-Inicio-Ctrl', function($mdDialog, $scope, serviciosfacturanext, servicios, $timeout, $localStorage) {
    return {
	    restrict: 'E',
	    link: function(scope, element, attrs) {
	      $('#book').turn({
	        width: '300px',
	        height: '300px',
	        pages: 8
	      });
	     
	      
	      $('#book').turn('peel', 'br');
	    },
	    controller: function($scope) {
	      $scope.show_page = function(page) {
	        console.log("page", page)
	        $('#flipbook').turn('page', page);
	      }
	    },
	  }

});
var app = angular.module('app');
app.controller('info_perfilCtrl', function($mdDialog,servicios,$scope, $routeSegment) {

  $scope.tabs = [
                  {title:'hola', link:'mide'}
                ];

 $scope.editinfo = function (event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'updateInfoCtrl',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      templateUrl: 'view/dashboardempresa/perfil/modales/update_info.html',
      clickOutsideToClose:true,
    })
  };
});

app.controller('updateInfoCtrl', function($mdDialog,servicios,$scope, $routeSegment,$localStorage, $mdpDatePicker) {

  
    $scope.currentDate = new Date();
    this.showDatePicker = function(ev) {
      $mdpDatePicker($scope.currentDate, {
        targetEvent: ev
      }).then(function(selectedDate) {
        $scope.currentDate = selectedDate;
      });;
    };
    
    this.filterDate = function(date) {
      return moment(date).date() % 2 == 0;
    };
    
    


  $scope.data = {
  	actividad:$localStorage.datosE.actividad_economica,
  	direccion:$localStorage.sucursal.direccion,
  	email:$localStorage.datosE.Ruc+"@facturanextbook.com"
  };

  $scope.telefonos = $localStorage.datosE.extras;
	this.cancel = $mdDialog.cancel;
	$scope.data['telefonos'] = $scope.telefonos;

  $scope.UpdateInfo = function() {
  	servicios.update_info().set($scope.data).$promise.then(function(data){
  	 if(data.respuesta == true) {
            $mdDialog.show(
              $mdDialog.alert()
              .parent(angular.element(document.querySelector('#dialogContainer')))
              .clickOutsideToClose(true)
              .title('NextBook')
              .textContent('Información Actualizada Correctamente')
              .ariaLabel('Información Actualizada Correctamente')
              .ok('Ok!')
              .openFrom('#left')
           );
        }
  	});
  }
});
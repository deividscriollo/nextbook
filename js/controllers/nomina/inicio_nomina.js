var app = angular.module('app');
app.controller('nominaCtrl', function($scope) {
  var vm = this;

    // TODO: move data to the service
    vm.visitorsChartData = [ {key: 'Mobile', y: 5264}, { key: 'Desktop', y: 3872} ];

    vm.chartOptions = {
        chart: {
            type: 'pieChart',
            height: 210,
            donut: true,
            x: function (d) { return d.key; },
            y: function (d) { return d.y; },
            // valueFormat: (d3.format(".0f")),
            color: ['rgb(0, 150, 136)', '#E75753'],
            showLabels: false,
            showLegend: false,
            title: 'Over 9K',
            margin: { top: -10 }
        }
    };
  // var vm = this;

  // TODO: move data to the service
  // vm.visitorsChartData = [ {key: 'Mobile', y: 5264}, { key: 'Desktop', y: 3872} ];  
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
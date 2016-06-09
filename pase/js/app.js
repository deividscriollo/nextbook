define(['common'], function (angularAMD) {
  'use strict';
  var app = angular.module('dcapp', ['ui.router', 'ngResource', 'ui.bootstrap']);

  app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', angularAMD.route({
        url: '/home',
        templateUrl: 'views/home.html',
        controllerUrl: 'main/home_ctrl'
      }))
      .state('parati', angularAMD.route({
        url: '/rooms',
        templateUrl: 'views/rooms.html',
        controllerUrl: 'rooms/rooms_ctrl'
      }))
      .state('quienes-somos', angularAMD.route({
        url: '/users',
        templateUrl: 'views/users.html',
        controllerUrl: 'users/users_ctrl'
      }))
    ;

    // Else
    $urlRouterProvider
      .otherwise('/home');


  }]);

  return angularAMD.bootstrap(app);
});

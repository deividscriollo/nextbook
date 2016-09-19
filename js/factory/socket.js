var app = angular.module('app');
app.factory('ChatSocket', function (socketFactory) {
  var socket = io.connect('http://192.168.0.104:8890');
  return socket;
});
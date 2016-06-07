require.config({
  baseUrl: 'js/',

  // alias libraries paths.  Must set 'angular'
  paths: {
    'jquery': '../components/jquery/jquery-2.1.1/jquery-2.1.1.min',
    'angular': '../components/angular/angular.min',
    'angular-route': '../components/angular/angular-route',
    'angular-ui-router': '../components/angular/angular-ui-router',
    'angularAMD': '../components/angular/angularAMD',
    'ngload': 'ext/ngload',
    'angular-resource': '../components/angular/resource',
    'bootstrap': '../bootstrap/dist/js/bootstrap.min.js',
    'ui-bootstrap':'http://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.10.0',
  },

  // Add angular modules that does not support AMD out of the box, put it in a shim
  shim: {
    'jquery': { exports: 'jquery' },
    'angular-route': [ 'angular' ],
    'angularAMD': [ 'angular' ],
    'ngload': [ 'angularAMD' ],
    'angular-resource': [ 'angular' ],
    'angular-ui-router': [ 'angular' ],
  },
  'ui-bootstrap': ['angular'],
  'app': ['angular','ui-bootstrap'],
  // kick start application
  // deps: ['app']
});

define(['jquery'], function ($) {
    //Script contents go here.
});
require(['angular',
  'app'
], function(angular){
      angular.element(document).ready(function(){
          angular.bootstrap(document, ['dcapp']);
      });
})
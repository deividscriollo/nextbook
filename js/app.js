var app=angular.module	('app', 	[ 
									'ngImgCrop',
									'ngPDFViewer',
									'djds4rce.angular-socialshare',
									'angularModalService',
									'ngMaterial',
									'ngMessages',
									'ngFileUpload',
									'ngStorage',
									'ngRoute',
									'route-segment',
									'view-segment',
									'ngResource',
									'blockUI',
									'ngMdIcons',
									'lfNgMdFileInput',
									'oitozero.ngSweetAlert',
									'md.data.table'
								]
						).run(function($FB) {
    $FB.init('386469651480295');
});
app.config(['$compileProvider', '$mdThemingProvider', function ($compileProvider, $mdThemingProvider) {
    'use strict';
    
    $compileProvider.debugInfoEnabled(false);
    
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('pink');
  }]);
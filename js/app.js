var app=angular.module	('app', 	[ 
									'ngAudio',
									'tw.directives.cropper',
									'socket.io',
									'infinite-scroll',
									'ngImgCrop',
									// 'ngPDFViewer',
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
									// 'blockUI',
									'ngMdIcons',
									'lfNgMdFileInput',
									'oitozero.ngSweetAlert',
									'md.data.table',//md tabla dinamia general
									'mdPickers',
									'angularFileUpload',
									'annotorious',
									'ezplus',
    								'colorbox'
								]
						);
app.run(function($FB) {
    // $FB.init('386469651480295');
});
app.config(['$compileProvider', '$mdThemingProvider', function ($compileProvider, $mdThemingProvider, $mdIconProvider) {
	'use strict';
	// general theme
	$compileProvider.debugInfoEnabled(true);
	$mdThemingProvider.theme('default').primaryPalette('indigo').accentPalette('pink');	
	// $socketProvider.setConnectionUrl('http://localhost:8080');
}]);


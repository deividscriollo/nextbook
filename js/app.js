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
									'md.data.table',
									// 'ui.mask'
								]
						).run(function($FB) {
    $FB.init('386469651480295');
});
app.config(['$compileProvider', '$mdThemingProvider', function ($compileProvider, $mdThemingProvider) {
'use strict';

$compileProvider.debugInfoEnabled(true);

$mdThemingProvider.theme('default')
  .primaryPalette('indigo')
  .accentPalette('pink');
}]);

// app.config(['uiMask.ConfigProvider', function(uiMaskConfigProvider) {
//   uiMaskConfigProvider.maskDefinitions({'A': /[a-z], '*': /[a-zA-Z0-9]/''});
//   uiMaskConfigProvider.clearOnBlur(false);
//   uiMaskConfigProvider.eventsToHandle(['input', 'keyup', 'click']);
// }]);
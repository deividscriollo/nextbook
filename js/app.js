var app=angular.module('app', [ 'ngImgCrop', 'ngPDFViewer', 'djds4rce.angular-socialshare', 'angularModalService', 'ngMaterial', 'ngMessages', 'ngFileUpload', 'ngStorage', 'ngRoute', 'route-segment', 'view-segment', 'ui.bootstrap', 'ngResource', 'blockUI', 'datatables', 'ngMdIcons', 'lfNgMdFileInput']).run(function($FB) {
    $FB.init('386469651480295');
});

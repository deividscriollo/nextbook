app.controller('inicioCtrl', function($scope, $routeSegment) {
        
    $scope.$routeSegment = $routeSegment;
});
app.controller('appsCtrl', function($scope, $routeSegment) {
        
    $scope.$routeSegment = $routeSegment;
});
app.controller('mapsCtrl', function($scope, $routeSegment) {
        
    $scope.$routeSegment = $routeSegment;
});
app.controller('recordCtrl', function($scope, $routeSegment) {
        
    $scope.$routeSegment = $routeSegment;
});
app.controller('perfilCtrl', function($scope, $animate) {
        
    $animate.enabled(true); 
    
    $scope.slides = [
        { image: 'images/samples/w1.jpg', text: 'blah' },    
        { image: 'images/samples/w2.jpg', text: 'blah' },
        { image: 'images/samples/w3.jpg', text: 'blah' }, 
    ];
});



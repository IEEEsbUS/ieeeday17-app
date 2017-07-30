angular.module('starter',[])
controller('MyCtrl', function($scope, $ionicPopup) {

    $scope.viernes19 = function() {
	
	var alertPopup = $ionicPopup.alert({
	    title: '19:00',
	    template: 'Alert message'
	});
	
	alertPopup.then(function(res) {
	    // Custom functionality....
	});
    };
    
});

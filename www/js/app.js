angular.module('starter',[])
.config(function($ionicPlatform){
    $ionicPlatform.ready(function(){
	if(window.StatusBar){
	    StatusBar.styleDefault();
	}
    });
})


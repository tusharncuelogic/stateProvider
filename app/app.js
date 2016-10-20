var testApp = angular.module('testApp',['ui.router']) ;


testApp.config(function($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    
    $stateProvider    	        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            views:{    
            	'':{
            		templateUrl: 'app/views/home.html',
					controller:'homeController'   
            	},     	
			    'header@home': {
			         templateUrl: 'app/views/header.html'
			    },
			    'sidebar@home': {
			         templateUrl: 'app/views/sidebar.html'
			    },
			    'footer@home': {
			         templateUrl: 'app/views/footer.html'
			    }
            }                     
        }) 
        .state('home.profile', {
            url: '/profile',
            templateUrl: 'app/views/profile.html',
            controller : "profileContainer"
        }) 
        .state('home.profile.changepass', {
            url: '/changepass',
            templateUrl: 'app/views/changepass.html',
            controller : "changePassContainer"
        }) 
        .state('home.profile.update_info', {
            url: '/update_profile',
            templateUrl: 'app/views/update_info.html',
            controller : "updateProfileContainer"
        });        
});

testApp.controller('homeController',function($scope){
	console.log("This is home controller");
	$scope.first_name = "Tushar";
});

testApp.controller('profileContainer',function($scope){
	console.log("This is Profile controller");
});

testApp.controller('changePassContainer',function($scope){
	console.log("This is change pass controller") ;
	console.log($scope.first_name);
});

testApp.controller('updateProfileContainer',function($scope){
	console.log("This is update profile controller");
});
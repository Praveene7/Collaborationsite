var app = angular.module('myApp', ['ng-route']);

app.controller('HomeController', function($scope) {
    $scope.message = "Hello from HomeController";
});

/*Starting of UserController*/
app.config(function($routeProvider){
	$routeProvider
	
	.when('/', {
		templateUrl : 'm_home/home.html' ,
		controller : 'HomeController'
	})
	
	.when('/job_opportunities', {
		templateUrl : 'm_job/job.html' ,
		controller : 'JobController'
	})
	
	.when('/manageUser', {
		templateUrl : 'm_admin/manage_users.html' ,
		controller : 'AdminController'
	})
	
	.when('/blog', {
		templateUrl : 'm_blog/blog.html' ,
		controller : 'BlogController'
	})
	
	.when('/event', {
		templateUrl : 'm_event/event.html' ,
		controller : 'EventController'
	})
	
	.when('/about', {
		templateUrl : 'm_about/about.html' ,
		controller : 'AboutController'
	})
	
	.when('/login', {
		templateUrl : 'm_login/login.html' ,
		controller : 'UserController'
	})
	
	.when('/register', {
		templateUrl : 'm_register/register.html' ,
		controller : 'UserController'
	})
	
	
	
	.otherwise({redirectTo: '/'});
});
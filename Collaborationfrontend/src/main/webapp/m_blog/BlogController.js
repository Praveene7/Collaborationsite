'use strict';

app.controller('BlogController', ['$scope', 'BlogService', '$location', '$rootscope', function($scope, BlogService, $location, $rootscope) {
	console.log("BlogController...")
	var self = this;
	self.blogs={id:'',title:'',description:'',blogsID:'',datetime:'',status:'',role:''};
	self.blogs=[];
	
	self.fetchAllblogss = function(){
		BlogService.fetchAllblogss()
		.then(
				   function(d) {
					   self.blogss = d;
				   },
				   function(errResponse){
					  console.error('Error while fetching blogss') 
				   }
	);
};
	
self.createblogss = function(blogs){
	BlogService.createblogss()
	.then(
			   
				   self.fetchAllblogs;
			   
			   function(errResponse){
				  console.error('Error while creating blogss') 
			   }
);
	
};

self.updateblogss = function(blogs,id){
	BlogService.updateblogss()
	.then(
			   
				   self.fetchAllblogs;
			   
			   function(errResponse){
				  console.error('Error while updating blogss') 
			   }
);
	
};

self.deleteblogss = function(id){
	BlogService.deleteblogss()
	.then(
			   
				   self.fetchAllblogs;
			   
			   function(errResponse){
				  console.error('Error while deleting blogss') 
			   }
);
};

self.fetchAllblogss();

self.submit = function() {
	if(self.blogs.id===null){
	console.log('Saving New blogss', self.blogs);
	self.createblogs(self.blogs);
	}else{
		/* self.updateblogs(self.blogs, self.blogs.id);
		 console.log('blogs updated with id ', self.blogs.id);*/
		console.log('Saving New blogs', self.blogs);
		self.createblogs(self.blogs);
	}
	self.reset();
};

self.edit = function(id){
	console.log('id to be edited', id);
	for(var i= 0; i < self.blogss.length; i++){
		if(self.blogss[i].id === id){
			self.blogs = angular.copy(self.blogs[i]);
			break;
		}
	}
};

self.remove = function(id){
	console.log('id to be deleted', id);
	if(self.blogss[i].id === id) {
		self.reset();
	}
	self.deleteblogs(id);
		
		
	};
	
	self.reset = function(){
		self.blogs={id:'',title:'',description:'',blogsID:'',datetime:'',status:'',role:''};
		$scope.myForm.$setPristine();
	};
		
		
	}]);


			
			
	
		
		
		
		

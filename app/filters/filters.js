(function(define){

	'use strict';

	define([], function () {
	/* Filters */
	var moduleName = 'app.filters';

	angular.module( moduleName, [] )
		.filter('percentage', function() {
  			return function(num) {
				return num+'%';
  			};
		});

		return moduleName;
	});

}(define));

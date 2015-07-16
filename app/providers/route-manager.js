(function ( define ) {
  'use strict';

  define([

  ],
  function (

  ){

    var RouteManager = function ( $stateProvider, $urlRouterProvider, $locationProvider ){

          $locationProvider.html5Mode(true);

          // states
          $stateProvider
            .state('index', {
              url: '/',
              templateUrl: 'views/default.html',
              controller  : function($scope){

                  $scope.hello = 'Hello Angular!';

              }
            });
          // end states
    };

    return ['$stateProvider', '$urlRouterProvider', '$locationProvider', RouteManager ];
  });

}( define ));

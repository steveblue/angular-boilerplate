/* global res */
(function ( define ) {
  'use strict';

  define([
      //providers
      'providers/route-manager',
      //filters
      'filters/filters',
      //services
      'services/basic'
      ],
    function (
      RouteManager,
      AppFilters,
      BasicService
    ){

      var app, appName = 'app';

      app = angular
              .module(appName, [
                'ui.router',
                'ngSanitize',
                'app.filters'
              ])
              .config( RouteManager )
              .service('Basic', BasicService );

      angular.bootstrap( document.getElementsByTagName('html')[0], [ appName ]);


      return app;
    }
  );

}( define ));

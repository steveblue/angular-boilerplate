/*global head, res, System */
var respond;
(function( window, head ) {
  'use strict';

  // Promise Shim
  if( typeof window.Promise === 'undefined' || typeof window.Promise.all !== 'function' ){
    head.load('lib/promise.js', function(){ console.log('Promise Shim Loaded'); });
  }

  head
    .load(
      'lib/angular.js',
      'lib/angular-ui-router.js',
      'lib/angular-sanitize.js',
      'lib/require.js'
    )
    .ready('ALL', function() {

      // Main RequireJS Config
      require.config({
      //  baseUrl:'./',
        paths:{
          'routes'    : 'providers/route-manager'
        },
        shim:{
          'routes' : {
            init:function(){

            }
          }
        }
      });

      require( [ 'app' ], function( app ){

        /* Application has bootstrapped... needed for Firefox
        if( angular.resumeBootstrap && //check for firefox ){

          angular.resumeBootstrap();

        }
        */

      });

    }); // end .ready()
}( window, head ));

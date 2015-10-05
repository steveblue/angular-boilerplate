
// Main Folder Locations
var rootDir   = __dirname,
    devDir    = rootDir + '/build/www',
    prodDir   = rootDir + '/build/prod';

// Export Specific Paths
module.exports = {
  'rootDir': rootDir,
  'devDir':  devDir,
  'prodDir': prodDir,

// Lib Files
  lib: {
    src:[
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/headjs/dist/1.0.0/head.load.js',
      'bower_components/resjs/res.js',
      'bower_components/es6-promise/promise.js',
      'bower_components/requirejs/require.js',
      'bower_components/requirejs-plugins/lib/text.js',
      'bower_components/requirejs-plugins/src/json.js'
    ],
    min:[
      'bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'bower_components/angular-touch/angular-touch.min.js',
      'bower_components/angular-touch/angular-touch.min.js.map',
      'bower_components/angular-animate/angular-animate.min.js',
      'bower_components/angular-animate/angular-animate.min.js.map',
      'bower_components/angular/angular.min.js',
      'bower_components/angular/angular.min.js.map',
      'bower_components/angular-sanitize/angular-sanitize.min.js',
      'bower_components/angular-sanitize/angular-sanitize.min.map',
      'bower_components/headjs/dist/1.0.0/head.load.min.js',
      'bower_components/resjs/res.min.js',
      'bower_components/es6-promise/promise.min.js',
      'bower_components/requirejs/require.js',
      'bower_components/requirejs-plugins/lib/text.js',
      'bower_components/requirejs-plugins/src/json.js'
    ],
    dev:  devDir  + '/lib',
    prod: prodDir + '/lib'
  },

// JSHINT
  jshint: {
    src:  rootDir + '/.jshintrc',
    all: ['app/*.js', 'app/**/*.js', './*.js', 'tasks/**/*.js', '!./settings/*.js'],
    app: ['app/**/*.js']
  },

  html : {
    app: ['app/**/*.html', 'app/*.html']
  },

// Symlink
  symlink: [
    '!app/components/.new/**/*.*',
    'app/**/*.js',
    'app/**/*.scss',
    'app/**/*.json',
    'app/**/*.html',
    'app/*.html'
  ],

  copy: [
    '!app/components/.new/**/*.*',
    'app/**/*.scss',
    'app/**/*.json',
    'app/**/*.html',
    'app/*.html'
  ],

// Settings
    settings: {
      devSrc:  ['settings/local/*.js','settings/local/*.json'],
      prodSrc:  ['settings/prod/*.js','settings/prod/*.json'],
      dev:  devDir  + '/settings',
      prod: prodDir + '/settings'
    },

// Assets
  assets: {
    src:  ['app/assets/**/*.*', 'app/assets/**/**/*.*'],
    dev:  devDir  + '/assets',
    prod: prodDir + '/assets'
  },


// App SASS
  sass: {
    src:    ['app/sass/**/*.scss','app/sass/*.scss'],
    sass:   'app/sass',
    dev:    devDir + '/css',
    prod:   prodDir + '/css'
  },

  uglify:['app/**/*.js'],

// Clean ie del
  clean: {
    dev:  devDir,
    prod: prodDir
  }
};

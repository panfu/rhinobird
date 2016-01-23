var webpack = require("webpack");
var _ = require("lodash");

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-express');

  grunt.initConfig({
    webpack: {
      dev: _.merge({}, require('./webpack.config.js'), {
        devServer: false,
        stats: {
          colors: true,
          modules: true,
          reasons: false
        },
        progress: false,
        failOnError: false,
        watch: false,
        keepalive: false
      })
    },
    simplemocha:{
      dev:{
        src:['test/*.js', 'test/**/*.js'],
        options:{
          ui: 'bdd',
          reporter: 'list',
          globals: ['window','document','$','should'],
          retries: 2,
          recursive: true,
          bail: false,
          ignoreLeaks: false,
          fullTrace: true,
          growl: true,
          require:['should'],
          timeout: 5000000
          // grep: 'users'
        }
      }
    },
    watch:{
      configFiles: {
        files: [ 'Gruntfile.js', 'config/*.js' ],
        options: {
          reload: true
        }
      },
      dev:{
        files:['server/*', 'web/*.js', 'web/*/*', 'test/*.js', 'test/*/*', './*.js'],
        tasks:['buildDev', 'test'],
        options: {
          debounceDelay: 250
        }
      }
    }
  });

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

  grunt.registerTask('devServer', 'Start a web server for testing', function() {
    require('./server/app.js').listen(5000);
  });

  grunt.registerTask('forceOn', 'turns the --force option ON', function() {
    if ( !grunt.option( 'force' ) ) {
      grunt.config.set('forceStatus', true);
      grunt.option( 'force', true );
    }
  });

  grunt.registerTask('forceOff', 'turns the --force option Off', function() {
    if ( grunt.config.get('forceStatus') ) {
      grunt.option( 'force', false );
    }
  });

  grunt.registerTask('test', 'simplemocha:dev');
  grunt.registerTask('buildDev', 'webpack:dev');
  grunt.registerTask('watchAndTest', ['forceOff', 'buildDev', 'forceOn', 'test', 'watch:dev']);
  grunt.registerTask('scout', ['devServer', 'watchAndTest']);

};

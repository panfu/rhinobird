var webpack = require("webpack");

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    webpack: {
      dev: {
        cache: true,
        entry: {
          app: './web/app',
          vendor: './web/vendor',
        },
        output: {
          path: './dist',
          publicPath: '/assets/',
          filename: '[name].bundle.js',
        },
        module: {
          loaders: [
            { test: /\.css$/, include: /web/, loader: 'style!css' },
            { test: /\.html$/, include: /web/, loader: 'riotjs' },
            { test: /\.js$/, include: /web/, loader: 'babel', query: {modules: 'common'} },
          ],
        },
        plugins: [
          new webpack.ProvidePlugin({
            riot: 'riot',
            RiotControl: 'riotcontrol',
            Promise: 'promise-polyfill/Promise',
            jQuery: 'jquery',
            // AV: 'leanengine'
          }),
        ],
        devServer: {
          port: 5000,
        },
        devtool: 'source-map',

        stats: {
          // Configure the console output
          colors: true,
          modules: true,
          reasons: false
        },
        // stats: false disables the stats output

        storeStatsTo: "xyz", // writes the status to a variable named xyz
        // you may use it later in grunt i.e. <%= xyz.hash %>

        progress: true, // Don't show progress
        // Defaults to true

        failOnError: false, // don't report error to grunt if webpack find errors
        // Use this if webpack errors are tolerable and grunt should continue

        watch: false, // use webpacks watcher
        // You need to keep the grunt process alive

        keepalive: false, // don't finish the grunt task
        // Use this in combination with the watch option

        inline: true,  // embed the webpack-dev-server runtime into the bundle
        // Defaults to false

        // hot: true, // adds the HotModuleReplacementPlugin and switch the server to hot mode
        // Use this in combination with the inline option

      }
    },
    simplemocha:{
      dev:{
        src:['test/*.js', 'test/**/*.js'],
        options:{
          ui: 'bdd',
          reporter: 'list',
          globals: ['window','document','$','should'],
          timeout: 3000,
          retries: 2,
          bail: false,
          slow: 2000,
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
        files:['server/*', 'web/*.js', 'web/*/*', 'test/*.js', 'test/*/*', '*.js'],
        tasks:['buildDev', 'test'],
        options: {
          debounceDelay: 250,
        },
      }
    }
  });

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

  grunt.registerTask('forceOn', 'turns the --force option ON',
    function() {
      if ( !grunt.option( 'force' ) ) {
        grunt.config.set('forceStatus', true);
        grunt.option( 'force', true );
      }
    });

  grunt.registerTask('forceOff', 'turns the --force option Off',
    function() {
      if ( grunt.config.get('forceStatus') ) {
        grunt.option( 'force', false );
      }
    });

  grunt.registerTask('test', 'simplemocha:dev');
  grunt.registerTask('buildDev', 'webpack:dev');
  grunt.registerTask('scout', ['buildDev', 'forceOn', 'test', 'forceOff', 'watch:dev']);

};

var browserSync = require("browser-sync");
module.exports = function(grunt) {
    'use strict';
    require('time-grunt')(grunt);

    var configModules = require('load-grunt-config')(grunt);
    var userConfig = require('./build.config.js');
    var taskConfig = {
        pkg: grunt.file.readJSON('package.json'),
    };

    grunt.initConfig(grunt.util._.extend(taskConfig, userConfig, configModules));

    grunt.registerTask('copyMain', [
        'copy:build_vendorjs',
        'copy:build_fonts',
        'copy:build_images',
        'copy:build_jsons',
        'copy:build_js',
        'copy:build_lib_js',
    ]);
    grunt.registerTask('copyProd', [
        'copy:build_fonts',
        'copy:build_images',
        'copy:build_jsons'
    ]);
    grunt.registerTask('build:dev', [
        'clean:build',
        'less',
        'copyMain',
        'copy:less',
        'html2js:dev',
        'index:dev'
    ]);
    grunt.registerTask('build:prod', [
        'clean:build',
        'less',
        'copyProd',
        'html2js:prod',
        'concat:prod',
        'uglify',
        'index:prod',
    ]);

    grunt.registerTask('deploy', [
        'build:dev',
        'ftp-deploy'
    ]);
    grunt.registerTask('deploy-gh-pages', [
        'build:dev',
        'gh-pages'
    ]);
    grunt.registerTask('build', ['build:dev']);
    grunt.registerTask('default', [
        'build',
        'bs-init',
        'watch'
    ]);
    grunt.registerTask('prod', [
        'build:prod',
        'bs-init',
        'watch'
    ]);
    var target = grunt.option('stm') || false;
    grunt.registerTask('stm', [
        'build',
        'bs-init',
        'watch',
        'copy:stm'
    ]);
    // Inject CSS files to the browser
    grunt.registerTask('bs-inject', function() {
        browserSync.reload(['docs/build/**/*.css']);
    });
    // Full page reload triggers
    grunt.registerTask('bs-reload', function() {
        browserSync.reload(['/**/*.html', '/**/*.js', '/**/*.json', '/**/*.svg', '/**/*.png', '/**/*.jpg', '/**/*.gif']);
    });
    // Init BrowserSync manually
    grunt.registerTask('bs-init', function() {
        var done = this.async();
        browserSync({
            open: false,
            port:4000,
            // injectChanges: true,
            logLevel: 'debug',
            timestamps: false,
            reloadOnRestart: true,
            server: {
                baseDir: 'docs/build/'
            }
        }, function(err, bs) {
            done();
        });
    });
    /**
     * A utility function to get all app JavaScript sources.
     */

    function filterForJS(files) {
        return files.filter(function(file) {
            return file.match(/\.js$/) || (file.match(/\.modules/));
        });
    }
    /**
     * The index.html template includes the stylesheet and javascript sources
     * based on dynamic names calculated in this Gruntfile. This task assembles
     * the list into variables for the template to use and then runs the
     * compilation.
     */
    grunt.registerMultiTask('index', 'Process index.html template', function() {
        var dirRE = new RegExp('^(' + grunt.config('build_dir') + ')\/', 'g');
        var jsFiles = filterForJS(this.filesSrc).map(function(file) {
            return file.replace(dirRE, '');
        });
        grunt.file.copy('docs/src/index.html', this.data.dir + '/index.html', {
            process: function(contents) {
                return grunt.template.process(contents, {
                    data: {
                        scripts: jsFiles,
                    }
                });
            }
        });
    });
};

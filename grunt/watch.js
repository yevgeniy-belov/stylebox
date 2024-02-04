module.exports = function(grunt) {
    var stm = grunt.option('stm') || false;
    var tasks = {
        less: [
            'less:main',
            'bs-reload'
        ],
        fontsCopy: [
            'copy',
            'bs-reload'
        ],
        html2js: [
            'html2js',
            'bs-reload'
        ],
        indexHtml: [
            'processhtml',
            'bs-reload'
        ],
        copy: [
            'copy',
            'bs-reload'
        ],
        main: [
            'build:dev',
            'bs-reload'
        ]
    };

    if (stm) {
        tasks.less.splice(tasks.less.length - 2, 0, 'copy:stm').join();
        console.log(tasks.less);
        
    }

    return {
        options: {
            interrupt: false,
            spawn: false,
        },
        lessCommon: {
            files: [
                '<%= app_files.less %>/*.less',
                'src/less/**/*.less',
                'docs/src/less/**/*.less',
                'src/less/**/*.css',
            ],
            tasks: tasks.less,
        },
        js: {
            files: [
                'grunt/**/*.js',
                'docs/src/**/*.js'
            ],
            tasks: tasks.main,
        },
        grunt: {
            files: [
                'Gruntfile.js'
            ],
            tasks: tasks.main,
        },
        json: {
            files: [
                'docs/src/**/*.json',
            ],
            tasks: tasks.main,
        },
        templates: {
            files: [
                'docs/src/views/**/*.html',
                'docs/src/index.html'
            ],
            tasks: tasks.html2js,
        },
        assets: {
            files: [
                'src/assets/**/*'
            ],
            tasks: tasks.main,
        },
        // 'svg-icons': {
        //     files: [
        //         'src/svg-icons/**/*.svg'
        //     ],
        //     tasks: tasks.main,
        // },
        // index: {
        //     files: [
        //         'docs/src/index.html'
        //     ],
        //     tasks: tasks.main,
        // }
    }
};

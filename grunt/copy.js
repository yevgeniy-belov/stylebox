module.exports = {
    build_fonts: {
        files: [{
            src: [
                'docs/src/assets/**/*.woff',
                 'vendor/metric-new/woff/**/*.woff',
                 'vendor/metric-new/woff2/**/*.woff2'
            ],
            dest: '<%= build_dir %>/assets/fonts',
            cwd: '.',
            expand: true,
            flatten: true
        }]
    },
    build_images: {
        files: [{
            src: ['docs/src/assets/img/**/*', 'src/assets/images/**/*'],
            dest: '<%= build_dir %>/assets/images',
            expand: true,
            flatten: true
        }]
    },
    build_jsons: {
        files: [{
            src: [
                'package.json',
                'docs/src/data/**/*.json',
            ],
            dest: '<%= build_dir %>/data',
            expand: true,
            flatten: true
        }]
    },
    build_vendorjs: {
        files: [{
            src: ['<%= vendor_files.js %>'],
            dest: '<%= build_dir %>',
            cwd: '.',
            expand: true,
        }]
    },
    build_lib_js: {
        files: [{
            src: 'docs/src/lib/**/*.js',
            dest: '<%= build_dir %>',
            cwd: '.',
            expand: true,
        }]
    },
    build_js: {
        files: [{
            src: ['<%= app_files.js %>'],
            dest: '<%= build_dir %>',
            cwd: '.',
            expand: true,
        }]
    },
    'less': {
        files: [{
            src: ['src/less/**/*', 'docs/src/less/**/*'],
            dest: '<%= build_dir %>/css',
            cwd: '.',
            expand: true,
        }],
    },
    'stm': {
        files: [{
                expand: true,
                src: 'src/less/**/*',
                dest: '../ptaas/main.webapp/vendor/stylebox',
            },
            {
                expand: true,
                src: 'src/less/**/*',
                dest: '../ptaas/main.analysis/node_modules/stylebox',
            }
        ]
    },
    'indexHtml': {
        files: [{
            expand: true,
            flatten: true,
            src: 'docs/src/index.html',
            dest: '<%= build_dir %>',
        }],
    }
};
module.exports = {
    prod: {
        src: [
            '<%= lib_js %>',
            '<%= vendor_files.js %>',
            'docs/src/js/app.js',
            'docs/src/js/controllers/componentsController.js',
            'docs/src/js/controllers/dynamicComponentsCtrl.js',
            '<%= build_dir %>/tmp/templates.js',
        ],
        dest: '<%= build_dir %>/tmp/concatenated/app.js',
    }
};

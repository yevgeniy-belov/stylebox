module.exports = {
    main: {
        options: {
            paths: ['src/less/themes'],
            sourceMap: true,
            sourceMapURL: 'style_<%= pkg.version %>.css.map',
            cleancss: false,
            compress: false,
            // strictMath: true,
            modifyVars: {
                version: '<%= webfont.version %>'
            }
        },
        files: {
            '<%= build_dir %>/<%= compiled_styles %>/style<%= pkg.version %>.css': '<%= app_files.styles %>/main.less'
        }
    }
};
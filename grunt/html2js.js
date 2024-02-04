module.exports = {
    dev: {
        options: {
            module: 'templates',
            base: 'docs/src/views',
        },
        src: ['<%= app_files.templates %>'],
        dest: '<%= build_dir %>/templates.js'
    },
    prod: {
        options: {
            module: 'templates',
            base: 'docs/src/views',
        },
        src: ['<%= app_files.templates %>'],
        dest: '<%= build_dir %>/tmp/templates.js'
    }
};

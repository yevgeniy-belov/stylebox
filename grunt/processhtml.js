module.exports = {
    dev: {
        options: {
            data: {
                version: '<%= pkg.version %>'
            }
        },

        files: {
            '<%= build_dir %>/index.html': ['docs/src/index.html']
        }
    }

};

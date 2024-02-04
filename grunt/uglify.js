module.exports = {
    options: {
        mangle: false,
        sourceMap: false
    },
    app: {
        files: {
            '<%= build_dir %>/app.js': ['<%= build_dir %>/tmp/concatenated/app.js']
        }
    }
};

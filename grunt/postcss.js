module.exports = {
    options: {
        processors: [
            require('postcss-list-selectors')({
                path: 'docs/build/data/selectors.json',
            }),
        ],
    },
    dist: {
        src: '<%= build_dir %>/<%= compiled_styles %>/style_hpe_<%= pkg.version %>.css'
    }
};

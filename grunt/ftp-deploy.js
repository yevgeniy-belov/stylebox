module.exports = {
	build: {
		auth: {
			host: 'ftp.styleboxproject.com',
			port: 21,
			authKey: ''
		},
		src: '<%= build_dir %>',
		dest: 'public_html/stylebox',
	}
};

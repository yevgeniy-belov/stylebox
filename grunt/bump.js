module.exports = {
	options: {
		files: ['package.json'],
		commit: true,
		commitMessage: 'v%VERSION%',
		commitFiles: ['*'],
		createTag: true,
		tagName: 'v%VERSION%',
		tagMessage: 'Version %VERSION%',
		push: 'tag',
		pushTo: 'origin master',
		gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
	}
};

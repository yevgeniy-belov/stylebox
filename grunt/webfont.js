module.exports = {
	windows: {
		src: 'src/svg-icons/*.svg',
		dest: 'docs/src/assets/icons-font/',
		destCss: 'src/less/icons-font/',
		options: {
			hashes: true,
			types: 'woff',
			ligatures: false,
			syntax: 'bootstrap',
			stylesheet: 'less',
			startCodepoint: 0xF100,
			template: 'src/icons-font/templates/custom-icons-template.css',
			relativeFontPath: '../assets/fonts',
			destHtml: 'docs/src/',
			htmlDemo: false,
			// htmlDemoTemplate: 'src/svg-icons/graphics.icons.base.template.html',
			font: 'stylebox-icons',
			fontFilename: 'stylebox-icons',
			engine: 'fontforge',
			// normalize: true,
			embed: false

		}
	}
};

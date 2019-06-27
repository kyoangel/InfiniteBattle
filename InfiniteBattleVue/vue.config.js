const merge = require('webpack-merge')

module.exports = {
	configureWebpack: {
		output: {
			filename: "js/index.js"
		},
		devServer: {
			open: true,
			port: 8081
		},

	},
	chainWebpack: config => {
		config.module
			.rule('images')
			.test(/\.(jpg|png|gif|bmp|jpeg)$/)
			.use('url-loader')
			.loader('url-loader')
			.tap(options => {
				return merge(options, {
					limit: 50000
				})
			})

		const svgRule = config.module.rule('svg');
		svgRule.uses.clear();
		svgRule
			.use('vue-svg-loader')
			.loader('vue-svg-loader');
	},
	css: {
		extract: {
			filename: 'css/casinoWidget.css'
		}
	},
	filenameHashing: false
};
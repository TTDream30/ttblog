module.exports = {
	runtimeCompiler: true,

	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = 'Muse Vue Ant Design - by Creative Tim'
				return args
			})
	},
	// 代理跨域
	devServer: {
		// proxy: {
		// 	'/api': {
		// 		target: 'http://localhost:8081',
		// 	}
		// },
		disableHostCheck: true
	}
}
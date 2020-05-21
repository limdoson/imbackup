const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin')
function resolve(dir) {
    return path.join(__dirname, dir)
}

const cdn = {
    css: [
		'https://cdn.bootcss.com/element-ui/2.13.0/theme-chalk/index.css'
	],
    js: [
        'https://cdn.bootcss.com/vue/2.6.11/vue.min.js',
        'https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js',
        'https://cdn.bootcss.com/vuex/3.1.3/vuex.min.js',
		'https://cdn.bootcss.com/axios/0.19.2/axios.min.js',
		'https://cdn.bootcss.com/element-ui/2.13.0/index.js',   
    ]
}

module.exports = {
	//vue webpack拓展
    chainWebpack: config => {
		//删除prefetch预加载模块
		config.plugins.delete('prefetch');
		config.plugins.delete('preload');
		//快捷目录配置
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@c', resolve('src/components'))
            .set('@cfg', resolve('src/config'))
            .set('@ast', resolve('src/assets'))
            .set('@u',resolve('src/util'))
            .set('@v',resolve('src/views'))
			.set('@itf',resolve('src/interface'))
		config.entry.app = ["babel-polyfill", "./src/main.js"]
		//以cdn的方式引入部分资源，index.html中引入
		// config.plugin('html')
		// 	.tap(args => {
		// 		args[0].cdn = cdn;
		// 		return args;
		// 	});
		//生产环境打包，使用分析包分析工具
		if (process.env.NODE_ENV == 'production') {
			config
        	.plugin('webpack-bundle-analyzer')
        	.use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        	.end()
		}

    },
}
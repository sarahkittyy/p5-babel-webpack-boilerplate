const path = require('path');
var html = require('html-webpack-plugin');

module.exports = {
	entry: './src/sketch.js',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, 'src')
				],
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					} 
				]
			}
		]
	},
	plugins: [
		new html({
			template: 'src/index.html',
			inject: 'body',
			minify: true,
			filename: 'index.html'
		})
	]
}
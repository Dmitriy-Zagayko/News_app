const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		homePage: ['@babel/polyfill', path.resolve(__dirname, './src/js/homePage/')],
		detailPage: ['@babel/polyfill', path.resolve(__dirname, './src/js/detailPage/')],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
	devServer: { compress: true, port: 5001 },
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/html/index.html',
			filename: 'index.html',
			chunks: ['homePage'],
		}),
		new HtmlWebpackPlugin({
			template: 'src/html/detailPage.html',
			filename: 'detailPage.html',
			chunks: ['detailPage'],
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
		new CopyWebpackPlugin({
			patterns: [{ from: 'src/assets/img/', to: 'assets/img' }],
		}),
	],
	resolve: { extensions: ['.js'] },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'eslint-loader',
				},
			},
			{
				test: /\.(ttf|woff|woff2|otf)/,
				use: ['file-loader'],
			},
			{
				test: /\.(png|gif|jpe?g|svg|ico)$/,
				use: ['file-loader'],
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		]
	}
}
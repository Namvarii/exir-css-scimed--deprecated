/**
 * Created by navid on 2/11/2017.
 */
const webpack = require( 'webpack' )
const path = require( 'path' )

module.exports = function() {
	//noinspection JSUnresolvedFunction
	return {
		entry: {
			app: path.resolve( __dirname, 'src', 'js', 'app.js' ),
			vendor: path.resolve( __dirname, 'src', 'js', 'vendor.js' )
		},
		output: {
			filename: '[name].bundle.js',
			path: path.resolve( __dirname, 'dist' )
		},
		module: {
			rules: [
				{
					test: /\.scss/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'style-loader'
						},
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				}
			]
		},
		plugins: [
			new webpack.optimize.CommonsChunkPlugin(
					{ names: [ 'vendor' ] }
			)
		],
		devtool: 'source-map'
	}
}
/**
 * Created by navid on 2/11/2017.
 */
const webpack = require( 'webpack' )
const path = require( 'path' )

module.exports = function() {
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
               test: /\.(woff|woff2|ttf|eot)$/,
               use: {
                  loader: 'url-loader',
                  options: {
                     limit: '10000'
                  }
               }
            },
            {
               test: /\.js(x)?$/,
               exclude: /node_modules/,
               use: 'babel-loader'
            },
            {
               test: /\.scss$/,
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
      devtool: 'source-map',
      stats: 'verbose',
      watch: true
   }
}
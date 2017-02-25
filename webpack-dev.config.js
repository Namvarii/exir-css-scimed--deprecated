/**
 * Created by navid on 2/11/2017.
 */
const webpack = require( 'webpack' )
const path = require( 'path' )

module.exports = function() {
   return {
      entry: {
         app: path.resolve( __dirname, 'src', 'js', 'app.js' ),
         vendor: path.resolve( __dirname, 'src', 'js', 'vendor.js' ),
         vendor_ltr: path.resolve( __dirname, 'src', 'js', 'vendor-ltr.js' )
      },
      output: {
         filename: '[name].bundle.js',
         path: path.resolve( __dirname, 'dist' )
      },
      module: {
         rules: [
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
                        sourceMap: false
                     }
                  },
                  {
                     loader: 'postcss-loader',
                     options: {
                        plugins: function(){
                           return [
                              require('autoprefixer')
                           ]
                        }
                     }
                  },
                  {
                     loader: 'sass-loader',
                     options: {
                        sourceMap: true
                     }
                  }
               ]
            },
            {
               test: /\.(svg|png|jpg)$/,
               use: 'url-loader'
            }
         ]
      },
      plugins: [
         new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
         })
      ],
      devtool: 'source-map',
      stats: 'verbose',
      watch: true
   }
}

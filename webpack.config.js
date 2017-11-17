  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin');

  module.exports = {
    entry: {
      app: './www/ca.min.js',
    },
    //devtool: 'source-map', //'inline-source-map',
    plugins: [
      /*new CleanWebpackPlugin(['dist/www']),
      new HtmlWebpackPlugin({
        title: 'IOS React ',
        template: './src/app/index.ejs'
      })*/
    ],
    devServer: {
      contentBase: './webpack'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'www')
    },
    module: {
      rules: [{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'es2015', 'stage-2']
          }
        }
      }]
    }
  };

const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
var ExtractTextPlugin = require("extract-text-webpack-plugin")

const config = {
  entry: {
    app: path.resolve(__dirname, '../src/client-entry.js')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test:  /(\.js$)|(\.vue$)/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          css: 'css-loader',
          'scss': 'vue-style-loader!css-loader!sass-loader',
          'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
  
        }
      },
      {test: /\.scss?$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.css?$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ],
  
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/js/[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  
},
  plugins: [
    new VueLoaderPlugin()
  ]
  
}





module.exports = config
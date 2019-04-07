var path = require('path');
var BUILD_DIR = path.resolve(__dirname, './public');
var APP_DIR = path.resolve(__dirname, './src');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    main: APP_DIR + '/main.jsx'
  },
  devtool: "source-map",
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: BUILD_DIR,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: [".js",".jsx"],
    alias: {
      'components': APP_DIR + '/components',
      'utils': APP_DIR + '/utils',
      'styles': APP_DIR + '/styles',
      'hooks': APP_DIR + '/hooks',
      'widgets': APP_DIR + '/widgets',
      'visuals': APP_DIR + '/visuals'
    }
  },
  module: {
    rules: [{
        test: /(\.css|.scss)$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.ico$/,
        loader: 'file?name=public/[name].[ext]'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url-loader'
      },
      {
        test: /\.(jsx|js)?$/,
        use: [{
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          }
        }]
      }
    ]
  },
  plugins: [
    // automatically compiles a index.html in /public/ so we don't have to worry about any templating and html files.
    new HtmlWebpackPlugin({
      title: 'Star Wars',
      filename: 'index.html',
      inject: false,
      hash: true,
      showErrors: false,
      template: require('html-webpack-template'),
      appMountId: "root"
    })
  ]
};

module.exports = config;
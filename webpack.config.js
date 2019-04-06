var path = require('path');
var BUILD_DIR = path.resolve(__dirname, './public');
var APP_DIR = path.resolve(__dirname, './src');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

const config = {
  entry: {
    main: APP_DIR + '/main.jsx'
  },
  devtool: "source-map",
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
  },
  resolve: {
    extensions: [".js",".jsx"],
    alias: {
      'components': APP_DIR + '/components',
      'utils': APP_DIR + '/utils',
      'styles': APP_DIR + '/styles',
      'hooks': APP_DIR + '/hooks',
      'widgets': APP_DIR + '/widgets',
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
    ],
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:' + process.env.PORT || 7001 })
  ]
};

module.exports = config;
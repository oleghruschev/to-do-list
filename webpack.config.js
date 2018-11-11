const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rootFolder = path.resolve(__dirname);

module.exports = {

  entry: './src/index.js',

  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(rootFolder, 'build'),
  },

  resolve: {
    alias: {
      scenes: path.resolve(rootFolder, 'src/scenes'),
      helpers: path.resolve(rootFolder, 'src/helpers'),
      vars: path.resolve(rootFolder, 'src/scss/_vars'),
      actions: path.resolve(rootFolder, 'src/actions'),
      reducers: path.resolve(rootFolder, 'src/reducers'),
      constants: path.resolve(rootFolder, 'src/constants'),
      mixins: path.resolve(rootFolder, 'src/styles/_mixins'),
      components: path.resolve(rootFolder, 'src/components'),
    },
    extensions: [
      '.js',
      '.scss',
    ],
  },
  //Настройки локального сервера
  devServer: {
    hot: true,
    contentBase: './build',
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
      	test: /\.scss$/,
      	use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          }
      	]
      },
      {
        test: /\.(png|gif|jpe?g)$/,
	      loaders: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          }
        ]
      },
    ]
  },

  plugins: [
    new HtmlWebPackPlugin ({
      title: 'todo-list',
      template: path.resolve(rootFolder, './public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: './style.css',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
}

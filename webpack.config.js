const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'web',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      sassHelpers: path.resolve(
        __dirname,
        './src/styles/01-helpers/helpers.scss',
      ),
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/components/pages'),
      sections: path.resolve(__dirname, './src/components/sections'),
      shared: path.resolve(__dirname, './src/components/shared'),
      styles: path.resolve(__dirname, './src/styles'),
    },
  },
};

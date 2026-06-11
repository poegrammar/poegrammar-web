const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader',
          options: {
            minimize: false,  // ← add this
          },
        },
        {
          test: /\.css$/i,
          use: isProduction
            ? [MiniCssExtractPlugin.loader, 'css-loader']
            : ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[hash][ext][query]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[hash][ext][query]',
          },
        },
      ],
    },
    plugins: [
      ...(isProduction
        ? [
            new MiniCssExtractPlugin({
              filename: 'main.css',
            }),
          ]
        : []),
      new CopyPlugin({
        patterns: [
          {
            from: 'index.html',
            to: 'index.html',
          },
          {
            from: 'assets',
            to: 'assets',
            noErrorOnMissing: true,
          },
        ],
      }),
    ],
    devServer: {
      static: [
        {
          directory: path.join(__dirname, '.'),
          serveIndex: true,
        },
      ],
      compress: true,
      port: 8080,
      hot: true,
      historyApiFallback: {
        rewrites: [
          { from: /./, to: '/index.html' },
        ],
      },
    },
    devtool: isProduction ? false : 'source-map',
  };
};

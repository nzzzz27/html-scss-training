const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const pathBuild = "./project/build";

module.exports = {
  context: path.join(__dirname, ''),
  // ここがどのscssをみるか
  entry: "./src/scss/main.scss",
  output: {
    // どのディレクトリにどんな名前でbuild後のcssを吐くか
    path: path.join(__dirname, pathBuild),
    filename: '[name].css'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        // 使用するプラグイン
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPat: pathBuild
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
}


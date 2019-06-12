const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const BrowserSync=  require("browser-sync-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].js",
  },
  devServer: {
    compress: true,
    port: 9999,
    noInfo: true
  },
  plugins: [
    new BrowserSync({
      host: 'localhost',
      port: '3000',
      proxy: 'http://localhost:9999',
      files: ['./src/**/*.html']
    }, {
      reload: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[a|c]ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      }
    ]
  }
})
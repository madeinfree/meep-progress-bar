var path = require("path");
module.exports = {
  entry: {
    app: './examples/example.react.js',
    vendors: ['webpack-dev-server/client?http://localhost:3004', 'webpack/hot/only-dev-server']
  },
  debug: true,
  output: {
    path: path.join(__dirname, 'examples'),
    filename: "[name].bundle.js",
  },
  watch: true,
  devtool: 'source-map',
  serverConfig: {
    port: '3004',// server port
    publicPath: '/',// js path
    contentBase: 'examples/'//web root path
  },
  resolve: {

  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "jsx-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel"},
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  }
}

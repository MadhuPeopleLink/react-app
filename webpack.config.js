var config = {
  entry: "./main.js",
  output: {
    path: "/",
    filename: "index.js"
  },
  devServer: {
    port: 8080,
    inline: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
           presets: ['es2015', 'react']
        }
      }
    ]
  }
};

module.exports = config;
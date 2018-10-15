const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    localIdentName: '[path][name]__[local]--[hash:base64:5]'
  },
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  cache: false,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          cssLoader
        ]
      }
    ]
  },
  mode: "development"

};

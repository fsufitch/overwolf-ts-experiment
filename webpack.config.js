module.exports = {
  entry: {
    app: './src/ts/main.ts',
    styles: './src/scss/main.scss',
  },
  output: {
    filename: '[name].bundle.js',
    path: './dist',
  },

  resolve: {
    root: './',
    extensions: ['', '.ts', '.js', '.scss', '.css', '.html'],
  },

  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.(ttf|eot|woff2?|png|jpe?g|svg)$/, loader: "url-loader" },
      { test: /\.html/, loader: 'html'}
    ]
  },

  devtool: 'inline-source-map',
};

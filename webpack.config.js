module.exports = {
  entry: './src/foo.js',

  output: {
    filename: '[name].js',
    publicPath: '/dist/',
    chunkFilename: '[name].js',
  },

  mode: 'development',

  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};

const HappyPack = require('happypack');

module.exports = {
  mode: 'production',

  entry: {
    app: './src/app.js',
    foo: './src/foo.ts',
  },

  output: {
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'happypack/loader?id=js',
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'happypack/loader?id=ts',
      },
    ],
  },

  plugins: [
    new HappyPack({
      id: 'js',
      loaders: [
        {
          loader: 'babel-loader',
          options: {},
        },
      ],
    }),
    new HappyPack({
      id: 'ts',
      loaders: [
        {
          loader: 'ts-loader',
          options: {},
        },
      ],
    }),
  ],

  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};

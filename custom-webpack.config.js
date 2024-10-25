const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['babel-plugin-istanbul'],
          },
        },
        exclude: /node_modules/,
        enforce: 'post',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};

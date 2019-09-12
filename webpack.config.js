const path = require('path');
module.exports = {
  mode: 'production',
  bail: true,
  entry: {
    app: ['./src/app.js', './src/foo.scss']
  },
  output: {
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /.s?css$/,
        use: ['css-loader', 'sass-loader']
      }
    ]
  }
};

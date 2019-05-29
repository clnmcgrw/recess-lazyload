
const path = require('path');


module.exports = {
  entry: './src/js/index.js',

  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist/assets')
  },

  mode: 'development',

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
            plugins: ['@babel/plugin-transform-regenerator']
          }
        }
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchOptions: {
      ignored: /node_modules/,
    },
  }
};
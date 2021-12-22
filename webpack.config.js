const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        }
      }
    ]
  },
  devServer: {
    'static': {
      directory: './dist'
    }
  }
};


// module.exports = {
//   entry: `${SRC_DIR}/index.jsx`,
//   mode: "development",
//   output: {
//     filename: "bundle.js",
//     path: DIST_DIR,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         loader: "babel-loader",
//         options: {
//           presets: ["@babel/preset-env", "@babel/preset-react"],
//         },
//       },
//     ],
//   },
// };
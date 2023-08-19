var path = require('path');

module.exports = {
    entry: './composer/composerApp.js',
    devtool: 'sourcemaps',
    cache: true,
    output: {
        path: __dirname,
        filename: './public/composerAppDist.js'
    },
    module: {
        rules: [
          { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
      }


};

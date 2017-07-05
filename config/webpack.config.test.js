const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    output: {
      // YOU NEED TO SET libraryTarget: 'commonjs2'
      libraryTarget: 'commonjs2',
    },
    rules: [
      {
        test: /\.css$/,
        //loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
        use:  [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: '1&localIdentName=[name]__[local]___[hash:base64:5]'
            }
          },
          { loader: 'postcss-loader' }
        ]
      }
    ]
  }
}

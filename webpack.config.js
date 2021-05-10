const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js'
   },
   devServer: {
      port: 8080
   },
   module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: ['babel-loader'],
        },
        {
          test: /\.css$/,  
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [ 
            'style-loader', 
            'css-loader', 
            'sass-loader'
          ],
        },
        {
          test: /\.(png|svg|jpg|gif|pdf)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
            }
          ]
        }
      ]
   },
   
   plugins:[
       new HtmlWebpackPlugin({
            template: './dist/index.html'
       }), 
   ],
   resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
  },
}
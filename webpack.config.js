const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.join(__dirname, '/build'),
      filename: 'bundle.js',
      publicPath: '/'
   },
   devServer: {
      port: 8080,
      historyApiFallback: true
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
            {
              loader: 'file-loader',
              options: {
                name: 'assets/[name].[ext]'
              }
            }
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
        },
        {
          test: /\.svg/,
          use: {
              loader: 'svg-url-loader'
          }
        },
        {
          test: /\.svg$/,
          use: [
            "babel-loader",
            {
              loader: "react-svg-loader",
              options: {
                svgo: {
                  plugins: [{ removeTitle: false }],
                  floatPrecision: 2
                },
                jsx: true
              }
            }
          ]
        }
      ]
   },
   
   plugins:[
       new HtmlWebpackPlugin({
            template: './build/index.html',
            favicon: 'public/u.ico'
       }), 
   ],
   resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
  },
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: {
      index: './src/index.js',
      about: './src/about.js',
      orderflow: './src/orderflow.js',
      contact: './src/contact.js'
   },
   output: {
      path: path.join(__dirname, '/build'),
      filename: '[name]-bundle.js',
      publicPath: './'
   },
   devServer: {
      //port: 8080,
      contentBase: "./build",
      historyApiFallback: true
   },
   performance: {
    hints: false,
    maxEntrypointSize: 4096000,
    maxAssetSize: 4096000
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
    new HtmlWebpackPlugin(
      {
        filename:"index.html",
        template: "./build/template.html",
        chunks: ['index'],
        favicon: './build/u.ico'
      }
    ),
    new HtmlWebpackPlugin(
      {
        filename:"about.html",
        template: "./build/template.html",
        chunks: ['about'],
        favicon: './build/u.ico'
    }),
    new HtmlWebpackPlugin(
      {
        filename:"orderflow.html",
        template: "./build/template.html",
        chunks: ['orderflow'],
        favicon: './build/u.ico'
      }
    ),
    new HtmlWebpackPlugin(
      {
        filename:"contact.html",
        template: "./build/template.html",
        chunks: ['contact'],
        favicon: './build/u.ico'
    })
   ],
   resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
  },
}
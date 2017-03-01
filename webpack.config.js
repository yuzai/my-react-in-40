var path = require('path');
var webpack = require('webpack');

module.exports = {
  context:path.resolve(__dirname,'./virtualdom'),
  entry:{
    index:'./index.js'
  },
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'./dist2'),
    publicPath:'/',
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      name:'commons',
      filename:'common.js',
      minChunks:2,
    }),
  ],
  devtool: "cheap-eval-source-map",
  devServer:{
    contentBase:path.resolve(__dirname,'./dev'),
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use:[{
          loader:'babel-loader',
          options:{
            presets:['es2015'],
            plugins: ["transform-react-jsx"]
          },
        }],
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader'],
        exclude:/bootstrap.css/,
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      } ,
    ]
  }
};

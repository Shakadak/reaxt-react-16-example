const path = require('path')

const reaxtJsRoot = 'reaxt-react-16'
var ExtractTextPlugin = require("extract-text-webpack-plugin")

const client_config = {
  entry: `${reaxtJsRoot}/client_entry_addition`,
  output: {
    path: path.join(__dirname, '../priv/static'), //typical output on the default directory served by Plug.Static
    filename: 'client.[hash].js', //dynamic name for long term caching, or code splitting, use WebPack.file_of(:main) to get it
    publicPath: '/public/'
  },
  plugins: [
    new ExtractTextPlugin({filename: "main.css", disable: false, allChunks: true}),
  ],
  module: {
    loaders: [
      {test: /css\/.+\.css$/, use:  ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader", publicPath: "/public/"})},
      {
        test: /.+\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          //presets: ['babel-preset-es2015', 'babel-preset-react', 'babel-preset-stage-0'].map(require.resolve)
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  }
}

const server_config = Object.assign(Object.assign({},client_config),{
  target: "node",
  entry: `${reaxtJsRoot}/react_server`,
  externals: {},
  output: {
    path: path.join(__dirname, '../priv/react_servers'), //typical output on the default directory served by Plug.Static
    filename: 'server.js' //dynamic name for long term caching, or code splitting, use WebPack.file_of(:main) to get it
  },
})
module.exports = [client_config,server_config]

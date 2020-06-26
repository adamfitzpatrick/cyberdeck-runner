const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ResourceHintsWebpackPlugin = require('resource-hints-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const yargs = require('yargs')

const { cdnResources, preload } = require(path.resolve(__dirname, 'template-resources'))
const logo = null

const mode = yargs.argv.p ? 'production' : 'development'

module.exports = {
  mode,
  entry: {
    'main': path.join(process.cwd(), 'src', 'index.tsx'),
    'mocks': path.join(process.cwd(), 'mock-data', 'index.ts')
  },
  externals: {},
  output: {
    path: path.join(process.cwd(), 'build'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Cyberdeck Runner',
      template: path.join(process.cwd(), 'src', 'index.template.hbs'),
      inject: 'body',
      cdnResources,
      logo,
      preload
    }),
    new ResourceHintsWebpackPlugin(),
    new BundleAnalyzerPlugin({ analyzerMode: mode === 'production' ? 'static' : 'disabled' })
  ],
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      use: [{
        loader: 'awesome-typescript-loader'
      }]
    }, {
      test: /\.hbs$/,
      use: { loader: 'handlebars-loader' }
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'typings-for-css-modules-loader',
        options: {
          modules: true,
          namedExport: true,
          localIdentName: '[name]__[local]--[hash:base64:5]'
        }
      }]
    }, {
      test: /\.(svg|jpg|png)$/,
      loader: 'url-loader',
      options: {
        limit: 8192
      }
    }, {
      test: /\.(otf|ttf|woff)$/,
      loader: 'file-loader'
    }]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@components': path.resolve(process.cwd(), 'src/components'),
      '@context': path.resolve(process.cwd(), 'src/context'),
      '@models': path.resolve(process.cwd(), 'models'),
      '@services': path.resolve(process.cwd(), 'src/services')
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 7010,
    contentBase: path.join(process.cwd(), 'build'),
    compress: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    disableHostCheck: true
  }
}
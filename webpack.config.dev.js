const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    entry: './src/index2.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    plugins: [
        // new BundleAnalyzerPlugin()
        new CopyWebpackPlugin({
            patterns: [
                { from: 'static' }
            ]
        })
      ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};

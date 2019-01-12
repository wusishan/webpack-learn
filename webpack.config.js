const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const reslove = relativePath => path.resolve(__dirname, relativePath)

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: reslove('./dist')
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        })
    ]
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlagin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'

            },
            {
                test: /\.txt$/,
                loader: 'raw-loader'
            }, 
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlagin.loader,
                    'css-loader'
                ]
            }           
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname)
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCSSExtractPlagin()
    ]
}
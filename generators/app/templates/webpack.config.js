
const path = require('path');
// import { Configuration } from 'webpack'
// /**
//  * @type Configuration
//  */
const webpackConfig = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: './src/main.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    optimization: {
        minimize: false
    },
    plugins: [
        new (require('html-webpack-plugin'))
    ],
    devServer: {
        contentBase: "./src"
    }
}

module.exports = webpackConfig
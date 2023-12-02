require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports =
{
    entry: path.join(__dirname, '/src/main.jsx'),
    output:
    {
        path: path.join(__dirname, "/dist"),
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({template: path.join(__dirname, '/src/index.html')})],
    devServer:
    {
        port: process.env.DEV_SERVER_PORT,
        historyApiFallback: true
    },
    module:
    {
        rules:
        [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options:
                {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                },
                exclude: /node_modules/
            },
            {
                test: /\.(ts|tsx)$/,
                loader: 'babel-loader',
                options:
                {
                    presets: ['@babel/preset-typescript', '@babel/preset-react', '@babel/preset-env']
                },
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png|jpeg|ttf|woff|woff2|svg)$/,
                type: 'asset/inline'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader', {loader: 'sass-loader', options: {sourceMap: true}}]
            },
            {
                test: /\.json$/,
                type: 'json',
                exclude: /(package|package-lock).json$/
            }
        ]
    }
}
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

const HtmlWebpackPluginConfig_positioning = new HtmlWebPackPlugin({
    template: './src/positioning.html',
    filename: 'positioning.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './src/js/start.js',
        './src/styles/app.css'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        HtmlWebpackPluginConfig_positioning
    ]
};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // плагин для работы с html
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //плагин для работы с css


module.exports = {
    plugins: [
        new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
        new HtmlWebpackPlugin({template: path.resolve('src','template.html')}),
    ],
    entry: path.resolve('src/js','main.js'),
    // entry: './src/js/main.js', ПРИМЕР  //
    output: {
        filename: 'main.[contenthash].js',
        clean: true,  // опция для удаления старых версий
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.mp3$/,
                // include: src,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                  },
            },
        ]
    }
}
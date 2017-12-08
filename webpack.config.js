const path = require('path')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'autoprefixer-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240
                    }
                }]
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]

    },
    plugins: [
        new cleanWebpackPlugin('dist'),
        new htmlWebpackPlugin({
            title: 'index',
            path: 'dist',
            filename: 'index.html',
            template: 'index.html'
        })
    ]
}
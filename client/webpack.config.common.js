const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    resolve: {
        alias: {
            settings: path.resolve(__dirname, './settings'),
            containers: path.resolve(__dirname, './containers'),
            components: path.resolve(__dirname, './components'),
            services: path.resolve(__dirname, './services'),
            hooks: path.resolve(__dirname, './hooks'),
            public: path.resolve(__dirname, './public'),
        },
    },
    entry: {
        index: './index.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new Dotenv(),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './public/index.html',
        }),
    ],
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, '../dist/client'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                    },
                },
            },
        ],
    },
};

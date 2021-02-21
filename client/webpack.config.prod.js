const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
    mode: 'production',
    devServer: {
        contentBase: './dist',
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
        minimizer: [
            new TerserPlugin({ test: /\.js(\?.*)?$/i }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            pngquant: {
                                quality: '50-70',
                                speed: 1,
                                dithering: 0.5,
                            },
                        },
                    },
                ],
            },
        ],
    },
});

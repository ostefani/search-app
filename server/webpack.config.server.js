const path = require('path');
const { IgnorePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    target: 'node',
    entry: {
        index: './server.js',
    },
    node: {
        __dirname: false,
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist/server'),
    },
    // mute warning for the view.js
    stats: {
        warningsFilter: warning => RegExp('node_modules/express/lib/view.js').test(warning),
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new IgnorePlugin({
            resourceRegExp: /^pg-native$/,
        }),
    ],
};

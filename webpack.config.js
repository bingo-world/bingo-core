var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: 'bingo-core.min.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ]
};
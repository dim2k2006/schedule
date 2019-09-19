const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const PATHS = {
    source: path.join(__dirname, 'src'),
    public: path.join(__dirname, 'public'),
};

module.exports = {
    entry: path.join(PATHS.source, 'index.js'),

    output: {
        path: path.join(PATHS.public),
        filename: 'bundle.js'
    },

    mode: NODE_ENV === 'development' ? 'development' : 'production',

    devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : false,

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.NamedModulesPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                include: PATHS.source,
                loader: 'babel-loader',
                sideEffects: false
            }
        ]
    }
};

if (NODE_ENV === 'production') {
    module.exports.plugins.push(
        new UglifyJsPlugin({
            uglifyOptions: {
                sourceMap: false,
                beautify: false,
                comments: false,
                mangle: {
                    keep_fnames: true
                },
                compress: {
                    sequences: true,
                    booleans: true,
                    loops: true,
                    unused: true,
                    warnings: false,
                    drop_console: true
                }
            }
        })
    );
}
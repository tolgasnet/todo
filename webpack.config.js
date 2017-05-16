module.exports = {
    context: __dirname + "/app",
    entry: "./main.js",
    output: {
        path: __dirname + "/app",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['env', 'react']
            }
        }]
    }
};
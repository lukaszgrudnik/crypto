const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;


module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './src/index.ts'),
    output: {
        path: path.resolve(__dirname, './dist'),
    },
    // module is any file that Webpack processes (e.g., .js, .ts, .css).
    module: {
        // Out of the box, webpack only understands JavaScript and JSON files.
        // Loaders allow webpack to process other types of files and convert them
        // into valid modules that can be consumed by your application and added
        // to the dependency graph.
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ]
    },
    // Controls how Webpack finds files when you import them in your code
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new ModuleFederationPlugin({
            name: 'shellApp',
            remotes: {
                walletApp: 'walletApp@http://localhost:8082/remoteEntry.js',
                marketApp: 'marketApp@http://localhost:8083/remoteEntry.js',
            }
        })
    ],
    devServer: {
        port: 8080,
        liveReload: true,
        hot: false
    }
}
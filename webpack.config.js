const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output file name
        clean: true, // Clean the output directory before each build
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Match .js and .jsx files
                exclude: /node_modules/, // Exclude node_modules
                use: {
                    loader: 'babel-loader', // Use Babel to transpile JavaScript
                },
            },
            {
                test: /\.css$/, // Match .css files
                use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
            },
            {
                test: /\.(png|jpg|gif|svg)$/, // Match image files
                type: 'asset/resource', // Handle image assets
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Resolve these extensions
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html', // Template HTML file
            filename: 'index.html', // Output HTML file name
        }),
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'), // Serve files from the dist directory
        compress: true, // Enable gzip compression
        port: 3000, // Port for the dev server
        open: true, // Open the browser automatically
        hot: true, // Enable hot module replacement
    },
    mode: 'development', // Set the mode to development
};
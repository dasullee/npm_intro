const path = require('path');
//require is like import 
//we are saying the path node module that we will need
//path is part of core library

module.exports = {
    entry:['@babel/polyfill','./src/index.js'],
    mode: 'none',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
        //good for when you work with different computers
        //allows us to build an absolute path from root of computer to where we are at now
    },
    devServer: {
        contentBase: './',
        //our index.html is in this path (root directory of server)
        publicPath: '/dist'
        //where is your bundle file
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}

//this is how you export in node
// usually node is in one file

//import statement = require
//exports = module.exports
//this is like the 'default' we have been doing



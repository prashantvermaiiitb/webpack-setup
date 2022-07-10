/**
 * You are going to have module 
 * that will be having rules which is an array of objects
 * those objects will be defining what to do with files
 * here we write test what kind of file we are going to do this test with useobejct 
 * what loader we are planning to use.
 * since you will be doing more settings or maintenance for the babel we will have .babelrc file
 * to tell how to behave.
 */
const path = require('path');
module.exports = {
    mode: 'development',// todo by default this is production & it's rule level property 
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public') // todo : this is being done so that on different OS this works properly by being differnt.
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    // without any additional setting this would be referring to .babelrc file
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devtool: 'source-map', // todo : this will be adding main.js.map files in the code
    devServer: { // todo : 
        // contentBase:'./dist' // todo contentbase is not support have to use static 
        static: {
            directory: path.join(__dirname, 'public')
        }
    }
}
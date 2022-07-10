/**
 * You are going to have module 
 * that will be having rules which is an array of objects
 * those objects will be defining what to do with files
 * here we write test what kind of file we are going to do this test with useobejct 
 * what loader we are planning to use.
 * since you will be doing more settings or maintenance for the babel we will have .babelrc file
 * to tell how to behave.
 */
module.exports = {
    mode: 'development',// todo by default this is production & it's rule level property 
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
    devtool: 'source-map' // todo : this will be adding main.js.map files in the code
}
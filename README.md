# webpack-setup
simple webpack5 setUp example 

1. with >webpack 4 there is no configuration needed for setting up the project. This is great!!
2. It needs to creat src folder for us, then move all the JS file inside that src folder.
3. Then we can run "npx webpack" to see the dist folder getting created, prior to that ensure that path of the included JS are proper in the html and JS files after being moved in the src folder. Else there will be errors that will appear while building.
4. We have main.js created in the dist folder in the root of the web-application as we ran "npx webpack"
5. Webpack5 is automatically setup to look in the src directory "src/index.js" and output "dist/main.js"
6. It takes all of the files and put the end results in the main bundle JS.
7. It ignores all the const / import that we did.
8. After this we have to update the "index.html" to have proper path for the main.js or we can move the index.html in the dist folder so that path can be relative to ./main.js
9. fallback mode for the main.js generation is 'production' i.e. file will be generated in the minified mode.
10. So we have module bundling with 0 configuration with webpack 5.
11. we can check the bundle that's formed to see what webpack has generated => is used which could not run on older browsers without using of babel, that's interesting to note.
12. Now if we are going to modify or make any changes in the project we have to rebuild using 'npx webpack'.
13. We can then add a "build script" as well in the package json to run our local webpack.
14. Important !!: till now require and import are working w/o babel, since webpack is able to do the transpiling for them.
15. Next we are adding babel so as to support the generated main.js to run on the older browsers as well.
16. 
    

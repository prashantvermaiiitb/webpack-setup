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
16. @babel/core , @babel/preset-env, babel-loader is now added primarily here.
17. @babel/core : is the core of babel
18. @babel/preset-env : latest browser support, backward compatibility, reasonal js usage on web
19. babel-loader : is going to handle operations like CSS loader inclusion 
20. after the inclusion of the webpack in local if we do npm run build then output in the dist/main will be little bit different. Now this is not having any arrow function and also this is now compatible with old browsers.
21. Compiling is converting into some other language while tanspiling is converting the same language into another version of the same language which will have backward compatibility.
22. Mode : is used for defining what should be done with main.js that's generated.
23. After adding sourcemap in the devtool: we are getting information about from where the code is coming from. This will take us to actual file as in source code. Alongwith main.js this will be sending main.js.map, to show the mapping of code from the bundled file to actual functions written in the code.
24. This source map will help in trouble shoot in the dev mode.
25. Webpack is coming with "watch" mode, this will help in getting webpack keep on looking out for changes.
26. for creating a development server, we will be putting {devServer :{}} property with contentBase to tell from where to pick the code from.
27. Running webpack dev server will be having auto changes detect mode. This will have hot module relaoding.
28. Next we can add entry / output points in the webpack config.js so that we can define the formation and serving of the bundle.js
29. After adding entry / outpu we have to rerun the build so that folders are created and then we can run webpack devserver
30. Reading the environment for the build from the variable may be production or development.
31. in Serve mode webpack does not write bundle code to files, it will be serving from the memory. so in use-case where we have done npm run build-prod > followed by npm start then it will be serving the code from the memory depending upon where there is a flag that have been defined.
32. Updating the default port from 8080 to somthing else will need to update the PORT in webpack.config.js
33. 
    

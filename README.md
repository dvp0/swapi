# Technologies / Methodologies

Express - Node Http server

Webpack - Asset bundler

React - Front End UI library

Babel - Transpiler to use fancy EcmaScript tricks in browser

Typestyle - Powerful and type checked css implementation in JS

React Hooks / Effects - New methodology of architecting react apps

ESlint - JS linter

Surge - Static deployment

Heroku - Full node deployment

LocalStorage - To cache results from any api call

Bundle Splitting - Vendor libs in separate bundle to load synchronously

# To run locally

To run locally, 
1) install npm(v6.4.1) and node(v10.15.3)
2) run `npm install` from the root of this repo
3) run `npm run start-dev` from the root of this repo
4) visit `localhost:1138` in browser

# Surged

It is deployed on Surge
 
>  https://obi-van.surge.sh/ 

HOWEVER 

The images will not work without Express app (highly recommended :) 

# Herokued

Because of the image issue on static deployment above, I also deployed on Heroku

> https://obi-van.herokuapp.com

# Third party libraries used

### Node side
Lib | Size (kb)| Use 
----|------|----
movie-art|894| To fetch posters links using omdb database for movies
g-i-s|276.3| To search google images for given string
compression|25.4| Compression middleware
            
### Browser side
Lib | Size (kb)| Use 
----|------|----
@reach/router|5.9 (1/4 of react-router)| For minimal browser side navigation
pluralize|2.2| to correctly convert `tragedy > tragedies` and `human > humans`
localstorage-fifo|1.2| safe wrapper around window.localStorage which follows fifo to free up storage if needed
lodash.sortby|5.1| null safe sort by method
typestyle|3.9| dynamic, functional and typesafe css implementation in javascript

(first time user for both surge and heroku)

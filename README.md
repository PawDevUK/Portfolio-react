To clone this repo:
git clone <this repo link>
install all dependencies localy after cloning
npm install
then change package.json with name of project and remote repo link 


To install all dependencies for react app follow steps:
create app folder
move to app folder 
initialize node
npm init -y
install react & react-dom
npm i react react-dom
install webpack as development dependencies
npm i --save-dev webpack webpack-dev-server webpack-cli html-webpack-plugin
install babel as development dependencies
npm i --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
instal style loader as development dependencies
npm i --save-dev style-loader

Create folder src where project file will be kept
mkdir src
In src folder create index.jsx which will be entry point to app for webpack. In config file module.export = {entry:"./src/index.jsx"}


Time to configure settings. First need to be created webpack.config.js in root directory where all config for loading and compiling files will be stored.

touch webpack.config.js

Config file should have for this set up:

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
 
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module:{
      rules:[
          {
              test:/\.js$/,
              exclude:/node_modules/,
              use:{
                  loader:'babel-loader'
              }
          },
          {
              test:/\.css$/i,
              use:['style-loader','css-loader'],
          }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}

Create in src folder index.html template which will be use by HtmlWebpackPlugin. Inside html file create div with id "root" where app will be rendered. 

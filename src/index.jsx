import React from "react"
import ReactDOM from "react-dom"
import App from "./components/app" 
// In order to use path to file without extension .js/.jsx... set up resolve: { extensions: ['.js', '.jsx']} in webpack.config.js

ReactDOM.render(<App/>, document.getElementById('root'))

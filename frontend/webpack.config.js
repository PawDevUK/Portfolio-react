const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.jsx', //where webpack get bundle from
	output: { // where webpack creates bundle
		path: path.join(__dirname, '/dist'),
		filename: 'index_bundle.js'
	},
	resolve: { // option that path in components doesn't required extensions like .js .jsx and can be like /comp/app
		extensions: ['.js', '.jsx']
	},
	module: { // setup for loader containing object for each file type.
		rules: [{ //rules for javascript and react files
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{ // rules for external style sheets
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			  },
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
				  {
					loader: 'url-loader',
					options: {
					  limit: 8192,
					},
				  },
				],
			  },
		]
	},
	plugins: [ // plugins to help developing 
		new HtmlWebpackPlugin({ // uses template specified.
			title: 'My template',
			template: './src/index.html'
		})
	]
};
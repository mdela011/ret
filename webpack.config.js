//what we want to do to our files to make them ready for prod
var webpack = require("webpack");
const path = require('path')
//entry: source file
//output: where we want to output our files

//devServer: server like HTTPSTER which auto-reloads on changes -> HOT RELOADING

//loaders: the DIFF tasks we want webpack to perform
module.exports={
	entry:"./src/index.js",
	output:{
		path:path.resolve(__dirname,'assets'),
		filename:"bundle.js",
		publicPath:"assets"
	},
	devServer:{
		inline:true,
		contentBase:"./dist",
		port:3000
	},
	module:{
		loaders:[
		{
			test:/\.js$/,
			exclude:/(node_modules)/,
			loader:["babel-loader"],
		},
		{
			test:/\.json$/,
			exclude:/(node_modules)/,
			loader:"json-loader"
		},
		{
			test:/\.css$/,
			loader:"style-loader!css-loader!autoprefixer-loader"
		},
		{
			test:/\.scss$/,
			loader:"style-loader!css-loader!autoprefixer-loader!sass-loader"
		}
		]
	}
}
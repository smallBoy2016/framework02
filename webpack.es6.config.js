/**
* 这是一个自动生成es5语法文件的配置文件
* 可以生成多个打包文件
*/


var path = require('path');//引入node的path模块
var htmlWebpackPlugin = require('html-webpack-plugin');//引入webpack插件

module.exports = {
  entry:{
    build:"./es6/index.js"
  },
  output:{
    path:"./es6_build/",
  	// path: path.resolve(__dirname,'es6_build'),
  	//将build解析到一个决定路径里.__dirname 表示当前执行脚本所在的目录。
    filename:"[name].js"
  },
  module:{
  	loaders:[
  		{
  			test:/.css$/,
  			loaders:["style","css"],
  			exclude:"/node_modules/"
  		},
      {
        test:/\.js[x]?$/,
        loaders:"babel-loader?presets[]=es2015&presets[]=react",
        exclude:"/node_modules/",
        include:path.resolve(__dirname,"/es6/")//包含es6文件夹
      }
  	]
  },
	resolve:{ //自动补全后缀名
		extensions:['','.js','.jsx','.css']
	},
  //使用插件
  plugins:[
    new htmlWebpackPlugin({
      title: "hello",
      filename:"index.html",
      chunks:["build"]
    })
  ] 

};

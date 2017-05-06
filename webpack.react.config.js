/**
* 这是一个react的配置文件
* 可以生成多个打包文件
*/


var path = require('path');//引入node的path模块
var htmlWebpackPlugin = require('html-webpack-plugin');//引入webpack插件

// var REACT_PATH = path.resolve(ROOT_PATH,'framework'); //项目文件夹
// var CSS_PATH = path.resolve(ROOT_PATH,'bower_components');
var ROOT_PATH = path.resolve(__dirname); //当前文件路径
var REACT_PATH = path.resolve(ROOT_PATH,'app3'); //项目文件夹
var REACT_BUILD_PATH = path.resolve(ROOT_PATH,'react_build'); //打包后的文件夹

var CSS_PATH = path.resolve(ROOT_PATH,'bower_components');


module.exports = {
  entry:{
    build:path.resolve(REACT_PATH,'main.jsx')
  },
  output:{
    path:"./react_build/",
  	// path: path.resolve(__dirname,'es6_build'),
  	//将build解析到一个决定路径里.__dirname 表示当前执行脚本所在的目录。
    filename:"[name].js"
  },
  module:{
  	loaders:[
  		{
  			test:/.css$/,
  			loaders:["style","css"],
  			exclude:"/node_modules/",
  		},
      { test: /\.(eot|woff|svg|ttf|woff2)$/, 
        loader: "file-loader"
      },
      {
        test: /\.jsx?$/,
        loaders: ['react-hot','babel?presets[]=es2015&presets[]=react'],
        include: REACT_PATH
      }
  	]
  },
	resolve:{ //自动补全后缀名
		extensions:['','.js','.jsx','.css']
	},


  //使用插件
  plugins:[
    new htmlWebpackPlugin({
      title: "hello3",
      filename:"index.html",
      chunks:["build"]
    })
  ] 

};

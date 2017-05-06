/**
* 这是一个基本的配置文件
*/


var path = require('path');//引入node的path模块

module.exports = {
  entry:"./app/index.js",
  output:{
  	path: path.resolve(__dirname,'build'),
  	//将build解析到一个决定路径里.__dirname 表示当前执行脚本所在的目录。
    filename:"build.js"
  },
  module:{
  	loaders:[
  		{
  			test:/.css$/,
  			loaders:["style","css"],
  			exclude:"/node_modules/"
  		}
  	]
  },
	resolve:{ //自动补全后缀名
		extensions:['','.js','.jsx','.css']
	} 

};


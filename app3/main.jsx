import React from 'react';
import ReactDOM from 'react-dom';

import CommentBox from'./component/CommentBox';


require('./css/bootstrap');
require('./css/docs.min');
require('./css/index');


/*var comments = [
	{"author":"王浩","date":"5分钟前","text":"今天天气不错哦！"},
	{"author":"李伟","date":"3分钟前","text":"天气不错哦！"},
	{"author":"张三","date":"3分钟前","text":"天气不错哦！"}

];*/

		







var demo = document.createElement('div');

document.body.appendChild(demo);

// ReactDOM.render(<CommentBox data={comments} />,demo);
ReactDOM.render(<CommentBox url="../app3/comments.json" />,demo);



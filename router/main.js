

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, Redirect} from 'react-router';

require('./css/bootstrap');
require('./css/index');


class App extends React.Component {
	render(){
		return(
			<div>
				<div className="nav nav-pills">
					<Link to="/" className="tager">首页</Link>
					<Link to="/tv" className="tager">电视</Link>
				</div>
				{this.props.children}
			</div>
		);
	}
}

class TV extends React.Component {
	render(){
		return(
			<div>

				{this.props.children}
			</div>
		);
	}
}

class Show extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<h3>节目 {this.props.params.id} </h3>
			</div>
		);
	}
}

class Home extends React.Component {
	render(){
		return(
			<div >首页内容</div>
		);
	}
}

class ShowIndex extends React.Component {
	render(){
		return(
			<div>电视节目列表</div>
		);
	}
}

function handleEnter(){
	console.log('进入');
}
function handleLeave(){
	console.log('离开');
}



var demo = document.createElement('div');

document.body.appendChild(demo);


// ReactDOM.render(<App />,demo);

ReactDOM.render((
	<Router>
		<Router path="/" component={App}>
			<IndexRoute component={Home} />
			<Router path="tv" component={TV}>
				<IndexRoute component={ShowIndex} />
				<Router path="/shows/:id" component={Show} 
					onEnter={handleEnter}
					onLeave={handleLeave}
				/>
				<Redirect form="shows/:id" to="/shows/:id"/>
			</Router>
		</Router>
	</Router>
),demo);
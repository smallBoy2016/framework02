import React from 'react';
import ReactDOM from 'react-dom';

class HeaderComponent extends React.Component{
  render(){
  	return (
		 <header className="site-header jumbotron">
	        <div className="container">
	            <div className="row">
	                <div className="col-xs-6">
	                    <h1>欢迎来到</h1>
	                    <p className="lead">妙味课堂是一支独具特色的IT培训团队，妙味反对传统IT教育枯燥乏味的教学模式，妙味提供一种全新的快乐学习方法！</p>
	                </div>
	                <div className="col-xs-6">
	                		<div className="list-group">
	                		  <a href="#" className="list-group-item list-group-item-success">Dapibus ac facilisis in</a>
	                		  <a href="#" className="list-group-item list-group-item-info">Cras sit amet nibh libero</a>
	                		  <a href="#" className="list-group-item list-group-item-warning">Porta ac consectetur ac</a>
	                		  <a href="#" className="list-group-item list-group-item-danger">Vestibulum at eros</a>
	                		</div>
	                </div>
	            </div>
	        </div>
	    </header>
  	);
  }

}

export { HeaderComponent as default }

//module.exports = HeaderComponent;
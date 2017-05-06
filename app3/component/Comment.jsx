
import React from 'react';

class Comment extends React.Component {
	render(){
		return(
			<div>
				<div>
					<span className="author">{this.props.author}</span>
					<div>
						<span className="date">{this.props.date}</span>
					</div>
					<div className="content">{this.props.children}</div>
				</div>
			</div>
		);
	}

}

export { Comment as default }
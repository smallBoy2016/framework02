
import React from 'react';

class CommentForm extends React.Component {
  
  handleSubmit(event){
    event.preventDefault();

    let author = this.refs.author.value,
        text = this.refs.text.value;

    this.props.onCommentSubmit({author, text, date:'刚刚'});
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
        	<input type="text" className="form-control" placeholder="姓名" ref="author" />
        </div>
        <div className="form-group">
        	<textarea className="form-control" rows="3" placeholder="评论" ref="text"></textarea>
        </div>
        <button type="submit" className="btn btn-default btn-sm dropdown-toggle">添加评论</button>
      </form>
    );
  }
}

export { CommentForm as default } 
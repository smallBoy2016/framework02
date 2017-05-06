
import React from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

import $ from 'jquery';

// import Ajax from '../ajax.js';

class CommentBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {data:[]};
    this.getComments();
    // setInterval(() => this.getComments(),25000);
  }

  handleCommentSubmit(comment){
    let comments = this.state.data,
        newComments = comments.concat(comment);

    this.setState({data: newComments});    
  }

  getComments(){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: comments => {
        this.setState({data: comments});
      },
      error: (xhr, status, error) => {
        console.log(error);
      }
    });
  }



  render(){
    return (
      <div className="container">
        <div className="col-md-6">
          <h1>评论</h1>
          <hr />
          <CommentList data={this.state.data}/>
          <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
        </div>
      </div>
    );
  }
}

export { CommentBox as default } 
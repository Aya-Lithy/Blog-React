import React, { Component } from 'react';
import CommentListing from './CommentListing';
import './Post.css';
 
class Comments extends Component {
    state = {  }
    render() { 
        return ( 
            <form className="col-md-10">
                <legend className="text-center">Previous Comments</legend>
                <CommentListing 
                    comments={this.props.comments} 
                    deleteComment={this.props.deleteComment} 
                />
            </form>
         );
    }
}
 
export default Comments;
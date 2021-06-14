import React, { Component } from 'react';
import Comment from './Comment';
import './Post.css';
 
class CommentListing extends Component {
    showComments = () => {
        const comments = this.props.comments;
        if (comments.length === 0) return null;        
        return (
            <div classname="post_list_item"><React.Fragment>
                {Object.keys(comments).map(comment =>(
                    <Comment
                        key={comment}
                        //postId={this.props.postId}
                        info={this.props.comments[comment]}
                        deleteComment={this.props.deleteComment}
                    />
 
                ) )}
            </React.Fragment></div>
        )
    }
 
    render() { 
        return ( 
                <div classname="post_list">
                    {this.showComments() }
                </div>
         );
    }
}
 
export default CommentListing;
import React, { Component } from 'react';
 
class EditComment extends Component {
    nameRef = React.createRef();
    emailRef = React.createRef();
    contentRef = React.createRef();
 
    editComment = (e) => {
        e.preventDefault();
        const comment = {
            name: this.nameRef.current.value,
            email: this.emailRef.current.value,
            body: this.contentRef.current.value,
            id: this.props.comment.id,
            postId: this.props.comment.postId
        }
        this.props.editComment(comment);
    }
 
    loadCommentForm = () => {
        if (!this.props.comment) return null;
        const {name, email, body} = this.props.comment;
 
        return (    
            <form onSubmit={this.editComment} className="col-md-10">
                <legend className="text-center">Edit Comment</legend>
 
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" ref={this.nameRef} className="form-control" defaultValue={name} />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input type="text" ref={this.emailRef} className="form-control" defaultValue={email} />
                </div>
 
                <div className="form-group">
                    <label>Content:</label>
                    <textarea className="form-control" rows="7"cols="25" ref={this.contentRef} defaultValue={body}></textarea>
                </div>
 
                <button type="submit" className="btn btn-primary" >Save changes</button>
            </form>
        );
    }
 
 
    render() {
        return ( 
            <React.Fragment>
                {this.loadCommentForm()}
            </React.Fragment>            
         );
    }
}
 
export default EditComment;
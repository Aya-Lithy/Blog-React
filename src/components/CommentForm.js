import React, { Component } from 'react';
 
class CommentForm extends Component {
    //create refs
    nameRef = React.createRef();
    emailRef = React.createRef();
    contentRef = React.createRef();
 
    createComment = (e) => {
        e.preventDefault();
 
        const comment = {
            name: this.nameRef.current.value,
            email: this.emailRef.current.value,
            body: this.contentRef.current.value 
        }
 
        this.props.createComment(comment);
 
    }
 
 
    render() { 
        return ( 
            <form onSubmit={this.createComment} className="col-md-10">
                <legend className="text-center">Add Your Comment Here!</legend>
 
                <div className="form-group">
                    <input type="text" ref={this.nameRef} className="form-control" placeholder="Your name.." />
                </div>
 
                <div className="form-group">
                    <input type="text" ref={this.emailRef} className="form-control" placeholder="Your email.." />
                </div>

                <div className="form-group">
                    <textarea className="form-control" rows="7"cols="25" ref={this.contentRef} placeholder="Here write your comment.."></textarea>
                </div>
 
                <button type="submit" className="btn btn-primary">Comment</button>
            </form>
         );
    }
}
 
export default CommentForm;
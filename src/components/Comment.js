import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import './Post.css';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
 
class Comment extends Component {
    confirmDeletion = () => {
        const {id} = this.props.info;
 
        Swal.fire({
                title: 'Delete this one?',
                text: "This action can not be canceled!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete',
                cancelButtonText: 'No, Cancel'
          }).then((result) => {
            if (result.value) {
                this.props.deleteComment(id)
                Swal.fire(
                    'Press OK to back',
                    'The comment has been deleted',
                    'success'
                )
            }
          })
    }
 
 
    render() {
        const {id, postId, name, email, body, datestamp} = this.props.info;
 
        return ( 
            <Paper className="comment">
            <p className="comment_author" cols="10">
                <b><span className='post-preview'>
                    {name.length > 25 ? `${name.substr(0, 25)}...` : name}
                </span></b>
            </p>
                <p className="comment_body">
                    <span className='comment-preview'>
                        {body.length > 300 ? `${body.substr(0, 300)}...` : body}
                    </span>
                </p>
                <Divider light />
                <p className="post_datestamp"><b>{moment(datestamp).fromNow()}</b></p>                
                    <div className="post_button">
                        <ul className="buttons">
                            <li><Link onClick={this.confirmDeletion} className="btn btn-danger">Delete</Link></li>
                        </ul>
                    </div>                   
            </Paper>
         );
    }
}
export default Comment;
import React, { Component } from 'react';
 
import {BrowserRouter, Route, Switch , Redirect} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
 
import {Header, Navigation} from './Layout/Layout';
import Posts from './Posts';
import SinglePost from './SinglePost';
import Form from './Form';
import EditPost from './EditPost';

import Comments from './Comments';
import SingleComment from './SingleComment';
import CommentForm from './CommentForm';
 
class Router extends Component {
    state = {  
        posts: [],
        comments: []
    }
 
    componentDidMount() {
        this.getPost();
        this.getComment();
    }
 
    getPost = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
             .then( res => {
                 this.setState({
                     posts: res.data
                 }) 
             })
    }
 
    deletePost = (id) => {
        //console.log(id);
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            if (res.status === 200) {
                const posts = [...this.state.posts];
                let result = posts.filter(post => (
                    post.id !== id
                ));
                this.setState({
                    posts: result
                })
            } 
        })
    }
 
    createPost = (post) => {
        axios.post(`https://jsonplaceholder.typicode.com/posts`, {post})
             .then(res => {
                 if (res.status === 201) {
                    Swal.fire(
                        'Post Create',
                        'It is created correctly.',
                        'success'
                    )
 
                    let postId = {id: res.data.id};
                    const newPost = Object.assign({}, res.data.post, postId)
 
                    this.setState(prevState => ({
                        posts: [...prevState.posts, newPost]
                    }))
                 }
             })
    }
 
    editPost = (postUpdate) => {
        const {id} = postUpdate;
 
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {postUpdate})
             .then(res => {
                 if (res.status === 200) {
                    Swal.fire(
                        'Post Updated',
                        'The changes were saved correctly.',
                        'success'
                    )
 
                    let postId = res.data.id;
 
					const posts = [...this.state.posts];
 
                    const postEdit = posts.findIndex(post => postId === post.id)
 
                    posts[postEdit] = postUpdate;
                    this.setState({
                        posts 
                    })
                 }
             })
    }
 

    getComment = () => {
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
             .then( res => {
                 this.setState({
                     comments: res.data
                 }) 
             })
    }
 
    deleteComment = (id) => {
        //console.log(id);
        axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(res => {
            if (res.status === 200) {
                const comments = [...this.state.comments];
                let result = comments.filter(comment => (
                    comment.id !== id
                ));
                this.setState({
                    comments: result
                })
            } 
        })
    }
 
    createComment = (comment) => {
        axios.post(`https://jsonplaceholder.typicode.com/comments`, {comment})
             .then(res => {
                 if (res.status === 201) {
                    Swal.fire(
                        'Comment Create',
                        'It is created correctly.',
                        'success'
                    )
                    const currentPath = window.location.pathname;
                    //console.log(currentPath);
                    const path = '/post/';
                    const currentPost = currentPath.replace(path, '');
                    //console.log(currentPost);

                    let commentId = {
                        id: res.data.id,
                        postId: Number(currentPost)   
                    };
                    const newComment = Object.assign({}, res.data.comment, commentId)
                    //console.log(newComment);
                    this.setState(prevState => ({
                        comments: [...prevState.comments, newComment]
                    }))
                 }
             })
    }
 
    editComment = (commentUpdate) => {
        const {id} = commentUpdate;
 
        axios.put(`https://jsonplaceholder.typicode.com/comments/${id}`, {commentUpdate})
             .then(res => {
                 if (res.status === 200) {
                    Swal.fire(
                        'Comment Updated',
                        'The changes were saved correctly.',
                        'success'
                    )
 
                    let commentId = res.data.id;
 
					const comments = [...this.state.comments];
 
                    const commentEdit = comments.findIndex(comment => commentId === comment.id)
 
                    comments[commentEdit] = commentUpdate;
                    this.setState({
                         
                    })
                 }
             })
    }




    render() { 
        return (  
            <BrowserRouter>
 
                <div className="container">
                    <Header />
                    <div className="row justify-content-center">
 
                        <Navigation />
 
                        <Switch>
                            <Route exact path="/" render={ () => {
                                return(
                                    <Posts 
                                        posts={this.state.posts}
                                        deletePost={this.deletePost}
                                    />
                                );
                            }} />
 
                            <Route exact path="/post/:postId" render={ (props) => {
                                let idPost = props.location.pathname.replace('/post/', '')
 
                                const posts=this.state.posts;
                                const comments=this.state.comments;
                                let filter;
                                let commentFilter;
                                filter = posts.filter(post => (
                                    post.id === Number(idPost)
                                ))
                                commentFilter = comments.filter(comment => (
                                    comment.postId === Number(idPost)
                                ))
 
 
                                return(
                                    <div>
                                        <SinglePost 
                                            post={filter[0]} 
                                        />
                                        <CommentForm 
                                            createComment={this.createComment}
                                        />
                                        <Comments
                                            comments={commentFilter}
                                            deleteComment={this.deleteComment}
                                        />
                                    </div>
                                )
                            }} />
                            <Route exact path="/create" render={() => {
                                return(
                                    <Form 
                                        createPost={this.createPost}
                                    />
                                );
                            }}
                            />
                            <Route exact path="/edit/:postId" render={ (props) => {
                                let idPost = props.location.pathname.replace('/edit/', '')
                                const posts=this.state.posts;
                                let filter;
                                filter = posts.filter(post => (
                                    post.id === Number(idPost)
                                ))                                
                                return(
                                    <EditPost
                                        post={filter[0]} 
                                        editPost={this.editPost}
                                    />
                                )
                            }} />                            
                        </Switch>
                    </div>
                </div>            
            </BrowserRouter>
        );
    }
} 
export default Router;
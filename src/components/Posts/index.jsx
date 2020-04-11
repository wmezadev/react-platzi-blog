import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../Global/Spinner';
import Fatal from '../Global/Fatal';
import * as userActions from '../../actions/userActions';
import * as postActions from '../../actions/postActions';

const { getAll: userGetAll } = userActions;
const { getByUser: postGetByUser, togglePost } = postActions;
class Posts extends Component {

    async componentDidMount() {
        const {
            userGetAll,
            postGetByUser,
            match: { params: { key }}
        } = this.props;

        if(!this.props.userReducer.users.length) {
            await userGetAll();
        }
        if(this.props.userReducer.error){
            return;
        }
        if(!('posts_key' in this.props.userReducer.users[key])){
            postGetByUser(key);
        }
    }

    setUser = () => {
        const { 
            userReducer,
            match: { params: { key }}
        } = this.props;

        if(userReducer.error){
            return <Fatal message={userReducer.error}/>;
        }

        if(!userReducer.users.length || userReducer.loading){
            return <Spinner/>;
        }

        const name = userReducer.users[key].name;

        return (
            <h1> Post from {name}</h1>
        );
    }

    setPosts = () => {
        const {
            userReducer,
            userReducer: { users },
            postsReducer,
            postsReducer: { posts },
            match: { params: { key }}
        } = this.props;

        if(!users.length) return;
        if(userReducer.error) return;

        if(postsReducer.loading) {
            return <Spinner/>;
        }

        if(postsReducer.error){
            return <Fatal message={postsReducer.error}/>;
        }

        if(!posts.length) return;
        if(!('posts_key' in users[key])) return;
        
        const { posts_key } = users[key];

        return this.showInfo(posts[posts_key], posts_key);
    }

    showInfo = (posts, posts_key) => (
        posts.map((post, com_key) => (
            <div 
                className="post_title" 
                key={post.id}
                onClick={() => this.props.togglePost(posts_key, com_key)}
            >
                <h2>
                    { post.title }
                </h2>
                <h3>
                    { post.body }
                </h3>
                {
                    post.opened ? 'open' : 'closed'
                }
            </div>
        ))
    );

    render() {
        return (
            <div>
                { this.setUser() }
                { this.setPosts() }
            </div>
        );
    }
}

const mapStateToProps = ({ userReducer, postsReducer }) => {
    return { 
        userReducer,
        postsReducer
    };
};

const mapDispatchToProps = {
    userGetAll,
    postGetByUser,
    togglePost
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
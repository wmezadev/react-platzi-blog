import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../Global/Spinner';
import Fatal from '../Global/Fatal';
import * as userActions from '../../actions/userActions';
import * as postActions from '../../actions/postActions';

const { getAll: userGetAll } = userActions;
const { getByUser: postGetByUser } = postActions;
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
            return null;
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

    render() {
        console.log(this.props)
        return (
            <div>
                { this.setUser() }
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
    postGetByUser
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
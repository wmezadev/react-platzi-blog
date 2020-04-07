import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import * as postActions from '../../actions/postActions';

const { getAll: userGetAll } = userActions;
const { getByUser: postGetByUser } = postActions;
class Posts extends Component {

    async componentDidMount() {
        if(!this.props.userReducer.users.length) {
            await this.props.userGetAll();
        }
        this.props.postGetByUser(this.props.match.params.key);
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1> Post from </h1>
                { this.props.match.params.key }
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
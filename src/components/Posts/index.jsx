import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import * as postActions from '../../actions/postActions';

const { getAll: userGetAll } = userActions;
const { getAll: postGetAll } = postActions;
class Posts extends Component {

    componentDidMount() {
        if(!this.props.userReducer.users.length) {
            this.props.userGetAll();
        }
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
    postGetAll
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
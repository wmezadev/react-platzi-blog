import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/userActions';
class Posts extends Component {

    componentDidMount() {
        if(!this.props.users.length) {
            this.props.getAll();
        }
    }

    render() {
        return (
            <div>
                <h1> Post from </h1>
                { this.props.match.params.key }
            </div>
        );
    }
}

const mapStateToProps = (reducers) => {
    return reducers.userReducer;
};

export default connect(mapStateToProps, usersActions)(Posts);
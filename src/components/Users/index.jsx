import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/userActions';
import Spinner from '../Global/Spinner';
import Fatal from '../Global/Fatal';
import Table from './Table';
class Users extends Component {

  componentDidMount() {
    if(!this.props.users.length){
      this.props.getAll();
    }
  }

  renderContent = () => {
    if(this.props.loading) {
      return <Spinner/>;
    }

    if(this.props.error) {
      return <Fatal message={this.props.error}/>;
    }
    
    return <Table/>;
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.userReducer;
}
 
export default connect(mapStateToProps, usersActions)(Users);
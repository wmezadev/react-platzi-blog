import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/userActions';
import Spinner from '../Global/Spinner';
import Fatal from '../Global/Fatal';
class Users extends Component {

  componentDidMount() {
    this.props.getAll();
  }

  renderContent = () => {
    if(this.props.loading) {
      return <Spinner/>;
    }

    if(this.props.error) {
      return <Fatal message={this.props.error}/>;
    }
    
    return(
      <table className="table">
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Email
            </th>
            <th>
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          { this.addRows() }
        </tbody>
      </table>
    )
  }

  addRows = () => (
    this.props.users.map(user => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ))
  );

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.userReducer;
}
 
export default connect(mapStateToProps, usersActions)(Users);
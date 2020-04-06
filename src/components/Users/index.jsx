import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/userActions';
class Users extends Component {

  componentDidMount() {
    this.props.getAll();
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
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.userReducer;
}
 
export default connect(mapStateToProps, usersActions)(Users);
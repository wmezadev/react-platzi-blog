import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/userActions';
class Users extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
   /*  const resp = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    this.setState({
      users: resp.data
    }); */
    this.props.getAll();
  }

  addRows = () => (
    this.state.users.map(user => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ))
  );

  render() {
    console.log(this.props);
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
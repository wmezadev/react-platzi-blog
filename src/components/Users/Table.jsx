import React from 'react';
import { connect } from 'react-redux';

const Table = ({ users }) => {
    const addRows = () => (
        users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
          </tr>
        ))
    );

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
            { addRows() }
          </tbody>
        </table>
    );
}

const mapStateToProps = (reducers) => {
    return reducers.userReducer;
}
 
export default connect(mapStateToProps)(Table);
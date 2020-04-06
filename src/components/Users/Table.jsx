import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Table = ({ users }) => {
    const addRows = () => (
        users.map((user, key) => (
          <tr key={user.id}>
            <td>
                {user.name}
            </td>
            <td>
                {user.email}
            </td>
            <td>
                {user.website}
            </td>
            <td>
                <Link to={`/posts/${key}`}>
                    <div className="eye-solid icon"></div>
                </Link>
            </td>
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
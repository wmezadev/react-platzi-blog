import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [
        {
          name: "William",
          email: "info@wmeza.com",
          link: "wmeza.com"
        },
        {
          name: "Platzi",
          email: "team@platzi.com",
          link: "platzi.com"
        }
      ]
    }
  }

  addRows = () => (
    this.state.users.map(user => (
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.link}</td>
      </tr>
    ))
  );

  render() {
    return (
      <div className="table-margin">
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
 
export default App;
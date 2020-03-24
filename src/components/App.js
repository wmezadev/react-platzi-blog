import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    const resp = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    this.setState({
      users: resp.data
    });
  }

  addRows = () => (
    this.state.users.map(user => (
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
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
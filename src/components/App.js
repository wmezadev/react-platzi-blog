import React from 'react';

const App = () => {
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
          <tr>
            <td>William</td>
            <td>Williameduardomeza@gmail.com</td>
            <td>wmeza.com</td>
          </tr>
          <tr>
            <td>Platzi</td>
            <td>platzi@platzi.com</td>
            <td>platzi.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
 
export default App;
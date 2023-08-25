import React from 'react';

function App() {
  return (
    <div className="container">
      <h1>Title h1</h1>
      <h2>Title h2</h2>
      <h3>Title h3</h3>
      <h4>Title h4</h4>
      <h5>Title h5</h5>
      <h6>Title h6</h6>
      <ul className="row pt-10">
        <li className="col-small-3">Column</li>
        <li className="col-small-3">Column</li>
        <li className="col-small-3">Column</li>
        <li className="col-small-3">Column</li>
        <li className="col-small-3">Column</li>
        <li className="col-small-3">Column</li>
        <li className="col-small-3">Column</li>
        <li className="col-small-3">Column</li>
      </ul>

      <table>
        <thead>
          <tr>
            <th>Title 1</th>
            <th>Title 2</th>
            <th>Title 3</th>
            <th>Title 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Content 1</td>
            <td>Content 2</td>
            <td>Content 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;

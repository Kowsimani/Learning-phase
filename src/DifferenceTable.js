import React from "react";

function DifferenceTable(props) {

  const constDefinition = "const is used to declare a constant variable in JavaScript.";

  return (
    <div style={{ padding: "20px" }}>
      <h2>Difference Between Props and const</h2>

      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Props</th>
            <th>const</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.propsDefinition}</td>
            <td>{constDefinition}</td>
          </tr>
          <tr>
            <td>Used to pass data from parent to child.</td>
            <td>Used to store and update data inside a component.</td>
          </tr>
          <tr>
            <td>
                Communication between components
            </td>
            <td>Manage dynamic data</td>
          </tr>
          <tr>
            <td>Read-only (cannot be modified).</td>
            <td>Cannot be reassigned after declaration.</td>
          </tr>
          <tr>
            <td>Used in React components.</td>
            <td>JavaScript keyword.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default  function App(){
    return (
    <DifferenceTable propsDefinition="Props are inputs passed to a React component." />
  );
} 
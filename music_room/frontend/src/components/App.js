import React, { Component } from "react";
import { render } from "react-dom";

// export default class App extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return <h1>Testing React Code</h1>
//     }
// }

const App = (props) => {
  return (
    <div>
      <h2>This is my first app combined django and react</h2>
    </div>
  );
};

export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);

import logo from './logo.svg';
import React from "react";
import './App.css';

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

import { withAuthenticator } from '@aws-amplify/ui-react'
Amplify.configure(awsExports);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello React!
        </p>

        </header>
      </div>
    );
  }
  
}

//export default App;
export default withAuthenticator(App);

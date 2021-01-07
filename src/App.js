import logo from './logo.svg';
import React from "react";
import './App.css';

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

import { withAuthenticator } from '@aws-amplify/ui-react'
import { API } from "aws-amplify";
Amplify.configure(awsExports);

class App extends React.Component {

  callAmplifyApi = () => {
    console.log('API');
    API.get('todos', '/items', {})
    .then(resp => {
      console.log(resp.success);
    })
    .catch( err => {
      console.log(err);
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello React!
        </p>
        <button onClick={this.callAmplifyApi}>Call REST API</button>
        </header>
      </div>
    );
  }
  
}

//export default App;
export default withAuthenticator(App);

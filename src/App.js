import React, { Component } from 'react';
import Text from './Text'
import './App.css';
import Previewer from './Previewer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Markdown Previewer</h1>
        </header>
        <Text />
        <Previewer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Text from './Text'
import Header from './Header'
import './App.css';
import Previewer from './Previewer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Text />
        <Previewer />
      </div>
    );
  }
}

export default App;

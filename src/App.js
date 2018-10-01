import React, { Component } from 'react';
import Text from './Text'
import Header from './Header'
import './App.css';
import Previewer from './Previewer';

const App = function() {
  return (
    <div className="App">
      <Header />
      <Text />
      <Previewer />
    </div>
  );
}

export default App;

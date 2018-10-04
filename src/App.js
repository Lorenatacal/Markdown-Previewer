import React, { Component } from 'react';
import Text from './Text'
import Header from './Header'
import './App.css';
import Previewer from './Previewer';
import ReactMarkdown from 'react-markdown';

const App = props => {
  return (
    <div className="App">
      <Header />
      <Text />
    </div>
  );
}

export default App;

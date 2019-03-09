import React, { Component } from 'react';
import './App.css';
import Experiments from './components/Experiments';

export default class App extends Component {
  render() {
    return (
      <>
        <h1>Homepage</h1>
        <Experiments />
      </>
    );
  }
}

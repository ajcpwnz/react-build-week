import React, { Component } from 'react';
import { Route, Link, } from 'react-router-dom';
import './App.css';
import Experiments from './components/Experiments';

export default class App extends Component {
  render() {
    return (
      <>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/experiments'>Experiments</Link>
        </nav>
        <h1>Homepage</h1>
        <Route
          path='/experiments'
          render={() => (
            <Experiments />
              )}
        />
      </>
    );
  }
}

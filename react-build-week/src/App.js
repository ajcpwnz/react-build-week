import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { experiments } from './reducers/experiments';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <h1>Smoothie</h1>
    );
  }
}

const mapStateToProps = state => ({
  experiments: state.experiments
});

const mapDispatchToProps = {
  experiments,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

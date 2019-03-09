import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { bindActionCreators } from 'redux';
import { getExperimentsAsync } from './actions/actionCreators'

class App extends Component {
  componentDidMount() {
    this.props.getExperimentsAsync();
  }

  render() {
    return (
      <h1>Croissant Experiments</h1>
    );
  }
}

const mapStateToProps = state => ({
  experiments: state.experiments
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getExperimentsAsync
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

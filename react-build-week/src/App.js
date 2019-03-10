import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

import WebsiteHome from './components/website/WebsiteHome';
import Sidebar from './components/app/Sidebar';
import Navbar from './components/app/Navbar';
import Experiments from './components/app/Experiments';
import ExperimentForm from './components/app/ExperimentForm';

const Container = styled.div `
    margin-top: 64px;
    margin-left: 64px;
`

export default class App extends Component {
  render() {
    return (
      <>
      {/* <nav>
        <Link to='/'>Home</Link>
        <Link to='/experiments'>Experiments</Link>
      </nav> */}
      <Route
          exact path='/'
          render={() => (
              <WebsiteHome />
          )}
      />
      <Route
        exact path='/experiments'
        render={() => (
        <>
          <Sidebar />
          <Navbar />
          <Container>
            <Experiments />
          </Container>
        </>
        )}
      />
      <Route
        exact path='/experiments/add'
        render={() => (
        <>
          <Sidebar />
          <Navbar />
          <Container>
            <ExperimentForm />
          </Container>
        </>
        )}
      />
      </>
    );
  }
}

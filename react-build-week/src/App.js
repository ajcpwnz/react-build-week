import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

import WebsiteHome from './components/website/WebsiteHome';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Experiments from './components/Experiments';

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
          path='/experiments'
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
      </>
    );
  }
}

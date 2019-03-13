import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import WebsiteHome from './components/website/WebsiteHome';
import AppLayout from './components/app/AppLayout';
import Experiments from './components/app/Experiments';
import AddExperimentForm from './components/app/AddExperimentForm';
import Experiment from './components/app/Experiment';
import Filter from './components/app/Filter';
import Tags from './components/app/Tags';

export default class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route
              exact path='/'
              render={() => (
                  <WebsiteHome />
              )}
          />
          <Route
            exact path='/experiments'
            render={() => (
              <AppLayout>
                <Filter />
                <Tags />
                <Experiments />
              </AppLayout>
            )}
          />
          <Route
            exact path='/form/add'
            render={() => (
              <AppLayout>
                <AddExperimentForm />
              </AppLayout>
            )}
          />
          <Route
          exact path='/experiments/:id'
          render={(props) => (
          <AppLayout>
              <Experiment {...props} />
          </AppLayout>
          )}
        />
        </>
      </Router>
    );
  }
}

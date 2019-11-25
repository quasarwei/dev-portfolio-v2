import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeRoute from './Routes/HomeRoute/HomeRoute';
import AboutRoute from './Routes/AboutRoute/AboutRoute';
import ProjectsRoute from './Routes/ProjectsRoute/ProjectsRoute';
import ContactRoute from './Routes/ContactRoute/ContactRoute';

import './App.scss';

function App() {
  return (
    <main className="App">
      <Switch>
        <Route exact path={'/'} component={HomeRoute} />
        <Route eact path={'/about'} component={AboutRoute} />
        <Route exact path={'/projects'} component={ProjectsRoute} />
        <Route exact path={'/contact'} component={ContactRoute} />
      </Switch>
    </main>
  );
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeRoute from './routes/HomeRoute/HomeRoute';
import AboutRoute from './routes/AboutRoute/AboutRoute';
import ProjectsRoute from './routes/ProjectsRoute/ProjectsRoute';
import ContactRoute from './routes/ContactRoute/ContactRoute';

import './App.scss';

function App() {
  return (
    <main className="App">
      <Header />
      <Switch>
        <Route exact path={'/'} component={HomeRoute} />
        <Route eact path={'/about'} component={AboutRoute} />
        <Route exact path={'/projects'} component={ProjectsRoute} />
        <Route exact path={'/contact'} component={ContactRoute} />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;

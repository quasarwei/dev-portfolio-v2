import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeRoute from './routes/HomeRoute/HomeRoute';
import AboutRoute from './routes/AboutRoute/AboutRoute';
import ProjectsRoute from './routes/ProjectsRoute/ProjectsRoute';
import ContactRoute from './routes/ContactRoute/ContactRoute';

import './App.scss';

class App extends React.Component {
  state = {
    currPage: 'home',
  };

  setCurrPage = currPage => {
    this.setState({ currPage });
  };

  render() {
    return (
      <main className="App">
        <Header />
        <Switch>
          <Route
            exact
            path={'/'}
            render={props => (
              <HomeRoute {...props} setPage={page => this.setCurrPage(page)} />
            )}
          />
          <Route
            exact
            path={'/about'}
            render={props => (
              <AboutRoute {...props} setPage={page => this.setCurrPage(page)} />
            )}
          />
          <Route
            exact
            path={'/projects'}
            render={props => (
              <ProjectsRoute
                {...props}
                setPage={page => this.setCurrPage(page)}
              />
            )}
          />
          <Route
            exact
            path={'/contact'}
            render={props => (
              <ContactRoute
                {...props}
                setPage={page => this.setCurrPage(page)}
              />
            )}
          />
        </Switch>
        <Footer currPage={this.state.currPage} />
      </main>
    );
  }
}

export default App;

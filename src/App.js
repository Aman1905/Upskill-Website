import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header'
import Home from './pages/home/Home';
import Blogs from './pages/blogs/Blog';
import Contact from './pages/contact/Contact';
import Events from './pages/events/Events';
import Teams from './pages/teams/Team';

const App = () => {
  return (
    <div>
      <Header>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/blogs' exact>
            <Blogs />
          </Route>
          <Route path='/events' exact>
            <Events />
          </Route>
          <Route path='/teams' exact>
            <Teams />
          </Route>
          <Route path='/contact' exact>
            <Contact />
          </Route>
      </Switch>
    </Header>
    </div>
  );
}

export default App

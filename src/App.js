import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header'
import Home from './pages/home/Home';
import Blogs from './pages/blogs/Blog';
import Contact from './pages/contact/Contact';
import Events from './pages/events/Events';
import Teams from './pages/teams/Team';

const App = () => {
  return (
    <>
    <Router>
      <Header />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/blogs" component={Blogs} exact></Route>
          <Route path='/events' component={Events} exact></Route>
          <Route path='/teams' component={Teams} exact></Route>
          <Route path='/contact' component={Contact} exact></Route>
        </Switch>
    </Router>
    </>
  );
}
export default App;

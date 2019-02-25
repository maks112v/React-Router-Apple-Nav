import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './components/Nav';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Mac from './pages/Mac'
import { Iphone, Ipad, Watch, Tv, NoMatch } from './pages/Pages'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mac" exact component={Mac} />
          <Route path="/iphone" exact component={Iphone} />
          <Route path="/ipad" exact component={Ipad} />
          <Route path="/watch" exact component={Watch} />
          <Route path="/tv" exact component={Tv} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;

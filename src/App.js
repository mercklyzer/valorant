import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Weapons from './pages/Weapons/Weapons';
import Agents from './pages/Agents/Agents';
import Weapon from './pages/Weapon/Weapon';
import Agent from './pages/Agent/Agent';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div style={{overflow: 'hidden'}}>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/weapons/:category" exact  component={Weapons} />
          <Route path="/weapon/:weapon" exact  component={Weapon} />
          <Route path="/agents" exact component={Agents} />
          <Route path="/agents/:uuid" exact component={Agent} />

          <Redirect from="/weapons" to="weapons/Sidearms"/>
        </Switch>
        </div>
      </div>

    </Router>

  );
}

export default App;
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
          <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
          <Route path={`${process.env.PUBLIC_URL}/weapons/:category`} exact  component={Weapons} />
          <Route path={`${process.env.PUBLIC_URL}/weapon/:weapon`} exact  component={Weapon} />
          <Route path={`${process.env.PUBLIC_URL}/agents`} exact component={Agents} />
          <Route path={`${process.env.PUBLIC_URL}/agents/:uuid`} exact component={Agent} />

          <Redirect from={`${process.env.PUBLIC_URL}/weapons`} to={`${process.env.PUBLIC_URL}weapons/Sidearms`}/>
        </Switch>
        </div>
      </div>

    </Router>

  );
}

export default App;

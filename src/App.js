import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Weapons from './pages/Weapons/Weapons';
import Agents from './pages/Agents';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/weapons/:category" exact  component={Weapons} />
          <Route path="/agents" exact component={Agents} />
          <Redirect from="/weapons" to="weapons/Sidearms"/>
        </Switch>
      </div>

    </Router>

  );
}

export default App;

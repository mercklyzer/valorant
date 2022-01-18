import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
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
          <Route path="/weapons" component={Weapons} />
          <Route path="/agents" component={Agents} />
        </Switch>
      </div>

    </Router>

  );
}

export default App;

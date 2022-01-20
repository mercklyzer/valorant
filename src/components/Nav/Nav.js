import React from "react";
import './nav.css'
import {ReactComponent as ValorantTitle} from '../../images/valorant-title.svg'
import {ReactComponent as ValorantLogo} from '../../images/valorant-logo.svg'
import {ReactComponent as RiotLogo} from '../../images/riot-logo.svg'
import { useHistory } from "react-router-dom";

const Nav = () => {
  const history = useHistory()
  const routeChange = () => {
    let path = `/`
    history.push(path)
    console.log("route change");
  }

  return (
    <nav className="navbar">
        <div className="navbar-items">
          <div className="navbar-item"><RiotLogo fill="orange"/></div>
          <div className="navbar-item" onClick={routeChange} style={{cursor:'pointer'}}><ValorantTitle fill="white"/></div>
          <div className="navbar-item"><ValorantLogo fill="white"/></div>
        </div>
    </nav>
  );
}


export default Nav;
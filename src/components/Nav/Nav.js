import React from "react";
import './nav.css'
import {ReactComponent as ValorantTitle} from '../../images/valorant-title.svg'
import {ReactComponent as ValorantLogo} from '../../images/valorant-logo.svg'
import {ReactComponent as RiotLogo} from '../../images/riot-logo.svg'

const Nav = () => {
  return (
    <nav className="navbar">
        <div className="navbar-items">
          <div className="navbar-item"><RiotLogo fill="orange"/></div>
          <div className="navbar-item"><ValorantTitle fill="white"/></div>
          <div className="navbar-item"><ValorantLogo fill="white"/></div>
        </div>
    </nav>
  );
}


export default Nav;
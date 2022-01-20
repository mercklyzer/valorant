import React, { useState } from "react";
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

  const [isMouseOver, setIsMouseOver] = useState(false)

  return (
    <nav className="navbar">
        <div className="navbar-items">
          <div className="navbar-item"><RiotLogo fill="orange"/></div>
          <div className="navbar-item" 
            onClick={routeChange} style={{cursor:'pointer'}}>
            <ValorantTitle fill={isMouseOver? '#ff4655' : 'white'} style={{transition: '0.4s'}} onMouseOver={() => setIsMouseOver(true)} onMouseOut={() => setIsMouseOver(false)}/>
          </div>
          <div className="navbar-item"><ValorantLogo fill="white"/></div>
        </div>
    </nav>
  );
}


export default Nav;
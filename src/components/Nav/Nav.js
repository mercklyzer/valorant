import React, { useEffect, useState } from "react";
import './nav.css'
import {ReactComponent as ValorantTitle} from '../../images/valorant-title.svg'
import {ReactComponent as ValorantLogo} from '../../images/valorant-logo.svg'
import {ReactComponent as RiotLogo} from '../../images/riot-logo.svg'
import { Link, useHistory, useLocation } from "react-router-dom";

const Nav = () => {
  const history = useHistory()
  const routeChange = () => {
    let path = `${process.env.PUBLIC_URL}/`
    history.push(path)
  }

  let location = useLocation()

  const [isMouseOver, setIsMouseOver] = useState(false)

  return (
    <nav className="navbar">
        <div className="navbar-items">
          <div className="navbar-item"><RiotLogo fill="orange"/></div>
            
            <div className="navbar-item">
              <Link to={`${process.env.PUBLIC_URL}/agents`} className={`navbar-button ${location.pathname.includes('/agent')? 'active' : ''}`}>Agents</Link>
              <ValorantTitle className={`navbar-valorant-title`} fill={isMouseOver || location.pathname === '/'? '#ff4655' : 'white'} onMouseOver={() => setIsMouseOver(true)} onMouseOut={() => setIsMouseOver(false)} onClick={routeChange} style={{cursor:'pointer'}}/>
              <Link to={`${process.env.PUBLIC_URL}/weapons`} className={`navbar-button ${location.pathname.includes('/weapon')? 'active' : ''}`}>Weapons</Link>
            </div>
            
          <div className="navbar-item"><ValorantLogo fill="white"/></div>
        </div>
    </nav>
  );
}


export default Nav;
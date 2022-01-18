import React from "react";
import './home.css';
import Button from "../../components/Button/Button";
import {ReactComponent as ValorantTitle} from '../../images/valorant-title.svg'


const Home = () => {
  return (
    <div className="screen">
      <video autoPlay={true} muted={true} loop={true}>
        <source src={require('../../videos/valorant-trailer.mp4')} type="video/mp4" />
      </video>
      <div className="content">
        <div className="valorant-title">
          <ValorantTitle className="title" />
        </div>
        <div className="buttons-container">
          <Button title="Agents" to="/agents"/>
          <Button title="Weapons" to="/weapons"/>
        </div>
      </div>
    </div>
  );
}



export default Home;

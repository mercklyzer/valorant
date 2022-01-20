import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from './Agent.module.css'
import Section from "../../components/Section/Section";
import Loader from "../../components/Loader/Loader";

const Agent = ({match}) => {
  const [agent,setAgent] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://valorant-api.com/v1/agents/${match.params.uuid}`)
    .then((res) => {
      setAgent(res.data.data)
      console.log(res.data.data.abilities);
      setIsLoading(false)
    })
    .catch(err => {
      console.log(err);
      setIsLoading(false)
    })
  }, [])


  return (
    <>
      {isLoading? <Loader /> : 
      
      
      <>
      <div className={styles.header}>
          <video autoPlay={true} muted={true} loop={true} className={styles.backgroundVideo}>
            <source src={require('../../videos/valorant-background-video.mp4')} type="video/mp4" />
          </video>
          <div className={`${styles.overlay}`}>
            <div className={`row ${styles.agentRowContainer}`} style={{height: "100%"}}>
              <div className={`col-sm-6 col-md-6 order-1 order-md-0 ${styles.agentDetails}`}>
                <div className={styles.agentName}>{agent.displayName}</div>
                <img src={agent.role?.displayIcon} className={styles.agentIcon} />
                <div className={styles.agentRole}>{agent.role?.displayName}</div>
                <div className={`${styles.description} d-none d-md-block`}>{agent.description}</div>
                
              </div>
              <div className={`col-sm-6 col-md-6 order-0 order-md-1 ${styles.portraitContainer}`}>
                <img src={agent.fullPortrait}  className={`${styles.portrait} d-none d-lg-block`}/>
                <img src={agent.displayIcon}  className={`${styles.portrait} d-lg-none`}/>
              </div>
            </div>
          </div>
      </div>
      
      <Section>
      <div className="container">
          <div className={styles.title}>SPECIAL ABILITIES</div>

          <div className={`row`}>
            {agent.abilities?.map((ability, index) => <div key={index} className={`col-12 col-sm-6 col-md-6 col-lg-3 p-2`}>
              <div className={`${styles.abilityCard}`}>
                <div className={styles.abilityCardOverlay}></div>

                <div className={styles.abilityHeader}>
                  <img src={ability.displayIcon} className={styles.abilityIcon}/>
                  <div className={styles.abilityName}>{ability.displayName}</div>
                </div>
                
                <div className={styles.abilityDescription}>
                  {ability.description}
                </div>
              </div>
            </div>)}
          </div>
      </div>
      </Section>
      </>
    }
  </>
  


  );
}

export default Agent;
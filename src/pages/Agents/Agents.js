import React, {useState, useEffect} from "react";
import axios from "axios";
import JettWallpaper from '../../images/jett-wallpaper.png'
import Loader from "../../components/Loader/Loader";
import Wallpaper from "../../components/Wallpaper/Wallpaper";
import styles from './Agents.module.css'
import Section from "../../components/Section/Section";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Agents = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [agents, setAgents] = useState([])

  const history = useHistory()

  const routeChange = (uuid) => {
    let path = `/agents/${uuid}`
    history.push(path)
    console.log("route change");
  }

  useEffect(() => {

    setIsLoading(true)
    axios.get('https://valorant-api.com/v1/agents')
    .then((res) => {
      setAgents(res.data.data)
      console.log(res.data.data);
      setIsLoading(false)
    })
    .catch((err) => {
      setIsLoading(false)
      console.log(err);
    })

  }, [])

  
  return (
    <React.Fragment>
      {
        isLoading?
        <Loader />:
        <>
          <Wallpaper image={JettWallpaper}>
            <h1>Valorant <br/> Agents </h1>
          </Wallpaper>
          <Section>
            <div className="container">
              <div className="row">

                {
                  agents.map((agent, index) => { 
                    
                    return agent.role?.displayIcon? 
                      <div className="col-md-6 col-sm-12" key={index}>
                        <Card 
                          name={agent.displayName} 
                          image={agent.displayIcon} 
                          description={agent.description}
                          roleName={agent.role?.displayName? agent.role.displayName: 'None'}
                          roleIcon={agent.role?.displayIcon? agent.role.displayIcon: ''}
                          redirect={routeChange}
                          uuid={agent.uuid}
                          />
                      </div> :
                    
                    <></>}
                  )
                }

                
              </div>

            </div>
          </Section>
        </>
      }
    </React.Fragment>

  );

}

export default Agents;
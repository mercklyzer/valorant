import React, { useEffect, useState } from "react";
import axios from "axios";
import Wallpaper from "../../components/Wallpaper/Wallpaper";
import OmenWallpaper from '../../images/omen-wallpaper.jpg'
import Section from '../../components/Section/Section'
import Loader from '../../components/Loader/Loader'

const Weapon = ({match}) => {
    const [weapon, setWeapon] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://valorant-weapons.p.rapidapi.com/weapon/${match.params.weapon}`, {
            headers: {
                'x-rapidapi-host': 'valorant-weapons.p.rapidapi.com',
                'x-rapidapi-key': '6cf506a754msh95bc47e4493ac07p1b1a20jsnb0e9cb89144f',
            }
        })
        .then((response) => {
            if(!response.data){
                console.log("data not available");
            }
            else{
                setWeapon(response.data)
            }
            setIsLoading(false)
            console.log(response);
        })
        .catch((err) => {
            setIsLoading(false)
            console.log(err);
        })


    },[match.params.weapon])

    return (
        <>
            {isLoading? <Loader /> :
            <>


            <Wallpaper  image={OmenWallpaper}><h1>{match.params.weapon}</h1></Wallpaper>
            <Section>
                <div className="container">
                    <table className="table table-bordered table-dark table-striped shadow">
                        <tbody>
                            <tr className={''}>
                                <th scope="col" className={``}>NAME</th>
                                <td scope="col" className={``}>{weapon.name}</td>
                            </tr>
                            <tr className={''}>
                                <th scope="col" className={``}>COST</th>
                                <td scope="col" className={``}>{weapon.cost}</td>
                            </tr>
                            <tr className={''}>
                                <th scope="col" className={``}>FIRE TYPE</th>
                                <td scope="col" className={``}>{weapon.fire_type}</td>
                            </tr>
                            <tr className={''}>
                                <th scope="col" className={``}>FIRE RATE</th>
                                <td scope="col" className={``}>{weapon.fire_rate}</td>
                            </tr>
                            <tr className={''}>
                                <th scope="col" style={{verticalAlign: 'middle'}}>DAMAGE</th>
                                <td scope="col" className={``}>
                                    <table className="table table-bordered table-dark table-striped shadow">
                                        {weapon.damage? <tbody>
                                            <tr>
                                                <td scope="col">Head:</td>
                                                <td scope="col">{weapon.damage[0]?.head}</td>
                                            </tr>
                                            <tr>
                                                <td scope="col">Body:</td>
                                                <td scope="col"> {weapon.damage[0]?.body}</td>
                                            </tr>
                                            <tr>
                                                <td scope="col">Legs:</td>
                                                <td scope="col">{weapon.damage[0].legs}</td>
                                            </tr>
                                        </tbody>: <></>}
                                    </table>
                                      
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Section>
            </>
            }
        </>
    )
}

export default Weapon
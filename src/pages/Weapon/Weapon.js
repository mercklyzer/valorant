import React from "react";
import axios from "axios";
import { useEffect, useState } from "react/cjs/react.development";
import Wallpaper from "../../components/Wallpaper/Wallpaper";

const Weapon = ({match}) => {
    const [image, setImage] = useState('')

    useEffect(() => {
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
                setImage(response.data.spread)
            }
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })


    },[match.params.weapon])

    return (
        <>
            <img src={"https://valorant-api-project.herokuapp.com/images/judge"} />
            {/* <Wallpaper title="Weapons" image={image}/> */}
        </>
    )
}

export default Weapon
import React, {useState, useEffect} from "react";
import styles from './Weapons.module.css'
import {Link} from 'react-router-dom'
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import Wallpaper from "../../components/Wallpaper/Wallpaper";

import OmenWallpaper from '../../images/omen-wallpaper.jpg'
import Section from "../../components/Section/Section";

const Weapons = ({match}) => {
  const [category, setCategory] = useState('')
  const [weapons, setWeapons] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setCategory(match.params.category)

    axios.get('https://valorant-api.com/v1/weapons')
    .then(res => console.log(res))

    setIsLoading(true)
    axios.get(`https://valorant-weapons.p.rapidapi.com/${match.params.category}`, {
      headers: {
        'x-rapidapi-host': 'valorant-weapons.p.rapidapi.com',
        'x-rapidapi-key': '6cf506a754msh95bc47e4493ac07p1b1a20jsnb0e9cb89144f'
      }
    })
    .then((response) => {
      setWeapons(response.data.weapons)
      setIsLoading(false)
    })
    .catch((err) => {
      setIsLoading(false)
      console.log(err);
    })

  }, [match.params.category])

  
  return (
    <React.Fragment>
      {
        isLoading?
        <Loader />:
        <>
          <Wallpaper title="Weapons" image={OmenWallpaper}>
            <h1>Valorant <br/> Weapons </h1>
          </Wallpaper>

          <Section>
            <div className="container">
              {weaponTableHeader(category)}

              {weaponTable(category, weapons)}
            </div>
          </Section>
        </>
      }
    </React.Fragment>

  );
}

const weaponTableHeader = (category) => {
  return (
    <table className="table table-dark table-bordered">
      <thead>
        <tr className="shadow">
          <th className={`col-md-3 col-sm-2 ${styles.headerCell}`} scope="col">{category}</th>
          <th className={`col-md-7 col-sm-8 ${styles.headerCell}`} scope="col">
            <div className={styles.categoryContainer}>
              <div className={`${styles.weaponClass}`}>WEAPON CLASS</div>
              <div className={`${styles.category}`}>
                {category.toUpperCase()}
                <div className={`dropdown ${styles.dropdown}`}>
                <Link className={`dropdown-toggle ${styles.toggle}`} role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                </Link>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><Link className="dropdown-item" to={`${process.env.PUBLIC_URL}/weapons/Sidearms`}>Sidearms</Link></li>
                  <li><Link className="dropdown-item" to={`${process.env.PUBLIC_URL}/weapons/SMGS`}>SMGS</Link></li>
                  <li><Link className="dropdown-item" to={`${process.env.PUBLIC_URL}/weapons/Shotguns`}>Shotguns</Link></li>
                  <li><Link className="dropdown-item" to={`${process.env.PUBLIC_URL}/weapons/Rifles`}>Rifles</Link></li>
                  <li><Link className="dropdown-item" to={`${process.env.PUBLIC_URL}/weapons/Snipers`}>Snipers</Link></li>
                  <li><Link className="dropdown-item" to={`${process.env.PUBLIC_URL}/weapons/LMGS`}>LMGS</Link></li>
                </ul>
              </div>
            </div>
              
              </div>
              
          </th>
          <th className={`col-md-2 col-sm-2 ${styles.headerCell}`} scope="col">ACT 1</th>
        </tr>
      </thead>
    </table>
  )
}

const weaponTable = (category, weapons) => {
  return (
    <table className="table table-bordered">
      <thead style={{borderBottom: '2px solid var(--button-black)'}}>
        <tr>
          <th className={`col-md-3`} scope="col">Class</th>
          <th className={`col-md-7`} scope="col">Weapon</th>
          <th className={`col-md-2`} scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {weapons.map((weapon, index) => {
          return (
            <tr className={`shadow`} key={index}>
              <th scope="col" className={`${styles.bodyCell} ${styles.cream1}`}>{category}</th>
              <th className={`${styles.bodyCell} ${styles.cream2}`}>
                  <Link to={`${process.env.PUBLIC_URL}/weapon/${weapon.name}`} className={styles.link}>-{weapon.name.toUpperCase()}-</Link>
                </th>
              <th className={`${styles.bodyCell} ${styles.cream1}`}>{weapon.cost}</th>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Weapons;
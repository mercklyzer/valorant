import React from "react";
import styles from './Wallpaper.module.css'

const Wallpaper = (props) => {
    const backgroundImage = {
        backgroundImage: `url('${props.image}')`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }

    console.log(backgroundImage);

    return (
        <section className={styles.wallpaper} style={{}}>
            <div className="container" style={{height: '100%'}}>
              <div className={styles.container}>
                <h1>Valorant <br/> {props.title}</h1>
              </div>
            </div>
          </section>
    )
}

export default Wallpaper
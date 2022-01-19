import React from "react";
import styles from './Wallpaper.module.css'

const Wallpaper = (props) => {
    const backgroundImage = {
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }

    return (
      <section className={styles.wallpaper} style={backgroundImage}>
        <div className="container" style={{height: '100%'}}>
          <div className={styles.container}>
            {props.children}
          </div>
        </div>
      </section>
    )
}

export default Wallpaper
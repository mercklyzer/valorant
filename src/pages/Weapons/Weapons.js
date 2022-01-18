import React from "react";
import styles from './Weapons.module.css'

const Weapons = () => {
  return (
    <React.Fragment>
      <section className={styles.wallpaper}>
        <div className="container" style={{height: '100%'}}>
          <div className={styles.container}>
            <h1>Weapons</h1>
          </div>
        </div>
      </section>
      <section className={styles.content}>

      </section>
    </React.Fragment>

  );
}

export default Weapons;
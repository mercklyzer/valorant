import React from "react";
import styles from './Loader.module.css'

const Loader = props => {
    return (
        <div className={styles.container}>
            <img src={require("../../images/hand-loader.gif")} className={styles.loader} />
        </div>
    )
}

export default Loader
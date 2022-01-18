import React from "react";
import styles from './Button.module.css'

const Button = (props) => {
    return (
        <div className={styles.buttonContainer}>
            <div className={styles.title}>
                {props.title}
            </div>
        </div>
    )
}

export default Button;

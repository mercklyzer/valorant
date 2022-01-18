import React from "react";
import styles from './Button.module.css'
import {Link} from 'react-router-dom'

const Button = (props) => {
    return (
        <Link to={props.to} className={styles.buttonContainer}>
            <div className={styles.title}>
                {props.title}
            </div>
        </Link>
    )
}

export default Button;

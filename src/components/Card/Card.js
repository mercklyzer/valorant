import React from "react";
import styles from './Card.module.css'

const Card = props => {
    return (
        <div className={`${styles.container}`}>
            <div className={styles.hoverContainer}>
                <img src={props.roleIcon} className={styles.roleIcon}/>
                <span className={styles.roleName}>{props.roleName}</span>
            </div>
            <div className={`${styles.header} pt-4 px-4`}>
                {props.name}
            </div>
            <div className={`${styles.body} row pb-4 px-4`}>
                <div className={`${styles.heroIconContainer} col-sm-4 col-md-12 col-lg-4 `}>
                    <img className={styles.heroIcon} src={`${props.image}`}/>
                </div>
                <div className={`${styles.description} col-sm-8 col-md-12 col-lg-8  `}>
                    {props.description}
                </div>

            </div>
        </div>
    )
}

export default Card
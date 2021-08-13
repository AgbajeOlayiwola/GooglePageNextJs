import React from 'react'
import styles from '../../styles/topnav.module.css'

const TopNav = () => {
    return (
        <div className={styles.container}>
            <div className={styles.secondConta}>
            <p className={styles.gmlTxt}>Gmail</p>
            <p className={styles.imgTxt}>Images</p>
            <button className={styles.sgnBtn}>Sign in</button>
            </div>
        </div>
    )
}

export default TopNav

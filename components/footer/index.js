import React from 'react'
import styles from '../../styles/footer.module.css'

const Footer = () => {
    return (
        <div>
            <div className={styles.topFoot}>
                <p className={styles.topFooti}>Nigeria</p>
            </div>
            <hr style={{margin:'0px' }}></hr>
            <div className={styles.bottomFoot}>
                <div className={styles.btmFooti}>
                    <p className={styles.btmFootP}>Advertising</p>
                    <p className={styles.btmFootP}>Business</p>
                    <p className={styles.btmFootP}>About</p>
                    <p className={styles.btmFootP}>Home Search Works</p>
                </div>
                <div  className={styles.btmFootii}>
                    <p className={styles.btmFootP}>Privacy</p>
                    <p className={styles.btmFootP}>Terms</p>
                    <p className={styles.btmFootP}>Settings</p>
                </div>
            </div>
        </div>
    )
}

export default Footer

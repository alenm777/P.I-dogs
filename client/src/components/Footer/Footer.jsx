import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import logoDogs from '../../img/logo-huella.png';
import styles from './footer.module.css';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Footer(){

    return (
        <div className={styles.footerContainer}>
            <img className={styles.logoFooter} src={logoDogs} alt="logowikiwhite" />
            
            <div className={styles.redesContainer}>
                <a href="https://github.com/alenm777" ><img className={styles.redes} src={github} alt="github" /></a>
                <a href="https://www.linkedin.com/in/al%C3%A9n-mu%C3%B1oz-107560231/" ><img className={styles.redes} src={linkedin} alt="linkedin" /></a>
        
            </div>

            <div className={styles.linkContainer}>
                <Link className={styles.link} to='/home'>/Home</Link>
                <Link className={styles.link} to='/create'>/Create breed</Link>
                <Link className={styles.link} to='/about'>/About</Link>
            </div>

            <div className={styles.copyContainer}>
                <p className={styles.copy}>DoggyPedia | Create by: Alén Muñoz </p>
            </div>
        </div>
    )
}
import styles from './landingpage.module.css';
import { Link } from 'react-router-dom';

import logoBrand from '../../img/logo-DoggyPedia.png';
import github from '../../img/logo-blanco-github.png';
import linkedin from '../../img/linkedin.png';

import React from 'react';

export default function LandingPage(){
    return (
        <div className={styles.body}>
            <div className={styles.shape} />
            <div className={styles.info}>
                <div>
                    <img className={styles.logo} src={logoBrand} alt="Logo-DoggyPedia" />
                </div>
                <div>
                   
                   
                    <div className={styles.buttonContainer}>
                        <Link className={styles.button} to='/home'>Home</Link>
                    </div>
                </div>
                <div>
                    <p className={styles.desc}> Created by Alén Muñoz / <b>PI Dogs</b></p>
                    <div className={styles.socialsContainer}>
                        <a href="https://github.com/alenm777" ><img className={styles.socials1} src={github} alt="github" /></a>
                        <a href="https://www.linkedin.com/in/al%C3%A9n-mu%C3%B1oz-107560231/" ><img className={styles.socials} src={linkedin} alt="linkedin" /></a>
                    
                    </div>
                </div>
            </div>

            
        </div>
    )
}




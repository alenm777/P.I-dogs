import { Link } from "react-router-dom";
import alen from "../../img/para-presentacion.png";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import styles from "./about.module.css";

import React from 'react';

export default function About(){
    return (
        <div className={styles.page}>
            <div className={styles.text}>
                <h3 className={styles.title}>Please allow me to introduce myself</h3>
                <p className={styles.parrafo}>My name is Alen Muñoz, I'm 26 years old and I live in Rafaela, Santa Fe, Argentina, I'm a student at Henry, where I learned to use HTML, CSS, React, Redux, Express and Sequelize. I enjoy playing soccer, taking pictures and watching movies. </p>
                
                <Link className={styles.home} to="/home">Home </Link>
                
            </div>

            <div className={styles.image}>
                <img className={styles.img} src={alen} alt="Alén Muñoz" />
            </div>

            <div className={styles.containerRedes}>
         
                <a href="https://github.com/alenm777" ><img className={styles.redes} src={github} alt="github" /></a>
                <a href="https://www.linkedin.com/in/al%C3%A9n-mu%C3%B1oz-107560231/" ><img className={styles.redes} src={linkedin} alt="linkedin" /></a>
            </div>

           

        </div>
    )
}
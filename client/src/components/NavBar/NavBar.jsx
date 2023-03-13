import styles from './navbar.module.css'
import logoHuella from '../../img/logo-huella.png'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom';
import React from 'react';


export default function NavBar(){

    return (
        <div className={styles.nav}>
            <div>
                <Link to='/home'>
                    <img className={styles.logo} src={logoHuella} alt="Logo Huella" />
                </Link>
            </div>
            <SearchBar />
            <div>
                <Link className={styles.pages} to='/home'>Home</Link>
                <Link className={styles.pages} to='/create'>Create breed</Link>
                <Link className={styles.pages} to='/about'>About</Link>
            </div>
        </div>
    )
}
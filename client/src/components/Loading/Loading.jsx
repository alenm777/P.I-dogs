import spin from '../../img/loading.png';
import styles from './loading.module.css'
import React from 'react';


export default function Loading(){
    return (
        <div className={styles.container}>
            <div>
                <img className={styles.spinIcon} src={spin} alt="O" />
            </div>
        </div>
    )
}
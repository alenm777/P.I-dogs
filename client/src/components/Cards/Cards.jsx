import styles from "./cards.module.css"
import Card from "../Card/Card";
import React from 'react';


export default function Cards(props){
    const {dogs} = props
    return(
            <div className={styles.cards}>
                
                {
                    !dogs[0]? <h3 className={styles.notFoundMessage}>The breed of dog you are trying to find does not exist..</h3> : null
                }
                {
                    dogs.map((b) => <Card
                        key={b.id}
                        id={b.id}
                        name={b.name}
                        weight={b.weight}
                        temperaments={b.temperaments}
                        image= {b.image}/>)
                } 
                
            </div>
    )
}

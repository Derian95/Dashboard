import React from 'react'
import styles from './Statistics.module.css'
export default function Statistics({title, descripcion, number,color}) {
  
    return (
    <div className={styles.container} style={{backgroundColor:`${color}`}}>
        <div className={styles.data}>
        <h4>{title}</h4>
        <p>{descripcion}</p>
        </div>
        
        <div className={styles.number}>
            <p>{number}</p>
        </div>
    </div>
  )
}

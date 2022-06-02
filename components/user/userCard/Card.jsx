/* eslint-disable @next/next/no-img-element */
import React,{useContext} from 'react'
import styles from './Card.module.css'
import { ThemeContex } from '../../layout/Layout'

export default function Card({data}) {
  const dark=useContext(ThemeContex)
    return (
    <div className={dark?styles.container:styles.containerDark}>
            <img src={data.picture} alt="img" className={styles.picture} />
        <div className={styles.text}>
            <h3>{data.firstName}</h3>
            <p>{data.lastName}</p>
        </div>
    </div>
  )
}

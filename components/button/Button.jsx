import React,{useContext} from 'react'
import styles from './Button.module.css'
import { ThemeContex } from '../layout/Layout'

export default function Button() {
  const theme=useContext(ThemeContex)
  
    return (
    <button className={theme? 
      `${styles.buttonLigth} ${styles.button}`
      :
      `${styles.buttonDark} ${styles.button}`}
      >
        Users
    
    </button>
    )
}

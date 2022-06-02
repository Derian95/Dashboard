import React,{useContext} from 'react'
import styles from './CardChart.module.css'
import { ThemeContex } from '../../layout/Layout'

export default function CardChart({children}) {
    const dark =useContext(ThemeContex)
  return (
    <div className={dark?styles.containerDark:styles.containerLight}>
        {children}
    </div>
  )
}

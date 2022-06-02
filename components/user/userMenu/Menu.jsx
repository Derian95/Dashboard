import { useRouter } from 'next/router'
import React, { useState, useContext } from 'react'
import { ThemeContex } from '../../layout/Layout'
import styles from './Menu.module.css'
export default function Menu() {

    const dark = useContext(ThemeContex)
    const router =useRouter()
   
  return (
    <div  className={dark? styles.menuDark: styles.menu}>
    <button onClick={()=>viewProfile()}>Profile</button>
    <button onClick={()=>{router.push('/Login')}}>Log out</button>
  </div>
  )
}

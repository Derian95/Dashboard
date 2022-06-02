/* eslint-disable @next/next/no-img-element */
import React,{useContext} from 'react'
import styles from './Header.module.css'
import { ThemeContex } from '../layout/Layout'
import Profile from '../user/Profile'
import logo from '../../assets/logo.png'
import Image from 'next/image'
export default function Header({children}) {
  const theme=useContext(ThemeContex)
    return (
    <header className={styles.container}>
        <div className={theme?`${styles.contain} ${styles.containerDark}`:`${styles.contain} ${styles.containerLigth}`}>
        <Image src={logo} alt={"img"}  height={50} width={200}/>
        {children}
        <Profile/>
        </div>
        

    </header>
  )
}

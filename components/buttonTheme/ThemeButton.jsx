import React, { useContext, useState, useEffect } from 'react'
import styles from './ThemeButton.module.css'
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeButton({ setTheme, theme }) {

  const changueTheme = () => {
    localStorage.setItem('dark-mode', JSON.stringify(!theme))
    setTheme(!theme)
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {

      const theme = localStorage.getItem('dark-mode') === "true";
      setTheme(theme);
    }

  }, [setTheme]);
  return (
    <button className=
      {
        theme ? `${styles.switch}` : `${styles.switch} ${styles.active}`
      }
      onClick={() => changueTheme()} >

      <span className={styles.span}><FaMoon size={18} /></span>
      <span className={styles.span}><FaSun size={18} /></span>



    </button>
  )
}

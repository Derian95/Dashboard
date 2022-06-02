import React, { useContext, useState } from 'react'
import Link from 'next/link'
import styles from './Sidebar.module.css'
import { ThemeContex } from '../layout/Layout'
import { FaHome, FaUser, FaUserSecret, FaCubes, FaEdit, FaListAlt } from 'react-icons/fa'
import ButtonSideBard from '../buttonSidebar/ButtonSideBard'

export default function Sidebar() {
  const dark = useContext(ThemeContex)
  const [stateSidebar, setStateSidebar] = useState(true);

  return (
    <div>
      {stateSidebar ? (
        <div className={styles.container}>
          <nav className={dark ?
            `${styles.nav} ${styles.dark}` : `${styles.nav} ${styles.ligth}`}>
            <div className={styles.links}>
              <ButtonSideBard stateSidebar={stateSidebar} setStateSidebar={setStateSidebar} />
              <Link href="/">
                <li className={dark ? styles.textDark : styles.text}>
                  <div className={styles.button}>
                    <FaHome size={20} />
                    <span className={styles.buttonText}>Home</span>
                  </div>

                </li>
              </Link>
              <Link href="/Users">
                <li className={dark ? styles.textDark : styles.text}>
                  <div className={styles.button}>
                    <FaUser size={20} />
                    <span className={styles.buttonText}>User</span>
                  </div>

                </li>
              </Link>
              <Link href="/Home">
                <li className={dark ? styles.textDark : styles.text}>
                  <div className={styles.button}>
                    <FaListAlt size={20} />
                    <span className={styles.buttonText}>Statistics</span>
                  </div>

                </li>
              </Link>
              <Link href="/Users">
                <li className={dark ? styles.textDark : styles.text}>
                  <div className={styles.button}>
                    <FaCubes size={20} />
                    <span className={styles.buttonText}>Products</span>
                  </div>

                </li>
              </Link>
             
              


            </div>

          
          </nav>

        </div>
      ) : (
        <div className={styles.smallContainer}>
          <nav className={dark ?
            `${styles.dark} ${styles.smallNav}` : ` ${styles.ligth} ${styles.smallNav}`}>
            <div className={styles.links}>
              <ButtonSideBard stateSidebar={stateSidebar} setStateSidebar={setStateSidebar} />

              <Link href="/">
                <li className={dark ? styles.textDark : styles.text}>
                  <div className={styles.button}>
                    <FaHome size={20} />
                    <span className={`${styles.buttonText} ${styles.smallButtonText}`}>Home</span>
                  </div>

                </li>
              </Link>
              <Link href="/Users">
                <li className={dark ? styles.textDark : styles.text}>
                  <div className={styles.button}>
                    <FaUser size={20} />
                    <span className={`${styles.buttonText} ${styles.smallButtonText}`}>User</span>
                  </div>

                </li>
              </Link>
              <Link href="/Home">
                <li className={dark ? styles.textDark : styles.text}>
                  <div className={styles.button}>
                    <FaListAlt size={20} />
                    <span className={`${styles.buttonText} ${styles.smallButtonText}`}>Statistics</span>
                  </div>

                </li>
              </Link>
              <Link href="/Users">
                <li className={dark ? styles.textDark : styles.text}>
                  <div className={styles.button}>
                    <FaCubes size={20} />
                    <span className={`${styles.buttonText} ${styles.smallButtonText}`}>Products</span>
                  </div>

                </li>
              </Link>
             

            </div>

          </nav>

        </div>)}</div>
  )
}

/**
 *  <Link href={"/"}><li className={theme? styles.textDark:styles.text}>
            Home
          </li>
        </Link>
        <Link href={"/Users"}><li className={theme? styles.textDark:styles.text}>Users</li></Link>
        <Link href={"/"}><li className={theme? styles.textDark:styles.text}>Workes</li></Link>
        <Link href={"/"}><li className={theme? styles.textDark:styles.text}>Stacts</li></Link>
        <Link href={"/"}><li className={theme? styles.textDark:styles.text}>History</li></Link>
        <Link href={"/"}><li className={theme? styles.textDark:styles.text}>Configuration</li></Link>
        <Link href={"/"}><li className={theme? styles.textDark:styles.text}>Racita</li></Link>
 */
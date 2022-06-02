/* eslint-disable @next/next/no-page-custom-font */
import React, { useState, useContext, createContext,useEffect } from 'react'
import ThemeButton from '../buttonTheme/ThemeButton';
import styles from './Layout.module.css'
import Sidebar from '../sidebar/Sidebar';
import Head from 'next/head';
import Header from '../header/Header';

export const ThemeContex = createContext(false)

export default function Layout({ children }) {
   
    const [dark, setDark] = useState(false)
    const [stateSidebar, setStateSidebar] = useState(true);
    return (
        <ThemeContex.Provider value={dark}>
            <div className={dark ? `${styles.bodyDark} ${styles.body}` : `${styles.bodyLigth} ${styles.body}`}>
                <Head>
                    <title>Dasboard</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"/>
                </Head>
                <div className={styles.container} >
                <Header>
                        <ThemeButton setTheme={setDark} theme={dark}/>
                       
                        </Header>
                    <main className={styles.childrenContainer}>
                        
                    <Sidebar />
                    {children}
                       
                    
                    </main>
                </div>
            </div>
        </ThemeContex.Provider>
    )
}

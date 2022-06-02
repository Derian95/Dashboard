/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useContext } from 'react'
import styles from './Profile.module.css'
import Menu from './userMenu/Menu';
import photo from '../../assets/perfil.png'
import Image from 'next/dist/client/image';
export default function Profile() {
  const [menu, setMenu] = useState(false);
  const viewMenu = () => {
    setMenu(!menu)
  }


  return (
    <div className={styles.container}>
      <Image src={photo} className={styles.photo} height={50} width={50}>

      </Image>
      <div onClick={() => viewMenu()} className={styles.name}>
        <p>Derian Herrera</p>
        {menu ? (
          <Menu/>
       

        ) : ("")}
      </div>
    </div>
  )
}

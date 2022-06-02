import React,{useState,useContext,useEffect} from 'react'
import { FaAlignJustify } from 'react-icons/fa'
import styles from './ButtonSideBard.module.css'
import { ThemeContex } from '../layout/Layout'

export default function ButtonSideBard({stateSidebar,setStateSidebar}) {
 
 const dark = useContext(ThemeContex)


const viewSidebar = () => {
    localStorage.setItem('side-bar', JSON.stringify(!stateSidebar))
    setStateSidebar(!stateSidebar)
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {

      const side = localStorage.getItem('side-bar') === "true";
      setStateSidebar(side);
    }

  }, [setStateSidebar]);
 
    return (
    <button onClick={()=>viewSidebar()} className={dark? styles.buttonLight:styles.buttonDark}>
        <FaAlignJustify size={20}/>
    </button>
  )
}

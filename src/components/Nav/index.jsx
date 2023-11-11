import styles from './style.module.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className={styles.navigation}>
      <a href="#home" onClick={()=>setActiveNav('#home')} className={activeNav === '#home' ? styles.active : ''} ><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? styles.active : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? styles.active : ''}><BiBook/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? styles.active : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? styles.active : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav
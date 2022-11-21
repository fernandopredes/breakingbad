import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import styles from "./header.module.css"

export const Header = () => {
  return (
    <header className={styles.header}>

      <img src={logo} alt="logotipo" />
      <nav className={styles.menu}>
        <Link to="/">Home</Link>
        <Link to="/breaking-bad">Breaking Bad</Link>
        <Link to="/better-call-soul">Better Call Soul</Link>       
      </nav>
    </header>
  )
}

export default Header
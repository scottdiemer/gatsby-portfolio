import React, { useState } from 'react'
import { Link } from 'gatsby'
import styles from '../css/navbar.module.css'
import links from "../../data/links"
import socialIcons from "../../data/social-icons"

const Navbar = () => {
  const [isOpenm setNav] = useState(false)
  const toggleNav = () => { setNav(isOpen => !isOpen)}
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>

          </div>
       </div>
    </nav>
  )
}

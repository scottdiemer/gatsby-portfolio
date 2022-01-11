import React, { useState, useEffect, useCallback } from "react"
import { Sling as Hamburger } from "hamburger-react"
import links from "../../data/links"
import * as styles from "../css/navbar.module.css"
// Used as workaround for not being able
// to select hamburger-react from navbar.module.css
import "../css/hamburger.css"

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const toggleButton = useCallback(
    () => setIsActive(prevState => !prevState),
    []
  )
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsActive(false)
      let offset = window.pageYOffset

      if (offset < 100) {
        setScrolled(false)
      } else {
        setScrolled(true)
      }
    })
  }, [])

  return (
    <nav
      className={
        scrolled ? `${styles.navbar} ${styles.sticky}` : `${styles.navbar}`
      }
    >
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <div className={styles.logo}>
            <a href="/#hero">Scott Diemer</a>
          </div>
          <Hamburger onToggle={toggleButton} color="#cccccc" />
        </div>
        <ul
          className={
            isActive
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.path}>{item.text}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { HamburgerVortexReverse } from "react-animated-burgers"
import styles from "../css/navbar.module.css"
import links from "../../data/links"

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const toggleButton = () => {
    setIsActive(prevState => !prevState)
  }

  return (
    <nav className={styles.navbar}>
      {/* <nav className={`${styles.navbar} ${styles.sticky}`}> */}
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <h4>Scott Diemer</h4>
          <HamburgerVortexReverse
            className={styles.toggleButton}
            buttonWidth={40}
            buttonStyle={{ outline: "none", background: "transparent" }}
            {...{ isActive, toggleButton }}
          />
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
                <Link to={item.path}>{item.text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

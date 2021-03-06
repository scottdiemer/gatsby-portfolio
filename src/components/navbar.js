import React, { useState, useEffect } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { HamburgerVortexReverse } from "react-animated-burgers"
import styles from "../css/navbar.module.css"
import links from "../../data/links"

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const toggleButton = () => {
    setIsActive(isActive => !isActive)
  }
  const [hovered, setHovered] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
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
          <h4 className={styles.logo}>Scott Diemer</h4>
          {/* Had issue using variable from Layout.css for barColor */}
          <HamburgerVortexReverse
            className={styles.toggleButton}
            buttonWidth={30}
            buttonStyle={{
              outline: "none",
              background: "transparent",
            }}
            barColor="#cccccc"
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
                <AnchorLink
                  to={item.path}
                  title={item.title}
                  className={item.text}
                  stripHash
                >
                  {item.text}
                </AnchorLink>
                <div className={hovered ? styles.underline : ""}></div>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

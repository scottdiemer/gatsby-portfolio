import React from "react"
import { Link } from "gatsby"
import links from "../../data/links"
import socialIcons from "../../data/social-icons"
import styles from "../css/footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {item.text}
            </Link>
          )
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              href={item.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; Scott Diemer Portfolio {new Date().getFullYear()} all
        rights reservered
      </div>
    </footer>
  )
}

export default Footer

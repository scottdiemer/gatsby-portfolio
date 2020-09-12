import React from "react"
import Title from "./title"
import ContactForm from "./contact-form"
import styles from "../css/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="Contact" subtitle="me" />
      <ContactForm />
    </section>
  )
}

export default Contact

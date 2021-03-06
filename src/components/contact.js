import React, { useState } from "react"
import axios from "axios"
import Section from "./utilities/section"
import Title from "./utilities/title"
import styles from "../css/contact.module.css"

const Contact = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    // TODO: Switch location of email address
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: `https://formspree.io/sdiemer@cfl.rr.com`,
      data: new FormData(form),
    })
      .then(() => {
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <Section id="contact" className={styles.contact}>
      <Title title="Contact Me" />
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="What is your name?"
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="How can I contact you back?"
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          placeholder="What can I help you with?"
          required
        ></textarea>
        <button type="submit" disabled={serverState.submitting}>
          Submit
        </button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>
    </Section>
  )
}

export default Contact

import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import Section from "./utilities/section"
import Title from "./utilities/title"
import * as styles from "../css/contact.module.css"

const Contact = () => {
  const [state, handleOnSubmit] = useForm("mdowqqgy")
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
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="How can I contact you back?"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          placeholder="What can I help you with?"
          required
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
        {state.succeeded && (
          <p style={{ color: "var(--primaryColor)" }}>Your message is sent!</p>
        )}
      </form>
    </Section>
  )
}

export default Contact

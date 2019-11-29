import React from 'react';
import './ContactRoute.scss';

export default function ContactRoute() {
  return (
    <section className="page contact-page">
      <h1>Contact</h1>
      <h2>I'm in</h2>
      <p>Los Angeles, CA</p>

      <h2>Reach Me At</h2>
      <a href="mailto: quasarwei@alum.calarts.edu">
        quasarwei at alum dot calarts dot edu
      </a>

      <h2>See More/Connect</h2>
      <ul>
        <li>
          <a
            href="https://github.com/quasarwei"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/quasarwei/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://quasarwei.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Art Portfolio
          </a>
        </li>
        <li>
          <a
            href="https://quasarwei.squarespace.com/s/quasar_resume_0219.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>

      <form
        id="contact-form"
        action="https://www.enformed.io/94hygtkr"
        method="POST"
      >
        <fieldset>
          <legend>
            <h2>Contact</h2>
          </legend>
          <label htmlFor="name-input">
            Name
            <input
              type="text"
              className="form__input-short"
              id="name-input"
              name="name"
              placeholder="Name"
              required
            />
          </label>
          <label htmlFor="email-input">
            {' '}
            Email
            <input
              type="email"
              className="form__input-short"
              id="email-input"
              name="email"
              placeholder="Email"
              required
            />
          </label>
          <label htmlFor="subject-input">
            {' '}
            Subject
            <input
              type="text"
              className="form__input-long"
              id="subject-input"
              name="subject"
              placeholder="Subject"
              required
            />
          </label>
          <label htmlFor="message-input">
            {' '}
            Message
            <textarea
              rows="8"
              id="message-input"
              name="message"
              placeholder="Message"
              required
            ></textarea>
          </label>
          <input type="submit" value="Submit" />
          <input type="hidden" name="*reply" value="email" />
          <input type="hidden" name="*honeypot" />
        </fieldset>
      </form>
    </section>
  );
}

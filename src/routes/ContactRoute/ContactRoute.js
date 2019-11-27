import React from 'react';

export default function ContactRoute() {
  return (
    <section className="page">
      <h1>Contact</h1>
      <h2>I'm in</h2>
      <p>Los Angeles, CA</p>

      <h2>Reach Me At</h2>
      <p>quasarwei at alum dot calarst dot edu</p>

      <h2>See More/Connect</h2>
      <ul>
        <li>
          <a href="https://github.com/quasarwei" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/quasarwei/" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://quasarwei.com" target="_blank">
            Art Portfolio
          </a>
        </li>
        <li>
          <a
            href="https://quasarwei.squarespace.com/s/quasar_resume_0219.pdf"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>

      <form action="https://www.enformed.io/94hygtkr" method="POST">
        <fieldset>
          <legend />
          <label htmlFor="">
            <input
              type="text"
              className="form__input-short"
              id="name-input"
              name="name"
              placeholder="Name"
              required
            />
          </label>
          <label htmlFor="">
            <input
              type="email"
              className="form__input-short"
              id="email-input"
              name="email"
              placeholder="Email"
              required
            />
          </label>
          <label htmlFor="">
            <input
              type="text"
              className="form__input-long"
              id="subject-input"
              name="subject"
              placeholder="Subject"
              required
            />
          </label>
          <label htmlFor="">
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

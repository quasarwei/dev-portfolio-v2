import React from 'react';
import './ContactRoute.scss';
import resume from '../../assets/quasar_resume_121719.pdf';

export default class ContactRoute extends React.Component {
  state = {
    nameTouched: false,
    emailTouched: false,
    subjectTouched: false,
    messageTouched: false,
  };

  touchName = () => {
    this.setState({ nameTouched: true });
  };
  touchEmail = () => {
    this.setState({ emailTouched: true });
  };
  touchSubject = () => {
    this.setState({ subjectTouched: true });
  };
  touchMessage = () => {
    this.setState({ messageTouched: true });
  };
  componentDidMount() {
    this.props.setPage('contact');
  }

  render() {
    return (
      <section className="page contact-page">
        <h1>Contact</h1>
        <section className="contact-flex">
          <section className="contact-info">
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
                <a href={resume} target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </li>
            </ul>
          </section>

          <form
            id="contact-form"
            action="https://www.enformed.io/94hygtkr"
            method="POST"
          >
            <fieldset>
              <legend>
                <h2>Message Me</h2>
              </legend>
              <div className="fieldset-flex">
                <label htmlFor="name-input">Name</label>
                <input
                  type="text"
                  className={
                    this.state.nameTouched
                      ? 'contact__input--touched'
                      : 'contact__input--untouched'
                  }
                  id="name-input"
                  name="name"
                  placeholder="Name"
                  onChange={() => this.touchName()}
                  required
                />
                <label htmlFor="email-input">Email</label>
                <input
                  type="email"
                  className={
                    this.state.emailTouched
                      ? 'contact__input--touched'
                      : 'contact__input--untouched'
                  }
                  id="email-input"
                  name="email"
                  placeholder="Email"
                  onChange={() => this.touchEmail()}
                  required
                />
                <label htmlFor="subject-input">Subject</label>
                <input
                  type="text"
                  className={
                    this.state.subjectTouched
                      ? 'contact__input--touched'
                      : 'contact__input--untouched'
                  }
                  id="subject-input"
                  name="subject"
                  placeholder="Subject"
                  onChange={() => this.touchSubject()}
                  required
                />
                <div className="column-break"></div>
                <label htmlFor="message-input">Message</label>
                <textarea
                  rows="8"
                  id="message-input"
                  className={
                    this.state.messageTouched
                      ? 'contact__input--touched'
                      : 'contact__input--untouched'
                  }
                  name="message"
                  placeholder="Message"
                  onChange={() => this.touchMessage()}
                  required
                ></textarea>
                <input type="submit" value="Submit" />
                <input type="hidden" name="*reply" value="email" />
                <input type="hidden" name="*honeypot" />
              </div>
            </fieldset>
          </form>
        </section>
      </section>
    );
  }
}

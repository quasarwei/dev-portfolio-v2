import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

export default class Footer extends React.Component {
  state = {};
  render() {
    return (
      <footer>
        <nav className="footer__nav">
          <Link
            className={
              this.props.currPage === 'home'
                ? 'footer__nav-link footer__nav-link--active'
                : 'footer__nav-link'
            }
            to="/"
          >
            Home
          </Link>
          <Link
            className={
              this.props.currPage === 'projects'
                ? 'footer__nav-link footer__nav-link--active'
                : 'footer__nav-link'
            }
            to="/Projects"
          >
            Projects
          </Link>
          <Link
            className={
              this.props.currPage === 'about'
                ? 'footer__nav-link footer__nav-link--active'
                : 'footer__nav-link'
            }
            to="/About"
          >
            About
          </Link>
          <Link
            className={
              this.props.currPage === 'contact'
                ? 'footer__nav-link footer__nav-link--active'
                : 'footer__nav-link'
            }
            to="/Contact"
          >
            Contact
          </Link>
        </nav>
      </footer>
    );
  }
}

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

export default class Footer extends React.Component {
  state = {};
  render() {
    return (
      <footer>
        <nav className="footer__nav">
          <Link className="footer__nav-link" to="/">
            Home
          </Link>
          <Link className="footer__nav-link" to="/Projects">
            Projects
          </Link>
          <Link className="footer__nav-link" to="/About">
            About
          </Link>
          <Link className="footer__nav-link" to="/Contact">
            Contact
          </Link>
        </nav>
      </footer>
    );
  }
}

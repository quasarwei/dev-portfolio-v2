import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <footer>
      <nav class="footer__nav">
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

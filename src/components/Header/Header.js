import React from 'react';
import { Link } from 'react-router-dom';
import vidlogo from '../../assets/animated-icon/logo_animated_b_10.mp4';

import './Header.scss';

export default function Header() {
  return (
    <header role="banner">
      <Link className="banner-logo" to="/">
        <video autoPlay loop muted playsnline src={vidlogo} type="video/mp4" />
      </Link>
      <h2>QUASAR WEI</h2>
    </header>
  );
}

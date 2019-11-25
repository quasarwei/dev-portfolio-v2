import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <video autoplay loop muted playsinline src=""></video>
      </Link>
    </header>
  );
}

import React from 'react';
import vidlogo from '../../assets/animated-icon/logo_animated_a_25.mp4';

import './HomeRoute.scss';

export default function HomeRoute() {
  return (
    <section id="landing-page" className="page">
      <video
        className="landing__logo"
        autoPlay
        loop
        muted
        playsInline
        src={vidlogo}
        type="video/mp4"
      />
      <h1 className="landing__name">Quasar Wei</h1>
      <h2 className="landing__title">Full Stack Developer</h2>
      <h2 className="landing__title">Artist</h2>
      <h3 className="landing__desc">
        Currently in Thinkful's{' '}
        <a
          href="https://www.thinkful.com/bootcamp/web-development/full-time/"
          target="_blank"
          className="landing__desc--link"
        >
          Engineering Immersion
        </a>{' '}
        Program
      </h3>
    </section>
  );
}

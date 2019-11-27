import React from 'react';

export default function AboutRoute() {
  return (
    <section id="about-page" className="page">
      <div className="siding"></div>
      <section className="about section">
        <h1>About</h1>
        <p>
          Coding has been about extending my creative toolset and gaining better
          knowledge of concepts and technologies I use. I was initially drawn to
          Processing and the creative coding process to generate{' '}
          <a
            href="https://giphy.com/quasarwei/search/processing"
            target="_blank"
            class="about__bio--link"
          >
            experimental artworks
          </a>
          . Since then, I've built an{' '}
          <a
            href="https://cymatics.fm/blogs/production/fm-synthesis"
            target="_blank"
            class="about__bio--link"
          >
            FM synthesizer
          </a>{' '}
          with{' '}
          <a href="https://juce.com/" target="_blank" class="about__bio--link">
            JUCE
          </a>
          , learned how to program in game engines like{' '}
          <a
            href="https://www.cryengine.com/"
            target="_blank"
            class="about__bio--link"
          >
            CryEngine
          </a>{' '}
          so I can create interactively stimulating experiences.{' '}
        </p>

        <p>
          I love digging into different aspects of production and utilizing
          various skills. Web development is an extension of that. I enjoy the
          creative process which for me involves both (visual and sonic) design
          and code.
        </p>

        <p>
          I'm a{' '}
          <a
            href="https://www.artstation.com/quasarwei"
            target="_blank"
            class="about__bio--link"
          >
            3D artist
          </a>
          and would like to be an environment artist in games someday. I also
          produce synthwave beats and ambient{' '}
          <a
            href="https://soundcloud.com/neon-gloom"
            target="_blank"
            class="about__bio--link"
          >
            music
          </a>
          . I earned my masters in Experimental Animation from Calarts in 2018.
        </p>
      </section>
    </section>
  );
}

import React from 'react';
import './AboutRoute.scss';

export default class AboutRoute extends React.Component {
  componentDidMount() {
    this.props.setPage('about');
  }
  render() {
    return (
      <section id="about-page" className="page">
        <h1>About</h1>
        <section className="about-flex">
          <section className="about section">
            <p>
              Coding has been about extending my creative toolset and gaining
              better knowledge of concepts and technologies I use. I was
              initially drawn to Processing and the creative coding process to
              generate{' '}
              <a
                href="https://giphy.com/quasarwei/search/processing"
                target="_blank"
                rel="noopener noreferrer"
                className="about__bio--link"
              >
                experimental artworks
              </a>
              . Since then, I've built an{' '}
              <a
                href="https://cymatics.fm/blogs/production/fm-synthesis"
                target="_blank"
                rel="noopener noreferrer"
                className="about__bio--link"
              >
                FM synthesizer
              </a>{' '}
              with{' '}
              <a
                href="https://juce.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="about__bio--link"
              >
                JUCE
              </a>{' '}
              and learned how to program in game engines like{' '}
              <a
                href="https://www.cryengine.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="about__bio--link"
              >
                CryEngine
              </a>{' '}
              so I can create interactively stimulating experiences.{' '}
            </p>

            <p>
              I love digging into different aspects of production and utilizing
              various skills. Web development is an extension of that. I enjoy
              the creative process which for me involves both (visual and sonic)
              design and code, and would like to work with like-minded people.
            </p>

            <p>
              I'm a{' '}
              <a
                href="https://www.artstation.com/quasarwei"
                target="_blank"
                rel="noopener noreferrer"
                className="about__bio--link"
              >
                3D artist
              </a>{' '}
              and would like to be an environment artist in games someday. I
              also produce synthwave beats and ambient music. I earned my
              masters in Experimental Animation from Calarts in 2018.
            </p>
          </section>
          <section className="about__skills">
            <div className="about__skill-group">
              <h2>Languages</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>C++</li>
                <li>Java</li>
              </ul>
            </div>
            <div className="about__skill-group">
              <h2>Frontend</h2>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>three.js</li>
                <li>jQuery</li>
                <li>SCSS</li>
                <li>BEM</li>
              </ul>
            </div>
            <div className="about__skill-group">
              <h2>Backend</h2>
              <ul>
                <li>Express</li>
                <li>Node</li>
                <li>PostgreSQL</li>
                <li>Knex</li>
              </ul>
            </div>
            <div className="about__skill-group">
              <h2>Additional</h2>
              <ul>
                <li>3DS Max</li>
                <li>Blender</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>XD</li>
                <li>Substance Suite</li>
                <li>JUCE</li>
              </ul>
            </div>
          </section>
        </section>
      </section>
    );
  }
}

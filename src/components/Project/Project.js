import React from 'react';
import './Project.scss';

export default function Project(props) {
  const pImages = props.p.images.map((img, i) => (
    <img
      src={img}
      alt={`project screenshot for ${props.p.name}`}
      key={`${props.p.name}Img${i}`}
    />
  ));
  const techStack = props.p.techStack.map((tech, i) => {
    return i < props.p.techStack.length - 1 ? `${tech} | ` : `${tech}`;
  });
  return (
    <section className="project">
      <div className="project__details">
        <h2>{props.p.name}</h2>
        <p className="project__description">{props.p.description}</p>
        <div className="project__links">
          <a href={props.p.liveSite} target="_blank" rel="noopener noreferrer">
            Live Site{' '}
          </a>
          <a
            href={props.p.repoClient}
            target="_blank"
            rel="noopener noreferrer"
          >
            Client Code{' '}
          </a>
          {props.p.repoServer && (
            <a
              href={props.p.repoServer}
              target="_blank"
              rel="noopener noreferrer"
            >
              Server Code{' '}
            </a>
          )}
        </div>
      </div>

      <div className="project__gallery">
        <div className="gallery">{pImages}</div>

        <p className="techStack">{techStack} </p>
      </div>
    </section>
  );
}

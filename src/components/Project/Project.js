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
      <h2>{props.p.name}</h2>
      <p className="project__description">{props.p.description}</p>
      <a href={props.p.liveSite}>Live Site </a>
      <a href={props.p.repoClient}>Code </a>
      <a href={props.p.repoServer}>Api </a>
      <div className="gallery">{pImages}</div>

      <p className="techStack">{techStack} </p>
    </section>
  );
}

import React from 'react';
import './Project.scss';

export default function Project(props) {
  const pImages = props.p.images.map(img => <img src={img} />);
  return (
    <section className="project">
      <h2>{props.p.name}</h2>
      <p className="project__description">{props.p.description}</p>
      <a href={props.p.liveSite}>Live Site </a>
      <a href={props.p.repoClient}>Code </a>
      <a href={props.p.repoServer}>Api </a>
      <div className="gallery">{pImages}</div>
    </section>
  );
}

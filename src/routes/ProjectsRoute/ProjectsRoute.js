import React from 'react';
import Project from '../../components/Project/Project';
import projects from '../../projects';

export default function ProjectsRoute() {
  const projectSections = projects.map(p => {
    return <Project p={p} />;
  });
  return <section className="page">{projectSections}</section>;
}

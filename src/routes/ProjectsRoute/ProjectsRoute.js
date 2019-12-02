import React from 'react';
import Project from '../../components/Project/Project';
import projects from '../../projects';
import './ProjectsRoute.scss';

export default class ProjectsRoute extends React.Component {
  componentDidMount() {
    this.props.setPage('projects');
  }
  render() {
    const projectSections = projects.map((p, i) => {
      return <Project p={p} key={`project${i}`} />;
    });
    return (
      <section className="page projects-page">
        <h1>Projects</h1>
        <div className="projects-list">{projectSections}</div>
      </section>
    );
  }
}

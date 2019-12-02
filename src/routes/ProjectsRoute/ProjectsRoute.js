import React from 'react';
import Project from '../../components/Project/Project';
import projects from '../../projects';

export default class ProjectsRoute extends React.Component {
  componentDidMount() {
    this.props.setPage('projects');
  }
  render() {
    const projectSections = projects.map((p, i) => {
      return <Project p={p} key={`project${i}`} />;
    });
    return (
      <section className="page">
        <h1>Projects</h1>
        {projectSections}
      </section>
    );
  }
}

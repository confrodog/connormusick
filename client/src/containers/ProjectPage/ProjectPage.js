import React, { Component } from 'react';

import './ProjectPage.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

class ProjectsPage extends Component {
  render() {
    return (
      <div className='Project-Page'>
        <div className='Project-Page-Intro'>
          <h2>Projects Page</h2>
          <p>
            This is where my various creations live as I learn more about
            React/Node.
          </p>
          <div className='Project-Card-Container'>
            <ProjectCard name='Exercise App' />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;

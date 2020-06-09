import React, { Component } from 'react';

import './ProjectCard.css';

class ProjectCard extends Component {
  render() {
    return (
      <div className='Project-Card-Div'>
        <a href={this.props.link}>
          <h1>{this.props.name}</h1>
        </a>
      </div>
    );
  }
}

export default ProjectCard;

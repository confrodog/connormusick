import React from 'react';

import './ProjectCard.css';

class ProjectCard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default ProjectCard;

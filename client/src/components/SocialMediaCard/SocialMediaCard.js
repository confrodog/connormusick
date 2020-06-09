import React, { Component } from 'react';

import './SocialMediaCard.css';

class SocialMediaCard extends Component {
  render() {
    return (
      <div className='Social-Media-Card'>
        <a href={this.props.link}>
          <img src={this.props.image} alt='github' />
        </a>
      </div>
    );
  }
}

export default SocialMediaCard;

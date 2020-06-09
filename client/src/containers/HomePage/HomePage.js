import React, { Component } from 'react';

import './HomePage.css';
import githublogo from '../../assets/github2.png';
import linkedin from '../../assets/linkedin.png';
import SocialMediaCard from '../../components/SocialMediaCard/SocialMediaCard';
import PDFViewer from '../../components/PDFViewer/PDFViewer';

class HomePage extends Component {
  state = {
    showAbout: true,
    showSocialMedia: false,
    showResume: false,
  };

  // JSX for About Page
  About = () => (
    <div className='Content-Card'>
      <h2 className='Title'>About Connor Musick</h2>
      <div className='About-Intro'>
        <p>
          Hello weary traveller! You have stumbled upon my domain! Please allow
          me to introduce myself...
        </p>{' '}
        <p>
          My name is Connor Musick and I am 22 years old, graduated from the
          University of Arizona with a Bachelor's of Science in Electrical and
          Computer Engineering and will be working for an engineering company in
          the coming fall. While the degree has proven its worth by how
          challenging the work was, I find that my love for programming grew 10x
          what my love for computer engineering did. Because of this love, I
          have bought many (unfinished) software development courses on Udemy
          and this website is a testament to how I will improve my SWE skills
          enough to be hired for it!
        </p>
      </div>
    </div>
  );

  // JSX for Social Media Page
  SocialMedia = () => (
    <div className='Social-Media-Div'>
      {' '}
      <div className='Content-Card'>
        <h2 className='Title White'>Contact Info:</h2>
        <p className='Contact-Info'>Phone Number: (602) 579-6236</p>
        <p className='Contact-Info Left-Border'>Email: cjmusick48@gmail.com</p>
      </div>
      <div className='Social-Media-Icons-Div'>
        <SocialMediaCard
          image={githublogo}
          link='https://github.com/confrodog'
        />
        <SocialMediaCard
          image={linkedin}
          link='https://www.linkedin.com/in/connor-musick/'
        />
      </div>
    </div>
  );

  // JSX for Resume
  Resume = () => (
    <div className='Resume-Div'>
      <h2>My Resume</h2>
      <PDFViewer />
      <p>Last Updated: June 9th, 2020</p>
    </div>
  );

  render() {
    return (
      <div className='Home-Page'>
        <div className='Home-Page-Sidebar'>
          <nav class='nav flex-column'>
            <button
              className='nav-link active'
              onClick={() => {
                this.setState({
                  showAbout: true,
                  showSocialMedia: false,
                  showResume: false,
                });
              }}>
              About
            </button>
            <button
              className='nav-link'
              onClick={() => {
                this.setState({
                  showAbout: false,
                  showSocialMedia: false,
                  showResume: true,
                });
              }}>
              Resume
            </button>
            <button
              className='nav-link'
              onClick={() => {
                this.setState({
                  showAbout: false,
                  showSocialMedia: true,
                  showResume: false,
                });
              }}>
              Contact Info / Social Media
            </button>
          </nav>
        </div>
        <div className='Home-Page-Content'>
          {this.state.showAbout ? <this.About /> : null}
          {this.state.showSocialMedia ? <this.SocialMedia /> : null}
          {this.state.showResume ? <this.Resume /> : null}
        </div>
      </div>
    );
  }
}

export default HomePage;

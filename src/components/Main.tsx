import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/pdreddy24" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/deekshreddy24/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href="mailto:deekshithapalvai@gmail.com">
              <EmailIcon />
            </a>
          </div>

          <h1>DEEKSHITHA REDDY</h1>
          <p>Data Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/pdreddy24" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/deekshreddy24/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href="mailto:deekshithapalvai@gmail.com">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

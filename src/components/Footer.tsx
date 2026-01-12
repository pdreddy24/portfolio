import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="social-links">
        <a href="https://github.com/pdreddy24" target="_blank" rel="noreferrer">
          <GitHubIcon fontSize="large" />
        </a>
        <a href="https://www.linkedin.com/in/deekshreddy24/" target="_blank" rel="noreferrer">
          <LinkedInIcon fontSize="large" />
        </a>
        <a href="mailto:deekshithapalvai@gmail.com">
          <EmailIcon fontSize="large" />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Deekshitha Palvai. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

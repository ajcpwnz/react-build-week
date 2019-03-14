import React from 'react';
import team from './img/team-illustration.png';
import logo from './img/croissant-logo.png'

const Footer = () => {
    return (
      <footer className="footer-container">
        <div className="team"><img src={team} alt="croissant-team" /></div>
        <div className="footerbar">
          <div className="footer-logo"><img src={logo} alt="logo" height="33px" /></div>
        </div>
      </footer>
    )
};  

export default Footer;
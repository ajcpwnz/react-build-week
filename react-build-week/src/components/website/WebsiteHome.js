import React from 'react';
import './website.css'

import WebsiteNavbar from './WebsiteNavbar.js';
import WebsiteHero from './WebsiteHero.js';
import WebsiteCustomers from './WebsiteCustomers.js';
import WebsiteExperiments from './WebsiteExperiments.js';
import WebsiteProcess from './WebsiteProcess.js';
import WebsiteType from './WebsiteType.js';
import WebsiteFooter from './WebsiteFooter.js';

export default class WebsiteHome extends React.Component {
    render() {  
      return (
        <div className="home">
            <div className="navbar-container"><WebsiteNavbar /></div>
            <div className="container">
                <WebsiteHero />
                <WebsiteCustomers />
                <WebsiteExperiments />
                <WebsiteProcess />
                <WebsiteType />
            </div>
            <div className="footer-container"><WebsiteFooter /></div>
        </div>
      );
    }
}
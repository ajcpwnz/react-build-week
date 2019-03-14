import React from 'react';
import { Link } from 'react-router-dom';

import logo from './img/croissant-logo.png';
import hamburger from './img/hamburger.png'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleDropdown: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(e => ({ toggleDropdown: !e.toggleDropdown}))
  }
  render() {
    return (
      <header>
        <div className="navbar">
          <div className="mobile-menu">
          <Link exact to="/"><img src={logo} className="logo" alt="logo" height="33px" /></Link>
            <img onClick={this.toggle}src={hamburger} className="hamburger" alt="menu" height="33px" />
          </div>
          {
            this.state.toggleDropdown
            ? (
              <nav className="dropdown">
                <div className="navbar-links">
                <Link to="/experiments">Experiments</Link>
                </div>
                <div className='navbar-cta'>
                  <button className='btn'>+33 6 50 08 49 44</button>
                </div>
              </nav>
            )
            : (
              <nav className="dropdown toggle">
                <div className="navbar-links">
                <Link to="/experiments">Experiments</Link>
                </div>
                <div className='navbar-cta'>
                <button className='btn'>+33 6 50 08 49 44</button>
                </div>
              </nav>
            )
          }
        </div>
      </header>
    )
  }
};

export default Navbar;
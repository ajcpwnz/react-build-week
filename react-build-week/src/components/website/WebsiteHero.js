import React from 'react';
import posed from "react-pose";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import dashboard from './img/dashboard.png';

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.1 }
});

const StyledSquare = styled(Square)`
  width: 942px;
  height: 490px;
  background-image: url(${dashboard});
`

const HeroCTA = styled.button `
  margin-top: 30px;
  margin-left: 360px;
  color: white;
  background-color: blue;
  width: 200px;
  height: 50px;
  border-radius: 25px;

`



class Hero extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hovering: false,
    }
  }
  render() {
    return (
      <div className="container">
        <section className="hero">
          <div className="uvp">
            <h1 className="tagline">Actually Launch Growth Experiments</h1>
            <p className="description">We empower tech companies to prioritize, build & analyse growth experiments by providing them with on-demand tech, design & marketing resources.</p>
          </div>
          <div className="request">
          <Link to="/experiments">
            <HeroCTA>Explore Experiments</HeroCTA>
          </Link>
          </div>
          <div className="dashboard">
            <StyledSquare
              className="desktopDashboard"
              pose={this.state.hovering ? "hovered" : "idle"}
              onMouseEnter={() => this.setState({ hovering: true })}
              onMouseLeave={() => this.setState({ hovering: false })}
            />
            <img className="mobileDashboard" src={dashboard} alt="Dashboard" />
          </div>
        </section>
      </div>
    )
  }
};  

export default Hero;
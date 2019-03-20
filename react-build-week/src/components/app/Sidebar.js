import React from 'react';
import styled from 'styled-components';
import logo from './img/logo_croissant.png';
import listing from './img/listing.png';
import experiment from './img/experiment.png';
import tool from './img/tool.png';
import toolInactive from './img/tool-inactive.png';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div `
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 64px;
    background: #FFFFFF;
    border-right: 0.5px solid rgba(151, 151, 151, 0.38);
    box-sizing: border-box;
`

const SidebarLogo = styled.div `
    position: fixed;
    top: 23px;
    left: 20px;
`

const SidebarListing = styled.div `
    position: fixed;
    top: 86px;
    left: 24px;
`

const SidebarExperiment = styled.div `
    position: fixed;
    top: 151px;
    left: 24px;
`

const SidebarTool = styled.div `
    position: fixed;
    top: 216px;
    left: 24px;
`

export default class Sidebar extends React.Component {
    render() {  
      return (
        <SidebarContainer>
          <SidebarLogo>
            <Link exact to="/">
              <img src={logo} alt="Croissant"/>
            </Link>
          </SidebarLogo>
          <SidebarListing>
            <Link to="/experiments">
              <img src={listing} alt="Experiments Listing"/>
            </Link>
          </SidebarListing>
          <SidebarExperiment>
            <Link to="/experiments">
              <img src={experiment} alt="Experiment"/>
            </Link>
          </SidebarExperiment>
          <SidebarTool>
              <Link to="tools">
                <img src={window.location.pathname == '/tools' ? tool : toolInactive} alt="Tool"/>
              </Link>
          </SidebarTool>
        </SidebarContainer>
      );
    }
}
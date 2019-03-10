import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div `
    position: fixed;
    top: 0px;
    left: 64px;
    height: 64px;
    width: 100vw;
    background: #FFFFFF;
    border-bottom: 0.5px solid rgba(151, 151, 151, 0.38);
    box-sizing: border-box;
`

export default class Navbar extends React.Component {
    render() {  
      return (
        <NavbarContainer>
            Navbar
        </NavbarContainer>
      );
    }
}
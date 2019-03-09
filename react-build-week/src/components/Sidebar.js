import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div `
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 64px;
    background: #FFFFFF;
    border-right: 0.5px solid rgba(151, 151, 151, 0.38);
    box-sizing: border-box;
`

export default class Sidebar extends React.Component {
    render() {  
      return (
        <SidebarContainer></SidebarContainer>
      );
    }
}
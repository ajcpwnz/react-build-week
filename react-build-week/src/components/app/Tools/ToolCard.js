import React from 'react';
import styled from 'styled-components';

const ToolCardContainer = styled.div `
    width: 270px;
    height: 156px;
    display: inline-block;
    margin: 15px;
    border-radius: 4px;
    background-color: rgba(67, 175, 121, 0.05);
    -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.1239);
    -moz-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.1239);
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.1239);
`
const ToolCardLogo = styled.img `
    display: block;
    width: 50%;
    margin: auto;
    height: 105px;
    object-fit: contain;
`
const ToolCardTitle = styled.h3 `
    display: block;
    line-height: 51px;
    background-color: #fff;
    font-size: 16px;
    color: #000;
    padding: 0 17px 0 17px;
`

const ToolCard = (props) => (  
    <a href={props.website}>
        <ToolCardContainer>
            <ToolCardLogo src={props.logo} />
            <ToolCardTitle>{props.title}</ToolCardTitle>
        </ToolCardContainer>
    </a>
)

export default ToolCard

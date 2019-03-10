import React from 'react';
import styled from 'styled-components';

const ExperimentCard = styled.div `
    width: 270px;
    height: 360px;
    border: 1px solid #0014DD;
    margin: 15px;
`

const ExperimentTitle = styled.h2 `
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
    font-size: 26px;
    color: #0014DD;
    padding: 16px;
`
const ExperimentTags = styled.div `
    display: flex;
    margin-left: 15px;
`

const ExperimentFunnel = styled.div `
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    line-height: 9px;
    font-size: 10px;
    letter-spacing: 0.888889px;
    text-transform: uppercase;
    color: #0014DD;

    height: 24px;
    padding: 12px 7px 0px 7px;
    border: 1px solid #0014DD;
    border-radius: 20px;
`

const ExperimentType = styled.div `
    margin-left: 10px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    line-height: 9px;
    font-size: 10px;
    letter-spacing: 0.888889px;
    text-transform: uppercase;
    color: #0014DD;

    height: 24px;
    padding: 12px 7px 0px 7px;
    border: 1px solid #0014DD;
    border-radius: 20px;
`

const ExperimentTools = styled.div `
    display: flex;
    margin-top: 100px;
    justify-content: flex-end;
`

const ExperimentTool = styled.div `
    margin: 0px 4px;
    padding: 4px 0px 0px 10px;
    height: 25px;
    width: 25px;
    border: 1px solid #0014DD;
    border-radius: 100%;
`

export default class Experiment extends React.Component {
    render() {  
      return (
        <ExperimentCard>
            <ExperimentTitle>{this.props.title}</ExperimentTitle>
            <ExperimentTags>
                <ExperimentFunnel>{this.props.funnel}</ExperimentFunnel>
                <ExperimentType>{this.props.type}</ExperimentType>
            </ExperimentTags>
            <ExperimentTools>
                {
                    this.props.tools.map(tool => (
                        <ExperimentTool>{tool.charAt(0)}</ExperimentTool>
                    ))
                }
            </ExperimentTools>
        </ExperimentCard>
      );
    }
}
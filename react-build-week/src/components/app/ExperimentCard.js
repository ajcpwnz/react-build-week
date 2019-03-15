import React from 'react';
import { connect } from 'react-redux';
import {  Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { deleteExperiment } from '../../actions/actionCreators';
import styled, { css } from 'styled-components';

const ExperimentCardContainer = styled.div `
    width: 270px;
    height: 360px;
    margin: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
`

const ExperimentCardBox = styled.div `
    width: 250px;
    height: 340px;
    margin: 10px;
    &.acquisition {
      background: #ECEFFD;
    };
    &.conversion {
      background: #FBEDF0;
    };
`

const ExperimentTitleBox = styled.div `
    position: relative;
    top: 15px;
    left: 15px;
    width: 220px;
    height: 190px;
    padding-top: 10px;
    background: #FFFFFF;
    &.acquisition {
        border-bottom: 10px solid #D7DEFC;
    };
    &.conversion {
        border-bottom: 10px solid #FDD8DD;
    };
`

const ExperimentTitle = styled.h2 `
    font-family: 'Poppins';
    font-style: normal;
    margin-left: 10px;
    font-weight: 600;
    line-height: 36px;
    font-size: 26px;
    color: #0014DD;
`
const ExperimentTags = styled.div `
    display: flex;
    margin-left: 18px;
`

const ExperimentFunnel = styled.div `
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-top: 30px;
    &.acquisition {
        color: #0014DD;
    };
    &.conversion {
        color: #FE304B;
    };
`

const ExperimentTools = styled.div `
    display: flex;
    margin-top: 50px;
    justify-content: flex-end;
`

const ExperimentToolsCircle = styled.div `
    margin: 0px 4px;
    height: 32px;
    width: 32px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.123924);
    border-radius: 100%;
`

const ExperimentToolsLetter = styled.div `
    font-family: 'Roboto';
    font-style: normal;
    margin-top: 10px;
    margin-left: 8px;
    font-weight: 600;
    font-size: 24px;
    line-height: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
    &.acquisition {
        color: #0014DD;
    };
    &.conversion {
        color: #FE304B;
    };
`

class ExperimentCard extends React.Component {
    render() {
      return (
        <ExperimentCardContainer>
            <ExperimentCardBox className={this.props.funnel.toLowerCase()}>
                <Link to={`/experiments/${this.props.id}`}>
                    <ExperimentTitleBox className={this.props.funnel.toLowerCase()}>
                        <ExperimentTitle>{this.props.title}</ExperimentTitle>
                    </ExperimentTitleBox>
                </Link>
                <ExperimentTags>
                    <ExperimentFunnel className={this.props.funnel.toLowerCase()}>{this.props.funnel}</ExperimentFunnel>
                </ExperimentTags>
                <ExperimentTools>
                    {
                        this.props.tools.map(tool => (
                            <ExperimentToolsCircle>
                                <ExperimentToolsLetter className={this.props.funnel.toLowerCase()}>
                                    {tool.charAt(0)}
                                </ExperimentToolsLetter>
                            </ExperimentToolsCircle>
                        ))
                    }
                </ExperimentTools>
            </ExperimentCardBox>
        </ExperimentCardContainer>
      );
    }
}

const mapStateToProps = state => ({
    experiments: state.experiments,
  });
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      deleteExperiment
    }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ExperimentCard);
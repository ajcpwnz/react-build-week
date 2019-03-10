import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getExperimentsAsync } from '../../actions/actionCreators';
import Experiment from './Experiment';
import styled from 'styled-components';

const ExperimentsContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
`

const ExperimentsListing = styled.h1 `
    margin-top: 90px;
    margin-left: 15px;
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: bold;
    line-height: 48px;
    font-size: 36px;
    color: #000000;
`

export class Experiments extends React.Component {
  componentDidMount() {
    this.props.getExperimentsAsync();
  }
  render() {
    return (
        <>
            <ExperimentsListing>Experiments Listing ({this.props.numberOfExperiments})</ExperimentsListing>
            <ExperimentsContainer>
                {
                this.props.experiments.map(experiment => (
                    <Experiment
                        key={experiment.id}
                        title={experiment.title}
                        funnel={experiment.funnel}
                        type={experiment.type}
                        tools={experiment.tools}
                    />
                ))
                }
            </ExperimentsContainer>
        </>
    );
  }
}

const mapStateToProps = state => ({
    experiments: state.experiments,
    numberOfExperiments: state.experiments.length,
  });
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      getExperimentsAsync
    }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Experiments);
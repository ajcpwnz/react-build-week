import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getExperimentsAsync } from '../actions/actionCreators';
import Experiment from './Experiment';
import styled from 'styled-components';

const ExperimentsContainer = styled.div `
    display: flex;
`

export class Experiments extends React.Component {
  componentDidMount() {
    this.props.getExperimentsAsync();
  }
  render() {
    return (
        <>
            <h1>Experiments Listing</h1>
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
    experiments: state.experiments
  });
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      getExperimentsAsync
    }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Experiments);
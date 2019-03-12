import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getExperimentsAsync } from '../../actions/actionCreators';
import ExperimentCard from './ExperimentCard';
import styled from 'styled-components';

const ExperimentsContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin-left: 26px;
    & :any-link {
        text-decoration: none;
    }
`

const ExperimentsListing = styled.h1 `
    margin-top: 160px;
    margin-left: 40px;
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: bold;
    line-height: 48px;
    font-size: 36px;
    color: #000000;
`

const AddExperiment = styled.div `
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 40px;
    color: blue;
    border: 1px solid blue;
    border-radius: 100px;
    padding: 8px 16px;
`

export class Experiments extends React.Component {
  componentDidMount() {
    this.props.getExperimentsAsync();
  }

  render() {
    // function hyphen(str) {
    //     return str.split(' ').join('-');
    // }
    return (
        <>
            <ExperimentsListing>Experiments Listing ({this.props.numberOfExperiments})</ExperimentsListing>
            <ExperimentsContainer>
                {
                this.props.experiments.allExperiments.map(experiment => (
                    // <Link to={`/experiments/${hyphen(experiment.title)}`}>
                    <Link to={`/experiments/${experiment.id}`}>
                        <ExperimentCard
                            key={experiment.id}
                            title={experiment.title}
                            funnel={experiment.funnel}
                            type={experiment.type}
                            tools={experiment.tools}
                        />
                    </Link>
                ))
                }
                <Link to="/form/add"><AddExperiment>+</AddExperiment></Link>
            </ExperimentsContainer>
        </>
    );
  }
}

const mapStateToProps = state => ({
    experiments: state.experiments,
    numberOfExperiments: state.experiments.allExperiments.length,
  });
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      getExperimentsAsync
    }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Experiments);
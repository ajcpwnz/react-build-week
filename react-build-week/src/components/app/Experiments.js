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
    margin-top: 23px;
    margin-bottom: 10px;
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
    height: 54px;
    width: 54px;
    bottom: 20px;
    right: 20px;
    font-size: 50px;
    font-family: 'Poppins';
    color: #FEFEFE;
    background: #0014DD;
    border-radius: 40px;
`

const AddExperimentCross = styled.div `
    margin-top: 3px;
    margin-left: 10px;
`

export class Experiments extends React.Component {
    componentDidMount() {
        if(!this.props.experiments.length) this.props.getExperimentsAsync();
    }

  render() {
    // function hyphen(str) {
    //     return str.split(' ').join('-');
    // }
    return (
        <>
            <ExperimentsListing>Experiments Listing {/*({this.props.numberOfExperiments}) */} </ExperimentsListing>
            <ExperimentsContainer>
                {
                this.props.experiments.map(experiment => (
                    // <Link to={`/experiments/${hyphen(experiment.title)}`}>
                    <>
                            <ExperimentCard
                                key={experiment.id}
                                id={experiment.id}
                                title={experiment.title}
                                funnel={experiment.funnel}
                                type={experiment.type}
                                tools={experiment.tools}
                            />
                    </>
                ))
                }
                <Link to="/form/add">
                    <AddExperiment>
                        <AddExperimentCross>+</AddExperimentCross>
                    </AddExperiment>
                </Link>
            </ExperimentsContainer>
        </>
    );
  }
}

const getExperimentsBySearchTitle = (state) => {
    const { allExperiments, searchFilter } =  state.experiments
    const convertedFilter = searchFilter && searchFilter.toLowerCase()
    return !!convertedFilter ? allExperiments.filter((experiment) => experiment.title.toLowerCase().includes(convertedFilter)) : allExperiments;
}

const getFilteredExperimentsSelector = (experimentsArray, state) => {
    const { activeFilter } =  state.experiments
    return Object.values(activeFilter).some(i => i) ?  experimentsArray.filter((experiment) => experiment.tools.some( i => activeFilter[i])) : experimentsArray;
}

const mapStateToProps = state => ({
    experiments: getFilteredExperimentsSelector(getExperimentsBySearchTitle(state), state),
    // numberOfExperiments: state.experiments.allExperiments.length,
  });
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      getExperimentsAsync
    }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Experiments);
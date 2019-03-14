import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getExperiment } from '../../actions/actionCreators';
import styled from 'styled-components';

const ExperimentContainer = styled.div `
    margin-left: 100px;
    margin-top: 140px;
`

const ExperimentTitle = styled.h1 `
    font-family: Playfair Display;
    font-style: normal;
    font-weight: bold;
    line-height: 48px;
    font-size: 36px;
    color: #000000;
`

class Experiment extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getExperiment(id);
    }

      render() {
        const edit_url = "/experiments/" + this.props.match.params.id + "/edit";
        if(!this.props.experiments.experiment.title)
            return null;
        return (
            
            <ExperimentContainer>
                <ExperimentTitle>{this.props.experiments.experiment.title}</ExperimentTitle>
                <p>{this.props.experiments.experiment.funnel}</p>
                <p>{this.props.experiments.experiment.type}</p>
                <br></br>
                <Link to={edit_url}>Edit</Link>
            </ExperimentContainer>
        );
    }
}

const mapStateToProps = state => ({
    experiments: state.experiments,
  });
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      getExperiment
    }, dispatch);
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Experiment);
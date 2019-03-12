import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getExperiment } from '../../actions/actionCreators';

class Experiment extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.ExperimentId;
        this.props.getExperiment(id);
    }

      render() {
        return (
            <>
                <h2>{this.props.experiments.title}</h2>
            </>
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
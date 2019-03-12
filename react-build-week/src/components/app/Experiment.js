import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getExperiment } from '../../actions/actionCreators';

class Experiment extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getExperiment(id);
    }

      render() {
        if(!this.props.experiments.experiment.title)
            return null;
        return (
            <>
                <h2>{this.props.experiments.experiment.title}</h2>
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
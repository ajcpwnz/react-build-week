import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addExperimentAsync } from '../../actions/actionCreators';

export class ExperimentForm extends React.Component {
  titleRef = React.createRef()

  onAddExperiment = () => {
    const titleInput = this.titleRef.current;

    const newExperiment = {
      title: titleInput.value,
    };

    this.props.addExperimentAsync(newExperiment);
    titleInput.value = '';
  }

  render() {
    console.log(this.props.experiments);
    return (
      <div>
        <div>
          <em>Title: </em>
          <input ref={this.titleRef} type="text" />
        </div>
        <div>
          <button onClick={this.onAddExperiment}>Add Experiment</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    experiments: state.experiments,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addExperimentAsync,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ExperimentForm);

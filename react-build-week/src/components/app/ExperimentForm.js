import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addExperiment } from '../../actions/actionCreators';
import styled from 'styled-components';

const AddExperimentForm = styled.div `
    margin: 120px auto;
    height: 300px;
    width: 260px;
    border: 1px solid blue;
`

const AddFormTitle = styled.input `
    margin-top: 10px;
    margin-left: 20px;
    height: 20px;
    width: 200px;
`

const AddFormFunnel = styled.select `
    margin-top: 10px;
    margin-left: 20px;
    height: 20px;
    width: 200px;
`

const AddFormButton = styled.button `
    margin-top: 15px;
    margin-left: 48px;
    height: 40px;
    width: 160px;
    border: 1px solid blue;
    background-color: blue;
    color: white;
    border-radius: 100px;
`

export class ExperimentForm extends React.Component {
  titleRef = React.createRef()
  funnelRef = React.createRef()

  onAddExperiment = () => {
    const titleInput = this.titleRef.current;
    const funnelInput = this.funnelRef.current;

    const newExperiment = {
      title: titleInput.value,
      funnel: funnelInput.value,
    };

    this.props.addExperiment(newExperiment);
    titleInput.value = '';
    funnelInput.value = '';
  }

  render() {
    return (
      <AddExperimentForm>
        <div>
          <AddFormTitle placeholder="Growth Experiment Title" ref={this.titleRef} type="text" />
          <AddFormFunnel placeholder="" ref={this.funnelRef} type="text">
            <option value="acquisition">Acquisition</option>
            <option value="conversion">Conversion</option>
            <option value="engagement">Engagement</option>
            <option value="virality">Virality</option>
            <option value="other">Other</option>
        </ AddFormFunnel>
        </div>
        <div>
          <AddFormButton onClick={this.onAddExperiment}>Add Experiment</AddFormButton>
        </div>
      </AddExperimentForm>
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
    addExperiment,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ExperimentForm);

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editExperiment, getExperiment } from '../../actions/actionCreators';
import styled from 'styled-components';

const EditExperimentFormStyle = styled.div `
    margin: 120px auto;
    height: 300px;
    width: 260px;
    border: 1px solid blue;
`

const EditFormTitle = styled.input `
    margin-top: 10px;
    margin-left: 20px;
    height: 20px;
    width: 200px;
`

const EditFormFunnel = styled.select `
    margin-top: 10px;
    margin-left: 20px;
    height: 20px;
    width: 200px;
`

const EditFormCategory = styled.select `
    margin-top: 10px;
    margin-left: 20px;
    height: 20px;
    width: 200px;
`

const EditFormButton = styled.button `
    margin-top: 15px;
    margin-left: 48px;
    height: 40px;
    width: 160px;
    border: 1px solid blue;
    background-color: blue;
    color: white;
    border-radius: 100px;
`

export class EditExperimentForm extends React.Component {
    constructor() {
        super()
        this.state = {
            titleInput: "",
            funnelInput: "",
            categoryInput: ""
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getExperiment(id);
    }

    redirectToExperiments = () => {
        this.props.history.push('/experiments')
    }

    updateTitle = (e) => {
        this.setState({titleInput: e.target.value})
    }

    updateFunnel = (e) => {
        this.setState({funnelInput: e.target.value})
    }

    updateCategory = (e) => {
        this.setState({categoryInput: e.target.value})
    }

    onEditExperiment = () => {

        const editedExperiment = {
            title: this.state.titleInput,
            funnel: this.state.funnelInput,
            category: [this.state.categoryInput],
            tools: ["Facebook Ads", "Google Analytics"]
        };
        const url_id = this.props.experiments.experiment.id;
        this.props.editExperiment(url_id, editedExperiment).then(this.redirectToExperiments);
    }

  render() {
    return (
      <EditExperimentFormStyle>
        <div>
          <EditFormTitle defaultValue={this.props.experiments.experiment.title} onChange={this.updateTitle} type="text" />
        </div>
        <EditFormFunnel defaultValue={this.props.experiments.experiment.funnel} onChange={this.updateFunnel} type="text">
            <option value="acquisition">Acquisition</option>
            <option value="conversion">Conversion</option>
            <option value="engagement">Engagement</option>
            <option value="virality">Virality</option>
            <option value="other">Other</option>
        </ EditFormFunnel>
        <EditFormCategory defaultValue={this.props.experiments.experiment.category} onChange={this.updateCategory} type="text">
            <option value="saas">SaaS</option>
            <option value="marketplace">Marketplace</option>
            <option value="ecommerce">Ecommerce</option>
        </ EditFormCategory>
        <div>
          <EditFormButton onClick={this.onEditExperiment}>Edit Experiment</EditFormButton>
        </div>
      </EditExperimentFormStyle>
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
    getExperiment,
    editExperiment,
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditExperimentForm));

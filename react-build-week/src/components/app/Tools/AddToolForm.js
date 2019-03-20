import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addTool } from '../../../actions/actionCreators';
import styled from 'styled-components';

const AddToolFormStyle = styled.div `
    margin: 120px auto;
    height: 300px;
    width: 260px;
    border: 1px solid blue;
`

const AddFormString = styled.input `
    margin-top: 10px;
    margin-left: 20px;
    height: 20px;
    width: 200px;
`

const AddFormCategory = styled.select `
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

export class AddToolForm extends React.Component {
  titleRef = React.createRef()
  websiteRef = React.createRef()
  categoryRef = React.createRef()

  redirectToTools = () => {
    this.props.history.push('/tools')
  }

  onAddTool = () => {
    const titleInput = this.titleRef.current;
    const websiteInput = this.websiteRef.current;
    const categoryInput = this.categoryRef.current;

    const newTool = {
      title: titleInput.value,
      category: categoryInput.value,
      tools: ["Facebook Ads", "Google Analytics"]
    };

    this.props.addTool(newTool).then(this.redirectToTools);
    titleInput.value = '';
    websiteInput.value = '';
    categoryInput.value = '';
  }

  render() {
    return (
      <AddToolFormStyle>
        <div>
          <AddFormString placeholder="Google" ref={this.titleRef} type="text" />
          <AddFormString placeholder="google.com" ref={this.websiteRef} type="text" />
          <AddFormCategory placeholder="" ref={this.categoryRef} type="text">
            <option value="Paid Acquisition">Paid Acquisition</option>
            <option value="Search Engine Optimization">Search Engine Optimization</option>
            <option value="Conversion Rate Optimization">Conversion Rate Optimization</option>
            <option value="Product-Led Growth">Product-Led Growth</option>
            <option value="Analytics">Analytics</option>
            <option value="Operations">Operations</option>
            <option value="Content">Content</option>
            <option value="Sales Enablement">Sales Enablement</option>
            <option value="Growth Hacking">Growth Hacking</option>
        </AddFormCategory>
        </div>
        <div>
          <AddFormButton onClick={this.onAddTool}>Add Tool</AddFormButton>
        </div>
      </AddToolFormStyle>
    );
  }
}

function mapStateToProps(state) {
  return {
    tools: state.tools,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTool,
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddToolForm));
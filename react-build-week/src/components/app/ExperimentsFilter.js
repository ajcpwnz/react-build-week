import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterTools } from '../../actions/actionCreators';
import styled from 'styled-components';

const FunnelFilter = styled.div `
    list-style-type: none;
    width: 200px;
`

const CategoryFilter = styled.div `
    list-style-type: none;
    width: 200px;
`

const CategoryDropdown = styled.ul `
    &.hide {
        display: none;
  }
`

const ToolsFilter = styled.div `
    list-style-type: none;
    width: 200px;
`

const ToolsDropdown = styled.ul `
    &.hide {
        display: none;
  }
`

const ExperimentsFilterContainer = styled.div `
    display: inherit;
    width: 100%;
    height: 100%;
`

export class ExperimentsFilter extends React.Component {
    constructor() {
        super();    
        this.state = {
          toolsIsOpen: false,
          categoryIsOpen: false,
          activeFilters: {

          }
        };
    }

    onCategoryToggle = () => {
        this.setState(prevState => ({
            categoryIsOpen: !prevState.categoryIsOpen
          }));
    }

    onToolsToggle = () => {
        this.setState(prevState => ({
            toolsIsOpen: !prevState.toolsIsOpen
          }));
    }

    onToolsFilter = tools => {
        const key = tools.target.value;
        console.log(key)
        this.setState({ activeFilters: {...this.state.activeFilters, [key]: !this.state.activeFilters[key] }},
            () => {this.props.filterTools(this.state.activeFilters)});
    };


    render() {
        return (
            <ExperimentsFilterContainer>
                <FunnelFilter>Funnel</FunnelFilter>
                <CategoryFilter >
                    <label onClick={this.onCategoryToggle}>Category</label>
                    <CategoryDropdown className={`${this.state.categoryIsOpen ? '' : 'hide'}`}>
                        <li><input onClick={this.onToolsFilter} value='Facebook Ads' type="checkbox"/>Facebook Ads</li>
                        <li><input onClick={this.onToolsFilter} value='Full Story' type="checkbox"/>Full Story</li>
                        <li><input onClick={this.onToolsFilter} value='Google Analytics' type="checkbox"/>Google Analytics</li>
                    </CategoryDropdown>
                </CategoryFilter>
                <div>
                    <ToolsFilter>
                        <label onClick={this.onToolsToggle}>Tools</label>
                        <ToolsDropdown className={`${this.state.toolsIsOpen ? '' : 'hide'}`}>
                            <li><input onClick={this.onToolsFilter} value='Facebook Ads' type="checkbox"/>Facebook Ads</li>
                            <li><input onClick={this.onToolsFilter} value='Full Story' type="checkbox"/>Full Story</li>
                            <li><input onClick={this.onToolsFilter} value='Google Analytics' type="checkbox"/>Google Analytics</li>
                        </ToolsDropdown>
                    </ToolsFilter>
                </div>
            </ExperimentsFilterContainer>
        )
    }
}

const getFilteredExperimentsSelector = (state) => {
    const { allExperiments, activeFilter } =  state.experiments
    return Object.values(activeFilter).some(i => i) ?  allExperiments.filter((experiment) => experiment.tools.some( i => activeFilter[i])) : allExperiments
}

function mapStateToProps(state) {
    return {
        experiments: getFilteredExperimentsSelector(state),
    };
  }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      filterTools
    }, dispatch);
  }
export default connect(mapStateToProps, mapDispatchToProps)(ExperimentsFilter);
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterTools } from '../../actions/actionCreators';
import styled from 'styled-components';


const FilterContainer = styled.div `
    display: flex;
    height: 64px;
    border-bottom: 0.5px solid rgba(151, 151, 151, 0.38);
`
const FilterLeft = styled.div `
    display: flex;
    margin-left: 40px;
    width: 420px;
    justify-content: space-between;
    margin-top: 25px;
`

const FilterRight = styled.div `
    display: flex;
    position: absolute;
    right: 135px;
    width: 170px;
    height: 39px;
    padding-top: 25px;
    padding-left: 20px;
    border-left: 0.5px solid rgba(151, 151, 151, 0.38);
    border-right: 0.5px solid rgba(151, 151, 151, 0.38);
`

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

export class Filter extends React.Component {
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
        this.setState({ activeFilters: {...this.state.activeFilters, [key]: !this.state.activeFilters[key] }},
            () => {this.props.filterTools(this.state.activeFilters)});
    };


    render() {
        return (
            <FilterContainer>
                <FilterLeft>
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
                </FilterLeft>
                <FilterRight>
                    <div>Sort by: <em>Newest First</em></div>
                </FilterRight>
            </FilterContainer>
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
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
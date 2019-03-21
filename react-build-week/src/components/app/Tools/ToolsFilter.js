import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterTools } from '../../../actions/actionCreators';
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
    background-color: #fff;
    padding: 15px;
    position: relative;
    top: 9px;
    border-radius: 4px;
    -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.1239);
    -moz-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.1239);
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.1239);
    &.hide {
        display: none;
    }
    li {
        font-size: 10px;
        margin: 5px 0 5px;
    }
`

const ToolsFilterContainer = styled.div `
    display: inherit;
    width: 100%;
    height: 100%;
`

const DropdownIcon = styled.span `
    display: inline-block;
    margin-left: 15px;
    height: 0;
    width: 0;
    border: 3px solid #000;
    border-right-color: transparent;
    border-bottom-color: transparent;
    transform: rotate(-130deg) translateY(5px);
`

class ToolsFilter extends React.Component {
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
            <ToolsFilterContainer>
                <CategoryFilter >
                    <label onClick={this.onCategoryToggle}>Categories <DropdownIcon /></label>
                    <CategoryDropdown className={`${this.state.categoryIsOpen ? '' : 'hide'}`}>
                        <li><input onClick={this.onToolsFilter} type="checkbox" value="Paid Acquisition" />Paid Acquisition</li>
                        <li><input onClick={this.onToolsFilter} type="checkbox" value="Search Engine Optimization" />Search Engine Optimization</li>
                        <li><input onClick={this.onToolsFilter} type="checkbox" value="Conversion Rate Optimization" />Conversion Rate Optimization</li>
                        <li><input onClick={this.onToolsFilter} type="checkbox" value="Product-Led Growth" />Product-Led Growth</li>
                        <li><input onClick={this.onToolsFilter} type="checkbox" value="Analytics" />Analytics</li>
                        <li><input onClick={this.onToolsFilter} type="checkbox" value="Operations" />Operations</li>
                        <li><input onClick={this.onToolsFilter} type="checkbox" value="Content" />Content</li>
                        <li><input onClick={this.onToolsFilter} type="checkbox" value="Sales Enablement" />Sales Enablement</li>
                        <li><input onClick={this.onToolsFilter} type="checkbox" value="Growth Hacking" />Growth Hacking</li>
                    </CategoryDropdown>
                </CategoryFilter>
            </ToolsFilterContainer>
        )
    }
}

const getFilteredToolsSelector = (state) => {
    const { allTools, activeFilter } =  state.tools
    return Object.values(activeFilter).some(i => i) ?  allTools.filter((tool) => tool.category.some( i => activeFilter[i])) : allTools
}

function mapStateToProps(state) {
    return {
        tools: getFilteredToolsSelector(state),
    };
  }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      filterTools
    }, dispatch);
  }
export default connect(mapStateToProps, mapDispatchToProps)(ToolsFilter);
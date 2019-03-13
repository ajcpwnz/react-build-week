import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterTools } from '../../actions/actionCreators';
import styled from 'styled-components';


const FilterContainer = styled.div `
    z-index: 1;
    display: flex;
    position: relative;
    top: 64px;
    left: 64px;
    height: 64px;
    width: 100vw;
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
          isOpen: false,
        };
    }

    onToolsToggle = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
          }));
    }

    onToolsFilter = tools => {
        this.props.filterTools(tools.target.value);
    };

    render() {
        return (
            <FilterContainer>
                <FilterLeft>
                    <FunnelFilter>Funnel</FunnelFilter>
                    <CategoryFilter>Category</CategoryFilter>
                    <div>
                        <ToolsFilter>
                            <label onClick={this.onToolsToggle}>Tools</label>
                            <ToolsDropdown className={`${this.state.isOpen ? '' : 'hide'}`}>
                                <li><input onClick={this.onToolsFilter} value='Facebook Ads' type="checkbox"/>Facebook Ads</li>
                                <li><input type="checkbox"/>Full Story</li>
                                <li><input type="checkbox"/>Google Analytics</li>
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

function mapStateToProps(state) {
    return {
      experiments: state.experiments,
    };
  }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      filterTools
    }, dispatch);
  }
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
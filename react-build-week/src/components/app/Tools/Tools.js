import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getToolsAsync } from '../../../actions/actionCreators';
import styled from 'styled-components';
import ToolCard from './ToolCard';


const ToolsContainer = styled.div `
    background-color: #FCFCFC;
    display: flex;
    flex-wrap: wrap;
    padding: 68px;
`

const ToolsTitle = styled.h2 `
    font-size: 36px;
    font-weight: bold;
    width: 100%;
    margin-bottom: 71px;
    margin-left: 13px;
`

class Tools extends Component {
    componentDidMount() {
        if(!this.props.tools.length) this.props.getToolsAsync();
    }

    render() {
        return(
            <ToolsContainer>
                <ToolsTitle>Tools</ToolsTitle>
                {
                    this.props.tools.map(tool => (
                        <ToolCard
                            title={tool.title}
                            logo={tool.logo}
                            website={tool.website}
                        />
                    ))
                }
            </ToolsContainer>
        )
    }
}

const getToolsBySearchTitle = (state) => {
    const { allTools, searchFilter } =  state.tools
    const convertedFilter = searchFilter && searchFilter.toLowerCase()
    return !!convertedFilter ? allTools.filter((tool) => tool.title.toLowerCase().includes(convertedFilter)) : allTools;
}

const getFilteredToolsSelector = (toolsArray, state) => {
    const { activeFilter } =  state.tools
    return Object.values(activeFilter).some(i => i) ?  toolsArray.filter((tool) => tool.tools.some( i => activeFilter[i])) : toolsArray;
}

const mapStateToProps = state => ({
    tools: getFilteredToolsSelector(getToolsBySearchTitle(state), state),
    numberOfTools: state.tools.allTools.length,
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getToolsAsync
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tools);
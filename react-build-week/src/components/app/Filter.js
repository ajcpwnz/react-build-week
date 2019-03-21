import React from 'react';
import styled from 'styled-components';
import ExperimentsFilter from './ExperimentsFilter';
import ToolsFilter from './Tools/ToolsFilter'

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

const Filter = () => (
    <FilterContainer>
        <FilterLeft>
            { window.location.pathname.includes('/experiments') && <ExperimentsFilter /> }
            { window.location.pathname.includes('/tools') && <ToolsFilter /> }
        </FilterLeft>
        <FilterRight>
            <div>Sort by: <em>Newest First</em></div>
        </FilterRight>
    </FilterContainer>
)

export default Filter
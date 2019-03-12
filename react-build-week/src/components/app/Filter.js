import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div `
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
    width: 300px;
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
    padding-left: 40px;
    border-left: 0.5px solid rgba(151, 151, 151, 0.38);
    border-right: 0.5px solid rgba(151, 151, 151, 0.38);
`

export default function Filter() {
  return (
    <FilterContainer>
        <FilterLeft>
            <div><em>Funnel</em></div>
            <div><em>Tags</em></div>
            <div><em>Tools</em></div>
        </FilterLeft>
        <FilterRight>
            <div>Sort by: <em>Popularity</em></div>
        </FilterRight>
    </FilterContainer>
  )
}

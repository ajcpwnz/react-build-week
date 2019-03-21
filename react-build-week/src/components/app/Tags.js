import React from 'react';
import styled from 'styled-components';

const TagsContainer = styled.div `
    display: flex;
    top: 130px;
    height: 64px;
    border-bottom: 0.5px solid rgba(151, 151, 151, 0.38);
`

const TagsList = styled.ul `
    margin-top: 20px;
    margin-left: 40px;
    display: flex;
`

const TagsItem = styled.li `
    padding-right: 8px;
    height: 24px;
    margin-right: 16px;
    background: #D7DEFC;
    border-radius: 4px;
`
const TagsContent = styled.p `
    padding-left: 8px;
    padding-top: 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    line-height: 9px;
    font-size: 8px;
    letter-spacing: 0.888889px;
    text-transform: uppercase;
    color: #0014DD;
`

const tagslistmock = ["Acquisition", "Revenue", "Virality", "Conversion", "Engagement", "Other"]

export default function Tags(props) {
  return (
    <TagsContainer>
        <TagsList>
            {
                tagslistmock.map(tag => 
                    <TagsItem>
                        <TagsContent>{tag} x</TagsContent>
                    </TagsItem>
                )
            }
        </TagsList>
    </TagsContainer>
  )
}
import React from 'react'
import Styled from 'styled-components'

import PositionItem from './PositionItem'

const PositionGroupStyle = Styled.div`
    width: 100%;
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-auto-rows: 25px;
    grid-gap: 0px;
    margin: 5px 0px 0px 0px;
    padding: 0px 0px 5px 0px;
    
    & > :not(first-child){
        margin: 0px 3px 0px 0px;
    }
`;

export default function PositionGroup() {
    return (
        <PositionGroupStyle className="position-group">
            <PositionItem></PositionItem>
            <PositionItem></PositionItem>
            <PositionItem></PositionItem>
            <PositionItem></PositionItem>
            <PositionItem></PositionItem>
        </PositionGroupStyle>
    )
}

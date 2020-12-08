import React from 'react'
import Styled from 'styled-components'

import FabricItem from './FabricItem'

const FabricListStyle = Styled.div`
    margin: 3px 0px 0px 0px;
    display: flex;
    justify-content: center;
    
    & > *:not(first-child){
        margin: 0px 0px 0px 5px;
    }
`;

export default function FabricList() {
    return (
        <FabricListStyle className="fabric-list" cMargin="0px 0px 0px 10px">
            <FabricItem></FabricItem>
            <FabricItem></FabricItem>
            <FabricItem></FabricItem>
            <FabricItem></FabricItem>
            <FabricItem></FabricItem>
        </FabricListStyle>
    )
}

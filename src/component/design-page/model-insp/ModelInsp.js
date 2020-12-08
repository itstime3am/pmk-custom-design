import React from 'react'
import Styled from 'styled-components'

import ModelInspItem from './ModelInspItem'

const ModelInspStyle = Styled.div`
    // position: relative;
    margin: 10px 0px 0px 0px;
`;

const ModelInspGroup = Styled.div`
    margin: 10px 0px 0px 0px;
    display: flex;
    justify-content: center;

    & > :not(first-child){
        margin: 0px 0px 0px 15px;
    }
`;

const TextTitle = Styled.div`
    font-size: 38px;
    margin: 10px 0px 0px 0px;
    text-align: center;
`;

const Line = Styled.hr`
    width: 100%;
    background-color: #000;
    left: 0px;
    margin: 0;
    position: absolute;
`

export default function ModelInsp() {
    return (
        <ModelInspStyle>
            <Line className="model-insp__top-line"></Line>
            <TextTitle>DESIGN INSPIRATION</TextTitle>
            <ModelInspGroup>
                <ModelInspItem></ModelInspItem>
                <ModelInspItem></ModelInspItem>
                <ModelInspItem></ModelInspItem>
            </ModelInspGroup>
        </ModelInspStyle>
    )
}

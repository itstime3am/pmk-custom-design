import React from 'react'
import Styled from 'styled-components'

import ColorGroup from './ColorGroup'

import { Span } from '../../../../dist/styled/Master'

const ColorPickPanelStyle = Styled.div`
    width: 100%;
    position: relative;
    background-color: #FFF;
    border: 1px solid blue;
`;

const ColorPickPanelWrapper = Styled.div`
    display: flex;
    align-items:center;
    flex-direction: column;
    width: 100%;
    border: 1px solid green;
`;

const TextTitleWrapper = Styled.div`
    width: 90%
`; 

const Arrow = Styled.div`
    display: ${({active})=> (active ? 'block' : 'none')}; 
    position: absolute;
    margin-top: 5px;
    left: -13px;
    border-style: solid;
    border-width: 20px 12px 20px 0px;
    border-color: transparent #FFF transparent transparent; 
`;

export default function ColorPickPanel() {
    return (
        <ColorPickPanelStyle className="color-pick-panel">
            <Arrow active></Arrow>
            <ColorPickPanelWrapper className="color-pick-panel__wrapper">
                <TextTitleWrapper><Span fontSize="48px">สี</Span></TextTitleWrapper>
                <ColorGroup></ColorGroup>
            </ColorPickPanelWrapper>
        </ColorPickPanelStyle>
    )
}

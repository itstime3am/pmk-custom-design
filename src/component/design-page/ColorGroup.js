import React from 'react'
import Styled from 'styled-components'

import ColorItem from './ColorItem'

const ColorPickGroupStyle = Styled.div`
    width: 90%;
    display:grid;
    grid-template-columns: repeat(6,1fr);
    grid-auto-rows: auto;
    grid-gap: 0px;
    border-top: 1px solid gray;
    padding: 10px 0px 15px 0px;
`;


export default function ColorPickGroup() {
    return (
        <ColorPickGroupStyle className="color-group">
           <ColorItem></ColorItem>
           <ColorItem></ColorItem>
           <ColorItem></ColorItem>
           <ColorItem></ColorItem>
           <ColorItem></ColorItem>
           <ColorItem></ColorItem>
           <ColorItem></ColorItem>
           <ColorItem></ColorItem>
           <ColorItem></ColorItem>
           <ColorItem></ColorItem>
           <ColorItem></ColorItem>
           <ColorItem></ColorItem>
           <ColorItem></ColorItem>
           <ColorItem></ColorItem>
           <ColorItem></ColorItem>
           <ColorItem></ColorItem>
           <ColorItem></ColorItem>
           <ColorItem></ColorItem>
           <ColorItem></ColorItem>
           <ColorItem></ColorItem>
           <ColorItem></ColorItem>
           <ColorItem></ColorItem>
        </ColorPickGroupStyle>
    )
}

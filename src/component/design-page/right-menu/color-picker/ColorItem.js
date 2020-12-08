import React from 'react'
import Styled from 'styled-components'

const ColorOutSide = Styled.div`
    border: 1px solid  ${({active})=> (active ? '#b4b4b4' : 'transparent')};
    border-radius: 19px;
    &:hover{
        border: 1px solid #b4b4b4;
    }
`
const Color = Styled.div`
    cursor: pointer;
    background-color: #000;
    transform: scale(${({active})=> (active ? '1.1' : '1.2')}); 
    border-radius: 15px;
    margin: 3px;
    height: 30px;
    width: 30px;

    &:hover{
        transform: scale(1.1);
    }
`;

export default function ColorItem() {
    return (
        <ColorOutSide className="color-item__border-outside">
            <Color className="color-item__inside"></Color>
        </ColorOutSide>
    )
}

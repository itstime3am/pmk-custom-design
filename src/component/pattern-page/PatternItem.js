import React from 'react'
import Styled from 'styled-components'

import { DivImg } from '../../dist/styled/Master'

const PatternGridItem = Styled.a`
    display: flex;
    // height is depend on grid auto row in ' PatterList ' 
    flex-direction:column;
    cursor: pointer;
    transition: transform 0.15s;
    color: black;
    font-size: 20px;
    padding: ${({padding})=> (padding ? padding : '3px')};

    &:hover {
        transform: scale(1.3);
        border: 1px solid lightgrey;
        background-color: #FFF;
        text-decoration: none;
        & > .patter-item__name{
            background-color: #565656;
            color: #FFF;
        }
    }
`;
const PatternName = Styled.div`
    background-color:#FFF;
    text-align: center;
    align-items: center;
    padding: 5px 0px 5px 0px;
`;

export default function PatternItem() {
    return (
        <PatternGridItem className="patter-item" href="#">
            <DivImg className="patter-item__img" url="/img/img-pattern.jpg"></DivImg>
            <PatternName className="patter-item__name" >PATTERN 1</PatternName>
        </PatternGridItem>
    )
}

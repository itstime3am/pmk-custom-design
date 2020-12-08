import React from 'react'
import Styled from 'styled-components'

import PatternItem from './PatternItem'

const PatternGridGroup = Styled.div`
    display:grid;
    grid-template-columns: repeat(5,1fr);
    grid-auto-rows: 220px;
    grid-gap: 10px;
    margin: 30px 0px 30px 0px;
    padding: 0;
`;

export default function PatternList() {
    return (
        <PatternGridGroup className="pattern-list" margin="20px 20px 0px 0px" padding="10px">
            <PatternItem></PatternItem>
            <PatternItem></PatternItem>
            <PatternItem></PatternItem>
            <PatternItem></PatternItem>
            <PatternItem></PatternItem>
            <PatternItem></PatternItem>
            <PatternItem></PatternItem>
        </PatternGridGroup>
    )
}

import React from 'react'
import Styled from 'styled-components'

import ModelMain from './main/ModelMain'
import ModelOther from './other/ModelOther'

const ModelStyle = Styled.div`
    width: 46%;
    height: auto;
    padding: 0px 10px 0px 10px;
`;

export default function Model() {
    return (
        <ModelStyle className="design-panel__model">
            <ModelMain></ModelMain>
            <ModelOther></ModelOther>
        </ModelStyle>
    )
}

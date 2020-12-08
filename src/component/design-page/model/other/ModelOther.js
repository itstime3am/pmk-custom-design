import React from 'react'
import Styled from 'styled-components'

import ModelOtherGroup from './ModelOtherGroup'

import {Span} from '../../../../dist/styled/Master'

const ModelOtherStyle = Styled.div`
    margin: 15px 0px 5px 0px;
    display: flex;
    flex-direction: column;
    align-items: center
`;

export default function ModelOther() {
    return (
        <ModelOtherStyle className="model-other">
            <ModelOtherGroup></ModelOtherGroup>
            <Span className="model-other__note">รูปเพื่อการจำลองการออกแบบเสื้อเท่านั้น</Span>
        </ModelOtherStyle>
    )
}

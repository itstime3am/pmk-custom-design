import React from 'react'
import Styled from 'styled-components'

import ScreenTypeGroup from './ScreenTypeGroup'

import {Span} from '../../../../dist/styled/Master'

const ScreenTypeStyle = Styled.div`

`;

export default function LogoTextScreenType() {
    return (
        <ScreenTypeStyle className="logo-text-screen-type">
            <Span fontSize="28px">รูปแบบ</Span>
            <ScreenTypeGroup></ScreenTypeGroup>
            <Span fontSize="16px">*มีผลต่อราคา</Span>
        </ScreenTypeStyle>
    )
}

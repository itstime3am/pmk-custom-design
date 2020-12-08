import React from 'react'
import Styled from 'styled-components'

import ColorPickPanel from './color-picker/ColorPickPanel'
import LogoTextPanel from './logo-text-panel/LogoTextPanel'

import { Span, TextTitle } from '../../../dist/styled/Master'

const RightMenuStyle = Styled.div`
    width: 27%;
    padding: 10px 10px 0px 10px;
`;

export default function RightMenu() {
    return (
        <RightMenuStyle className="design-panel__right-menu">
            <Span className="right-menu__ref-no" fontSize='26px'>No. 123456789</Span>
            <TextTitle className="right-menu__text-title-step-3" margin="10px 0px 0px 0px">Step 3</TextTitle>
            <ColorPickPanel></ColorPickPanel>
            <LogoTextPanel></LogoTextPanel>
        </RightMenuStyle>
    )
}

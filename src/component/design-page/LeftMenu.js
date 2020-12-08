import React from 'react'
import Styled from 'styled-components'

import GenderGroup from './GenderGroup'
import MenuList from './MenuList'

import { TextTitle } from '../../dist/styled/Master'


const LeftMenuStyle = Styled.div`
    width: 27%;
    padding: 10px 10px 0px 10px;
    border: 1px solid blue;
`;

export default function LeftMenu() {
    return (
        <LeftMenuStyle className="design-panel__left-menu">
            <GenderGroup></GenderGroup>
            <TextTitle className="left-menu__text-title-Step-2" margin="10px 0px 0px 0px">STEP 2</TextTitle>
            <MenuList></MenuList>
        </LeftMenuStyle>
    )
}

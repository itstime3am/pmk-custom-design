import React from 'react'
import Styled from 'styled-components'

import GenderGroup from './GenderGroup'
import MenuList from './MenuList'
import SamplePrice from './SamplePrice'

import { TextTitle } from '../../../dist/styled/Master'


const LeftMenuStyle = Styled.div`
    width: 27%;
    padding: 10px 10px 0px 10px;
`;

export default function LeftMenu() {
    return (
        <LeftMenuStyle className="design-panel__left-menu">
            <GenderGroup></GenderGroup>
            <TextTitle className="left-menu__text-title-Step-2" margin="10px 0px 0px 0px">STEP 2</TextTitle>
            <MenuList></MenuList>
            <SamplePrice></SamplePrice>
        </LeftMenuStyle>
    )
}

import React from 'react'
import Styled from 'styled-components'

import LeftMenu from './LeftMenu'
import Model from './Model'
import RightMenu from './RightMenu'

const DesignPanelStyle = Styled.div`
    margin: 10px 0px 0px 0px;
    display: flex;
    justify-content: center;
`;

export default function DesignPanel() {
    return (
        <DesignPanelStyle className="design-panel">
            <LeftMenu></LeftMenu>
            <Model></Model>
            <RightMenu></RightMenu>
        </DesignPanelStyle>
    )
}

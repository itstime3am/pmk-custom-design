import React from 'react'
import Styled from 'styled-components'

import LeftMenu from './left-menu/LeftMenu'
import Model from './model/Model'
import RightMenu from './right-menu/RightMenu'
import PatternInsp from './model-insp/ModelInsp'

const DesignPanelStyle = Styled.div`
    display: flex;
    flex-direction: column;
`;

const DesignPanelWrapper = Styled.div`
    margin: 10px 0px 0px 0px;
    display: flex;
    justify-content: center;
`;

export default function DesignPanel() {
    return (
        <DesignPanelStyle className="design-panel">
            <DesignPanelWrapper className="design-panel__wrapper">
                <LeftMenu></LeftMenu>
                <Model></Model>
                <RightMenu></RightMenu>
            </DesignPanelWrapper>
            <PatternInsp></PatternInsp>
        </DesignPanelStyle>
    )
}

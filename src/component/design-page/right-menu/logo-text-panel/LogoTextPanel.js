import React from 'react'
import Styled from 'styled-components'

import LogoTextUpload from './LogoTextUpload'

const LogoTextPanelStyle = Styled.div`
    // display: ${({active})=> (active ? 'block' : 'none')} !important;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    background-color: #FFF;
    padding: 10px 0px 10px 0px;
`;

const LogoTextPanelWrapper = Styled.div`
    width: 90%;
`;

const Arrow = Styled.div`
    display: ${({active})=> (active ? 'block' : 'none')}; 
    position: absolute;
    margin-top: 5px;
    left: -10px;
    border-style: solid;
    border-width: 20px 12px 20px 0px;
    border-color: transparent #FFF transparent transparent; 
`;

export default function LogoTextPanel() {
    return (
        <LogoTextPanelStyle className="logo-text-panel">
            <Arrow active></Arrow>
            <LogoTextPanelWrapper className="logo-text-panel__wrapper">
                <LogoTextUpload></LogoTextUpload>
            </LogoTextPanelWrapper>
        </LogoTextPanelStyle>
    )
}

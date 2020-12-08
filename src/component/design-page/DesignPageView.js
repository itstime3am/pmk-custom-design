import React from 'react'
import Styled from 'styled-components'

import FabricList from './fabric-list/FabricList'
import DesignPanel from './DesignPanel'

import '../../dist/css/master.css'

import { PageView, Section, SectionContainer, PmkLogoTopLeft, TextTitle } from '../../dist/styled/Master'

const PageView2 = Styled(PageView)`
    background: transparent; 
    overflow: hidden;
`

const DesignPageViewBGTop = Styled.div`
    background: linear-gradient(-160deg, rgba(255, 255, 255, 0.1).5%, rgba(89,98,105,0.4) 100%); 
    position: absolute;
    opacity: 1; 
    z-index: -1; 
    width: 100%; 
    height: 500px; 
    top: 0%;
`;

const DesignPageViewBGBot = Styled.div`
    position: absolute;
    background: linear-gradient(-160deg, rgba(255, 255, 255, 0.1).5%, rgba(89,98,105,0.4) 100%); 
    opacity: 1; 
    z-index: -1; 
    width: 100%; 
    height: 800px; 
    top: 500px; 
`;


export default function DesignPageView() {

    return (
        <PageView2 className="design-page-view">
            <DesignPageViewBGTop></DesignPageViewBGTop>
            <DesignPageViewBGBot></DesignPageViewBGBot>
            <Section className="design-section">
                <PmkLogoTopLeft className="design-section__pmk-logo" url="/img/pmk-logo.png" topLeft></PmkLogoTopLeft>
                <SectionContainer className="design-section__container" padding="10px 0px 10px 0px" width="80%">
                    <TextTitle className="design-section__text-title-step-1">STEP 1 | เลือกเนื้อผ้า</TextTitle>
                    <FabricList></FabricList>
                    <DesignPanel></DesignPanel>
                </SectionContainer>
            </Section>
        </PageView2>
    )
}

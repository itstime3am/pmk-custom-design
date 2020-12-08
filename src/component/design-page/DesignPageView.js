import React from 'react'

import FabricList from './FabricList'
import DesignPanel from './DesignPanel'

import '../../dist/css/master.css'

import { PageView, Section, SectionContainer, PmkLogoTopLeft, TextTitle } from '../../dist/styled/Master'

export default function DesignPageView() {

    return (
        <PageView className="design-page-view">
            <Section className="design-section">
                <PmkLogoTopLeft className="design-section__pmk-logo" url="/img/pmk-logo.png" topLeft></PmkLogoTopLeft>
                <SectionContainer className="design-section__container" padding="10px 0px 10px 0px" width="80%">
                    <TextTitle className="design-section__text-title-step-1">STEP 1 | เลือกเนื้อผ้า</TextTitle>
                    <FabricList></FabricList>
                    <DesignPanel></DesignPanel>
                </SectionContainer>
            </Section>

        </PageView>
    )
}

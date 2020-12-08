import React from 'react'

import PatternList from './PatternList'

import { PageView, PmkLogoTopLeft, Hr, TextTitle, Section, SectionContainer } from '../../dist/styled/Master'

export default function PatternPageView() {
    return (
        <PageView className="pattern-page-view">
            <Section className="pattern-section">
                <PmkLogoTopLeft className="pattern-page-view__pmk-logo" url="/img/pmk-logo.png" topLeft></PmkLogoTopLeft>
                <SectionContainer className="pattern-section__container" width="80%">
                    <TextTitle className="pattern-section__text-title"  margin="10px 0px 0px 0px">เลือกแบบเสื้อ</TextTitle>
                    <Hr color="#5A5A5C"></Hr>
                    <PatternList></PatternList>
                </SectionContainer>
            </Section>
        </PageView>
    )
}

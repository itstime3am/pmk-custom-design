import React from 'react'
// COMPONENT
import SingInForm from './SingInForm'
// STYLE
import { PageView, Section } from '../../dist/styled/Master'

export default function SingInPageView() {
    return (
            <PageView className="sing-in-page-view">
                <Section className="sing-in-section">
                    <SingInForm ></SingInForm>
                </Section>
            </PageView>
    )
}

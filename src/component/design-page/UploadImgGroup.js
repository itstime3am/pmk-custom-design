import React from 'react'
import Styled from 'styled-components'

import LogoTextPosition from './LogoTextPosition'

const UploadImgGroupStyle = Styled.div`
    display: flex;
    justify-content: center;
`

export default function UploadImgGroup() {
    return (
        <UploadImgGroupStyle>
            <LogoTextPosition></LogoTextPosition>
        </UploadImgGroupStyle>
    )
}

import React from 'react'
import Style from 'styled-components'

import { Span } from '../../dist/styled/Master'

const LogoTextPositionStyle = Style.div`
    width: 90%;
`

const Select = Style.select`
    width: 100px;
    padding: 5px 5px 5px 5px;
`

export default function LogoTextPosition() {
    return (
        <LogoTextPositionStyle>
            <Span fontSize="28px">ตำแหน่ง</Span>
            <div className="logo-text-position__selector">
                <Select>
                    <option>หน้า</option>
                    <option>หลัง</option>
                    <option>ขวา</option>
                    <option>ซ้าย</option>
                </Select>
            </div>
        </LogoTextPositionStyle>
    )
}

import React from 'react'
import Style from 'styled-components'

import PositionGroup from './PositionGroup'

import { Span } from '../../../../dist/styled/Master'

const LogoTextPositionStyle = Style.div`
    width: 100%;
`

const Select = Style.select`
    width: 100px;
    font-size: 20px;
    padding: 2px;
`

export default function LogoTextPosition() {
    return (
        <LogoTextPositionStyle className="logo-text-position">
            <Span fontSize="28px">ตำแหน่ง</Span>
            <div className="logo-text-position__selector">
                <Select>
                    <option>หน้า</option>
                    <option>หลัง</option>
                    <option>ขวา</option>
                    <option>ซ้าย</option>
                </Select>
            </div>
            <PositionGroup></PositionGroup>
        </LogoTextPositionStyle>
    )
}

import React from 'react'
import Styled from 'styled-components'

import ModelMainItem from './ModelMainItem'
import ModelMainShadow from './ModelMainShadow'

const ModelOtherItemWrapper = Styled.div`
    cursor: pointer;
    position: relative;
    width: 120px;
    height: 120px;
    border: 1px solid blue;
`

export default function ModelOtherItem() {
    return (
        <ModelOtherItemWrapper className="model-other-item__wrapper">
            <ModelMainItem></ModelMainItem>
            <ModelMainShadow></ModelMainShadow>
            
        </ModelOtherItemWrapper>
    )
}

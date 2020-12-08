import React from 'react'
import Styled from 'styled-components'

import ModelMainItem from '../model/main/ModelMainItem'
import ModelMainShadow from '../model/main/ModelMainShadow'

const ModelInspItemWrapper = Styled.div`
    cursor: pointer;
    position: relative;
    width: 150px;
    height: 150px;
    border: 1px solid blue;
`

export default function ModelInspItem() {
    return (
        <ModelInspItemWrapper>
            <ModelMainItem></ModelMainItem>
            <ModelMainShadow></ModelMainShadow>
        </ModelInspItemWrapper>
    )
}

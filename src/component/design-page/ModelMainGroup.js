import React from 'react'
import Styled from 'styled-components'

import ModelMainItem from './ModelMainItem'
import ModelMainShadow from './ModelMainShadow'

const ModelMainGroupStyle = Styled.div`
    border: 1px solid blue;
    /* background-color: blanchedalmond; */
    position: relative;
    transform: scale(1.2);
    width: 400px;
    height: 400px;
`;

export default function ModelMainGroup() {
    return (
        <ModelMainGroupStyle className="model-main-group">
            <ModelMainItem></ModelMainItem>
            <ModelMainShadow></ModelMainShadow>
        </ModelMainGroupStyle>
    )
}

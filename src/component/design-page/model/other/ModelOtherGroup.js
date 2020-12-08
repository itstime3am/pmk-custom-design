import React from 'react'
import Styled from 'styled-components'

import ModelOtherItem from './ModelOtherItem'

const ModelOtherGroupStyle = Styled.div`
    display: flex;
    justify-content: center;
    margin: 0px 0px 5px 0px;
    & > *:not(first-child){
        margin: 0px 0px 0px 10px
    }
`;


export default function ModelOtherGroup() {
    return (
        <ModelOtherGroupStyle className="model-other-group">
            <ModelOtherItem></ModelOtherItem>
            <ModelOtherItem></ModelOtherItem>
            <ModelOtherItem></ModelOtherItem>
        </ModelOtherGroupStyle>
    )
}

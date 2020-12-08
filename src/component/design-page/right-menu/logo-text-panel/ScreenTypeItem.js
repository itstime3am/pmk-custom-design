import React from 'react'
import Styled from 'styled-components'

import {Span} from '../../../../dist/styled/Master'

const ScreenTypeItemStyle = Styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > input{
        margin: 0px 2px 0px 0px;
    }
`;

export default function ScreenTypeItem() {
    return (
        <ScreenTypeItemStyle className="screen-type-item">
            <input className="screen-type-item__input-radio" type="radio" name="screen-type"></input>
            <Span className="screen-type-item__name" fontSize="20px">งานสกรีน</Span>
        </ScreenTypeItemStyle>
    )
}

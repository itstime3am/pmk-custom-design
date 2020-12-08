import React from 'react'
import Styled from 'styled-components'

import {Span} from '../../../../dist/styled/Master'

const PositionItemStyle = Styled.div`.
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > input{
        margin: 0px 2px 0px 0px;
    }
`;

export default function PositionItem() {
    return (
        <PositionItemStyle className="position-item">
            <input className="position-item__input-radio"  type="radio" name="position"></input>
            <Span className="position-item__name" fontSize="20px">กลางหลัง</Span>
        </PositionItemStyle>
    )
}

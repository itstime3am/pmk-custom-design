import React from 'react'
import Styled from 'styled-components'

import ScreenTypeItem from './ScreenTypeItem'

const ScreenTypeGroupStyle = Styled.div`
    width: 100%;
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-auto-rows: 25px;
    grid-gap: 0px;
    margin: 0px;
`;

export default function ScreenTypeGroup() {
    return (
        <ScreenTypeGroupStyle className="screen-type-group">
            <ScreenTypeItem></ScreenTypeItem>
            <ScreenTypeItem></ScreenTypeItem>
        </ScreenTypeGroupStyle>
    )
}

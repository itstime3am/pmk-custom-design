import React from 'react'
import Styled from 'styled-components'

import SubMenuItem from './SubMenuItem'

const SubMenuListGridGroup = Styled.div`
    border-top: 1px solid #000;
    width: 100%;
    height: 100%;
    display:grid;
    grid-template-columns: repeat(2,1fr);
    grid-auto-rows: 120px;
    grid-gap: 7px;
    padding: 10px 0px 10px 0px;
`;

export default function SubMenuList() {
    return (
        <SubMenuListGridGroup className="sub-menu-list">
            <SubMenuItem></SubMenuItem>
        </SubMenuListGridGroup>
    )
}

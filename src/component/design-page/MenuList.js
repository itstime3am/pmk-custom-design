import React from 'react'
import Styled from 'styled-components'

import MenuItem from './MenuItem'

const MenuListStyle = Styled.div`
    & > :not(first-child){
        margin: 10px 0px 0px 0px;
    }
`;

export default function MenuList() {

    //ต้องใช้ตรงนี่เป็น State กลางในการทำให้ Acc ทำงานร่วมกันได้ ( ตอนนี้ใช้ให้แต่ละ MenuItem ใช้ State ของตัวเองไปก่อน )
    return (
        <MenuListStyle className="menu-list">
           <MenuItem></MenuItem>
           <MenuItem></MenuItem>
           <MenuItem></MenuItem>
           <MenuItem></MenuItem>
        </MenuListStyle>
    )
}

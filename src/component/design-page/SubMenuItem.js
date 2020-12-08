import React from 'react'
import Styled from 'styled-components'

const SubMenuItemStyle = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    ${({active})=> (active ? 'background-color: #EFEFEF;' : '')}; 

    &:hover {
        background-color: #EFEFEF;
    }
`;

const Name = Styled.span`
    margin: 5px 0px 0px 0px;
`;

const Img = Styled.div`
    width: ${({width})=> (width ? width : '90%')}; 
    height:  ${({height})=> (height ? height : '100%')}; 
    margin: ${({margin})=> (margin ? margin : '5px 0px 0px 0px')};
    background-image: ${({url}) => (url? 'url('+url+')' : '')};
    background-size: 100% 100%;
`

export default function SubMenuItem() {
    return (
        <SubMenuItemStyle className="sub-menu-item">
            <Img className="sub-menu-item__img" url="/img/img-pattern.jpg"></Img>
            <Name className="sub-menu-item__name">NAME</Name>
        </SubMenuItemStyle>
    )
}

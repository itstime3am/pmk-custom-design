import React from 'react'
import Styled from 'styled-components'

const FabricItemStyle = Styled.div`
    width: 100%;
    height: 65px;
    position: relative; 
    background-color: transparent;
    display: flex; 
    flex-direction: column;
    text-align: center;  
    cursor: pointer; 

    & > span.description{
      
    }
`;
const FabricName = Styled.span`
    margin: 10px 0px 0px 0px;
    font-size: 20px;
    z-index: 1;
`
const FabricDetail = Styled.span`
    z-index: 1;
`
const BgTop = Styled.div`
    width: 100%;
    height: 65px;
    position: absolute; 
    top: 0px;
    z-index: 1;
    background-image: url(/pmk-custom-design/img/top-gradint.png);
    background-size: 100% 100%;
`;
const BgArrow = Styled.div`
    width: 100%;
    height: 65px;
    position: absolute; 
    top: 0px;
    background-image: url(/pmk-custom-design/img/arrow-down.png);
    background-size: 100% 100%;
    transition: opacity 0.2s ease-in-out; 
    opacity: ${({active}) => active ? '1': '0'}; 

    ${FabricItemStyle}:hover & {
        opacity: 1; 
    }

`;

export default function FabricItem() {
    return (
        <FabricItemStyle className="fabric-item">
            <BgTop className="fabric-item__bg-top"></BgTop>
            <BgArrow className="fabric-item__bg-arrow"></BgArrow>
            <FabricName className="fabric-item__name">CoolPlus CP</FabricName>
            <FabricDetail className="fabric-item__description">สีสด รีดง่าย ราคาประหยัด</FabricDetail>
        </FabricItemStyle>
    )
}

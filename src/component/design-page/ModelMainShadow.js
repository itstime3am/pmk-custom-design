import React from 'react'
import Styled from 'styled-components'

const Img = Styled.div`
    width: ${({width})=> (width ? width : '100%')}; 
    height:  ${({height})=> (height ? height : '100%')}; 
    margin: ${({margin})=> (margin ? margin : '0')};
    background-image: ${({url}) => (url? 'url('+url+')' : '')};
    background-size: 100% 100%;
    position: absolute;
    opacity: 0.3;
    z-index: 1;
`;

export default function ModelMainShadow() {
    return (
        <Img url="/img/font_body_1.png"></Img>
    )
}

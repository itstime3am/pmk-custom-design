import React from 'react'
import Styled from 'styled-components'

import InputGroup from './InputGroup'
import SingInFormBottom from './SingInFormBottom'
// STYLE
import { Button, Flex, Span } from '../../dist/styled/Master'
// import { SingInFormStyled, SingInFormWrapper, PmkLogo, BtnClose, BtnFacebook } from '../../dist/styled/sing-in-styled/SingInForm'

const SingInFormStyled = Styled.div`
    width: 340px; 
    margin-top: 3%;
    position: relative;
`;
const SingInFormWrapper = Styled.div`
    display: flex; 
    flex-direction: column;
    position: relative;
    background-color: rgb(255, 255, 255,0.3); 
    margin-bottom: 20px;
    border-radius: 15px;
    padding: 20px 30px 20px 30px;

    & > :not(first-child) {
        margin-top: 15px;
    }
`;
const PmkLogo = Styled.div`
    width: 150px; 
    height: 70px; 
    background-image: url(/pmk-custom-design/img/pmk-logo.png);
    background-size: 100% 100%;
`;
const BtnClose = Styled.div`
    width: 30px;
    background-color: #EC1C29;
    color: #FFF;
    position: absolute;
    display: ${({display}) => (display? display : 'block')};
    top: 0;
    right: 0;
    border-top-right-radius: 15px;
    cursor: pointer;
    z-index: 1;
    text-align: center;
    padding: 3px 0px 3px 0px;

    &:hover {
        filter: brightness(92%);
    }
`;


export default function SingInForm() {
    return (
        <SingInFormStyled className="Sing-in-form">
            <BtnClose className="Sing-in-form__btn-close"  display="none">x</BtnClose>
            <SingInFormWrapper className="Sing-in-form__wrapper">
               <Flex><PmkLogo className="Sing-in-form__pmk-logo"></PmkLogo></Flex>
               <InputGroup></InputGroup>
               <Button className="Sing-in-form__btn-submit">Sing In</Button>
               <Flex className="Sing-in-form__row"  content="space-between">
                    <Flex className="Sing-in-form__rmb-me-group">
                        <input className="Sing-in-form__input-checkbox" type="checkbox" ></input>
                        <Span className="Sing-in-form__text-rmb-me" margin="0px 0px 0px 3px">จำฉันไว้</Span>  
                    </Flex> 
                    <a className="Sing-in-form__link-fg-password" href="/">ลืมรหัสผ่าน?</a>             
               </Flex>
            </SingInFormWrapper>
            <SingInFormBottom></SingInFormBottom>
        </SingInFormStyled>
    )
}

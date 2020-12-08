import React from 'react'
import Styled from 'styled-components'

import { Hr, Flex } from '../../dist/styled/Master'

const RegisterGroup = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0px 0px 0px;
    
    & > :not(first-child){
        margin: 0px 0px 0px 5px;
    }
`;

const Span = Styled.span`
    font-size: 18px;
`;

const BtnFacebook = Styled.div`
    width: 90%;
    height: 50px;
    margin: 20px 10px 0px 10px;
    cursor: pointer;
    background-image: url(/pmk-custom-design/img/btn-facebook.png);
    background-size: 100% 100%;
`;

export default function SingInBottom() {
    return (
        <div className="sing-in-form-bottom">
            <Hr color="#EC1C29"></Hr>
            <RegisterGroup className="sing-in-form-bottom__register-group">
                <Span>ยังไม่ได้เป็นสมาชิก?</Span><a className="sing-in-form-bottom__link-register" href="/">สมัครสมาชิกใหม่</a>
            </RegisterGroup>
            <Flex className="sing-in-form-bottom__btn-facebook-group">
                <BtnFacebook className="sing-in-form-bottom__btn-facebook"></BtnFacebook>
            </Flex>
        </div>
    )
}

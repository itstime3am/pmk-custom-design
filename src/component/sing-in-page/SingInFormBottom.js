import React from 'react'
import Styled from 'styled-components'

import { Hr, Flex } from '../../dist/styled/Master'

const BtnFacebook = Styled.div`
    width: 90%;
    height: 50px;
    margin: 20px 10px 0px 10px;
    background-image: url( /img/btn-facebook.png);
    background-size: 100% 100%;
`;

export default function SingInBottom() {
    return (
        <div className="sing-in-form-bottom">
            <Hr color="#EC1C29"></Hr>
            <Flex className="sing-in-form-bottom__register-group" cMargin="0px 0px 0px 10px">
                ยังไม่ได้เป็นสมาชิก ? <a className="sing-in-form-bottom__link-register" href="#">สมัครสมาชิกใหม่</a>
            </Flex>
            <Flex className="sing-in-form-bottom__btn-facebook-group">
                <BtnFacebook className="sing-in-form-bottom__btn-facebook"></BtnFacebook>
            </Flex>
        </div>
    )
}

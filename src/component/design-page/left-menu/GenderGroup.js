import React from 'react'
import Styled from 'styled-components'

import { Flex, Span } from '../../../dist/styled/Master'

const GenderItem = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function GenderGroup() {
    return (
        <Flex className="gender-group" align-items="center"  margin="10px 0px 0px 0px" cMargin="0px 10px 0px 0px">
            <GenderItem className="gender-item">
                <input className="gender-item__input-checkbox" name="radio-gender" type="radio" defaultChecked></input>
                <Span className="gender-item__text-male" margin="0px 0px 0px 3px" fontSize="26px">ผู้ชาย</Span> 
            </GenderItem> 
            <GenderItem className="gender-item" align-items="center">
                <input className="gender-item__input-checkbox" name="radio-gender" type="radio"></input>
                <Span className="gender-item__text-female" margin="0px 0px 0px 3px" fontSize="26px">ผู้หญิง</Span> 
            </GenderItem> 
        </Flex>
    )
}

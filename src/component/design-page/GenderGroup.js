import React from 'react'

import { Flex, Span } from '../../dist/styled/Master'

export default function GenderGroup() {
    return (
        <Flex className="gender-group" align-items="center"  margin="10px 0px 0px 0px" cMargin="0px 10px 0px 0px">
            <Flex className="gender-item">
                <input className="gender-item__input-checkbox" name="radio-gender" type="radio" defaultChecked></input>
                <Span className="gender-item__text-male" margin="0px 0px 0px 3px" fontSize="22px">ผู้ชาย</Span> 
            </Flex> 
            <Flex className="gender-item" align-items="center">
                <input className="gender-item__input-checkbox" name="radio-gender" type="radio"></input>
                <Span className="gender-item__text-female" margin="0px 0px 0px 3px" fontSize="22px">ผู้หญิง</Span> 
            </Flex> 
        </Flex>
    )
}
